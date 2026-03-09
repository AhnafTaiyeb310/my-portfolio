"use client";

import { motion } from "framer-motion";

const TerminalOutput = ({ history }) => {
  // Retro animation variants
  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const componentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for a snappier feel
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="terminal-output flex flex-col gap-1">
      {history.map((line, index) => (
        <motion.div 
          key={index} 
          initial="hidden"
          animate="visible"
          variants={line.type === 'component' ? componentVariants : lineVariants}
          className="flex flex-col"
        >
          {line.type === 'command' && (
            <div className="flex gap-2">
              <span className="text-matrix font-bold">guest@portfolio:~$</span>
              <span className="text-highlight-400">{line.content}</span>
            </div>
          )}
          {line.type === 'output' && (
            <div className="text-matrix opacity-90 whitespace-pre-wrap">
              {line.content}
            </div>
          )}
          {line.type === 'component' && (
            <div className="mt-1">
              {line.content}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TerminalOutput;
