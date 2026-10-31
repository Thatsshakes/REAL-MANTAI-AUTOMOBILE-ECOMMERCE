// app/login/page.js
"use client";

import { useState } from "react";
import { RiMailLine, RiLockLine, RiArrowRightLine } from "react-icons/ri";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    alert("Login submitted (connect to backend later)");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-5">
      
      {/* Left Panel - smaller */}
      <div className="hidden md:flex md:col-span-2 bg-[#0f172a] text-white p-12 flex-col justify-between">
        <div>
          <div className="lg:col-span-4">
            <img 
              src="/images/thatsshakes_express_logo_real.png" 
              alt="THATSSHAKES EXPRESS" 
              className="h-30 w-auto mb-5 object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold leading-tight mb-6">
            Your garage, your parts, <br /> one scan away.
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              Save your vehicles for instant fitment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              Track every order in one place
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              Reorder any part with a QR scan
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-400">© {new Date().getFullYear()} THATSSHAKES EXPRESS</p>
      </div>

      {/* Right Panel - larger */}
      <div className="md:col-span-3 flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-orange-200 via-white to-orange-200">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-500 text-sm mt-1">Sign in to track orders and save vehicles.</p>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button className="flex-1 py-2 text-sm font-medium cursor-pointer bg-white rounded-md shadow-sm">
              Sign in
            </button>
            <button className="flex-1 py-2 text-sm font-medium cursor-pointer text-gray-500">
              Create account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <RiMailLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <RiLockLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-orange-500 hover:text-orange-700 active:text-black hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-orange-400 hover:bg-orange-600 active:bg-black text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Sign in
              <RiArrowRightLine className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="w-full cursor-pointer bg-orange-400 hover:bg-orange-600 active:bg-black border text-white font-medium py-3 rounded-lg transition-colors"
            >
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <a href="/register" className="text-orange-500 cursor-pointer hover:text-orange-700 active:text-black hover:underline font-medium">
              Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
