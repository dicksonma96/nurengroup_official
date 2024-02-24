import { promises as fs } from "fs";
import NewsItem from "./newsItem";

async function Mediahub() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/data/mediahub.json",
      "utf8"
    );
    const data = JSON.parse(file);

    return (
      <div className="news_listing">
        {data.news.map((info, index) => (
          <NewsItem key={index} data={info} />
        ))}
      </div>
    );
  } catch (e) {
    return <main className="mediahub col section">{JSON.stringify(e)}</main>;
  }
}

export default Mediahub;
