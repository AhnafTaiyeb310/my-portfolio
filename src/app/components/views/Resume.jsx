"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="py-2">
      <div className="flex flex-col gap-2">
        <p className="text-matrix">
          Resume file identified: <span className="text-highlight-400 font-bold underline">resume.pdf</span>
        </p>
        <p className="text-matrix/80 text-sm italic">
          Size: 1.2MB | Format: PDF | Status: Ready
        </p>
        
        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 px-4 py-2 border border-matrix text-matrix hover:bg-matrix hover:text-black transition-all duration-300 font-bold w-fit flex items-center gap-2 group"
        >
          <span className="group-hover:animate-pulse">[</span>
          OPEN_RESUME_VIEWER
          <span className="group-hover:animate-pulse">]</span>
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              className="relative w-full h-full max-w-5xl bg-[#0a0a0a] border border-matrix/30 shadow-[0_0_50px_rgba(90,187,154,0.1)] flex flex-col rounded-sm overflow-hidden"
            >
              {/* Terminal Header for Modal */}
              <div className="bg-matrix/10 border-b border-matrix/20 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs font-mono text-matrix opacity-70 tracking-widest uppercase">
                    Document_Viewer: resume.pdf
                  </span>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-matrix hover:text-white transition-colors p-1"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* PDF Iframe */}
              <div className="flex-grow bg-[#1a1a1a]">
                <iframe
                  src="/resume1.pdf"
                  className="w-full h-full border-none"
                  title="My Resume"
                />
              </div>

              {/* Bottom Footer */}
              <div className="bg-matrix/5 p-2 text-center">
                <p className="text-[10px] text-matrix/40 uppercase tracking-[0.2em]">
                  Press ESC or click outside to exit viewer
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resume;
