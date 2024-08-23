"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import removeEmptyProperties from "@/app/utils/removeEmptyProperties";
import { DeleteReport, UpdateReport } from "../actions";
import ConfirmDialog from "../confirmDialog";
import SubmitBtn from "../submitBtn";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import formatDate from "../../utils/formatDate";

function FinanceReports() {
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
        "/api/getFinancialReport?" +
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
      let res = await DeleteReport(formdata);

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
          Finance Reports
        </Link>

        <Link className="cta_btn2" href="/investors/finance-reports">
          View Finance Reports Page
        </Link>
        <button
          style={{ marginLeft: "10px" }}
          className="cta_btn"
          onClick={() => {
            setTargetEdit(null);
            setOpenPopup(true);
          }}
        >
          Add New Report
        </button>
      </div>
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
            style={{ gridTemplateColumns: "150px 1fr 1fr 200px" }}
          >
            <div className="th rowc">Date</div>
            <div className="th rowc">Title</div>
            <div className="th rowc">Link/File</div>
            <div className="th">Action</div>
          </div>
          <div className="tbody col">
            {data?.data.map((item, index) => (
              <div
                className="tr"
                key={index}
                style={{ gridTemplateColumns: "150px 1fr 1fr 200px" }}
              >
                <div className="td">{formatDate(item.date)}</div>
                <div className="td">
                  <a
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                    href={item.url}
                  >
                    {item.title}
                  </a>
                </div>
                <div className="td">{item.type}</div>
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
                      setTargetEdit(item);
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
                    onClick={() => setDeleteTarget(item)}
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
          title={"Delete report"}
          message={"Are you sure to delete?"}
          confirmFunc={() => {
            HandleDelete();
          }}
          cancelFunc={() => setDeleteTarget(null)}
          confirmText={"Delete"}
        />
      )}
      {openPopup && (
        <EditPopup
          loadData={targetEdit}
          setOpenPopup={setOpenPopup}
          refreshData={GetData}
        />
      )}
    </>
  );
}

function EditPopup({ loadData = null, setOpenPopup, refreshData }) {
  const [data, setData] = useState(
    loadData ?? {
      type: "file",
      title: "",
      date: new Date(),
      url: "",
    }
  );
  const HandleUpdate = async (e) => {
    try {
      let formdata = new FormData();
      formdata.append("_id", data._id);
      formdata.append("type", data.type);
      formdata.append("title", data.title);
      formdata.append("date", data.date);
      formdata.append("url", data.url);

      let res = await UpdateReport(formdata);

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
        <span className="label">Title</span>
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
          required
        />

        <div className="rowc" style={{ width: "100%", gap: 20 }}>
          <div className="col" style={{ flex: 1 }}>
            <span className="label">Date:</span>
            <DatePicker
              showIcon
              selected={data.date}
              onChange={(date) => setStartDate(date)}
              required
            />
          </div>
          <div className="col" style={{ flex: 1, alignItems: "flex-start" }}>
            <span className="label">Type:</span>
            <div
              className="switch rowc"
              onClick={() => {
                setData((prev) => ({
                  ...prev,
                  type: prev.type == "file" ? "link" : "file",
                }));
              }}
            >
              <span
                style={
                  data?.type == "file"
                    ? { background: "green", color: "white" }
                    : {
                        background: "none",
                        color: "grey",
                      }
                }
              >
                File
              </span>
              <span
                style={
                  data?.type == "link"
                    ? { background: "green", color: "white" }
                    : {
                        background: "none",
                        color: "grey",
                      }
                }
              >
                Link
              </span>
            </div>
          </div>
        </div>

        <span className="label">File Link/URL:</span>
        <input
          type="text"
          placeholder=""
          value={data.url}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              url: e.target.value,
            }));
          }}
          required
        />

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

export default FinanceReports;
