import React from "react";
import { portfolioData } from "../data/portfolioData";
import Terminal from "./Terminal";
import { ArrowDown, Github, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Subtle background ambient mesh */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Info & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Student Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.role}</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-400 font-mono">
                {personal.headline}
              </p>
            </div>

            {/* Brief Context Narrative */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Building software projects, exploring cybersecurity and web development, and turning ideas into functioning code through hands-on practice.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* View Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 active:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* GitHub CTA */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-white hover:border-slate-600 active:bg-slate-950 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Focus Tags */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2">
                Current focus areas
              </span>
              <div className="flex flex-wrap gap-2">
                {personal.focus.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Component */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              {/* Subtle card glow */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-slate-800/20 blur-xl opacity-70 pointer-events-none"
                aria-hidden="true"
              />
              <Terminal />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
