import { committee_charters, governance_docs } from "../data/docsInfo";
import mediaNews from "../data/mediahub.json";

export default function sitemap() {
  const pages = [
    "https://nurengroup.com",
    "https://nurengroup.com/home",
    "https://nurengroup.com/founder-and-chairman",
    "https://nurengroup.com/board-of-directors",
    "https://nurengroup.com/board-of-directors/details",
    "https://nurengroup.com/leadership-team",
    "https://nurengroup.com/brands/our-brands",
    "https://nurengroup.com/brands/parenting-playbook",
    "https://nurengroup.com/brands/supermums-survey",
    "https://nurengroup.com/investors/corporate-governance",
    "https://nurengroup.com/mediahub",
    "https://nurengroup.com/enquiry",
  ];

  mediaNews.news.forEach((news) => {
    pages.push(`https://nurengroup.com/mediahub/${news.id}/${news.slug}`);
  });

  committee_charters.forEach((doc) => {
    pages.push(
      `https://nurengroup.com/investors/corporate-governance/${doc.slug}`
    );
  });

  governance_docs.forEach((doc) => {
    pages.push(
      `https://nurengroup.com/investors/corporate-governance/${doc.slug}`
    );
  });

  return pages.map((page) => ({
    url: page,
    lastModified: new Date(),
  }));

  // Sample
  //   {
  //     url: "https://nurengroup.com/mediahub",
  //     lastModified: new Date(),
  //     changeFrequency: "weekly",
  //     priority: 0.5,
  //   },
}
