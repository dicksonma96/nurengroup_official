"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitBtn() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="submit_btn cta_btn"
      disabled={status.pending}
    >
      {status.pending ? "Submitting" : "Submit"}
    </button>
  );
}

export default SubmitBtn;
