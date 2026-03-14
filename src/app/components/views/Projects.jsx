"use client";

import { motion } from "framer-motion";
import { Github, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ title, tagline, tech, description, image, links, delay }) => {
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
          <Image
            src={image}
            fill
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-matrix font-jet text-2xl tracking-tight glow-text flex items-center gap-2">
            <span className="text-matrix/40 font-mono text-sm font-normal">
              {">"}
            </span>
            {title}
          </h3>
          <p className="text-highlight-400/80 text-lg font-mono uppercase tracking-wider mt-1">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tech?.map((item) => (
              <span
                key={item}
                className="px-2 py-0.5 text-md font-mono border border-matrix/30 text-matrix bg-matrix/5 rounded-sm uppercase tracking-tighter"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className="text-matrix/70 md:text-md text-base font-jet leading-relaxed mt-4 flex-grow italic">
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
              <Github size={24} />
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix/40 hover:text-matrix transition-colors duration-300 hover:glow-text"
            >
              <Globe size={24} />
            </a>
          )}
          {/* {links.external && (
            <a 
              href={links.external} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix/40 hover:text-matrix transition-colors duration-300 hover:glow-text"
            >
              <ExternalLink size={18} />
            </a>
          )} */}
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
      title: "Ahmed Digital",
      tagline: "Creative portfolio for a Digital agency",
      description:
        "Built a modern portfolio website for a digital video editing agency using Next.js, Tailwind CSS, and GSAP. Focused on creating a visually professional and aesthetic experience to showcase their work effectively. Deployed on a custom domain via Namecheap, helping the agency present their portfolio more convincingly and attract new clients.",
      image: "/ahmed-digital.jpg",
      tech: ["Next.js", "TailwindCSS", "GSAP"],
      links: { demo: "https://ahmeddigital.com/" },
    },
    {
      title: "Social-Media Clone",
      tagline: "Fullstack Application",
      description:
        "Building a Social media clone inspired from Dev.to. Uploading the full project very soon. Right now you can check the code base from the github. It has Standard and optimized backend. built with Django Rest framework",
      image: null,
      tech: ["Django", "DRF", "Redis", "Celery"],
      links: { github: "https://github.com/AhnafTaiyeb310/social-media" },
    },
  ];

  return (
    <div className="py-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
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
