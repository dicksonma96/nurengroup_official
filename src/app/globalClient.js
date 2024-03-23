"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import Logo from "../assets/img/logo_white.svg";
import Image from "next/image";

const gothamFont = localFont({
  src: "../assets/fonts/Gotham-Rounded-Bold.otf",
});

function GlobalClient({ children }) {
  const pathname = usePathname();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(localStorage.getItem("nurengroup_dev"));
  }, []);
  return (
    <AnimatePresence mode="wait">
      <body>
        {/* exit */}
        {/* <motion.div
          className="transition_overlay"
          animate={{ height: 0 }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        ></motion.div> */}
        {/* entrance */}
        <motion.div
          className="transition_overlay"
          initial={{ height: "140vh" }}
          animate={{ height: 0 }}
          style={{ top: "auto", bottom: 0 }}
          transition={{ delay: 1, duration: 0.2, ease: "easeOut" }}
        >
          <div className="animated_logo col">
            <Image src={Logo} alt="Nuren group logo" />
          </div>
        </motion.div>

        {/* Lock on staging */}
        {logged ? children : <DevProtection setLogged={setLogged} />}

        {/* On Production */}
        {/* {children} */}
      </body>
    </AnimatePresence>
  );
}

function DevProtection({ setLogged }) {
  const password = "Nuren1234%";
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (inputRef.current.value == password) {
      localStorage.setItem("nurengroup_dev", "true");
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
    </div>
  );
}

export default GlobalClient;
