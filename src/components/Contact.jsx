import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, Terminal } from "lucide-react";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-16 sm:py-24 border-t border-slate-900 bg-[#080c14]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
            <span>05.</span>
            <span>// Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Connect & Collaborate
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Whether you are a developer, fellow student, or recruiter interested in discussing engineering projects, ideas, or opportunities, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <div className="rounded-2xl bg-[#0b111c] border border-slate-800/80 p-6 flex flex-col justify-between space-y-6 hover:border-slate-700/80 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-mono text-base font-semibold text-white">
                  Email
                </h3>
                <p className="text-xs text-slate-400">
                  Direct inquiries, project discussions, or opportunities.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs text-emerald-300 break-all select-all">
                {personal.email}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <a
                href={`mailto:${personal.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="rounded-2xl bg-[#0b111c] border border-slate-800/80 p-6 flex flex-col justify-between space-y-6 hover:border-slate-700/80 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200">
                <Github className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-mono text-base font-semibold text-white">
                  GitHub
                </h3>
                <p className="text-xs text-slate-400">
                  Explore repositories, code commits, and project activity.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300">
                github.com/ESK-reva
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card (Strictly labeled placeholder) */}
          <div className="rounded-2xl bg-[#0b111c] border border-slate-800/80 p-6 flex flex-col justify-between space-y-6 hover:border-slate-700/80 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-mono text-base font-semibold text-white">
                    LinkedIn
                  </h3>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    Placeholder
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Professional network profile currently being updated.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-dashed border-slate-800 font-mono text-xs text-slate-500">
                {personal.linkedin.statusMessage}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-slate-500 font-mono text-xs cursor-not-allowed select-none"
              >
                <span>URL To Be Added</span>
              </button>
            </div>
          </div>

        </div>

        {/* Developer Note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-slate-500">
            Preferred contact method: Email (<span className="text-slate-400 select-all">{personal.email}</span>)
          </p>
        </div>

      </div>
    </section>
  );
}
