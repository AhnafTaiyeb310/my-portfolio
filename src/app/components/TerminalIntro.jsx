"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TerminalIntro = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [phase, setPhase] = useState("booting");

  const bootMessages = [
    "INITIALIZING_OS_CORE_V1.0.0 [ OK ] ",
    "portfolioOS v1.0 [Build 2025.11.27]",
    "Copyright (c) 2025 Ahnaf. All rights reserved.",
    "booting portfolioOS v1.0...",
    "initializing system modules... ",
    "LOADING_SYSTEM_REGISTRIES ",
    "loading kernel extensions... ",
    "ESTABLISHING_ENCRYPTED_HANDSHAKE",
    "SECURE_CONNECTION_CONFIRMED [ OK ]",
    "ACCESS_GRANTED_GUEST_USER [ OK ]",
    "PARSING_PORTFOLIO_MODULES [ OK ]",
    "SYSTEM_READY [ OK ]",
  ];

// portfolioOS v1.0 [Build 2025.11.27]
// Copyright (c) 2025 Bilal. All rights reserved.
 
// booting portfolioOS v1.0...
// initializing system modules...
// loading kernel extensions... [OK]
// mounting file systems... [OK]
// starting network services... [OK]
// initializing ui/figma.make...
// loading user profile...
// loading experience database... [OK]
// loading project registry... [OK]
// loading contact module... [OK]
 
// profile loaded successfully.
// system ready.
 
// welcome to portfolioOS.



  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootMessages.length) {
        setLines((prev) => [...prev, bootMessages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("complete");
          setTimeout(onComplete, 500);
        }, 800);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-4 font-mono overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === "booting" && (
          <motion.div
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-matrix text-sm md:text-base mb-1"
              >
                <span className="opacity-50 tracking-tighter mr-2">
                  {new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
                {line}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-matrix ml-1 align-middle"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background CRT Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[10001] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
};

export default TerminalIntro;
