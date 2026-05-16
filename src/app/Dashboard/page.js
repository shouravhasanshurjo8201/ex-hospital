'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/Login');
        toast.info('You must be logged in to access the dashboard');
      } else {
        setUserEmail(user.email || 'User');
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-lg font-medium text-gray-600 animate-pulse">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </header>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Welcome, {userEmail}</h2>
        <p className="text-gray-600">
          Here's a quick overview of your account and statistics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Projects</h3>
          <p className="text-2xl font-bold text-blue-500">12</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
          <p className="text-2xl font-bold text-yellow-500">5</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Completed</h3>
          <p className="text-2xl font-bold text-green-500">8</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Project "Hospital Web" deployed</li>
          <li>⚡ User authentication updated</li>
          <li>📝 Added new tasks to project</li>
        </ul>
      </div>
    </div>
  );
}