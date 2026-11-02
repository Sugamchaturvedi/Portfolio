import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Info 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projectsData.find(p => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Engineering
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-grade systems featuring automated algorithms, full-stack architectures, and persistent database engines.
          </p>
        </div>

        {/* 1. FEATURED PROJECT (Hero Card Presentation) */}
        <div className="mb-14">
          <div className="relative group">
            {/* Glow border background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 rounded-3xl blur-md opacity-35 group-hover:opacity-60 transition duration-500"></div>
            
            <div className="relative bg-[#0b1120] rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Project Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-sm">
                      ★ FEATURED PROJECT
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/30">
                      Full-Stack Academic Engine
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-sky-400 font-medium mt-1">
                      {featuredProject.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-white/10 text-sky-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights Grid */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Core Capabilities:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Automatic timetable scheduling algorithm</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Real-time conflict detection engine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Multi-room & section constraint checks</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>PostgreSQL relational persistence & CRUD</span>
                      </div>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:from-sky-400 hover:to-indigo-500 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-sky-500/40 transition-all"
                    >
                      <Info className="w-4 h-4 text-sky-400" />
                      <span>Inspect Architecture</span>
                    </button>
                  </div>

                </div>

                {/* Right Column: Visual Conflict Detection & Matrix Mockup */}
                <div className="lg:col-span-5">
                  <div className="bg-[#070b16] rounded-2xl border border-white/10 p-5 space-y-4 shadow-xl">
                    
                    {/* Simulated System Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4 text-sky-400" />
                        <span>Conflict Engine Visualizer</span>
                      </div>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>0 Conflicts</span>
                      </span>
                    </div>

                    {/* Schedule Simulation Cards */}
                    <div className="space-y-2.5 font-mono text-xs">
                      
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-slate-400 text-[11px]">
                          <span>SLOT: 09:00 - 10:00 AM</span>
                          <span className="text-sky-400">ROOM: Block-3 / Lab-402</span>
                        </div>
                        <div className="text-white font-semibold flex items-center justify-between">
                          <span>CSE-373: Operating Systems</span>
                          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px]">SECTION K24</span>
                        </div>
                        <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                          <span>Instructor: Dr. Sharma</span>
                          <span>•</span>
                          <span className="text-emerald-400">Verified Available</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-slate-400 text-[11px]">
                          <span>SLOT: 10:15 - 11:15 AM</span>
                          <span className="text-sky-400">ROOM: Block-1 / Audi-101</span>
                        </div>
                        <div className="text-white font-semibold flex items-center justify-between">
                          <span>CSE-205: Data Structures</span>
                          <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">SECTION K22</span>
                        </div>
                        <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                          <span>Instructor: Prof. Verma</span>
                          <span>•</span>
                          <span className="text-emerald-400">Verified Available</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-500/20 space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-sky-300 font-semibold">
                          <span className="flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5 text-sky-400" />
                            Live Heuristic Scheduler
                          </span>
                          <span>Active Batch</span>
                        </div>
                        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full w-[100%]"></div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                          <span>PostgreSQL Relational Storage</span>
                          <span className="text-emerald-400">100% Synced</span>
                        </div>
                      </div>

                    </div>

                    <div className="pt-2 text-[11px] font-mono text-slate-400 text-center">
                      Auto-verified against teachers, classrooms, classes & sections.
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 2. SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 text-sky-300 border border-white/10">
                    {project.statusBadge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-400/90 font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 border border-white/5 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Feature Highlights */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Key Features:</div>
                  <div className="space-y-1 text-xs text-slate-300">
                    {project.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-white/10 hover:border-sky-500/40 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Detailed Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
