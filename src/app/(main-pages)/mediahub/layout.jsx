import React from "react";
import "./style.scss";

function MediaHubLayout({ children }) {
  return (
    <main className="mediahub col">
      <div className="banner rowc">
        <div className="banner_content rowc">
          <div className="text">
            <h1>
              MEDIA<span style={{ color: "#F77F9A" }}>HUB</span>
            </h1>
            <h3>News, Insights and Collaborative Culture from Nuren Group</h3>
          </div>
          <div className="cylinder"></div>
          <div className="cylinder2"></div>
        </div>
      </div>
      <div className="content">{children}</div>
    </main>
  );
}

export default MediaHubLayout;
