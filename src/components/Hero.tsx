import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
              CSE Student &amp; Aspiring Software Developer<br />
              <span className="text-accent text-base md:text-lg font-medium">Community &amp; Operations Coordination</span>
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
              I build reliable web applications and lead high-impact online communities — bridging the gap between code and people.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full text-[#0B1B3A] bg-accent hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-accent/40 hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#resume"
                id="hero-resume-btn"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full border border-gray-600 text-white hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold rounded-full border border-gray-600 text-white hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
              >
                Contact Me
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
