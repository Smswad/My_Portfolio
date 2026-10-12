import React from 'react';
import { 
  Code2, 
  Server, 
  Wrench, 
  Users, 
  Layout, 
  Database, 
  Cpu, 
  FileCode2, 
  Terminal, 
  Globe, 
  FileText, 
  Users2, 
  MessageSquare,
  Layers,
  GitBranch
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
  level?: string;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  categoryIcon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      categoryIcon: <Layout className="h-6 w-6 text-accent" />,
      description: "Crafting reactive, mobile-first, and accessible user interfaces.",
      skills: [
        { name: "React.js", icon: <Layout className="h-4 w-4 text-sky-400" />, level: "Advanced", highlight: true },
        { name: "Next.js", icon: <Globe className="h-4 w-4 text-white" />, level: "Proficient", highlight: true },
        { name: "JavaScript (ES6+)", icon: <FileCode2 className="h-4 w-4 text-yellow-400" />, level: "Advanced" },
        { name: "Tailwind CSS", icon: <Layers className="h-4 w-4 text-cyan-400" />, level: "Advanced" },
        { name: "HTML5 & CSS3", icon: <Code2 className="h-4 w-4 text-orange-400" />, level: "Advanced" },
        { name: "Vite", icon: <Cpu className="h-4 w-4 text-purple-400" />, level: "Proficient" },
      ],
    },
    {
      title: "Backend Development",
      categoryIcon: <Server className="h-6 w-6 text-emerald-400" />,
      description: "Architecting reliable APIs, micro-services, and relational/NoSQL databases.",
      skills: [
        { name: "Node.js", icon: <Server className="h-4 w-4 text-emerald-400" />, level: "Advanced", highlight: true },
        { name: "Express.js", icon: <Cpu className="h-4 w-4 text-gray-300" />, level: "Advanced" },
        { name: "MongoDB", icon: <Database className="h-4 w-4 text-emerald-500" />, level: "Proficient", highlight: true },
        { name: "MySQL / SQL", icon: <Database className="h-4 w-4 text-blue-500" />, level: "Proficient" },
        { name: "Supabase & PostgreSQL", icon: <Database className="h-4 w-4 text-teal-400" />, level: "Proficient", highlight: true },
        { name: "RESTful APIs", icon: <Globe className="h-4 w-4 text-amber-400" />, level: "Advanced" },
      ],
    },
    {
      title: "Tools & Platforms",
      categoryIcon: <Wrench className="h-6 w-6 text-purple-400" />,
      description: "Development tools, desktop runtimes, version control, and cloud hosting.",
      skills: [
        { name: "Electron", icon: <Cpu className="h-4 w-4 text-sky-300" />, level: "Desktop", highlight: true },
        { name: "Git & GitHub", icon: <GitBranch className="h-4 w-4 text-orange-400" />, level: "Workflow" },
        { name: "Figma (UI/UX)", icon: <Layout className="h-4 w-4 text-rose-400" />, level: "Design" },
        { name: "VS Code", icon: <Terminal className="h-4 w-4 text-blue-400" />, level: "Primary IDE" },
        { name: "Vercel & Firebase", icon: <Globe className="h-4 w-4 text-gray-200" />, level: "Deployment" },
        { name: "Google & MS Office", icon: <FileText className="h-4 w-4 text-yellow-300" />, level: "Productivity" },
      ],
    },
    {
      title: "Interpersonal & Leadership",
      categoryIcon: <Users className="h-6 w-6 text-teal-400" />,
      description: "Scaling community operations, stakeholder management, and team leadership.",
      skills: [
        { name: "Large-Scale Community Ops (10K+)", icon: <Users2 className="h-4 w-4 text-teal-400" />, highlight: true },
        { name: "Team & Project Coordination", icon: <Users className="h-4 w-4 text-sky-400" />, highlight: true },
        { name: "Client Communication", icon: <MessageSquare className="h-4 w-4 text-indigo-400" /> },
        { name: "Agile & Sprint Collaboration", icon: <Layers className="h-4 w-4 text-emerald-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-accent font-mono text-xl md:text-2xl mr-3">03.</span> Skills &amp; Capabilities
            <div className="ml-6 h-px bg-gray-700 flex-grow max-w-xs hidden sm:block"></div>
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <p className="text-gray-400 font-light mb-12 ml-12 md:ml-14 max-w-2xl">
            A comprehensive breakdown of my frontend and backend engineering stack, desktop runtimes, developer tooling, and community leadership capabilities.
          </p>
        </FadeIn>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div
                className="bg-navy-800/40 border border-gray-700/50 rounded-2xl p-7 flex flex-col h-full
                           hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-3 pb-3 border-b border-gray-700/50">
                  <div className="p-2.5 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {category.categoryIcon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Tags Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex flex-col gap-1 p-2.5 rounded-xl text-xs font-medium
                                  transition-all duration-200 border ${
                                    skill.highlight
                                      ? "bg-accent/15 text-white border-accent/40 shadow-sm shadow-accent/10"
                                      : "bg-navy-900/80 text-gray-200 border-gray-700/60 hover:border-accent/50 hover:text-white"
                                  }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="truncate">{skill.name}</span>
                      </div>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
