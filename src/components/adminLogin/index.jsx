import React, { useState, useRef, useEffect } from "react";
import setCookie from "@/app/utils/setCookie";
import Link from "next/link";

function AdminLogin({ setLogged, storageKey = "nurengroup_dev" }) {
  const password = "Nuren1234%";
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (inputRef.current.value == password) {
      setCookie(storageKey, "true", 1);
      setLogged(true);
    } else setError(true);
  };

  return (
    <div className="protection colc">
      <strong>Nurengroup Admin</strong>
      {error && <span>Incorrect Password!</span>}
      <input
        onChange={() => setError(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        ref={inputRef}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmit}>SIGN IN</button>
      <Link
        href="/"
        style={{
          color: "#F25075",
          textDecoration: "underline",
          marginTop: "10px",
        }}
      >
        Back To Homepage
      </Link>
    </div>
  );
}

export default AdminLogin;
