// components/home/ScrollAnimatedHero.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registeration of the animation scroll trigger system safely
gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // THE GSAP TIMELINE ENGINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",      // Triggers when the top of the header sections hit the top of the screen
        end: "bottom 20%",         // Pinned duration of the scrolling scene in pixels
        scrub: 1,            // Smooth mouse wheel animation response lag
        pin: false,             // Locks the page in place while the text and graphics animate

        invalidateOnRefresh: true,
        fastScrollEnd: true
      }
    });

    // CODES CONTROLLING THE CINEMATIC CAMERA MOVEMENTS
    tl.to(".hero-bg-layer", {
      scale: 1.15,             // Slowly zooms your background picture forward like a camera lens
      y: -30,                  // Shifts the frame upward slightly
      duration: 1
    }, 0)
    .to(".hero-car-layer", {
      scale: 1.05,             // Animates your vehicle product cutout moving forward slightly faster
      x: -50,                  // Pans the object horizontally to create a 3D video illusion
      filter: "drop-shadow(0 30px 50px rgba(246,139,30,0.25))",
      duration: 1
    }, 0)
    .to(".hero-initial-text", {
      opacity: 0,              // Fades out your landing headline as the user spins their mouse wheel
      y: -50,
      duration: 0.4
    }, 0)
    .to(".hero-revealed-text", 
      { y: -30, opacity: 0.7, duration: 0.4 }, // Smoothly slides your marketplace catalog buttons into view halfway down the scroll
      0.4
    );

  }, []);

  return (
    <div ref={sectionRef} className="max-w-[1165px] mx-auto h-[440px] bg-white mt-2 relative overflow-hidden rounded-3xl border-none select-none">
      
      {/* THIS IS WHERE TO INPUT YOUR BACKDROP IMAGE FILE HERE BELOW */}
      <div 
        className="hero-bg-layer absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all scale-[1.04] -translate-y-3"
        style={{ backgroundImage: `url('/images/bg-landscape.jpg')` }} 
      />

      {/* Dark premium shadow overlay wrapper to protect layout readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

      {/* THIS IS WHERE TO INPUT YOUR FRONT VEHICLE/PRODUCT CUTOUT IMAGE HERE BELOW */}
      <div className="hero-car-layer absolute right-0 top-30 translate-y-0 w-full max-w-[500px] z-20 flex items-center justify-center">
        <img 
          src="/images/car-cutout.png" 
          alt="Foreground Animated Element"
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* LAYER THREE: Floating Typography Interface Stack */}
      <div className="absolute inset-0 z-30 max-w-[1184px] mx-auto px-6 flex flex-col justify-center text-white pointer-events-none">
        
        {/* Intro Text Group (Fades away on scroll) */}
        <div className="hero-initial-text max-w-md">
          <span className="bg-[#f68b1e] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
            THATSSHAKES Express
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mt-3 mb-2 leading-none">
            GENUINE <br />AUTO PARTS
          </h1>
          <p className="text-slate-300 text-xs font-normal max-w-xs leading-relaxed">
            Scroll down to test performance constraints and experience live diagnostic transitions.
          </p>
        </div>

        {/* Action Text Group (Reveals cleanly on scroll) */}
        <div className="hero-revealed-text absolute max-w-md pointer-events-auto">
          <span className="bg-white/10 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded backdrop-blur-xs border border-white/20">
            Engineered For Speed
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mt-3 mb-4 leading-none">
            UNLEASH <br /><span className="text-[#f68b1e]">MAX POWER</span>
          </h2>
          <button className="bg-[#f68b1e] hover:bg-[#e07b16] text-white font-bold text-xs uppercase px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer tracking-wider">
            Shop Performance Catalog
          </button>
        </div>

      </div>

    </div>
  );
}
