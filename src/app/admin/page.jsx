"use client";
import React, { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import ConfirmDialog from "./confirmDialog";
import { UpdateMedia, DeleteMedia } from "./actions";
import SubmitBtn from "./submitBtn";

function Mediahub() {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    // true = asc, false = desc
    sortDate: true,
    entries: 10,
    search: "",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [targetEdit, setTargetEdit] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const GetData = async () => {
    try {
      let paramObj = {
        sortDate: filter.sortDate,
        search: search,
        page: currentPage,
        entries: filter.entries,
      };

      if (!dateRange.includes(null)) {
        paramObj.dateFrom = dateRange[0].toISOString();
        paramObj.dateTo = dateRange[1].toISOString();
      }

      setLoading(true);
      let res = await fetch("api/getMediahub?" + new URLSearchParams(paramObj));
      let resJson = await res.json();
      if (resJson.success) setData(resJson.data);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    GetData();
  }, [filter]);

  useEffect(() => {
    GetData();
  }, [currentPage]);

  const HandleDelete = async () => {
    try {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("_id", deleteTarget._id);
      let res = await DeleteMedia(formdata);

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
          Mediahub List
        </Link>

        <Link className="cta_btn2" href="/mediahub">
          View Mediahub Page
        </Link>
        <button
          style={{ marginLeft: "10px" }}
          className="cta_btn"
          onClick={() => {
            setTargetEdit(null);
            setOpenPopup(true);
          }}
        >
          Add New Media News
        </button>
      </div>
      <div className="admin_content col">
        {loading && (
          <div className="loading_overlay rowc">
            <div className="loader"></div>
          </div>
        )}

        <div className="rowc">
          <div className="rowc" style={{ marginRight: "auto", gap: 10 }}>
            <span>Entries:</span>
            <select
              defaultValue={10}
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  entries: e.target.value,
                }));
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">25</option>
            </select>
          </div>

          <div className="date_range rowc">
            <DatePicker
              selected={filter.dateFrom}
              isClearable
              selectsRange={true}
              startDate={dateRange[0]}
              endDate={dateRange[1]}
              onChange={(update) => {
                setDateRange(update);
              }}
              placeholderText="Date range"
            />
          </div>

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
                  setCurrentPage(1);
                  GetData();
                }
              }}
              value={search}
            />
          </div>
          <button
            onClick={() => {
              setCurrentPage(1);
              GetData();
            }}
            className="cta_btn"
            style={{ marginLeft: "5px" }}
          >
            Search
          </button>
        </div>
        <br />

        <div className="admin_table">
          <div className="thead">
            <div className="th rowc">Image</div>
            <div className="th rowc">Title</div>
            <div
              className="th rowc"
              onClick={() => {
                setFilter((prev) => ({ ...prev, sortDate: !prev.sortDate }));
              }}
            >
              Date
              <span className="material-symbols-outlined icon">
                {`arrow_${filter.sortDate ? "down" : "up"}ward_alt`}
              </span>
            </div>
            <div className="th">Status</div>
            <div className="th">Actions</div>
          </div>
          <div className="tbody col">
            {data?.data.map((media, index) => (
              <div className="tr" key={index}>
                <div className="td">
                  <img
                    style={{
                      width: "120px",
                      height: "80px",
                      margin: "5px",
                      objectFit: "cover",
                    }}
                    src={media.img}
                    alt=""
                  />
                </div>
                <div className="td" style={{ textAlign: "justify" }}>
                  {media.title}
                </div>
                <div className="td">{formatDate(media.date)}</div>
                <div
                  className="td"
                  style={{ color: media.active ? "green" : "red" }}
                >
                  {media.active ? "Active" : "Inactive"}
                </div>
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
                      setTargetEdit(media);
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
                    onClick={() => setDeleteTarget(media)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <br />
        <ReactPaginate
          className="admin_paginate"
          forcePage={currentPage - 1}
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(e) => {
            setCurrentPage(e.selected + 1);
          }}
          pageRangeDisplayed={10}
          pageCount={data?.totalPage || 1}
          marginPagesDisplayed={0}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
        />
      </div>
      {openPopup && (
        <EditMedia
          loadData={targetEdit}
          setOpenPopup={setOpenPopup}
          refreshData={GetData}
        />
      )}
      {deleteTarget && (
        <ConfirmDialog
          title={"Delete Media"}
          message={"Are you sure to delete?"}
          confirmFunc={() => {
            HandleDelete();
          }}
          cancelFunc={() => setDeleteTarget(null)}
          confirmText={"Delete"}
        />
      )}
    </>
  );
}

function EditMedia({ loadData = null, setOpenPopup, refreshData }) {
  const [data, setData] = useState(
    loadData ?? {
      slug: "",
      img: "",
      title: "",
      date: new Date(),
      description: "",
      source: [{ label: "", link: "" }],
      active: true,
    }
  );
  const [loading, setLoading] = useState(false);

  const AutoGenerateSlug = () => {
    setData((prev) => ({
      ...prev,
      slug: prev.title
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading and trailing whitespace
        .replace(/[^a-z0-9 -]/g, "") // Remove special characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-"), // Replace multiple hyphens with a single hyphen
    }));
  };

  const HandleUpdate = async (e) => {
    try {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("_id", data._id);
      formdata.append("slug", data.slug);
      formdata.append("img", data.img);
      formdata.append("title", data.title);
      formdata.append("date", data.date);
      formdata.append("description", data.description);
      formdata.append("source", JSON.stringify(data.source));
      formdata.append("active", data.active);

      let res = await UpdateMedia(formdata);

      if (res.success) {
        alert("Update Successfully");
        setOpenPopup(false);
        refreshData();
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
    <div className="admin_popup">
      <form action={HandleUpdate} className="popup_window edit_media col">
        <span className="label">Title</span>
        <textarea
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
        <span className="label">
          Url Slug{" "}
          <em style={{ color: "red" }}>
            (*Only alphanumeric and hyphens allowed)
          </em>
        </span>
        <div className="rowc" style={{ gap: 10, width: "100%" }}>
          <input
            style={{ flex: 1 }}
            type="text"
            placeholder="Slug"
            value={data.slug}
            required
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                slug: e.target.value,
              }));
            }}
          />
          <div className="cta_btn" onClick={AutoGenerateSlug}>
            Auto Generate
          </div>
        </div>
        <span className="label">Image Url:</span>
        <img style={{ width: "200px", height: "auto" }} src={data.img} alt="" />
        <input
          type="text"
          placeholder="Image URL"
          value={data.img}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              img: e.target.value,
            }));
          }}
          required
        />
        <div className="rowc" style={{ gap: 10 }}>
          <div className="col">
            <span className="label">Date:</span>
            <DatePicker
              selected={data.date}
              onChange={(date) => {
                setData((prev) => ({
                  ...prev,
                  date: date,
                }));
              }}
            />
          </div>
          <div className="col">
            <span className="label">Status:</span>
            <div
              className="switch rowc"
              onClick={() => {
                setData((prev) => ({
                  ...prev,
                  active: !prev.active,
                }));
              }}
            >
              <span
                style={
                  data?.active
                    ? { background: "green", color: "white" }
                    : {
                        background: "none",
                        color: "grey",
                      }
                }
              >
                Active
              </span>
              <span
                style={
                  !data?.active
                    ? { background: "red", color: "white" }
                    : {
                        background: "none",
                        color: "grey",
                      }
                }
              >
                Inactive
              </span>
            </div>
          </div>
        </div>

        <span className="label">News Description:</span>
        <textarea
          placeholder="Description"
          value={data.description}
          style={{ height: "200px" }}
          onChange={(e) => {
            setData((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
          required
        />
        <div className="source_list col">
          <span className="label">Source:</span>
          <div className="listing col">
            {data?.source?.map((src, index) => (
              <div key={index} className="source_item rowc" style={{ gap: 10 }}>
                <input
                  type="text"
                  value={src.label}
                  placeholder="Label"
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      source: prev.source.map((item, i) =>
                        i === index ? { ...item, label: e.target.value } : item
                      ),
                    }));
                  }}
                  required
                />
                <input
                  style={{ flex: 1 }}
                  type="text"
                  value={src.link}
                  onChange={(e) => {
                    setData((prev) => ({
                      ...prev,
                      source: prev.source.map((item, i) =>
                        i === index ? { ...item, link: e.target.value } : item
                      ),
                    }));
                  }}
                  placeholder="URL"
                  required
                />
                <span
                  className="material-symbols-outlined"
                  style={{ color: "grey", cursor: "pointer", fontSize: "20px" }}
                  onClick={(e) => {
                    setData((prev) => ({
                      ...prev,
                      source: prev.source.filter((item, i) => i != index),
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
                let _interview = [];
                console.log(prev.source);
                if (prev.source) {
                  _interview = [...prev.source];
                }
                _interview.push({
                  label: "",
                  link: "",
                });

                return {
                  ...prev,
                  source: _interview,
                };
              });
            }}
          >
            Add Source
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

export default Mediahub;
