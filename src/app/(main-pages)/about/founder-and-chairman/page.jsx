import React from "react";
import AssetPath from "@/app/utils/assetpath";
import "./style.scss";

function FounderAndChairman({ children }) {
  const imgs1 = [
    AssetPath("Landing/1.jpg"),
    AssetPath("Landing/2.jpg"),
    AssetPath("Landing/3.jpg"),
    AssetPath("Landing/4.jpg"),
    AssetPath("Landing/5.jpg"),
    AssetPath("Landing/6.jpg"),
    AssetPath("Landing/7.jpg"),
    AssetPath("Landing/8.jpg"),
  ];
  const imgs2 = [
    AssetPath("Landing/1.jpg"),
    AssetPath("Landing/2.jpg"),
    AssetPath("Landing/3.jpg"),
    AssetPath("Landing/4.jpg"),
    AssetPath("Landing/5.jpg"),
    AssetPath("Landing/6.jpg"),
    AssetPath("Landing/7.jpg"),
    AssetPath("Landing/8.jpg"),
  ];

  return (
    <main className="founder row">
      <div className="vertical_carousel row">
        <VerticalCarousel imgs={imgs1} reverse={true} />
        <VerticalCarousel imgs={imgs2} />
      </div>
      <div className="content colc">
        <div style={{ height: "10vh", minHeight: "120px" }}></div>
        <div className="ppl_row rowc" style={{ justifyContent: "flex-start" }}>
          <h1>CHAIRMAN</h1>
          <div className="avatar colc">
            <img
              src={AssetPath("FounderChairman/chairman.png")}
              alt="Chairman Dr Wong"
            />
            <strong>
              PROF DR WONG <br />
              KONG YEW
            </strong>
            <span>Chairman, Non-executive</span>
            <span>Independent Director</span>
          </div>
        </div>
        <div
          className="ppl_row rowc"
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <div className="avatar colc">
            <img
              src={AssetPath("FounderChairman/founder.png")}
              alt="Founder Petrina"
            />
            <strong>
              PETRINA GOH <br /> SHZE YINN
            </strong>
            <span>Founder, Chief Executive Officer,</span>
            <span>Executive, Independent Director</span>
          </div>
          <h1>FOUNDER</h1>
          {children}
        </div>
      </div>
    </main>
  );
}

function VerticalCarousel({ imgs, reverse = false }) {
  return (
    <div className="carousel colc">
      {imgs.map((img, index) => (
        <img
          src={img}
          alt={`photo ${index}`}
          style={{ animationDirection: reverse ? "reverse" : "normal" }}
        />
      ))}
      {imgs.map((img, index) => (
        <img
          src={img}
          alt={`photo ${index}`}
          style={{ animationDirection: reverse ? "reverse" : "normal" }}
        />
      ))}
    </div>
  );
}

export default FounderAndChairman;
