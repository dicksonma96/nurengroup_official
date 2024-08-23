import ShareBtn from "./sharebtn";
import mediaNews from "../../../../../data/mediahub.json";
import formatDate from "@/app/utils/formatDate";
import getDatabase from "@/app/utils/mongoConnection";
import Link from "next/link";
import { BackBtn, BackOverlay } from "./backbtn";

export async function generateMetadata({ params }) {
  // const detail = mediaNews.news.find(
  //   (info) => info.slug == decodeURIComponent(params.news[0])
  // );
  const db = await getDatabase();
  const collection = db.collection("mediahub");
  const detail = await collection.findOne(
    {
      slug: decodeURIComponent(params.news[0]),
    },
    { projection: { _id: 0 } }
  );
  return {
    title: "Nuren Group | " + detail?.title,
    description: formatDate(detail?.date) + ": " + detail?.description,
    openGraph: {
      images: [detail?.img],
    },
    twitter: {
      card: "Nuren Group | " + detail?.title,
      images: [detail?.img],
    },
  };
}

async function NewsDetail({ params }) {
  try {
    const db = await getDatabase();
    const collection = db.collection("mediahub");
    const detail = await collection.findOne(
      {
        slug: decodeURIComponent(params.news[0]),
      },
      { projection: { _id: 0 } }
    );
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
              <span className="date urban_text">
                {formatDate(detail?.date)}
              </span>
            </div>
            <strong>{detail.title}</strong>
            <p
              className="urban_text"
              dangerouslySetInnerHTML={{ __html: detail.description }}
            ></p>
            <ShareBtn title={detail.title} />

            <div className="reference rowc">
              <div className="label urban_text">Find out more:</div>
              {detail.source.map((info, index) => (
                <>
                  <a
                    key={index}
                    className="link urban_text"
                    href={info.link}
                    target="_blank"
                  >
                    {info.label}
                  </a>
                  {index != detail.source.length - 1 && <span>|</span>}
                </>
              ))}
            </div>
          </div>
        </div>
        <BackOverlay />
      </div>
    );
  } catch (e) {
    return (
      <div className="news_overlay rowc">
        <div
          className="colc"
          style={{
            color: "black",
            padding: "20px",
            margin: "auto",
            background: "white",
            borderRadius: 10,
          }}
        >
          <span>Opps, Something went wrong about this news :( </span>
          <br />
          <Link
            href="/mediahub"
            style={{
              background: "#ee5174",
              color: "white",
              padding: "10px 15px",
            }}
          >
            Close
          </Link>
        </div>
        <BackOverlay />
      </div>
    );
  }
}

export default NewsDetail;
