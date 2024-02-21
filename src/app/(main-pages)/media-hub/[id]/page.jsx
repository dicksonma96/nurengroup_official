import { promises as fs } from "fs";
import Link from "next/link";
import ShareBtn from "./sharebtn";
export async function generateMetadata({ params }) {
  const detail = await GetDetail(params.id);
  return {
    title: detail.title,
    description: detail.description,
    openGraph: {
      images: [detail.img],
    },
  };
}

async function NewsDetail({ params }) {
  const detail = await GetDetail(params.id);

  return (
    <>
      <div className="news_detail col">
        <img src={detail.img} alt={detail.title} />
        <span className="date">{detail.date}</span>
        <strong>{detail.title}</strong>
        <p>{detail.description}</p>

        <ShareBtn />
      </div>
      <span href={"/media-hub"} className="close_label">
        Click anywhere outside to close
      </span>
    </>
  );
}

async function GetDetail(id) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/mediahub.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data.data.find((info) => info.id == id);
}

export default NewsDetail;
