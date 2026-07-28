import React from 'react';
import LogoutButton from './LogoutButton';
import { supabase } from '@/lib/supabase';
import { Mail, MessageSquare, Inbox, User, Clock } from 'lucide-react';

export const revalidate = 0;

interface Message {
  id: string | number;
  name: string;
  email: string;
  message: string;
  created_at: string | null;
}

async function getMessages(): Promise<Message[]> {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
  return (data as Message[]) || [];
}

function formatDate(dateStr: string | null): { date: string; time: string } {
  if (!dateStr) return { date: 'Unknown date', time: '' };
  const d = new Date(dateStr);
  return {
    date: d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    time: d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  };
}

export default async function AdminDashboard() {
  const messages = await getMessages();

  return (
    <div
      className="min-h-screen p-4 sm:p-8"
      style={{ background: 'linear-gradient(135deg, #0B1B3A, #1B3A66)' }}
    >
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-700/60">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest mb-1">ADMIN</p>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">
              Portfolio inbox — {messages.length} {messages.length === 1 ? 'message' : 'messages'} total
            </p>
          </div>
          <LogoutButton />
        </header>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Messages', value: messages.length, icon: <Inbox className="h-5 w-5 text-accent" /> },
            {
              label: 'Latest Sender',
              value: messages[0]?.name ?? '—',
              icon: <User className="h-5 w-5 text-accent" />,
            },
            {
              label: 'Last Received',
              value: messages[0]?.created_at
                ? new Date(messages[0].created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                : '—',
              icon: <Clock className="h-5 w-5 text-accent" />,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-navy-800/40 border border-gray-700/50 rounded-2xl px-6 py-5 flex items-center gap-4"
            >
              <div className="p-2.5 rounded-xl bg-accent/10">{stat.icon}</div>
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">{stat.label}</p>
                <p className="text-white font-bold text-lg leading-tight truncate max-w-[140px]">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Messages Section */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-accent" aria-hidden="true" />
            Contact Form Submissions
          </h2>

          {messages.length === 0 ? (
            <div className="bg-navy-800/40 border border-dashed border-gray-700 rounded-2xl p-16 text-center">
              <Inbox className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 font-medium">No messages yet.</p>
              <p className="text-gray-600 text-sm mt-1">Submissions from your contact form will appear here.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, idx) => {
                const { date, time } = formatDate(msg.created_at);
                const replySubject = encodeURIComponent(`Re: Your message to Shahil Mahmud Swad`);
                const replyBody = encodeURIComponent(
                  `Hi ${msg.name},\n\nThank you for reaching out!\n\n---\nYour original message:\n"${msg.message}"\n---\n\nBest regards,\nShahil Mahmud Swad`
                );
                const mailtoHref = `mailto:${msg.email}?subject=${replySubject}&body=${replyBody}`;

                return (
                  <div
                    key={msg.id ?? idx}
                    className="bg-navy-800/40 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-accent/40 transition-colors duration-300 shadow-xl"
                  >
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 pt-5 pb-4 border-b border-gray-700/40">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                          <span className="text-accent font-bold text-lg leading-none">
                            {msg.name?.charAt(0)?.toUpperCase() ?? '?'}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base leading-tight">{msg.name}</h3>
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-accent/80 hover:text-accent text-xs font-mono transition-colors break-all"
                          >
                            {msg.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        {/* Date badge */}
                        <div className="text-right hidden sm:block">
                          <p className="text-xs text-gray-300 font-mono">{date}</p>
                          <p className="text-xs text-gray-500 font-mono">{time}</p>
                        </div>

                        {/* Reply button */}
                        <a
                          href={mailtoHref}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold
                                     bg-accent text-[#0B1B3A] hover:bg-blue-400 transition-all duration-200
                                     shadow-md hover:shadow-accent/30 whitespace-nowrap"
                        >
                          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                          Reply via Email
                        </a>
                      </div>
                    </div>

                    {/* Message Body */}
                    <div className="px-6 py-5">
                      {/* Mobile date */}
                      <p className="text-xs text-gray-500 font-mono mb-3 sm:hidden">
                        {date} · {time}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap bg-navy-900/60 px-5 py-4 rounded-xl border border-gray-700/30">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
