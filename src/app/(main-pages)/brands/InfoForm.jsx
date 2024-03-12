"use client";
import React, { useEffect, useState } from "react";

function InfoForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lock, setLock] = useState(true);

  useEffect(() => {
    let status = localStorage.getItem("nurengroup_unlock");
    if (status) {
      setLock(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    try {
      setError(null);
      setLoading(true);
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
      localStorage.setItem("nurengroup_unlock", true);
      setLock(false);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return lock ? (
    <div className="pdf_blocker colc">
      <form className="colc" action={handleSubmit}>
        <span>Fill in our quick form to view full insights!</span>
        <br />
        {error && <div className="error_msg">{error}</div>}
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="phone" placeholder="Phone" required />
        <input type="text" name="email" placeholder="Email" required />
        <button type="submit" disabled={loading}>
          {loading ? "Submiting..." : "Unlock Now"}
        </button>
      </form>
    </div>
  ) : (
    <></>
  );
}

export default InfoForm;
