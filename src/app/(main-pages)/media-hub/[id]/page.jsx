import { promises as fs } from "fs";
import ShareBtn from "./sharebtn";
import mediaNews from "../../../../data/mediahub.json";

// export async function generateMetadata({ params }) {
//   return {
//     title: `title`,
//     description: `test ${params.id}`,
//     openGraph: {
//       images: [detail.img],
//     },
//   };
// }

async function NewsDetail({ params }) {
  try {
    const file = await fs.readFile(
      path.join(process.cwd()) + "/src/data/mediahub.json",
      "utf8"
    );
    const data = JSON.parse(file);
    const detail = data.news.find((info) => info.id == params.id);
    return (
      <>
        <div className="news_detail col">
          <img src={detail.img} alt={detail.title} />
          <span className="date">{detail.date}</span>
          <strong>{detail.title}</strong>
          <p>{detail.description}</p>

          <ShareBtn />
        </div>
      </>
    );
  } catch (e) {
    return <main className="mediahub col section">{JSON.stringify(e)}</main>;
  }
}

export default NewsDetail;
