import React from 'react';
import { Award, Calendar, CheckCircle2, ShieldCheck, Terminal, FileCode, Cloud, Database, MessageSquare } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getIssuerIcon = (issuer: string) => {
    if (issuer.includes('Red Hat')) return <Terminal className="w-5 h-5 text-red-400" />;
    if (issuer.includes('Infosys')) return <FileCode className="w-5 h-5 text-sky-400" />;
    if (issuer.includes('Cloud')) return <Cloud className="w-5 h-5 text-cyan-400" />;
    if (issuer.includes('Oracle')) return <Database className="w-5 h-5 text-amber-400" />;
    if (issuer.includes('Speaking') || issuer.includes('Communication')) return <MessageSquare className="w-5 h-5 text-purple-400" />;
    return <Award className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#070b16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED ACADEMIC & INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Technical Training
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rigorous technical training programs, Linux administration certifications, and software development foundations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                
                {/* Header with Issuer Icon & Date */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:border-sky-500/40 transition-colors">
                    {getIssuerIcon(cert.issuer)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {cert.date}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold mt-0.5">
                      ✓ {cert.status}
                    </span>
                  </div>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-400 mt-1">
                    {cert.issuer}
                  </div>
                </div>

                {/* Topics / Skills Covered */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 border border-white/5 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resume Documented</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  Official Record
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Credibility Note */}
        <div className="mt-12 p-4 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              All certifications reflect actual completed or documented academic and industry programs. No simulated or unverified IDs.
            </span>
          </div>
          <span className="font-mono text-sky-400 whitespace-nowrap">
            Recruiter-Ready Standards
          </span>
        </div>

      </div>
    </section>
  );
};
