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
    <div className="w-full max-w-6xl mx-auto font-jet bg-black-150/30 rounded-lg border border-matrix/10 p-4 sm:p-6 my-4 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-6 md:gap-8">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-5">
          {/* NAME */}
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#ffebcd] uppercase tracking-tighter">
              Ahnaf
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#ffebcd] uppercase tracking-tighter">
              Taiyeb
            </span>
          </div>

          {/* ASCII GRAPHIC */}
          <div className="text-[7px] sm:text-[8px] leading-[7px] sm:leading-[8px] text-matrix opacity-80 font-mono select-none overflow-hidden">
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

            <div className="mt-2 text-[9px] sm:text-[10px] space-y-1">
              <div>[SYSTEM: ONLINE]</div>
              <div>[LOC: EARTH/DHAKA]</div>
              <div>[AUTH: GUEST]</div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-4 sm:gap-5 text-matrix-text leading-relaxed text-sm sm:text-base md:text-lg">
          <p>
            I’m an aspiring Full-stack developer passionate about building
            real-world web applications using modern frontend and backend
            technologies.
          </p>

          <p>
            I enjoy working on complete systems — from frontend to API
            development and database modeling. I’ve built projects using React,
            Next.js, Django, REST APIs, and SQL databases.
          </p>

          <p>
            I’m continuously improving my problem-solving skills through DSA
            practice and hands-on development. Currently looking for internship
            or junior full-stack developer roles where I can learn, grow, and
            contribute to production systems.
          </p>

          <p className="text-highlight-400 font-bold">
            I love building things that push the boundaries of what&apos;s
            possible. Let&apos;s collaborate and build the future together.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-6 sm:mt-8 pt-4 border-t border-matrix/10 flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-1 text-xs sm:text-sm text-matrix/50">
        <span>
          Type{" "}
          <TerminalLink href="https://www.linkedin.com/in/ahnaf-taiyeb-6b6298296/">
            linkedin
          </TerminalLink>
          , or{" "}
          <TerminalLink href="mailto:ahnaf@example.com?subject=Project Inquiry&body=Hello I want to discuss a project">
            email
          </TerminalLink>{" "}
          to connect with me.
        </span>
      </div>
    </div>
  );
};

export default About;
