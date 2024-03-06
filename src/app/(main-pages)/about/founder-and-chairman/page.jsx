import React from "react";
import AssetPath from "@/app/utils/assetpath";
import "./style.scss";
import Link from "next/link";

function FounderAndChairman() {
  const imgs1 = [
    AssetPath("FounderChairman/LeftCarousel/L1.jpg"),
    AssetPath("FounderChairman/LeftCarousel/L2.jpg"),
    AssetPath("FounderChairman/LeftCarousel/L3.jpg"),
    AssetPath("FounderChairman/LeftCarousel/L4.jpeg"),
    AssetPath("FounderChairman/LeftCarousel/L5.jpg"),
    AssetPath("FounderChairman/LeftCarousel/L6.jpg"),
    AssetPath("FounderChairman/LeftCarousel/L7.jpg"),
    AssetPath("FounderChairman/LeftCarousel/L8.jpg"),
  ];
  const imgs2 = [
    AssetPath("FounderChairman/RightCarousel/R1.jpeg"),
    AssetPath("FounderChairman/RightCarousel/R2.jpg"),
    AssetPath("FounderChairman/RightCarousel/R3.jpg"),
    AssetPath("FounderChairman/RightCarousel/R4.jpg"),
    AssetPath("FounderChairman/RightCarousel/R5.jpg"),
    AssetPath("FounderChairman/RightCarousel/R6.jpg"),
    AssetPath("FounderChairman/RightCarousel/R7.jpg"),
    AssetPath("FounderChairman/RightCarousel/R8.jpg"),
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
          <Link
            href="/about/board-of-directors/dr_wong"
            className="avatar colc"
          >
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
          </Link>
        </div>
        <div
          className="ppl_row rowc"
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <Link
            href="/about/board-of-directors/petrina_goh"
            className="avatar colc"
          >
            <img
              src={AssetPath("FounderChairman/founder.png")}
              alt="Founder Petrina"
            />
            <strong>
              PETRINA GOH <br /> SHZE YINN
            </strong>
            <span>Founder, Chief Executive Officer,</span>
            <span>Executive, Independent Director</span>
          </Link>
          <h1>FOUNDER</h1>
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
