"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TerminalIntro from "./TerminalIntro";

export default function BootWrapper({ children }) {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isBooting && (
          <TerminalIntro key="intro" onComplete={() => setIsBooting(false)} />
        )}
      </AnimatePresence>
      
      {!isBooting && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
