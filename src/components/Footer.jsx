import React from "react";
import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#06090f] py-8 text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <p>
            © 2026 <span className="text-slate-300 font-semibold">Eshan S K</span>. Building, learning & exploring technology.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
          aria-label="Back to top"
        >
          <span>back_to_top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
