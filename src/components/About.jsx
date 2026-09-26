import React from "react";
import { portfolioData } from "../data/portfolioData";
import { BookOpen, Hammer, Cpu, Terminal, Bot } from "lucide-react";

export default function About() {
  const { about } = portfolioData;

  const highlightIcons = [
    <BookOpen className="w-5 h-5 text-emerald-400" key="book" />,
    <Hammer className="w-5 h-5 text-blue-400" key="hammer" />,
    <Bot className="w-5 h-5 text-purple-400" key="bot" />
  ];

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-16 sm:py-24 border-t border-slate-900 bg-[#080c14]/50 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
            <span>01.</span>
            <span>// About</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering & Hands-on Learning
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-white font-medium text-lg sm:text-xl leading-snug">
              {about.lead}
            </p>
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Structured Highlights Column */}
          <div className="lg:col-span-5 space-y-4">
            {about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0b111c] border border-slate-800/80 hover:border-slate-700/80 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                    {highlightIcons[idx % highlightIcons.length]}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-100 font-mono">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quote / Philosophy Box */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20 text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">$ echo</span> "Continuous curiosity, disciplined practice, and shipping working code."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
