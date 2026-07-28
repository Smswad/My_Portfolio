"use client";

import React, { useState } from 'react';
import { Download, ExternalLink, FileText, Eye, EyeOff, GraduationCap, Briefcase } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function Resume() {
  const [showPreview, setShowPreview] = useState(true);

  const experiences = [
    {
      role: "Aspiring Software Developer & MERN Stack Developer",
      organization: "East West University / Academic & Independent Projects",
      date: "2022 - Present",
      description: "Architected full-stack web applications like NexusBuild (CSE412) and FixMyCity. Specialized in React.js, Node.js, Express, MongoDB, and MySQL with responsive UI/UX designs.",
    },
    {
      role: "Community & Operations Coordination",
      organization: "Online Community Management",
      date: "2021 - Present",
      description: "Managed large-scale online communities ranging from 1,000 to 10,000+ members. Coordinated teams, enforced engagement strategies, and streamlined digital operations.",
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "East West University",
      date: "Final Year Student",
      details: "Focusing on Software Engineering, Web Technologies, Database Systems, and System Design.",
    },
  ];

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
                <span className="text-accent font-mono text-xl md:text-2xl mr-3">04.</span> Resume / CV
                <div className="ml-6 h-px bg-gray-700 flex-grow max-w-xs hidden sm:block"></div>
              </h2>
              <p className="text-gray-400 font-light mt-2 ml-12 md:ml-14">
                Explore my background, education, and technical experience.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 ml-12 md:ml-0">
              <a
                href="/resume.pdf"
                download="Shahil_Mahmud_Swad_Dev_CV.pdf"
                id="download-cv-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                           bg-accent text-[#0B1B3A] hover:bg-blue-400 transition-all duration-300
                           shadow-lg hover:shadow-accent/30 hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="view-cv-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold
                           border border-gray-600 text-gray-200 hover:border-accent hover:text-accent
                           transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" />
                Open PDF
              </a>

              <button
                onClick={() => setShowPreview(!showPreview)}
                aria-expanded={showPreview}
                aria-controls="pdf-preview"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium
                           border border-gray-700/80 text-gray-400 hover:text-white hover:border-gray-500
                           transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                title={showPreview ? "Hide PDF Preview" : "Show PDF Preview"}
              >
                {showPreview ? <EyeOff className="h-4 w-4 text-accent" aria-hidden="true" /> : <Eye className="h-4 w-4 text-accent" aria-hidden="true" />}
                <span className="hidden sm:inline">{showPreview ? "Hide Preview" : "Preview PDF"}</span>
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Embedded PDF Preview */}
        {showPreview && (
          <FadeIn direction="none" delay={0.1}>
            <div id="pdf-preview" className="mb-16 rounded-2xl overflow-hidden border border-gray-700/60 shadow-2xl bg-navy-800/40 p-2 sm:p-4">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700/50 mb-3 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-accent" />
                  <span>Shahil_Mahmud_Swad_Dev_CV.pdf</span>
                </div>
                <span className="text-gray-500 hidden sm:inline">PDF Document Preview</span>
              </div>

              <div className="relative w-full h-[600px] sm:h-[750px] md:h-[850px] rounded-xl overflow-hidden bg-navy-900">
                <iframe
                  src="/resume.pdf#toolbar=0"
                  className="w-full h-full border-0 rounded-xl"
                  title="Shahil Mahmud Swad CV Preview"
                />
                
                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center bg-navy-900 text-gray-300">
                  <FileText className="h-12 w-12 text-accent mb-4" />
                  <p className="text-lg font-medium text-white mb-2">Unable to display PDF preview in browser?</p>
                  <p className="text-sm text-gray-400 mb-6 max-w-md">
                    You can download the CV directly or view it in a new browser tab.
                  </p>
                  <a
                    href="/resume.pdf"
                    download="Shahil_Mahmud_Swad_Dev_CV.pdf"
                    className="px-6 py-2.5 bg-accent text-[#0B1B3A] font-semibold rounded-full text-sm"
                  >
                    Download CV PDF
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Experience & Education Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <FadeIn direction="up" delay={0.15}>
            <div className="bg-navy-800/40 border border-gray-700/50 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                <div className="p-2.5 rounded-xl bg-accent/10">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Key Experience</h3>
              </div>

              <div className="relative border-l border-gray-700/80 ml-3 space-y-8 pl-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-navy-900"></span>
                    <h4 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-mono text-accent/90 mt-0.5">{exp.organization}</p>
                    <p className="text-xs text-gray-500 font-mono mb-2">{exp.date}</p>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Education Column */}
          <FadeIn direction="up" delay={0.25}>
            <div className="bg-navy-800/40 border border-gray-700/50 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                <div className="p-2.5 rounded-xl bg-accent/10">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Education</h3>
              </div>

              <div className="relative border-l border-gray-700/80 ml-3 space-y-8 pl-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-navy-900"></span>
                    <h4 className="text-base font-bold text-white group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-accent/90 mt-0.5">{edu.institution}</p>
                    <p className="text-xs text-gray-500 font-mono mb-2">{edu.date}</p>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
