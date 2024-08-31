"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import removeEmptyProperties from "@/app/utils/removeEmptyProperties";
import { DeleteJob, UpdateJob } from "../actions";
import ConfirmDialog from "../confirmDialog";
import DatePicker from "react-datepicker";
import SubmitBtn from "../submitBtn";
import TextEditor from "@/components/textEditor";
import "ckeditor5/ckeditor5.css";

function Careers() {
  const [tab, setTab] = useState("position");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [targetEdit, setTargetEdit] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState("");

  const GetData = async () => {
    try {
      let paramObj = {
        search: search,
      };

      setLoading(true);
      let res = await fetch(
        "/api/getJobPosition?" +
          new URLSearchParams(removeEmptyProperties(paramObj))
      );
      let resJson = await res.json();
      if (resJson.success) setData(resJson.data);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const HandleDelete = async () => {
    try {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("_id", deleteTarget._id);
      let res = await DeleteJob(formdata);

      if (res.success) {
        alert("Delete Successfully");
        setDeleteTarget(null);
        GetData();
      } else {
        throw res.message;
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="admin_header rowc">
        <Link href="/admin" className="urban_text title">
          Position List
        </Link>

        <Link className="cta_btn2" href="/careers">
          View Careers Page
        </Link>
        <button
          style={{ marginLeft: "10px" }}
          className="cta_btn"
          onClick={() => {
            setTargetEdit(null);
            setOpenPopup(true);
          }}
        >
          Add New Position
        </button>
      </div>
      {/* <div className="admin_subtab rowc">
        <div className="tab active_tab">Position List</div>
        <div className="tab">Company Photos</div>
      </div> */}

      <div className="admin_content col">
        {loading && (
          <div className="loading_overlay rowc">
            <div className="loader"></div>
          </div>
        )}
        <div className="rowc" style={{ justifyContent: "flex-end" }}>
          <div className="search rowc">
            <span className="material-symbols-outlined icon">search</span>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  GetData();
                }
              }}
              value={search}
            />
          </div>
          <button
            onClick={GetData}
            className="cta_btn"
            style={{ marginLeft: "5px" }}
          >
            Search
          </button>
        </div>
        <br />

        <div className="admin_table">
          <div
            className="thead"
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 100px 200px" }}
          >
            <div className="th rowc">Position</div>
            <div className="th rowc">Tags</div>
            <div className="th rowc">Salary</div>
            <div className="th">Location</div>
            <div className="th">Status</div>
            <div className="th">Action</div>
          </div>
          <div className="tbody col">
            {data?.data.map((pos, index) => (
              <div
                className="tr"
                key={index}
                style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 100px 200px" }}
              >
                <div
                  className="td"
                  style={{ textAlign: "left", padding: "0 15px" }}
                >
                  {pos.position}
                </div>
                <div className="td tags rowc" style={{ textAlign: "justify" }}>
                  {pos.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="td">{pos.salary}</div>
                <div className="td">{pos.location}</div>

                <div className="td">{pos.open ? "Open" : "Closed"}</div>
                <div
                  className="td rowc"
                  style={{ justifyContent: "center", gap: 10 }}
                >
                  <div
                    style={{
                      color: "#0f6fde",
                      cursor: "pointer",
                      padding: "0 10px",
                    }}
                    onClick={() => {
                      setTargetEdit(pos);
                      setOpenPopup(true);
                    }}
                  >
                    Edit
                  </div>
                  <div
                    style={{
                      color: "red",
                      cursor: "pointer",
                      padding: "0 10px",
                    }}
                    onClick={() => setDeleteTarget(pos)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {deleteTarget && (
        <ConfirmDialog
          title={"Delete job position"}
          message={"Are you sure to delete?"}
          confirmFunc={() => {
            HandleDelete();
          }}
          cancelFunc={() => setDeleteTarget(null)}
          confirmText={"Delete"}
        />
      )}
      {openPopup && (
        <EditPosition
          loadData={targetEdit}
          setOpenPopup={setOpenPopup}
          refreshData={GetData}
        />
      )}
    </>
  );
}

function EditPosition({ loadData = null, setOpenPopup, refreshData }) {
  const [data, setData] = useState(
    loadData ?? {
      position: "",
      description: "",
      tags: [""],
      salary: "",
      location: "",
      open: true,
    }
  );
  const HandleUpdate = async (e) => {
    try {
      let formdata = new FormData();
      formdata.append("_id", data._id);
      formdata.append("position", data.position);
      formdata.append("description", data.description);
      formdata.append("tags", JSON.stringify(data.tags));
      formdata.append("salary", data.salary);
      formdata.append("location", data.location);
      formdata.append("open", data.open);

      let res = await UpdateJob(formdata);

      if (res.success) {
        alert("Update Successfully");
        setOpenPopup(false);
        refreshData();
      } else {
        throw res.message;
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="admin_popup">
      <form action={HandleUpdate} className="popup_window edit_media col">
        <span className="label">Position Title</span>
        <input
          placeholder="Position Title"
          value={data.position}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              position: e.target.value,
            }));
          }}
          required
        />

        <span className="label">Description:</span>
        {/* <textarea
          style={{ height: 100 }}
          placeholder="Description"
          value={data.description}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
          required
        /> */}
        <TextEditor
          content={data.description}
          onChange={(e, editor) => {
            const data = editor.getData();
            setData((prev) => ({
              ...prev,
              description: data,
            }));
          }}
        />

        <div className="rowc" style={{ width: "100%", gap: 20 }}>
          <div className="col" style={{ flex: 1 }}>
            <span className="label">Salary:</span>
            <input
              type="text"
              placeholder="eg: MYR 3000 - 4000 or MYR 4000 "
              value={data.salary}
              onChange={(e) => {
                setData((prev) => ({
                  ...prev,
                  salary: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="col" style={{ flex: 1, alignItems: "flex-start" }}>
            <span className="label">Status:</span>
            <div
              className="switch rowc"
              onClick={() => {
                setData((prev) => ({
                  ...prev,
                  open: !prev.open,
                }));
              }}
            >
              <span
                style={
                  data?.open
                    ? { background: "green", color: "white" }
                    : {
                        background: "none",
                        color: "grey",
                      }
                }
              >
                Open
              </span>
              <span
                style={
                  !data?.open
                    ? { background: "red", color: "white" }
                    : {
                        background: "none",
                        color: "grey",
                      }
                }
              >
                Closed
              </span>
            </div>
          </div>
        </div>

        <span className="label">Location:</span>
        <input
          type="text"
          placeholder="eg: Petaling Jaya, Jaya One "
          value={data.location}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              location: e.target.value,
            }));
          }}
          required
        />

        <div className="source_list col">
          <span className="label">Tags:</span>
          <div className="listing col">
            {data?.tags?.map((tag, index) => (
              <div key={index} className="source_item rowc" style={{ gap: 10 }}>
                <input
                  type="text"
                  value={tag}
                  placeholder="Tag"
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      tags: prev.tags.map((item, i) =>
                        i === index ? e.target.value : item
                      ),
                    }));
                  }}
                  required
                />
                <span
                  className="material-symbols-outlined"
                  style={{ color: "grey", cursor: "pointer", fontSize: "20px" }}
                  onClick={(e) => {
                    setData((prev) => ({
                      ...prev,
                      tags: prev.tags.filter((item, i) => i != index),
                    }));
                  }}
                >
                  cancel
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              color: "#0f6fde",
              textDecoration: "underline",
              padding: 5,
              cursor: "pointer",
              fontSize: "14px",
              alignSelf: "flex-start",
            }}
            onClick={() => {
              setData((prev) => {
                let _tags = [];
                if (prev.tags) {
                  _tags = [...prev.tags];
                }
                _tags.push("");

                return {
                  ...prev,
                  tags: _tags,
                };
              });
            }}
          >
            Add Tag
          </div>
        </div>

        <div
          className="rowc"
          style={{ gap: 10, justifyContent: "flex-end", marginTop: 30 }}
        >
          <div
            className="cta_btn2"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Close
          </div>
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
}

export default Careers;
