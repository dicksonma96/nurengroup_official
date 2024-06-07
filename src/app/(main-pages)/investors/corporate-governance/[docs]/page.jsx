import PdfReader from "@/app/pdfReader/PdfReader";
import { committee_charters, governance_docs } from "@/data/docsInfo";
import PageNotFound from "@/app/pageNotFound";

export async function generateMetadata({ params }) {
  const detail = [...committee_charters, ...governance_docs].find(
    (doc) => doc.slug == params.docs
  );

  return {
    title: "Corporate Governance | Nuren Group - " + detail.label,
    description: "Corporate Governance | Nuren Group - " + detail.label,
  };
}

function Docs({ params }) {
  const detail = [...committee_charters, ...governance_docs].find(
    (doc) => doc.slug == params.docs
  );

  return detail ? (
    <PdfReader pdflink={detail?.pdflink} infoblocker={false} />
  ) : (
    <PageNotFound />
  );
}

export default Docs;
