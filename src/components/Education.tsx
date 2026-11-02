import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Track
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rigorous undergraduate studies in Computer Science & Engineering combined with foundational science and mathematics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-transparent">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Timeline Node Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b1120] border-2 border-sky-400 flex items-center justify-center z-10 shadow-lg shadow-sky-500/25">
                <GraduationCap className="w-4 h-4 text-sky-400" />
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-6 w-full">
                <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4">
                  
                  {/* Top Bar with Badge & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {edu.current ? (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        Current Undergraduate
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900 text-slate-300 border border-white/10">
                        Completed
                      </span>
                    )}

                    <span className="flex items-center gap-1.5 text-xs font-mono text-sky-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 mt-1">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.location}</span>
                      {edu.grade && (
                        <>
                          <span>•</span>
                          <span className="text-amber-300 font-mono font-bold">{edu.grade}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Details / Coursework */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
