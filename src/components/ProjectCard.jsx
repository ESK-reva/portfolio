import React, { useState } from "react";
import { Folder, Layers, CheckCircle2, ChevronRight, Sparkles, Cpu, Bot } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="rounded-2xl bg-[#0b111c] border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-xl"
    >
      <div className="p-6 sm:p-7 space-y-5">
        
        {/* Card Header & Category */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
              <Folder className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs text-slate-400">
              0{index + 1}. // {project.category}
            </span>
          </div>

          {/* Genuine Project Indicator (No fake URLs!) */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Project</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Badges */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
            Technologies & Tools
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 group-hover:border-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* My Contribution Section */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-400">
            <Bot className="w-3.5 h-3.5" />
            <span>My Contribution & Workflow:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.myContribution}
          </p>
        </div>

        {/* Expandable Key Highlights */}
        {expanded && (
          <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
            <span className="font-mono text-slate-400 uppercase tracking-wider text-[11px] block">
              Key Implementations:
            </span>
            <ul className="space-y-1.5">
              {project.highlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* Card Footer Action */}
      <div className="px-6 sm:px-7 py-3.5 bg-[#090e17] border-t border-slate-800/80 flex items-center justify-between">
        <span className="font-mono text-xs text-slate-500">
          Hands-on implementation
        </span>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          aria-expanded={expanded}
        >
          <span>{expanded ? "Show Less" : "Details & Scope"}</span>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-90" : ""}`} />
        </button>
      </div>
    </article>
  );
}
