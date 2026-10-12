import React from 'react';
import { GraduationCap, Users, Code2, Globe, Heart, Compass, Sparkles } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const highlights = [
  {
    icon: <GraduationCap className="h-6 w-6 text-accent" />,
    label: "Final-year CSE",
    sub: "East West University",
  },
  {
    icon: <Code2 className="h-6 w-6 text-accent" />,
    label: "Full-Stack & Desktop",
    sub: "MERN, Next.js & Electron",
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    label: "10,000+ Members",
    sub: "Online Community Management",
  },
  {
    icon: <Globe className="h-6 w-6 text-accent" />,
    label: "Operations & Leadership",
    sub: "Bridging Tech & People",
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

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Text */}
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-medium">final-year Computer Science and Engineering student</span> at{' '}
                <span className="text-accent font-medium">East West University</span>, passionately working toward building a long-term career as a software engineer.
              </p>
              <p>
                My background bridges both <span className="text-white font-medium">technical development</span> (MERN stack, Next.js, and Electron desktop applications) and <span className="text-white font-medium">large-scale operations</span>, having managed active online communities spanning 1,000 to 10,000+ members.
              </p>
              <p>
                I thrive at the intersection of engineering rigor and human connection — writing clean, maintainable code while coordinating cross-functional teams to solve real-world problems.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  id="about-cta-btn"
                  className="inline-flex items-center text-accent font-mono text-sm hover:text-blue-300 transition-colors group"
                >
                  Let&apos;s build something impactful together
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

        {/* Narrative Deep Dive: Journey, Interests, Beyond the Code */}
        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-700/50">
          {/* The Journey */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-navy-800/30 border border-gray-700/40 rounded-2xl p-6 h-full space-y-3">
              <div className="flex items-center gap-2.5 text-accent">
                <Compass className="h-5 w-5" />
                <h3 className="font-bold text-white text-base tracking-wide">My Journey</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                What began as a fascination with how digital tools shape human communication quickly transformed into a disciplined pursuit of Software Engineering at East West University. Building academic capstones and bespoke client systems has honed my ability to turn ambiguous business requirements into scalable, resilient architectures.
              </p>
            </div>
          </FadeIn>

          {/* Technical Interests */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-navy-800/30 border border-gray-700/40 rounded-2xl p-6 h-full space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <Sparkles className="h-5 w-5" />
                <h3 className="font-bold text-white text-base tracking-wide">Technical Interests</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                I am drawn to full-stack architectures, hybrid offline/cloud desktop clients, and intuitive user experiences. Whether developing civic engagement tools, real-estate infrastructure portals, or boutique enterprise desktop software, I enjoy creating software that is dependable, elegant, and straightforward to use.
              </p>
            </div>
          </FadeIn>

          {/* Beyond the Code */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-navy-800/30 border border-gray-700/40 rounded-2xl p-6 h-full space-y-3">
              <div className="flex items-center gap-2.5 text-rose-400">
                <Heart className="h-5 w-5" />
                <h3 className="font-bold text-white text-base tracking-wide">Beyond the Code</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Outside the code editor, you&apos;ll find me actively orchestrating online communities, discussing tech trends, reading about product operations, and exploring visual design. I believe having balanced hobbies and strong interpersonal communication is what makes a great developer truly effective.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
