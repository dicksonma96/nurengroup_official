import React from "react";
import "./style.scss";
import InfoForm from "./InfoForm";

function PdfReader({ pdflink }) {
  const handleSubmit = async (e) => {
    "use server";
    try {
      let res = await fetch(
        "https://login.nuren.co/api/lead/collect_data_form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: e.get("name"),
            phone: e.get("phone"),
            email: e.get("email"),
          }),
        }
      );
      let resJson = await res.json();
      console.log(resJson);
      if (resJson.status == "error") {
        throw resJson.data;
      }
      return { ok: true };
    } catch (e) {
      return { ok: false, message: e.message };
    }
  };

  return (
    <main className="pdf_viewer section">
      <InfoForm handleSubmit={handleSubmit} />
      <iframe
        src={pdflink}
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
    </main>
  );
}

export default PdfReader;
