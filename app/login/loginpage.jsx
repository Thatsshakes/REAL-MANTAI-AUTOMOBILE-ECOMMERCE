"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in user: ${email}`);
    // Authentication endpoints hook here later
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-4 font-sans">
      
      {/* 1. TOP BRAND RETURN LINK */}
      <Link 
        href="/" 
        className="text-3xl font-black text-brand-orange tracking-tight mb-8 hover:opacity-90 active:scale-98 transition flex items-center gap-1 select-none"
      >
        REALMANTAI<span className="text-brand-dark">EXPRESS</span>
      </Link>

      {/* 2. CORE LOGIN INTERFACE CARD FRAME */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border-2 border-brand-yellow">
        
        <h2 className="text-xl font-bold text-brand-dark mb-1 tracking-tight">Welcome Back</h2>
        <p className="text-xs text-slate-500 mb-6">Enter your credentials to access your user marketplace panel.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Box Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Email Address
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., customer@realmantai.com"
              className="w-full border-2 border-brand-yellow rounded-lg p-3 text-sm focus:outline-none focus:border-brand-orange transition bg-white text-brand-dark font-medium"
              required
            />
          </div>

          {/* Password Box Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Password
              </label>
              <a href="#" className="text-xs font-semibold text-brand-orange hover:underline">
                Forgot Password?
              </a>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border-2 border-brand-yellow rounded-lg p-3 text-sm focus:outline-none focus:border-brand-orange transition bg-white text-brand-dark font-medium"
              required
            />
          </div>

          {/* Interactive Trigger Button */}
          <button 
            type="submit" 
            className="w-full bg-brand-orange hover:bg-brand-dark active:bg-brand-yellow active:text-brand-dark text-white py-3.5 rounded-lg font-bold text-xs shadow-sm transition-all tracking-wider uppercase mt-4 cursor-pointer border-none"
          >
            Sign In
          </button>
          
        </form>

        {/* 3. FOOTER ROUTE ANCHOR LINK */}
        <div className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-brand-orange font-bold hover:underline">
            Register Shop Now
          </a>
        </div>

      </div>
    </div>
  );
}
