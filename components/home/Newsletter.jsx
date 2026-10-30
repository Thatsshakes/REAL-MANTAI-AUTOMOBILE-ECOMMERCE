// components/home/Newsletter.js
"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: connect to your backend / email service
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative bg-gradient-to-r from-gray-900 to-orange-500 rounded-3xl px-6 md:px-10 py-10 md:py-12 text-white overflow-hidden">
          
          {/* Optional illustration placeholder */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden md:block">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
              🛵
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Get 10% Off Your First Order
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Join our newsletter for exclusive deals, new arrivals, and insider offers — straight to your inbox. No spam, ever.
              </p>
            </div>

            {/* Right form */}
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-white hover:bg-orange-400 hover:text-white text-orange-500 font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
