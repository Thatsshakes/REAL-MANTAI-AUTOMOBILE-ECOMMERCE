// components/home/Newsletter.js
"use client";

import { useState } from "react";
import { Lottie } from "lottie-react";
import deliveryAnimation from "@/public/animations/delivery.json";


export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative bg-gradient-to-r from-gray-900 to-orange-500 rounded-3xl px-6 md:px-10 py-10 md:py-12 text-white overflow-hidden">
            
            {/* Lottie Animation full inside the banner */}
            <div className="absolute inset-0 opacity-300 pointer-events-none">
              <Lottie 
                src={deliveryAnimation}
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Get 10% Off Your First Order
              </h2>
              <p className="text-gray-200 text-sm md:text-base">
                Join our newsletter for exclusive deals, new arrivals and insider offers — straight to your inbox. No spam, ever.
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
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-black placeholder-black focus:outline-none focus:border-orange-400"
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