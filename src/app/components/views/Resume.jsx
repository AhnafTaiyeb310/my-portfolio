"use client";

const Resume = () => {
  return (
    <div className="py-2">
      <h2 className="text-highlight-400 text-xl font-bold mb-2 underline">Resume</h2>
      <div className="text-matrix opacity-80 mb-4 italic">Downloading resume.pdf... [DONE]</div>
      <div className="flex flex-col gap-4">
        <section>
          <h3 className="text-highlight-400 font-bold underline mb-1">Experience</h3>
          <p className="font-bold">Software Engineer @ Tech-Stack Solutions</p>
          <p className="text-sm opacity-80 italic">2023 - Present</p>
          <p className="mt-1">Built modular frontend systems using React and Tailwind.</p>
        </section>
        <section>
          <h3 className="text-highlight-400 font-bold underline mb-1">Education</h3>
          <p className="font-bold">B.Sc. in Computer Science</p>
          <p className="text-sm opacity-80">Graduated 2022</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
