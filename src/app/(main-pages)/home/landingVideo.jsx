"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AssetPath from "@/app/utils/assetpath";

function LandingVideo() {
  const [hide, setHide] = useState(false);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="landing_video rowc"
          initial={{ opacity: 100, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          onClick={() => setHide(true)}
        >
          <video
            src={AssetPath("Landing/landing.mp4")}
            muted
            autoPlay
            playsInline
            loop
          ></video>
          <div className="landing_content colc">
            <button>Enter</button>
            <h1>NUREN GROUP</h1>
            <div className="bottom_line rowc">
              <p>Empower Women in Parenting, Education & Maternity Wellness</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LandingVideo;
