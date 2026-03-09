"use client";

import { useState } from "react";

const TerminalInput = ({ onCommand }) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const command = value.trim();
      if (command) {
        onCommand(command);
        setValue(""); // Clear after submitting
      }
    }
  };

  return (
    <div className="flex gap-2 items-center mt-2 pb-4">
      <span className="text-matrix font-bold shrink-0">guest@portfolio:~$</span>
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
