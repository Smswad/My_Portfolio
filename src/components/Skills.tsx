import React from 'react';
import { Code2, Wrench, Users, Database, Server, Cpu, Layout, FileText, Globe, MessageSquare, Users2, Layers } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  categoryIcon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend & Backend",
      categoryIcon: <Code2 className="h-6 w-6 text-accent" />,
      skills: [
        { name: "MERN Stack", icon: <Layers className="h-4 w-4 text-accent" />, highlight: true },
        { name: "React.js", icon: <Layout className="h-4 w-4 text-blue-400" /> },
        { name: "Node.js", icon: <Server className="h-4 w-4 text-emerald-400" /> },
        { name: "Express.js", icon: <Cpu className="h-4 w-4 text-gray-300" /> },
        { name: "MongoDB", icon: <Database className="h-4 w-4 text-emerald-500" /> },
        { name: "MySQL", icon: <Database className="h-4 w-4 text-blue-500" /> },
      ],
    },
    {
      title: "Tools & Software",
      categoryIcon: <Wrench className="h-6 w-6 text-accent" />,
      skills: [
        { name: "Figma", icon: <Layout className="h-4 w-4 text-purple-400" /> },
        { name: "Google Workspace", icon: <Globe className="h-4 w-4 text-yellow-400" /> },
        { name: "Microsoft Office", icon: <FileText className="h-4 w-4 text-red-400" /> },
      ],
    },
    {
      title: "Interpersonal & Leadership",
      categoryIcon: <Users className="h-6 w-6 text-accent" />,
      skills: [
        { name: "Team Coordination", icon: <Users2 className="h-4 w-4 text-teal-400" />, highlight: true },
        { name: "Client Communication", icon: <MessageSquare className="h-4 w-4 text-sky-400" /> },
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
          <p className="text-gray-400 font-light mb-12 ml-12 md:ml-14">
            Core technical stack, modern developer tools, and key interpersonal strengths.
          </p>
        </FadeIn>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.12}>
              <div
                className="bg-navy-800/40 border border-gray-700/50 rounded-2xl p-7 flex flex-col
                           hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                  <div className="p-2.5 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {category.categoryIcon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags Layout */}
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium
                                  transition-all duration-200 border ${
                                    skill.highlight
                                      ? "bg-accent/15 text-white border-accent/40 shadow-sm shadow-accent/10"
                                      : "bg-navy-900/80 text-gray-200 border-gray-700/60 hover:border-accent/50 hover:text-white"
                                  }`}
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
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
