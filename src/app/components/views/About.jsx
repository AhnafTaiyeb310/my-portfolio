"use client";

const TerminalLink = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#00ffe1] hover:underline cursor-pointer transition-all"
  >
    {children}
  </a>
);

const About = () => {
  return (
    <div className="w-[85%] mx-auto font-jet bg-black-150/30 rounded-lg border border-matrix/10 p-6 my-4 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6">
          {/* NAME BLOCK */}
          <div className="flex flex-col -space-y-1">
            <span className="text-3xl font-bold text-[#ffebcd] uppercase tracking-tighter">
              Ahnaf
            </span>
            <span className="text-3xl font-bold text-[#ffebcd] uppercase tracking-tighter">
              Taiyeb
            </span>
          </div>

          {/* ASCII GRAPHIC */}
          <div className="text-[8px] leading-[8px] text-matrix opacity-80 font-mono select-none">
            {`
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒                ▒▒
▒▒  ▓▓▓▓▓▓▓▓▓▓▓▓  ▒▒
▒▒  ▓▓        ▓▓  ▒▒
▒▒  ▓▓  ▓▓▓▓  ▓▓  ▒▒
▒▒  ▓▓  ▓▓▓▓  ▓▓  ▒▒
▒▒  ▓▓  ▓▓▓▓  ▓▓  ▒▒
▒▒  ▓▓  ▓▓▓▓  ▓▓  ▒▒
▒▒  ▓▓        ▓▓  ▒▒
▒▒  ▓▓▓▓▓▓▓▓▓▓▓▓  ▒▒
▒▒                ▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            `.trim()}
            <div className="mt-2 text-[10px] space-y-1">
              <div>[SYSTEM: ONLINE]</div>
              <div>[LOC: EARTH/DHAKA]</div>
              <div>[AUTH: GUEST]</div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-5 text-matrix-text leading-relaxed text-lg">
          <p>
            I’m an aspiring Full-stack developer passionate about building
            real-world web applications using modern frontend and backend
            technologies. 
          </p>

          <p>
            I enjoy working on complete systems — from frontend
            to API development and database modeling. I’ve built projects using
            React, Next.js, Django, REST APIs, and SQL databases,
          </p>

          <p>
            I’m
            continuously improving my problem-solving skills through DSA
            practice and hands-on development. Currently looking for internship
            or junior full-stack developer roles where I can learn, grow, and
            contribute to production systems.
          </p>


          {/* <p>
            I also maintain a technical journal called{" "}
            <TerminalLink href="#">MindDump</TerminalLink>, where I document my
            findings in latency optimization and RAG architectures.
          </p> */}


          <p className="text-highlight-400 font-bold">
            I love building things that push the boundaries of what&apos;s
            possible. Let&apos;s collaborate and build the future together.
          </p>
        </div>
      </div>

      {/* FOOTER HINT */}
      <div className="mt-8 pt-4 border-t border-matrix/10 flex flex-wrap gap-x-4 gap-y-1 text-sm text-matrix/50">
        <span>
          Type <TerminalLink href="#">twitter</TerminalLink>,{" "}
          <TerminalLink href="#">linkedin</TerminalLink>, or{" "}
          <TerminalLink href="#">email</TerminalLink> to connect with me.
        </span>
      </div>
    </div>
  );
};

export default About;
