import React from "react";
import PdfReader from "@/app/pdfReader/PdfReader";

export const metadata = {
  title: "Prospectus | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
  description:
    "Prospectus - Motherhood SuperApp, Kelabmama.com, Ibuencer.com, Parentcraft, Superkids, Baby Fair, Motherhood Choice Award, MamaCubaTry",
};

function Prospectus() {
  return (
    <PdfReader
      pdflink={
        "https://drive.google.com/file/d/1cijMGyXzgLk6u_bAPxCi2IK6qgmgxUdX/preview"
      }
      infoblocker={false}
    />
  );
}

export default Prospectus;
