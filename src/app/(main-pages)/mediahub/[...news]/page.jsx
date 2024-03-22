import ShareBtn from "./sharebtn";
import mediaNews from "../../../../data/mediahub.json";
import Link from "next/link";

import { BackBtn, BackOverlay } from "./backbtn";

export async function generateMetadata({ params }) {
  const detail = mediaNews.news.find((info) => info.id == params.news[0]);

  return {
    title: detail.title,
    description: detail.description,
    openGraph: {
      images: [detail.img],
    },
  };
}

async function NewsDetail({ params }) {
  try {
    const detail = mediaNews.news.find((info) => info.id == params.news[0]);
    const moreInfo = [...(detail.interview || []), ...(detail.article || [])];
    return (
      <div className="news_overlay">
        <div className="news_detail col">
          <BackBtn />
          <img src={detail.img} alt={detail.title} />
          <div className="news_content col">
            <div
              className="rowc"
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <span className="date urban_text">{detail.date}</span>
              {/* <ShareBtn /> */}
            </div>
            <strong>{detail.title}</strong>
            <p className="urban_text">{detail.description}</p>
            <div className="reference rowc">
              <div className="label urban_text">Find out more:</div>
              {moreInfo.map((info, index) => (
                <>
                  <a
                    key={index}
                    className="link urban_text"
                    href={info.link}
                    target="_blank"
                  >
                    {info.label}
                  </a>
                  {index != moreInfo.length - 1 && <span>|</span>}
                </>
              ))}
            </div>
          </div>
        </div>
        <BackOverlay />
      </div>
    );
  } catch (e) {
    return <main className="mediahub col section">{JSON.stringify(e)}</main>;
  }
}

export default NewsDetail;
