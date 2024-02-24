import { promises as fs } from "fs";
import NewsItem from "./newsItem";

async function Mediahub() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/data/mediahub.json?v=123",
      "utf8"
    );
    const data = JSON.parse(file);

    return (
      <div className="news_listing">
        {data.data.map((info, index) => (
          <NewsItem key={index} data={info} />
        ))}
      </div>
    );
  } catch (e) {
    return <main className="mediahub col section">Something Wrong</main>;
  }
}

export default Mediahub;
