"use client";

import { useState, useRef, useEffect } from "react";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import { handleCommandRouting } from "./Commands";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [isBooting, setIsBooting] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const bootLines = [
      "Booting developer environment...",
      "Loading portfolio modules...",
      "Initializing profile...",
      // "Ready.",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setHistory((prev) => [...prev, { type: "output", content: bootLines[i] }]);
        i++;
      } else {
        setIsBooting(false);
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleCommand = (command) => {
    handleCommandRouting(command, history, setHistory);
  };

  // Scroll to bottom on history change
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  if (!isMounted) return <div className="w-full h-full min-h-[400px] bg-transparent" />;

  return (
    <div 
      className="w-full h-full min-h-[400px] overflow-y-auto p-6 font-mono bg-transparent custom-scrollbar"
      ref={terminalRef}
      onClick={() => terminalRef.current?.querySelector('input')?.focus()}
    >
      <TerminalOutput history={history} />
      {!isBooting && <TerminalInput onCommand={handleCommand} history={history} />}
    </div>
  );
};

export default Terminal;
