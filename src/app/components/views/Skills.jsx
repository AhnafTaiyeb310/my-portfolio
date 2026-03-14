"use client";

import { motion } from "framer-motion";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <span className="flex gap-1 shrink-0 text-sm sm:text-base">
      {[...Array(totalStars)].map((_, i) => (
        <span key={i} className={i < rating ? "text-matrix" : "text-matrix/20"}>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
};

const SkillCard = ({ title, skills, delayOffset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayOffset }}
      className="group relative overflow-hidden bg-black-250/30 border border-matrix/20 rounded-lg
      p-4 sm:p-6 flex flex-col h-full min-h-[260px] sm:min-h-[320px]
      hover:border-matrix/60 hover:shadow-[0_0_20px_rgba(90,187,154,0.2)]
      transition-all duration-300"
    >
      {/* scan effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-matrix/40 to-transparent absolute top-0 left-0 animate-scan" />
      </div>

      <div className="flex-grow">
        <h3
          className="text-highlight-400 font-jet font-bold text-base sm:text-lg mb-4
        glow-text-amber uppercase tracking-widest border-b border-matrix/10 pb-2"
        >
          {title}
        </h3>

        <div className="flex flex-col gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: delayOffset + index * 0.1,
              }}
              className="text-matrix font-mono text-sm sm:text-base flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-matrix/40 shrink-0">{">"}</span>

                <span className="truncate text-xl md:text-2xl ">
                  {skill.name}
                </span>
              </div>

              <StarRating rating={skill.rating} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-matrix/10">
        <span className="text-[9px] sm:text-[10px] text-matrix/40 uppercase tracking-[0.3em] font-bold">
          CATEGORY: {title}
        </span>
      </div>
    </motion.div>
  );
};

const SkillsGrid = () => {
  const data = [
    {
      title: "Languages",
      skills: [
        { name: "Python", rating: 4 },
        { name: "JavaScript", rating: 5 },
        { name: "C", rating: 4 },
        { name: "C++", rating: 4 },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", rating: 5 },
        { name: "Next.js", rating: 4 },
        { name: "Django", rating: 5 },
        { name: "Rest Framework", rating: 5 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", rating: 4 },
        { name: "PostMan", rating: 4 },
        { name: "VS Code", rating: 5 },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-7xl mx-auto py-4 px-2 sm:px-0">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {data.map((item, idx) => (
          <SkillCard
            key={idx}
            title={item.title}
            skills={item.skills}
            delayOffset={idx * 0.3}
          />
        ))}
      </div>

      {/* Learning section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="w-full bg-black-250/30 border border-matrix/20 rounded p-3 sm:p-4
        relative group hover:border-matrix/40 transition-all duration-300"
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-sm sm:text-lg">
          <span className="text-highlight-400 font-bold uppercase tracking-widest shrink-0">
            Currently Learning:
          </span>

          <code className="text-matrix break-all">
            skills.append(&apos;TypeScript&apos;, &apos;Docker&apos;)
          </code>

          <span className="text-matrix animate-pulse">_</span>
        </div>
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="w-full py-2">
      <SkillsGrid />
    </div>
  );
};

export default SkillsSection;
