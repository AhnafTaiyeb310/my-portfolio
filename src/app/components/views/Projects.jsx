"use client";

const Projects = () => {
  const projectList = [
    { title: "Project Alpha", desc: "A cool retro terminal portfolio." },
    { title: "Project Beta", desc: "A high-performance data processing engine." },
    { title: "Project Gamma", desc: "Decentralized identity management system." }
  ];

  return (
    <div className="py-2">
      <h2 className="text-highlight-400 text-xl font-bold mb-3 underline">My Projects</h2>
      <div className="flex flex-col gap-4">
        {projectList.map((p, i) => (
          <div key={i} className="border-l-2 border-matrix pl-4">
            <h3 className="text-highlight-400 font-bold">{p.title}</h3>
            <p className="text-matrix opacity-90">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
