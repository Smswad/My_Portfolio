import React from 'react';
import { GraduationCap, Users, Code2, Globe } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const highlights = [
  {
    icon: <GraduationCap className="h-6 w-6 text-accent" />,
    label: "Final-year CSE",
    sub: "East West University",
  },
  {
    icon: <Code2 className="h-6 w-6 text-accent" />,
    label: "MERN Stack",
    sub: "Full-Stack Development",
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    label: "10,000+ Members",
    sub: "Community Management",
  },
  {
    icon: <Globe className="h-6 w-6 text-accent" />,
    label: "Operations",
    sub: "Coordination & Leadership",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
            <span className="text-accent font-mono text-xl md:text-2xl mr-3">01.</span> About Me
            <div className="ml-6 h-px bg-gray-700 flex-grow max-w-xs hidden sm:block"></div>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Text */}
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-medium">final-year Computer Science and Engineering student</span> at{' '}
                <span className="text-accent font-medium">East West University</span>, working toward a career in software development.
              </p>
              <p>
                Experienced in <span className="text-white font-medium">MERN stack development</span> and in managing{' '}
                <span className="text-white font-medium">large-scale online communities</span> (1,000–10,000+ members),
                combining technical and people-facing skills.
              </p>
              <p>
                I thrive at the intersection of engineering and leadership — writing clean, scalable code while 
                coordinating teams and fostering communities that matter.
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  id="about-cta-btn"
                  className="inline-flex items-center text-accent font-mono text-sm hover:text-blue-300 transition-colors group"
                >
                  Let&apos;s work together
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          </FadeIn>
          
          {/* Highlights Grid */}
          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-navy-800/50 border border-gray-700/40 rounded-xl p-5 flex flex-col items-start gap-3
                             hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
