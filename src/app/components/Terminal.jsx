"use client";

import { useState, useRef, useEffect } from "react";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import { handleCommandRouting } from "./commands";

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to my portfolio! Type help to get started.' }
  ]);
  const terminalRef = useRef(null);

  const handleCommand = (command) => {
    handleCommandRouting(command, history, setHistory);
  };

  // Scroll to bottom on history change
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      className="w-full h-[400px] overflow-y-auto p-4 scrollbar-hide font-mono bg-[#0a0a0a]"
      ref={terminalRef}
      onClick={() => terminalRef.current?.querySelector('input')?.focus()}
    >
      <TerminalOutput history={history} />
      <TerminalInput onCommand={handleCommand} />
    </div>
  );
};

export default Terminal;
