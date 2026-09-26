import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { Terminal, Github, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-slate-200 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-md bg-slate-900 border border-slate-700/80 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-sm tracking-tight">
            <span className="text-slate-500">~/</span>
            <span className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
              eshan.dev
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" title="Active student builder" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-px h-4 bg-slate-800 mx-2" aria-hidden="true" />

          {/* GitHub Quick Link */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile (opens in new tab)"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-emerald-400" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080c14]/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-slate-600">→</span>
              </a>
            ))}
          </div>
          
          <div className="pt-3 border-t border-slate-800/80">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 border border-slate-700 text-sm font-mono text-slate-200 hover:text-white"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>Visit GitHub @ESK-reva</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
