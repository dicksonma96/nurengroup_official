import React from "react";
import AssetPath from "@/app/utils/assetpath";
import "./style.scss";
import Link from "next/link";

function FounderAndChairman() {
  const imgs1 = [
    AssetPath("Image+Content/Breastfeeding+event+2023/IMG_6801.jpg"),
    AssetPath("Image+Content/Mother's+Day+SuperApp+Launch+2023/IMG_0194.jpg"),
    AssetPath("Image+Content/Ibuencer+Awards/IMG_1476_IG.jpg "),
    AssetPath("Image+Content/Baby+Fairs/IMG_0180.jpg"),
    AssetPath(
      "Image+Content/New+Mom+Webinar/WhatsApp+Image+2024-02-19+at+13.59.22+(12).jpeg "
    ),
    AssetPath("Image+Content/Parentcraft+Workshop/msg838316852-3454.jpg "),
    AssetPath("Image+Content/Super+Kids/IMG_5074.JPG "),
    AssetPath("Image+Content/Brand+Showcase+2022/IMG_4972.jpg "),
  ];
  const imgs2 = [
    AssetPath("Image+Content/Breastfeeding+event+2023/IMG_7212.jpg "),
    AssetPath("Image+Content/Mother's+Day+SuperApp+Launch+2023/IMG_0069.jpg "),
    AssetPath("Image+Content/Ibuencer+Awards/IMG_1734_IG.jpg"),
    AssetPath("Image+Content/Baby+Fairs/IMG_0205.jpg"),
    AssetPath(
      "Image+Content/New+Mom+Webinar/WhatsApp+Image+2024-02-19+at+14.00.17+(3).jpeg"
    ),
    AssetPath(
      "Image+Content/Parentcraft+Workshop/WhatsApp+Image+2024-02-18+at+11.14.09_ca8bb7c9.jpg"
    ),
    AssetPath("Image+Content/Super+Kids/IMG_1983.JPG "),
    AssetPath("Image+Content/Brand+Showcase+2022/IMG_4844.jpg "),
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
