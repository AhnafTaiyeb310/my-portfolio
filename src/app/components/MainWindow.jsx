import AsciiName from "./AsciiName";
import Terminal from "./Terminal";

function MainWindow() {
    const commands = [
        "[who] or [w]", 
        "[skills] or [s]", 
        "[projects] or [p]",
        "[resume] or [cv]"
    ];
    const socials = ["[email]", "[linkedin]", "[github]"];
    return (
        <>
        <div className="flex mt-6 w-screen h-auto items-center justify-center">
            <div className="w-[95%] h-full border-3 border-matrix">
                <div>
                    <AsciiName />
                </div>
                <div className="main-content my-4 mx-8">
                    <div className="headings">
                        <h1 className="text-xl text-highlight-400">Welcome to my personal portfolio! (Version 1.6.9)</h1>
                        <h1 className="text-lg mt-2 text-highlight-400">Type /help to see the list of available commands.</h1>
                        <h1 className="text-lg mt-1 text-highlight-400">Input a command to navigate.</h1>
                        <h1 className="text-lg mt-3 text-highlight-400"><span>NEW</span> Check <span className="link">Social-media</span></h1>
                    </div>

                    <div className="commands">
                        <h1 className="font-bold text-2xl my-2 text-highlight-400">Available Commands:</h1>
                        {
                            commands.map((command, idx)=>(
                                <p key={idx} className="text-matrix text-lg"> {command} </p>
                            ))
                        }
                    </div>
                    <div className="socials">
                        <h1 className="font-bold text-2xl my-4 text-highlight-400">Socials:</h1>
                        {
                            socials.map((social, idx)=>(
                                <p key={idx} className="text-matrix text-lg"> {social} </p>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
        
        <div className="terminal flex mt-8 w-screen h-auto items-center justify-center">
            <div className="w-[95%] h-full border-3 border-matrix">
                <Terminal />
            </div>
        </div>
        </>
    );
}

export default MainWindow;
