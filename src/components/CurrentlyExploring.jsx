import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Shield, Globe, Bot, Terminal, Hammer, Compass } from "lucide-react";

export default function CurrentlyExploring() {
  const { currentlyExploring } = portfolioData;

  const icons = [
    <Shield className="w-5 h-5 text-rose-400" key="shield" />,
    <Globe className="w-5 h-5 text-cyan-400" key="globe" />,
    <Bot className="w-5 h-5 text-emerald-400" key="bot" />,
    <Terminal className="w-5 h-5 text-amber-400" key="terminal" />,
    <Hammer className="w-5 h-5 text-blue-400" key="hammer" />
  ];

  return (
    <section
      id="exploring"
      aria-label="Currently Exploring"
      className="py-16 sm:py-24 border-t border-slate-900 bg-[#080c14]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
            <span>04.</span>
            <span>// Learning Curve</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>Currently Exploring</span>
            <Compass className="w-6 h-6 text-emerald-400 animate-spin-slow" />
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Domains and disciplines I am actively learning and diving into. These are ongoing growth areas, explored through hands-on practice rather than claimed expert masteries.
          </p>
        </div>

        {/* Exploring Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyExploring.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#0b111c] border border-slate-800/80 p-6 space-y-4 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {icons[idx % icons.length]}
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400">
                    learning
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-base text-slate-100 font-mono">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-slate-500">
                <span className="text-emerald-500">•</span>
                <span>{item.focus}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
