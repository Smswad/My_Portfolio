"use client";

import React, { useState } from 'react';
import { ExternalLink, Folder, X, AlertTriangle, Lightbulb, Download, Layers } from 'lucide-react';
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

interface Project {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  keyFeatures: string[];
  tech: string[];
  github: string;
  live: string | null;
  liveLabel?: string;
  isDesktopApp?: boolean;
  accentColor: string;
  dotColor: string;
  challenges: { problem: string; solution: string }[];
  futureImprovements: string[];
}

const projects: Project[] = [
  {
    id: "kundonika",
    title: "Kundonika Order Manager",
    badge: "Desktop Application · Electron",
    subtitle: "Desktop Order & Business Management System for Online Boutiques",
    description:
      "Bespoke Windows desktop application engineered for an online handcrafted jewelry boutique. Centralizes end-to-end commerce operations into a high-performance offline/cloud-hybrid client with custom order lifecycle, CRM, branded invoice exports, and Supabase auth.",
    fullOverview:
      "Kundonika Order Manager is a tailor-made Windows desktop client designed specifically for a handcrafted bangle and jewelry boutique. The application unifies customer management, custom bangle specifications, live order stages, role-based cloud sync, and pixel-perfect receipt generation into a smooth native desktop experience.",
    keyFeatures: [
      "Order Lifecycle Management: custom bangle sizing, bespoke colorways, advance payment tracking, and status transitions.",
      "Customer CRM: auto-incrementing customer IDs (CUST-XXXX, ORD-XXXX), historical logs, and quick search.",
      "Branded Receipt & Invoice Engine: high-res PDF and JPG export with dynamic Facebook shop QR codes via native Windows file dialogs.",
      "Enterprise Access & Role-Based Auth: Supabase PostgreSQL with RLS and an admin approval gatekeeper workflow.",
      "Native Desktop Integration: deep-linking (kundonika://) for OAuth/password recovery, single-instance architecture, and GitHub release auto-updates."
    ],
    tech: ["Electron", "React 19", "Vite", "Supabase", "PostgreSQL", "Tailwind / CSS", "jsPDF", "html2canvas"],
    github: "https://github.com/Smswad/Kundonika_Order_Manager.git",
    live: "https://github.com/Smswad/Kundonika_Order_Manager/releases",
    liveLabel: "GitHub Releases (Installer)",
    isDesktopApp: true,
    accentColor: "from-amber-500/20 to-rose-600/10",
    dotColor: "bg-amber-400",
    challenges: [
      {
        problem: "Desktop Deep-Linking & Seamless OAuth / Password Recovery without insecure in-app webviews.",
        solution: "Registered a custom OS protocol handler (kundonika://) in the Windows registry via Electron. Main process intercepts redirects via single-instance locks and securely hands authorization codes over IPC to the renderer using PKCE exchange."
      },
      {
        problem: "Pixel-Perfect Native Document Export (PDF & JPG) without browser print styling glitches.",
        solution: "Engineered an off-screen A4-proportioned receipt template rasterized via html2canvas and jsPDF, sending binary buffers across context-isolated IPC bridges to trigger native Windows File Explorer Save Dialogs."
      },
      {
        problem: "PostgreSQL Profile Generation Race Conditions on initial user onboarding.",
        solution: "Replaced strict .single() PostgREST queries with .maybeSingle(), introduced a bounded exponential backoff retry loop, and built an in-app self-healing fallback that provisions the default profile if the trigger lags."
      }
    ],
    futureImprovements: [
      "Cross-Platform Compilation: package and notarize macOS (.dmg) and Linux (.AppImage) distribution builds.",
      "Offline-First Synchronization: integrate local SQLite / IndexedDB caching with background queue sync.",
      "Automated Order Notifications: WhatsApp Business API / SMS gateway integration on production status updates.",
      "Raw Material & Bangle Component Inventory Tracking with automatic stock deduction.",
      "Business Intelligence Analytics Dashboard for monthly revenues and advance-to-due payment ratios."
    ]
  },
  {
    id: "nexusbuild",
    title: "NexusBuild",
    badge: "Academic Project · CSE412",
    subtitle: "Real Estate Infrastructure & Interactive Project Portal",
    description:
      "Full-stack web application built for East West University's Software Engineering course. Bridges physical real estate infrastructure and digital accessibility for an external client, featuring an interactive map-based interface alongside comprehensive account and project management modules.",
    fullOverview:
      "Developed as the cornerstone project for CSE412 (Software Engineering) at East West University for an external client. NexusBuild bridges the gap between architectural real estate plots and prospective investors through dynamic mapping, plot reservations, project phase tracking, and client account modules.",
    keyFeatures: [
      "Interactive Plot Exploration: map-driven visual layout allowing clients to inspect plots, zoning, and progress.",
      "Project Phase Management: milestones, phase statuses, architectural documentation, and construction tracking.",
      "Client & Admin Portal: role-based dashboards for reservation submissions, inquiries, and verified profile records.",
      "High-Fidelity Prototyping: meticulously designed in Figma before translation to reusable MERN components."
    ],
    tech: ["Node.js", "React.js", "MongoDB", "Express.js", "Figma", "REST APIs"],
    github: "https://github.com/Smswad/NexusBuild",
    live: "https://nexusbuild.vercel.app",
    liveLabel: "Live Web App",
    accentColor: "from-accent/20 to-blue-600/10",
    dotColor: "bg-accent",
    challenges: [
      {
        problem: "Dynamic Map Performance with High Plot Density and State Updates.",
        solution: "Normalized plot geo-coordinates, optimized SVG/canvas layers, and utilized memoized subcomponents to prevent unnecessary re-renders when toggling plot filters."
      },
      {
        problem: "Complex Client Permission & Proposal Approval Workflows.",
        solution: "Implemented structured role-based middleware and schema validations ensuring prospective clients, developers, and administrators maintained strict data isolation."
      }
    ],
    futureImprovements: [
      "3D Virtual Tours: integrate Three.js or WebGL for interactive 3D site visualizations.",
      "Payment Gateway Integration: allow token reservations and advance payments via SSLCommerz / Stripe.",
      "Automated PDF Contract Generation for reservation deeds and financial statements."
    ]
  },
  {
    id: "fixmycity",
    title: "FixMyCity",
    badge: "Civic Tech · Full-Stack",
    subtitle: "Civic Engagement & Municipal Issue Reporting Platform",
    description:
      "Civic engagement platform empowering citizens to report local issues — potholes, waste management, street lighting — directly to relevant authorities. Promotes transparency and community participation through a streamlined reporting and tracking workflow.",
    fullOverview:
      "FixMyCity is a civic technology application engineered to bridge the communication gap between urban residents and municipal public work authorities. Citizens can log geographic complaints, upload evidence, monitor resolution statuses, and foster public accountability.",
    keyFeatures: [
      "Public Issue Ticket Intake: categorized complaints (roadways, sanitation, electrical, drainage) with location pins.",
      "Live Status Lifecycles: public transparency pipeline tracking tickets from 'Reported' to 'In Progress' to 'Resolved'.",
      "Multi-Database Architecture: hybrid querying leveraging MySQL for relational civic authority mappings and MongoDB for flexible ticket logs.",
      "Citizen Community Verification: upvoting and corroborating reported neighborhood issues."
    ],
    tech: ["Node.js", "React.js", "MySQL", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Smswad/FixMyCity",
    live: "https://fixmycity-6dcd4.web.app",
    liveLabel: "Live Web App",
    accentColor: "from-emerald-500/15 to-teal-600/10",
    dotColor: "bg-emerald-400",
    challenges: [
      {
        problem: "Harmonizing Dual Relational & NoSQL Databases in a Single Pipeline.",
        solution: "Separated concerns by utilizing MySQL for structured department and authority jurisdictions, while delegating flexible citizen incident telemetry and photo metadata to MongoDB collections through unified Express service layers."
      },
      {
        problem: "Spam & Duplicate Incident Prevention across similar geographic clusters.",
        solution: "Devised proximity and category grouping thresholds to alert citizens if an incident in their vicinity had already been registered, allowing them to upvote existing tickets instead of creating duplicates."
      }
    ],
    futureImprovements: [
      "Real-Time SMS & Push Notifications when ward authorities update ticket statuses.",
      "AI-Powered Automatic Image Classification for incoming pothole and garbage hazard photos.",
      "Mobile App Release (React Native) with offline camera capture and background GPS tagging."
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            A selection of full-stack web applications and native desktop software — built for clients, civic impact, and academia.
          </p>
        </FadeIn>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.12} className="flex">
              <article
                id={`project-${project.id}`}
                className="relative flex flex-col rounded-2xl overflow-hidden border border-gray-700/50
                           bg-navy-800/40 hover:border-accent/40 transition-all duration-300
                           hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 group w-full"
              >
                {/* Visual Thumbnail / Graphic Header */}
                <div className={`relative h-36 w-full bg-gradient-to-br ${project.accentColor} p-5 flex flex-col justify-between overflow-hidden border-b border-gray-700/40`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-gray-200 bg-navy-900/80 backdrop-blur-sm border border-gray-700/50">
                      <span className={`w-2 h-2 rounded-full ${project.dotColor}`}></span>
                      {project.badge}
                    </span>
                    <div className="p-2 rounded-lg bg-navy-900/60 backdrop-blur-sm text-accent border border-gray-700/50">
                      {project.isDesktopApp ? <Layers className="h-4 w-4" /> : <Folder className="h-4 w-4" />}
                    </div>
                  </div>

                  {/* Ambient Title in Banner */}
                  <div className="z-10">
                    <h4 className="text-lg font-extrabold text-white tracking-tight drop-shadow-sm">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-300 font-light truncate">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Decorative background circle */}
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-accent/10 blur-xl pointer-events-none"></div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* Description */}
                  <p className="text-gray-400 text-sm font-light leading-relaxed flex-grow mb-6 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 5).map((t) => (
                      <li
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-xs font-mono text-accent bg-accent/10
                                   border border-accent/20"
                      >
                        {t}
                      </li>
                    ))}
                    {project.tech.length > 5 && (
                      <li className="px-2 py-0.5 rounded-full text-xs font-mono text-gray-400 bg-navy-900/80 border border-gray-700">
                        +{project.tech.length - 5} more
                      </li>
                    )}
                  </ul>

                  {/* Action Buttons: View Details & Links */}
                  <div className="space-y-3 mt-auto pt-2 border-t border-gray-700/40">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold
                                 bg-accent text-[#0B1B3A] hover:bg-blue-400 transition-all duration-200 shadow-md hover:shadow-accent/30"
                    >
                      View Details &amp; Overview →
                    </button>

                    <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                      >
                        <GithubIcon />
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>{project.isDesktopApp ? "Releases" : "Live Demo"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Project Details */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-900/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-navy-900 border border-gray-700/80 shadow-2xl p-6 sm:p-8 text-left space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-gray-700/60">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 mb-2">
                  <span className={`w-2 h-2 rounded-full ${selectedProject.dotColor}`}></span>
                  {selectedProject.badge}
                </span>
                <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-navy-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Comprehensive Scope & Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-accent">
                Project Overview
              </h4>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                {selectedProject.fullOverview}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-accent">
                Core Features
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 font-light">
                    <span className="text-accent mt-0.5">▹</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-accent">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-gray-200 bg-navy-800 border border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges Faced & Solutions */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Key Technical Challenges &amp; Solutions
              </h4>
              <div className="space-y-3">
                {selectedProject.challenges.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-navy-800/60 border border-gray-700/60 space-y-1.5 text-xs sm:text-sm">
                    <p className="font-semibold text-white">
                      <span className="text-rose-400 font-mono mr-1.5">Challenge {i + 1}:</span>
                      {c.problem}
                    </p>
                    <p className="text-gray-300 font-light leading-relaxed">
                      <span className="text-emerald-400 font-mono mr-1.5">Solution:</span>
                      {c.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Improvements */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Planned Improvements &amp; Roadmap
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.futureImprovements.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-light">
                    <span className="text-sky-400 font-mono">0{i + 1}.</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Footer Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-700/60">
              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-gray-600 text-gray-200 hover:border-accent hover:text-accent transition-colors"
                >
                  <GithubIcon />
                  GitHub Repository
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-accent text-[#0B1B3A] hover:bg-blue-400 transition-colors shadow-md hover:shadow-accent/30"
                  >
                    {selectedProject.isDesktopApp ? <Download className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
                    {selectedProject.liveLabel || "View Live"}
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
              >
                Close Window [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
