"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function GlobalClient({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <body key={pathname}>
        {/* exit */}
        <motion.div
          className="transition_overlay"
          animate={{ height: 0 }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        ></motion.div>
        {/* entrance */}
        <motion.div
          className="transition_overlay"
          initial={{ height: "140vh" }}
          animate={{ height: 0 }}
          transition={{ delay: 0.5, duration: 0.2, ease: "easeOut" }}
        ></motion.div>

        {children}
      </body>
    </AnimatePresence>
  );
}

export default GlobalClient;
