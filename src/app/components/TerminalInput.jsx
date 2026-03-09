"use client";

import { useState } from "react";

const TerminalInput = ({ onCommand, history }) => {
  const [value, setValue] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commandHistory = history
    .filter((line) => line.type === "command")
    .map((line) => line.content);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const command = value.trim();
      if (command) {
        onCommand(command);
        setValue(""); // Clear after submitting
        setHistoryIndex(-1); // Reset index
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setValue(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setValue(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setValue("");
      }
    }
  };

  return (
    <div className="flex gap-2 items-center mt-2 pb-4">
      <span className="text-matrix font-bold shrink-0">ahnaf@portfolio:~$</span>
      <input
        type="text"
        className="bg-transparent border-none outline-none text-highlight-400 w-full caret-matrix font-mono"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TerminalInput;
