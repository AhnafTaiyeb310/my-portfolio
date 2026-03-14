import AsciiName from "./AsciiName";
import Terminal from "./Terminal";
import ScreenEffects from "./ScreenEffects";
import CommandLink from "./CommandLink";

function MainWindow() {
    const commands = {
        about: "Learn about Ahnaf and his work",
        skills: "Technical stack and expertise",
        projects: "Check out portfolio projects",
        resume: "View my latest resume",
    };
    const socials = {
        email: "mailto:ahnaf@example.com?subject=Project Inquiry&body=Hello I want to discuss a project",
        linkedin: "https://www.linkedin.com/in/ahnaf-taiyeb-6b6298296/",
        github: "https://github.com/AhnafTaiyeb310"
    };

    return (
        <div className="relative min-h-screen bg-black-950 overflow-hidden selection:bg-matrix selection:text-black">
            <ScreenEffects />

            <div className="flex flex-col items-center justify-start min-h-screen p-4 md:p-8">
                {/* Main Window Frame */}
                <div className="w-full max-w-6xl terminal-border bg-black-150 backdrop-blur-sm overflow-hidden flex flex-col">

                    {/* Window Header */}
                    <div className="bg-black-250 px-4 py-2 flex items-center justify-between border-b border-matrix/30">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="text-[oklab(100%_0_0_/0.4)] text-md font-mono tracking-widest">
                            ahnaf@portfolio:~
                        </div>
                        <div className="w-12"></div>
                    </div>

                    <div className="flex flex-col">
                        {/* Static Content Section (Top) */}
                        <div className="w-full p-6 md:p-10 border-b border-matrix/20">
                            <AsciiName />
                            
                            <div className="main-content mt-1 space-y-6">
                                <div className="name -space-y-1">
                                    <h1 className=" text-2xl line-clamp-2 text-highlight-400 ">
                                        Ahnaf Taiyeb — Fullstack Developer
                                    </h1>
                                    <h1 className="text-lg font-bold text-matrix-dim">
                                        Problem solver | Tech lover | Fullstack creator
                                    </h1>
                                </div>
                                <div className="y-space-0.5">
                                    <h1 className="text-md glow-text-amber font-semibold text-highlight-400 uppercase">
                                        System Status: Online
                                    </h1>
                                    <p className="text-xl text-matrix opacity-70 leading-relaxed">
                                        Welcome to the personal terminal database. 
                                        Accessing remote files... [OK]
                                    </p>
                                </div>
                                

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="commands col-span-2">
                                        <h2 className="text-2xl mb-4 text-matrix tracking-wide border-b border-highlight-400/30 pb-2">
                                            Available Commands:
                                        </h2>
                                        <div className="space-y-2 w-full">
                                            {Object.entries(commands).map(([key, value], idx)=>(
                                                <CommandLink 
                                                    key={idx} 
                                                    cmd={key} 
                                                    description={value} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="socials">
                                        <h2 className="font-bold text-2xl mb-4 text-highlight-400 uppercase tracking-widest border-b border-highlight-400/30 pb-2">
                                            Uplink Nodes
                                        </h2>
                                        <div className="space-y-2">
                                            {Object.entries(socials).map(([title, href], idx)=>(
                                                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="text-matrix text-lg flex items-center gap-2 group cursor-pointer hover:text-highlight-400 transition-colors"> 
                                                    <span className="text-highlight-400 opacity-0 group-hover:opacity-100 transition-opacity"> # </span>
                                                    {title} 
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-matrix-dim "> 
                                <h1 className="text-xl ">💡Tip: Type a command or click on it to execute</h1>
                            </div>
                        </div>

                        {/* Terminal Section (Bottom) */}
                        <div id="terminal-section" className="w-full bg-black/40 flex flex-col max-h-auto overflow-hidden">
                            <Terminal />
                        </div>
                    </div>
                </div>
                

                {/* Subtle Footer Info */}
                <div className="mt-4 text-matrix/30 text-xs font-mono uppercase tracking-[0.3em]">
                    Terminal UI Interface © 2026 // Secure Connection
                </div>
            </div>
        </div>
    );
}

export default MainWindow;
