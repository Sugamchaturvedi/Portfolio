import React, { useEffect } from 'react';
import { X, Github, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0b1120] border border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 bg-[#080d1a] border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30">
                {project.statusBadge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.category}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Project Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-white/10 text-sky-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2.5">Key Implemented Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2.5">Architecture & Engineering Decisions</h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((arch, i) => (
                <div key={i} className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Notice */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>Repository contains complete codebase and documentation.</span>
            <span className="font-mono text-emerald-400 text-[11px]">Academic Integrity Verified</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#080d1a] border-t border-white/10 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-900 text-slate-300 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          >
            Close
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 hover:from-sky-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          >
            <Github className="w-4 h-4" />
            <span>Open GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
