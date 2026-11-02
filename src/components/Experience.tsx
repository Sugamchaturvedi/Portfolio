import React from 'react';
import { HeartHandshake, Cloud, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#070b16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium">
            <HeartHandshake className="w-3.5 h-3.5 text-purple-400" />
            <span>EXPERIENCE & INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Technical Initiatives
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on technical development in cloud fundamentals alongside grassroots community cyber-safety initiatives.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                
                {/* Header with Icon and Date */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                    {item.id === 'cloud-fundamentals' ? (
                      <Cloud className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <HeartHandshake className="w-6 h-6 text-purple-400" />
                    )}
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {item.date}
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-sky-400 mt-1">
                    {item.organization}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    Role: {item.role}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    Key Contributions & Takeaways:
                  </div>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Status Note & Link Button */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-emerald-400/90 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Record</span>
                </span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20 hover:bg-sky-500/20 hover:border-sky-500/40 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-sky-400 group/link"
                    aria-label={`View ${item.title} on LinkedIn`}
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400">Documented</span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
