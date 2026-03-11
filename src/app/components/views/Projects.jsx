"use client";

import { motion } from "framer-motion";
import { Github, Globe, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, tagline, description, image, links, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col bg-[#0a0a0a] border border-matrix/20 rounded-xl overflow-hidden transition-all duration-500 hover:border-matrix/50 hover:shadow-[0_0_30px_rgba(90,187,154,0.15)] hover:-translate-y-1"
    >
      {/* Hover Lightening Effect Overlay */}
      <div className="absolute inset-0 bg-matrix/0 group-hover:bg-matrix/[0.03] transition-colors duration-500 pointer-events-none" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(90,187,154,0.1)]" />

      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#1a1a1a] border-b border-matrix/10">
        <div className="absolute inset-0 flex items-center justify-center text-matrix/20 font-mono text-xs uppercase tracking-[0.2em]">
          [ Preview_Image_Unavailable ]
        </div>
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-matrix text-xl font-bold tracking-tight glow-text flex items-center gap-2">
            <span className="text-matrix/40 font-mono text-sm font-normal">{'>'}</span>
            {title}
          </h3>
          <p className="text-highlight-400/80 text-xs font-mono uppercase tracking-widest mt-1">
            {tagline}
          </p>
        </div>

        <p className="text-matrix/70 text-sm font-mono leading-relaxed mt-4 flex-grow italic">
          {description}
        </p>

        {/* Footer Icons */}
        <div className="mt-6 pt-4 border-t border-matrix/10 flex items-center gap-4">
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix/40 hover:text-matrix transition-colors duration-300 hover:glow-text"
            >
              <Github size={18} />
            </a>
          )}
          {links.demo && (
            <a 
              href={links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix/40 hover:text-matrix transition-colors duration-300 hover:glow-text"
            >
              <Globe size={18} />
            </a>
          )}
          {links.external && (
            <a 
              href={links.external} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix/40 hover:text-matrix transition-colors duration-300 hover:glow-text"
            >
              <ExternalLink size={18} />
            </a>
          )}
          <span className="ml-auto text-[10px] text-matrix/20 font-mono uppercase tracking-widest">
            v1.0.0
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "ClawX",
      tagline: "Automation Framework",
      description: "A high-performance modular automation framework designed for rapid deployment and scalable system orchestration using Python and gRPC.",
      image: null,
      links: { github: "#", demo: "#", external: "#" }
    },
    {
      title: "Matrix-OS",
      tagline: "Terminal Environment",
      description: "A web-based terminal environment with full filesystem emulation, custom shell execution, and persistent user sessions.",
      image: null,
      links: { github: "#", external: "#" }
    },
    {
      title: "Cyber-Sentinel",
      tagline: "Security Monitor",
      description: "Real-time network traffic analysis and anomaly detection system featuring advanced visualization and automated threat response.",
      image: null,
      links: { github: "#", demo: "#" }
    }
  ];

  return (
    <div className="py-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
