import PdfReader from "@/app/pdfReader/PdfReader";
import { committee_charters, governance_docs } from "../docsInfo";
import PageNotFound from "@/app/pageNotFound";

function Docs({ params }) {
  const detail = [...committee_charters, ...governance_docs].find(
    (doc) => doc.slug == params.docs
  );

  return detail ? <PdfReader pdflink={detail?.pdflink} /> : <PageNotFound />;
}

export default Docs;
