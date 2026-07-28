"use client";

import React from 'react';
import { logout } from './actions';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  );
}
