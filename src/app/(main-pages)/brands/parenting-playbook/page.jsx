import React from "react";
import PdfReader from "../../../pdfReader/PdfReader";

export const metadata = {
  title:
    "Parenting Playbook | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
  description:
    "Parenting Playbook - Motherhood SuperApp, Kelabmama.com, Ibuencer.com, Parentcraft, Superkids, Baby Fair, Motherhood Choice Award, MamaCubaTry",
};

function ParentingPlaybook() {
  return (
    <PdfReader
      pdflink={
        "https://drive.google.com/file/d/1PpKqrMdEeZxcllmFGqH7fgHxHqABy_BZ/preview"
      }
    />
  );
}

export default ParentingPlaybook;
