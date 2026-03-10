"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import { handleCommandRouting } from "./Commands";

const Terminal = forwardRef((props, ref) => {
  const [history, setHistory] = useState([]);
  const [isBooting, setIsBooting] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const terminalRef = useRef(null);

  const executeCommand = (command) => {
    if (!isBooting) {
      handleCommandRouting(command, history, setHistory);
    }
  };

  useImperativeHandle(ref, () => ({
    executeCommand
  }));

  // Listen for global command events
  useEffect(() => {
    const handleGlobalCommand = (e) => {
      const command = e.detail;
      if (command) {
        executeCommand(command);
        // Optional: Scroll terminal into view
        const terminalElement = document.getElementById("terminal-section");
        if (terminalElement) {
          terminalElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener('terminal-command', handleGlobalCommand);
    return () => window.removeEventListener('terminal-command', handleGlobalCommand);
  }, [isBooting, history]); // Re-bind when history/booting state changes

  useEffect(() => {
    setIsMounted(true);
    const bootLines = [
      "Booting developer environment...",
      "Loading portfolio modules...",
      "Initializing profile...",
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
});

Terminal.displayName = "Terminal";

export default Terminal;
