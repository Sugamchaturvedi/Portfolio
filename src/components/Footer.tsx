import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Download, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#04060e] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-[#0b1120] rounded-[9px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-bold text-white text-lg">Sugam Chaturvedi</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Computer Science Engineering Student at Lovely Professional University. Aspiring Software Developer & Cloud Engineer passionate about high-availability backend systems and data architectures.
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4">
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Sugam_Chaturvedi_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-white/10 text-sky-400 hover:text-white hover:border-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border border-sky-500/30 hover:border-sky-500/60 focus:outline-none focus:ring-2 focus:ring-sky-400 transition group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>

          </div>

        </div>

        {/* Bottom Credits & Integrity Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Sugam Chaturvedi. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <span className="text-slate-400 font-mono">LPU CSE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
