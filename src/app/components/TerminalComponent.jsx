"use client";

import dynamic from 'next/dynamic';
import { EmulatorState, OutputFactory, CommandMapping } from 'javascript-terminal';
import { useState } from 'react';

// Dynamically import ReactTerminal to avoid SSR issues
const ReactTerminal = dynamic(
  () => import('react-terminal-component'),
  { ssr: false }
);

const TerminalComponent = () => {
  // Initialize with a default state
  const [state, setState] = useState(
    EmulatorState.create({
      'commandMapping': CommandMapping.create({
        'help': {
          'function': (state, opts) => {
            return {
              output: OutputFactory.makeTextOutput('Available commands: who, skills, projects, resume, clear')
            };
          },
          'optDef': {}
        }
      })
    })
  );

  // Custom theme to match the project's "matrix" and "highlight" colors
  const terminalTheme = {
    background: '#0a0a0a',
    promptSymbolColor: '#5abb9a',
    commandColor: '#ffebcd',
    outputColor: '#5abb9a',
    errorOutputColor: '#ff89bd',
    fontSize: '1rem',
    fontFamily: 'JetBrains Mono, monospace',
    width: '100%',
    height: '400px'
  };

  return (
    <div className="w-full h-full p-2">
      <ReactTerminal 
        emulatorState={state}
        onStateChange={setState}
        theme={terminalTheme}
        promptSymbol="guest@portfolio:~$"
      />
    </div>
  );
};

export default TerminalComponent;
