"use client";
import { motion, AnimatePresence } from "framer-motion";


function Fade({children}) {
  return (
    <AnimatePresence>
    <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 100 }}   exit={{ opacity: 0, y: -50 }}>
        {children}
    </motion.div>
    </AnimatePresence>
  )
}

export default Fade