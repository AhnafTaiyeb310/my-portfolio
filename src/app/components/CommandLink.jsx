"use client";

const CommandLink = ({ cmd, description }) => {
  const handleClick = () => {
    const event = new CustomEvent("terminal-command", { detail: cmd });
    window.dispatchEvent(event);
  };

  return (
    <p
      onClick={handleClick}
      className="grid grid-cols-[auto_auto_1fr] items-start gap-x-3 
      font-jet text-commands-color text-sm sm:text-base md:text-lg 
      group cursor-pointer"
    >
      <span className="text-highlight-400 opacity-0 group-hover:opacity-100 transition-opacity">
        &gt;
      </span>

      <span className="min-w-[5rem]">{cmd}</span>

      <span className="text-xs sm:text-sm md:text-base text-matrix-text">
        - {description}
      </span>
    </p>
  );
};

export default CommandLink;
