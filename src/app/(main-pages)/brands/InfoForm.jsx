"use client";
import React, { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function InfoForm({ handleSubmit }) {
  const [error, setError] = useState(null);
  const [lock, setLock] = useState(true);

  useEffect(() => {
    let status = localStorage.getItem("nurengroup_unlock");
    if (status) {
      setLock(false);
    }
  }, []);

  const onSubmit = async (e) => {
    try {
      setError(null);
      let res = await handleSubmit(e);
      if (res.ok) {
        setLock(false);
        localStorage.setItem("nurengroup_unlock", true);
      } else throw res.message;
    } catch (e) {
      setError(e);
    }
  };

  return lock ? (
    <div className="pdf_blocker colc">
      <form className="colc" action={onSubmit}>
        <span style={{ textAlign: "center" }}>
          Fill in our quick form to view full insights!
        </span>
        <br />
        {error && <div className="error_msg">{error}</div>}
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="phone" placeholder="Phone" required />
        <input type="text" name="email" placeholder="Email" required />
        <SubmitBtn />
      </form>
    </div>
  ) : (
    <></>
  );
}

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submiting..." : "Unlock Now"}
    </button>
  );
}

export default InfoForm;
