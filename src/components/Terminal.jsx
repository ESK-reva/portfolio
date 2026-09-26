import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Terminal as TerminalIcon, RotateCcw } from "lucide-react";

export default function Terminal() {
  const { commands } = portfolioData.terminal;
  const commandKeys = Object.keys(commands);
  const [activeCmd, setActiveCmd] = useState("whoami");
  const [history, setHistory] = useState(["whoami"]);

  const handleCommandClick = (cmdKey) => {
    setActiveCmd(cmdKey);
    if (!history.includes(cmdKey)) {
      setHistory([...history, cmdKey]);
    }
  };

  const handleReset = () => {
    setActiveCmd("whoami");
    setHistory(["whoami"]);
  };

  return (
    <div className="w-full rounded-xl bg-[#0b111c] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="bg-[#0f1726] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-sans flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>eshan@developer: ~ (bash)</span>
          </span>
        </div>
        <button
          onClick={handleReset}
          title="Reset Terminal"
          aria-label="Reset Terminal history"
          className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors p-1 rounded hover:bg-slate-800"
        >
          <RotateCcw className="w-3 h-3" />
          <span className="hidden sm:inline">reset</span>
        </button>
      </div>

      {/* Terminal Quick Command Chips */}
      <div className="bg-[#090e17] px-4 py-2 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-slate-500 text-[11px] uppercase tracking-wider shrink-0 select-none">Quick cmds:</span>
        {commandKeys.map((key) => (
          <button
            key={key}
            onClick={() => handleCommandClick(key)}
            className={`px-2.5 py-1 rounded text-xs transition-colors shrink-0 ${
              activeCmd === key
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            $ {key}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 space-y-4 max-h-[340px] overflow-y-auto font-mono text-xs sm:text-sm">
        {history.map((cmdKey) => {
          const item = commands[cmdKey];
          if (!item) return null;
          return (
            <div key={cmdKey} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 flex-wrap">
                <span className="text-emerald-400 font-semibold">eshan@portfolio</span>
                <span className="text-slate-600">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-100 font-medium">{item.cmd}</span>
              </div>
              <div className="pl-4 border-l border-slate-800 space-y-1 text-slate-300 text-xs sm:text-sm">
                {item.output.map((line, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
        })}

        {/* Active Command Line with Blinking Cursor */}
        <div className="flex items-center gap-2 text-slate-400 pt-1">
          <span className="text-emerald-400 font-semibold">eshan@portfolio</span>
          <span className="text-slate-600">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-500">$</span>
          <span className="text-slate-400 italic">select a command above or explore</span>
          <span className="terminal-cursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
