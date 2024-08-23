import React, { useState, useRef, useEffect } from "react";
import setCookie from "@/app/utils/setCookie";
import Link from "next/link";
import { AdminSignIn } from "@/app/admin/actions";

function AdminLogin({ setLogged, storageKey = "nurengroup_dev" }) {
  const inputRef = useRef(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    try {
      setPending(true);
      let res = await AdminSignIn(inputRef.current.value);
      if (res != true) setError(res);
      else {
        setCookie(storageKey, "true", 1);
        setLogged(true);
      }
    } catch (e) {
      setError(e);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="protection colc">
      <strong>Nurengroup Admin</strong>
      {error && <span>{error}</span>}
      <input
        onChange={() => setError(null)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        ref={inputRef}
        type="password"
        placeholder="Password"
      />
      <button disabled={pending} onClick={handleSubmit}>
        {pending ? "SIGNING IN..." : "SIGN IN"}
      </button>
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
