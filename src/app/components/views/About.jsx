"use client";

const About = () => {
  return (
    <div className="py-2 animate-in fade-in duration-500">
      <h2 className="text-highlight-400 text-xl font-bold mb-2 underline">About Me</h2>
      <p className="text-matrix leading-relaxed">
        Hello! I'm a passionate developer focused on building modern web applications.
        I love terminal aesthetics, clean code, and solving complex problems.
      </p>
      <div className="mt-2 text-matrix opacity-70">
        - Location: Earth<br />
        - Role: Software Engineer<br />
        - Interests: Open Source, AI, Web3
      </div>
    </div>
  );
};

export default About;
