import React from "react";
import PdfReader from "@/app/pdfReader/PdfReader";

export const metadata = {
  title: "Prospectus | Nuren Group Limited (NSX:NUR) - NSX Australia IPO 2024",
  description:
    "Download Prospectus of Nuren Group Limited (NSX:NUR) IPO 2024 Australia. If you have any questions about the Offer or any other matter, please contact your professional advisor.",
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
