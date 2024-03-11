"use client";
import React from "react";
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

        {children}
      </body>
    </AnimatePresence>
  );
}

export default GlobalClient;
