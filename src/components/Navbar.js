'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold">JS Store</Link>
        
        <div className="relative ml-6">
          <input
            type="text"
            placeholder="Search all deals"
            className="bg-zinc-800 text-white p-2 rounded-3xl w-xl pl-10 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-2xl hover:bg-indigo-700">
          Sign Up
        </button>
        <button className="bg-indigo-600 text-white px-7 py-2 rounded-2xl hover:bg-indigo-700">
          Login
        </button>
      </div>
    </nav>
  );
}