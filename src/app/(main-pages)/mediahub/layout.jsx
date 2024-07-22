import React from "react";
import { promises as fs } from "fs";
import NewsItem from "./newsItem";
import "./style.scss";
import getDatabase from "@/app/utils/mongoConnection";

function MediaHubLayout({ children }) {
  return (
    <main className="mediahub col">
      <div className="banner rowc">
        <div className="banner_content rowc">
          <div className="text">
            <h1>
              MEDIA<span style={{ color: "#F77F9A" }}>HUB</span>
            </h1>
            <h3 className="urban_text">
              News, Insights and Collaborative Culture
            </h3>
          </div>
          <div className="cylinder"></div>
          <div className="cylinder2"></div>
        </div>
      </div>
      <div className="content">
        {children}
        <NewsListing />
      </div>
    </main>
  );
}

async function NewsListing() {
  try {
    // const file = await fs.readFile(
    //   process.cwd() + "/src/data/mediahub.json",
    //   "utf8"
    // );
    // const data = JSON.parse(file);
    const db = await getDatabase();
    const collection = db.collection("mediahub");
    const data = await collection.find().toArray();
    return (
      <div className="news_listing">
        {data.map((info, index) => (
          <NewsItem key={index} data={info} />
        ))}
      </div>
    );
  } catch (e) {
    return <main className="mediahub col section">{JSON.stringify(e)}</main>;
  }
}

export default MediaHubLayout;
