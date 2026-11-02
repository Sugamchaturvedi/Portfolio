import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  FileCode, 
  Coffee, 
  Server, 
  Layers, 
  Cpu, 
  Zap, 
  Layout, 
  Palette, 
  Atom, 
  Sparkles, 
  Database, 
  HardDrive, 
  Workflow, 
  Cloud, 
  TerminalSquare, 
  FolderGit2, 
  GitBranch, 
  Code, 
  CheckCircle2, 
  Kanban, 
  Users,
  Search,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon string names to actual Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-sky-400" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
  FileCode: <FileCode className="w-5 h-5 text-yellow-400" />,
  Coffee: <Coffee className="w-5 h-5 text-amber-500" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Zap: <Zap className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-orange-400" />,
  Palette: <Palette className="w-5 h-5 text-blue-400" />,
  Atom: <Atom className="w-5 h-5 text-cyan-300" />,
  Sparkles: <Sparkles className="w-5 h-5 text-sky-400" />,
  Database: <Database className="w-5 h-5 text-indigo-400" />,
  HardDrive: <HardDrive className="w-5 h-5 text-slate-300" />,
  Workflow: <Workflow className="w-5 h-5 text-amber-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5 text-emerald-400" />,
  FolderGit2: <FolderGit2 className="w-5 h-5 text-red-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
  Code: <Code className="w-5 h-5 text-blue-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  Kanban: <Kanban className="w-5 h-5 text-indigo-400" />,
  Users: <Users className="w-5 h-5 text-purple-400" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Competencies' },
    ...skillCategories.map(c => ({ id: c.id, name: c.name }))
  ];

  // Flatten all skills with category meta
  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({
      ...s,
      categoryId: cat.id,
      categoryName: cat.name
    }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Domains
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Organized strictly from verified academic coursework, certifications, and active project codebases.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 font-semibold'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill, tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
              />
            </div>

          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center group-hover:border-sky-500/40 transition-colors">
                    {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-sky-400" />}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {skill.categoryName}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/90">
                <Check className="w-3.5 h-3.5" />
                <span>Verified in projects / resume</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl p-8 border border-white/10">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}". Try selecting another category.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-1.5 rounded-xl text-xs font-semibold bg-sky-500 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
