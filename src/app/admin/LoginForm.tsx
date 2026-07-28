"use client";

import React, { useState } from 'react';
import { login } from './actions';
import { Loader2, Lock, AlertCircle } from 'lucide-react';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await login(password);

    if (!result.success) {
      setError(result.error || 'Failed to login');
      setLoading(false);
    }
    
    // Reload the page on success so the server component re-renders with the valid session cookie
    if (result.success) {
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}
      
      <div>
        <label htmlFor="password" className="block text-xs font-mono text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-900/80 border border-gray-700/80 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm transition-colors"
            placeholder="Enter admin password"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !password}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-accent text-[#0B1B3A] hover:bg-blue-400 transition-all shadow-lg hover:shadow-accent/30 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Verifying...
          </>
        ) : (
          'Access Dashboard'
        )}
      </button>
    </form>
  );
}
