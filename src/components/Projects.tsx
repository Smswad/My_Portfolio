import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: "nexusbuild",
    title: "NexusBuild",
    badge: "Academic Project · CSE412",
    description:
      "Full-stack web application built for East West University's Software Engineering course. Bridges physical real estate infrastructure and digital accessibility for an external client, featuring an interactive map-based interface alongside comprehensive account and project management modules.",
    tech: ["Node.js", "React.js", "MongoDB", "Express.js", "Figma"],
    github: "https://github.com/Smswad/NexusBuild",
    live: "https://nexusbuild.vercel.app",
    accentColor: "from-accent/20 to-blue-600/10",
    dotColor: "bg-accent",
  },
  {
    id: "fixmycity",
    title: "FixMyCity",
    badge: "Civic Tech",
    description:
      "Civic engagement platform empowering citizens to report local issues — potholes, waste management, street lighting — directly to relevant authorities. Promotes transparency and community participation through a streamlined reporting and tracking workflow.",
    tech: ["Node.js", "React.js", "MySQL", "Express.js", "MongoDB"],
    github: "https://github.com/Smswad/FixMyCity",
    live: "https://fixmycity-6dcd4.web.app",
    accentColor: "from-emerald-500/15 to-teal-600/10",
    dotColor: "bg-emerald-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-accent font-mono text-xl md:text-2xl mr-3">02.</span> Things I&apos;ve Built
            <div className="ml-6 h-px bg-gray-700 flex-grow max-w-xs hidden sm:block"></div>
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <p className="text-gray-400 font-light mb-12 ml-12 md:ml-14">
            A selection of full-stack projects — from academic capstones to civic platforms.
          </p>
        </FadeIn>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.12} className="flex">
              <article
                id={`project-${project.id}`}
                className="relative flex flex-col rounded-2xl overflow-hidden border border-gray-700/50
                           bg-navy-800/40 hover:border-accent/40 transition-all duration-300
                           hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 group w-full"
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.accentColor} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                <div className="flex flex-col flex-1 p-7">
                  {/* Top row: folder icon + links */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Folder className="h-6 w-6 text-accent" />
                      </div>
                      <span className={`inline-block w-2 h-2 rounded-full ${project.dotColor} mt-0.5`}></span>
                      <span className="text-xs font-mono text-gray-500 tracking-wide">{project.badge}</span>
                    </div>

                    <div className="flex gap-3 text-gray-400">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`${project.id}-github-link`}
                        aria-label={`${project.title} GitHub repository`}
                        className="hover:text-accent transition-colors"
                      >
                        <GithubIcon />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`${project.id}-live-link`}
                        aria-label={`${project.title} live demo`}
                        className="hover:text-accent transition-colors"
                      >
                        <ExternalLink className="h-[18px] w-[18px]" />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm font-light leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent/10
                                   border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold
                                 border border-gray-600 text-gray-300 hover:border-accent hover:text-accent
                                 transition-all duration-200"
                    >
                      <GithubIcon />
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold
                                 bg-accent text-[#0B1B3A] hover:bg-blue-400
                                 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
