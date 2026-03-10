"use client";

const CommandLink = ({ cmd, label, description }) => {
  const handleClick = () => {
    const event = new CustomEvent('terminal-command', { detail: cmd });
    window.dispatchEvent(event);
  };

  return (
    <p 
      className="grid grid-cols-[1.5rem_7rem_1fr] font-jet text-commands-color text-lg group cursor-pointer"
      onClick={handleClick}
    > 
      <span className="text-highlight-400 opacity-0 group-hover:opacity-100 transition-opacity"> &gt; </span>
      <span className="">{cmd}</span> 
      <span className="mx-4 text-md text-matrix-text">-  {description}</span> 
    </p>
  );
};

export default CommandLink;
