import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
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

const LinkedinIcon = () => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-left order-2 md:order-1">
          <FadeIn direction="up" delay={0}>
            <p className="text-accent text-base md:text-lg font-mono mb-4 tracking-widest">
              👋 Hello, I&apos;m
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Shahil Mahmud<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">Swad</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl font-semibold text-gray-200 mb-4 leading-snug">
              CSE Student &amp; Aspiring Full-Stack Developer<br />
              <span className="text-accent text-base md:text-lg font-medium">Desktop Client Engineer &bull; Community Operations</span>
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
              I build reliable web applications, cloud-connected desktop software, and lead high-impact online communities — bridging the gap between code and people.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full text-[#0B1B3A] bg-accent hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-accent/40 hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download="Shahil_Mahmud_Swad_Dev_CV.pdf"
                id="hero-resume-btn"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full border border-accent/60 text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 shadow-md shadow-accent/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full border border-gray-600 text-white hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Hero Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Find Me:</span>
              <a
                href="https://github.com/Smswad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full bg-navy-800/80 border border-gray-700/60 text-gray-300 hover:text-accent hover:border-accent transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/shahilmahmudswad/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-navy-800/80 border border-gray-700/60 text-gray-300 hover:text-accent hover:border-accent transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.facebook.com/swadtheboss.2002/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2 rounded-full bg-navy-800/80 border border-gray-700/60 text-gray-300 hover:text-accent hover:border-accent transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Profile Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <FadeIn direction="left" delay={0.2}>
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent via-blue-400 to-navy-800 opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Inner border ring */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/60 shadow-2xl bg-navy-900">
                <Image
                  src="/profile.jpg"
                  alt="Shahil Mahmud Swad"
                  fill
                  sizes="(max-width: 640px) 14rem, (max-width: 768px) 18rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
