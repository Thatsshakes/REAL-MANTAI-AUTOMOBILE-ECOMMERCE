"use client";

import { useState } from 'react';

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    {
      name: "Engine Mechanics",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: "Braking Components",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3" />
        </svg>
      )
    },
    {
      name: "Car Batteries & Power",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 6V4h2v2M15 6V4h2v2M7 12h2m6 0h2" />
        </svg>
      )
    },
    {
      name: "Lubricants & Engine Oils",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V21" />
        </svg>
      )
    },
    {
      name: "Headlights & Electricals",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      )
    },
    {
      name: "Suspension Systems",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8M8 20h8M12 4v16M9 9h6M9 15h6" />
        </svg>
      )
    }
  ];

  return (
    /* The outer container wraps BOTH the button and the dropdown list. 
       When your cursor moves inside this zone, it triggers onMouseEnter. 
       When the cursor exits this entire zone, it triggers onMouseLeave. */
    <div 
      className="relative flex items-center justify-center pb-2 h-full"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      
      {/* 1. Hamburger Icon Button Visualizer */}
      <button 
        type="button"
        className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-brand-dark focus:outline-none flex items-center justify-center bg-white border-none cursor-default"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* 2. Floating Panel (Renders smoothly via custom CSS transition keyframes) */}
      {isMenuOpen && (
        <div 
          style={{
            animation: 'jumiaSlideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            transformOrigin: 'top left'
          }}
          className="absolute left-0 top-11 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 flex flex-col text-sm"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className="w-full text-left px-4 py-2.5 transition-colors font-medium text-slate-700 hover:text-brand-orange hover:bg-slate-50 flex items-center gap-3 border-none cursor-pointer bg-white"
            >
              <span className="text-slate-400">
                {category.icon}
              </span>
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* CSS Slide and Fade Keyframe Integration */}
      <style jsx global>{`
        @keyframes jumiaSlideDown {
          0% { opacity: 0; transform: scale(0.95) translateY(-6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

    </div>
  );
}
