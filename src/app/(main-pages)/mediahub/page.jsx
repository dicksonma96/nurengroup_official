"use client";
import NewsItem from "./newsItem";
import { useState, useEffect } from "react";

// export const metadata = {
//   title: "Newsroom | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
//   description:
//     "Newsroom - Media & Press Release. Nuren Group provides parenting education and maternity wellness services",
// };

function Mediahub() {
  return (
    <>
      <title>
        Newsroom | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer
      </title>
      <meta
        name="description"
        content={
          "Newsroom - Media & Press Release. Nuren Group provides parenting education and maternity wellness services"
        }
      />
      <div className="banner rowc">
        <div className="banner_content rowc">
          <div className="text">
            <h1>
              MEDIA<span style={{ color: "#F77F9A" }}>HUB</span>
            </h1>
            <h3 className="urban_text">
              News, Insights and Collaborative Culture
            </h3>
          </div>
          <div className="cylinder"></div>
          <div className="cylinder2"></div>
        </div>
      </div>
      <div className="content colc">
        <NewsListing />
      </div>
    </>
  );
}

function NewsListing() {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [page, setPage] = useState(1);
  const entries = 12;

  let isPending = false;

  // const file = await fs.readFile(
  //   process.cwd() + "/src/data/mediahub.json",
  //   "utf8"
  // );
  // const data = JSON.parse(file);
  // const db = await getDatabase();
  // const collection = db.collection("mediahub");
  // const data = await collection
  //   .find({}, { projection: { _id: 0 } })
  //   .sort({ date: -1 })
  //   .toArray();

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    if (isPending) return;

    if (data == null) {
      if ((page - 1) * entries >= data?.totalDocs) return;
    }

    try {
      setPending(true);
      isPending = true;
      let resjson = await fetch(
        `api/getMediahub?entries=${entries}&lazyLoading=true&page=${page}`
      ).then((res) => res.json());
      setData(resjson.data);
      setPage((prev) => prev + 1);
    } catch {
    } finally {
      setPending(false);
      isPending = false;
    }
  };

  return (
    <>
      <div className="news_listing">
        {data?.data.map((info, index) => {
          if (info.active) return <NewsItem key={index} data={info} />;
        })}
      </div>
      {pending ? (
        <div className="load_more rowc">
          <div className="loader"></div>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {(page - 1) * entries < data?.totalDocs && (
            <div className="load_more rowc" onClick={GetData}>
              <span>More News</span>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Mediahub;
