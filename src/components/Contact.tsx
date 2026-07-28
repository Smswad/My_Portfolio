"use client";

import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ExternalLink } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
    width="20"
    height="20"
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-accent font-mono text-xl md:text-2xl mr-3">05.</span> Get In Touch
            <div className="ml-6 h-px bg-gray-700 flex-grow max-w-xs hidden sm:block"></div>
          </h2>
          <p className="text-gray-400 font-light mb-12 ml-12 md:ml-14 max-w-xl">
            Whether you have a project in mind, a question, or just want to connect, feel free to reach out!
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Contact & Info */}
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s talk about your next project</h3>
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  I&apos;m currently open to software development opportunities, technical collaborations, and community management roles.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="bg-navy-800/50 border border-gray-700/50 rounded-2xl p-6 flex items-center gap-4 hover:border-accent/50 transition-colors">
                <div className="p-3.5 rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Direct Email</p>
                  <a
                    href="mailto:smswad2002@gmail.com"
                    className="text-white font-medium text-base hover:text-accent transition-colors break-all"
                  >
                    smswad2002@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Connect Links */}
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">Social Profiles</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Smswad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-navy-800/60 border border-gray-700/60 text-gray-200 hover:text-white hover:border-accent hover:bg-navy-800 transition-all text-sm font-medium"
                  >
                    <GithubIcon />
                    GitHub
                    <ExternalLink className="h-3.5 w-3.5 text-gray-500" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shahilmahmudswad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-navy-800/60 border border-gray-700/60 text-gray-200 hover:text-white hover:border-accent hover:bg-navy-800 transition-all text-sm font-medium"
                  >
                    <LinkedinIcon />
                    LinkedIn
                    <ExternalLink className="h-3.5 w-3.5 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Contact Form */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-navy-800/40 border border-gray-700/50 rounded-2xl p-7 md:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle className="h-14 w-14 text-accent mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-gray-300 font-light text-sm max-w-sm mx-auto">
                    Your message has been recorded. I&apos;ll get back to you as soon as possible at <span className="text-accent">{formData.email}</span>!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono text-accent border border-accent/40 hover:bg-accent/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Shahil Mahmud"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gray-700/80 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gray-700/80 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shahil, I'd like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-900/80 border border-gray-700/80 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-accent text-[#0B1B3A] hover:bg-blue-400 transition-all shadow-lg hover:shadow-accent/30"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
