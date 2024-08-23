import React from "react";
import AssetPath from "@/app/utils/assetpath";
import getDatabase from "@/app/utils/mongoConnection";
import "./style.scss";
import formatDate from "@/app/utils/formatDate";

export const metadata = {
  title:
    "Financial Reports | Nuren Group Limited (NSX:NRN) - Investor Relations",
  description:
    "Financial Reports | Nuren Group Limited (NSX:NRN) - Investor Relations. Nuren Group provides parenting education and maternity wellness services.",
};

async function FinanceReports() {
  const db = await getDatabase();
  const collection = db.collection("financial-report");
  const reports = await collection.find().toArray();
  // const reports = [
  //   {
  //     date: new Date(),
  //     title:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  //     type: "file",
  //     url: "asdasd",
  //   },
  //   {
  //     date: new Date(),
  //     title:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  //     type: "link",
  //     url: "asdasd",
  //   },
  // ];
  return (
    <div className="finance_report col">
      <div className="banner rowc">
        <div className="text col">
          <h1>FINANCIAL</h1>
          <h1 className="pink_text">REPORTS</h1>
        </div>
        <img src={AssetPath("finance-report/banner_bg.jpg")} alt="" />
      </div>
      <div className="content">
        <div className="report_list col">
          {reports.map((report, index) => (
            <div key={index} className="report_item row">
              {report.type == "file" ? (
                <img
                  className="icon"
                  src={AssetPath("finance-report/file.png")}
                />
              ) : (
                <img
                  className="icon"
                  src={AssetPath("finance-report/link.png")}
                />
              )}
              <div className="col">
                <a target="_blank" href={report.url}>
                  {report.title}
                </a>
                <span className="date">{formatDate(report.date)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FinanceReports;
