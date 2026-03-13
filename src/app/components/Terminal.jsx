"use client";

import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import { handleCommandRouting } from "./Commands";

const Terminal = forwardRef((props, ref) => {
  const [history, setHistory] = useState([]);
  const [isBooting, setIsBooting] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const terminalRef = useRef(null);
  const outputRefs = useRef([]);
  const shouldScrollRef = useRef(false); // <-- new

  const executeCommand = (command) => {
    if (!isBooting) {
      handleCommandRouting(command, history, setHistory);
    }
  };

  useImperativeHandle(ref, () => ({
    executeCommand,
  }));

  // Listen for global command events
  useEffect(() => {
    const handleGlobalCommand = (e) => {
      const command = e.detail;
      if (command) {
        executeCommand(command);
      }
    };

    window.addEventListener("terminal-command", handleGlobalCommand);
    return () =>
      window.removeEventListener("terminal-command", handleGlobalCommand);
  }, [isBooting, history]);

  // Boot animation
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
        setHistory((prev) => [
          ...prev,
          { type: "output", content: bootLines[i] },
        ]);
        i++;
      } else {
        setIsBooting(false);
        clearInterval(interval);

        // Now allow scrolling for new commands
        shouldScrollRef.current = true;
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleCommand = (command) => {
    setHistory((prev) => [
      ...prev,
      { type: "output", content: `> ${command}` },
    ]);
    handleCommandRouting(command, history, setHistory);

    // Allow scrolling after user command
    shouldScrollRef.current = true;
  };

  // Scroll new components only if allowed
  useEffect(() => {
    if (!shouldScrollRef.current) return;
    if (history.length === 0) return;

    const lastIndex = history.length - 1;
    const lastRef = outputRefs.current[lastIndex];
    if (lastRef) {
      lastRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [history]);

  if (!isMounted) {
    return <div className="w-full h-full min-h-[400px] bg-transparent" />;
  }

  return (
    <div
      className="w-full h-full min-h-[400px] overflow-y-auto p-6 font-mono bg-transparent custom-scrollbar"
      ref={terminalRef}
      onClick={() => terminalRef.current?.querySelector("input")?.focus()}
    >
      {history.map((item, idx) => (
        <div key={idx} ref={(el) => (outputRefs.current[idx] = el)}>
          <TerminalOutput history={[item]} />
        </div>
      ))}

      {!isBooting && (
        <TerminalInput onCommand={handleCommand} history={history} />
      )}
    </div>
  );
});

Terminal.displayName = "Terminal";

export default Terminal;
