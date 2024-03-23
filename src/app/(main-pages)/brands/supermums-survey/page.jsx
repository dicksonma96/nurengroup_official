import React from "react";
import PdfReader from "../../../pdfReader/PdfReader";

export const metadata = {
  title:
    "Supermums Survey | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
  description:
    "Supermums Survey - Motherhood SuperApp, Kelabmama.com, Ibuencer.com, Parentcraft, Superkids, Baby Fair, Motherhood Choice Award, MamaCubaTry",
};

function SupermumSurvey() {
  return (
    <PdfReader
      pdflink={
        "https://drive.google.com/file/d/1HPL_x9QGML6Y0mfp5Dw-Vxn8e2gnqd0r/preview"
      }
    />
  );
}

export default SupermumSurvey;
