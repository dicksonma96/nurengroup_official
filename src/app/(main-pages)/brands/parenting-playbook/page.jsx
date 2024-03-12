"use client";
import React from "react";
import "../style.scss";
import InfoForm from "../InfoForm";

function ParentingPlaybook() {
  return (
    <main className="pdf_viewer section">
      <InfoForm />
      <iframe
        src="https://drive.google.com/file/d/1PpKqrMdEeZxcllmFGqH7fgHxHqABy_BZ/preview"
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
    </main>
  );
}

export default ParentingPlaybook;
