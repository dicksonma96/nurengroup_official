"use client"
import { AnimatePresence } from "framer-motion";

function ClientWrapper({children}) {
  return (
    <AnimatePresence>{children}</AnimatePresence>
  )
}

export default ClientWrapper