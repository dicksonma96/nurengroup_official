import React from "react";
import "./style.scss";
import { promises as fs } from "fs";
import NewsItem from "./newsItem";
import { GetMedias } from "@/app/utils/GetMedias";

async function MediaHubLayout({ children }) {
  try {
    const data = await GetMedias();
    return (
      <main className="mediahub col">
        {children}
        <div className="banner rowc">
          <div className="banner_content rowc">
            <div className="text">
              <h1>MEDIAHUB</h1>
              <h3>News, Insights and Collaborative Culture from Nuren Group</h3>
            </div>
            <div className="cylinder"></div>
            <div className="cylinder2"></div>
          </div>
        </div>
        <div className="content">
          <div className="news_listing">
            {data.data.map((info, index) => (
              <NewsItem key={index} data={info} />
            ))}
          </div>
        </div>
      </main>
    );
  } catch (e) {
    return <main className="mediahub col section">Something Wrong</main>;
  }
}

export default MediaHubLayout;
