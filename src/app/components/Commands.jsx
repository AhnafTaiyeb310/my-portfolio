import About from "./views/About";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import SkillsSection from "./views/Skills";

export const COMMANDS = {
  help: {
    description: "List all available commands",
    action: (history) => ({
      type: "output",
      content: "Available commands: help, about, skills, projects, resume, clear",
    }),
  },
  skills: {
    description: "Show my skills",
    action: (history) => ({
      type: "component",
      content: <SkillsSection />,
    }),
  },
  s: {
    description: "Show my skills (alias)",
    action: (history) => ({
      type: "component",
      content: <SkillsSection />,
    }),
  },
  about: {
    description: "Display information about me",
    action: (history) => ({
      type: "component",
      content: <About />,
    }),
  },
  projects: {
    description: "Show my projects",
    action: (history) => ({
      type: "component",
      content: <Projects />,
    }),
  },
  resume: {
    description: "Show my resume",
    action: (history) => ({
      type: "component",
      content: <Resume />,
    }),
  },
  clear: {
    description: "Clear the terminal",
    action: (history, setHistory) => {
      setHistory([]);
      return null;
    },
  },
};

export const handleCommandRouting = (command, history, setHistory) => {
  const cmd = command.toLowerCase().trim();
  
  setHistory((prev) => [...prev, { type: "command", content: command }]);

  if (cmd === "") return;

  if (COMMANDS[cmd]) {
    const result = COMMANDS[cmd].action(history, setHistory);
    if (result) {
      setHistory((prev) => [...prev, result]);
    }
  } else {
    setHistory((prev) => [
      ...prev,
      {
        type: "output",
        content: `Command not found: ${command}. Type 'help' for assistance.`,
      },
    ]);
  }
};
