import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Code2, Shield, Globe, Terminal } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-label="Skills and Technical Stack"
      className="py-16 sm:py-24 border-t border-slate-900 bg-[#080c14]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
            <span>02.</span>
            <span>// Tech & Focus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Current Skills & Interests
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Technologies I actively code in and core domains I explore. No arbitrary percentages—just practical, hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Category 1: Programming Languages */}
          <div className="rounded-2xl bg-[#0b111c] border border-slate-800/80 p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-base font-semibold text-slate-100">
                    Programming
                  </h3>
                  <span className="text-xs text-slate-500">Core languages used in coursework and projects</span>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                3 languages
              </span>
            </div>

            <div className="space-y-4">
              {skills.programming.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-sm font-bold text-emerald-400">
                      {item.name}
                    </span>
                    <span className="text-xs font-mono text-slate-600">// language</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Areas of Interest */}
          <div className="rounded-2xl bg-[#0b111c] border border-slate-800/80 p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-base font-semibold text-slate-100">
                    Areas of Interest
                  </h3>
                  <span className="text-xs text-slate-500">Domains of active exploration and self-study</span>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                2 domains
              </span>
            </div>

            <div className="space-y-4">
              {skills.interests.map((item) => {
                const icon = item.name === "Cybersecurity" 
                  ? <Shield className="w-4 h-4 text-rose-400" />
                  : <Globe className="w-4 h-4 text-cyan-400" />;

                return (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {icon}
                      <span className="font-mono text-sm font-bold text-slate-200">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono text-slate-600">// interest</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}

              <div className="p-4 rounded-xl bg-slate-900/30 border border-dashed border-slate-800 text-xs text-slate-500 font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-600" />
                <span>Actively deepening practical skills through building and code analysis</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
