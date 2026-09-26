import React from "react";
import { portfolioData } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import { Terminal } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-16 sm:py-24 border-t border-slate-900 bg-[#080c14]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
            <span>03.</span>
            <span>// Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Real student projects demonstrating full-stack engineering, IoT and embedded programming, and machine learning data pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#0b111c] border border-slate-800/80 text-xs font-mono text-slate-400 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All projects represent authentic coursework and independent technical builds.</span>
          </div>
          <span className="text-slate-500">// No placeholder repositories or fabricated claims</span>
        </div>

      </div>
    </section>
  );
}
