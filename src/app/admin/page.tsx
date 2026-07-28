import React from 'react';
import { cookies } from 'next/headers';
import LoginForm from './LoginForm';
import AdminDashboard from './AdminDashboard';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');

  if (session?.value === 'authenticated') {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-navy-800/50 border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h1>
        <LoginForm />
      </div>
    </div>
  );
}
