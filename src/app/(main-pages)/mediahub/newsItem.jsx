"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NewsItem({ data }) {
  const pathname = usePathname();

  return (
    <div className="news_item rowc">
      <div className="overlay col">
        <span className="date">{data.date}</span>
        <strong>{data.title}</strong>
        <Link scroll={false} href={`${pathname}/${data.id}/${data.slug}`}>
          Read More
        </Link>
      </div>
      <img src={data.img} alt={data.title} />
    </div>
  );
}

export default NewsItem;
