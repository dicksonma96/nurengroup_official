import { promises as fs } from "fs";
import ShareBtn from "./sharebtn";
import { GetMediaDetail } from "@/app/utils/GetMediaDetail";

export async function generateMetadata({ params }) {
  return {
    title: `title`,
    description: `test ${params.id}`,
    // openGraph: {
    //   images: [detail.img],
    // },
  };
}

async function NewsDetail({ params }) {
  try {
    const data = await GetMediaDetail(params.id);
    if (data == undefined) throw "News Not found";
    return (
      <>
        <div className="news_detail col">
          <img src={data.img} alt={data.title} />
          <span className="date">{data.date}</span>
          <strong>{data.title}</strong>
          <p>{data.description}</p>

          <ShareBtn />
        </div>
        <span href={"/media-hub"} className="close_label">
          Click anywhere outside to close
        </span>
      </>
    );
  } catch (e) {
    return <main className="mediahub col section">{e}</main>;
  }
}

export default NewsDetail;
