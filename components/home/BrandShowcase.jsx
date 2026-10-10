// components/home/BrandShowcase.jsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image"; // Next.js optimized image loader component
import gsap from "gsap"; // Import GSAP

export default function BrandShowcase() {
  // 1. CHANGER: Point the icon properties directly to your asset image files
  const carBrands = [
    { name: "Toyota", imgPath: "/images/brandshowcase/toyota.png" },
    { name: "Honda", imgPath: "/images/brandshowcase/honda.png" },
    { name: "Mercedes-Benz", imgPath: "/images/brandshowcase/mercedes.png" },
    { name: "Nissan", imgPath: "/images/brandshowcase/nissan.png" },
    { name: "Lexus", imgPath: "/images/brandshowcase/lexus.png" },
    { name: "Ford", imgPath: "/images/brandshowcase/ford.png" }
  ];

  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // GSAP animation shifting the track line by exactly -50% for a flawless wrapping loop
    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 35, // Control your animation velocity (higher number = slower, smoother glide)
      repeat: -1 // Loops forever
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  // Buttery-smooth decelerate/accelerate speed transitions on container mouse interactions
  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.6, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.6, ease: "power2.out" });
    }
  };

  return (
    <div 
      className="max-w-[1170px] mx-auto bg-[#303336] text-white py-12 mt-3 select-none overflow-hidden relative rounded-2xl border border-slate-800 shadow-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft Vignette Edge Fades tailored to blend perfectly into your custom slate-blue #56616c background wrapper */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#56616c] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#56616c] to-transparent z-10 pointer-events-none" />

      {/* The Continuous Moving Track mapped to GSAP target reference hooks */}
      <div className="flex w-max relative" ref={trackRef}>
        
        {/* TRACK ONE */}
        <div className="flex items-center">
          {carBrands.map((brand, idx) => (
            <div
              key={`track1-${idx}`}
              className="w-[220px] flex items-center justify-center gap-3.5 opacity-100 hover:scale-105 transition-transform duration-200 cursor-pointer group"
            >
              {/* 2. CHANGER: Render an image tag instead of an icon component */}
              <div className="relative w-7 h-7 flex items-center justify-center">
                <Image 
                  src={brand.imgPath} 
                  alt={`${brand.name} logo`}
                  width={28}
                  height={28}
                  className="object-contain filter brightness-0 invert"
                  
                  //This is for fast and effective smooth loading of my logo in my carousel
                  priority
                  unoptimized
                />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-widest whitespace-nowrap text-white group-hover:text-[#f68b1e] transition-colors duration-150">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* TRACK TWO (IDENTICAL CLONE FOR LOOP WRAPPING) */}
        <div className="flex items-center" aria-hidden="true">
          {carBrands.map((brand, idx) => (
            <div
              key={`track2-${idx}`}
              className="w-[220px] flex items-center justify-center gap-3.5 opacity-100 hover:scale-105 transition-transform duration-200 cursor-pointer group"
            >
              {/* 2. CHANGER: Render an image tag instead of an icon component */}
              <div className="relative w-7 h-7 flex items-center justify-center">
                <Image 
                  src={brand.imgPath} 
                  alt={`${brand.name} logo`}
                  width={28} // Standardized to 28px for identical matching geometry
                  height={28}
                  className="object-contain filter brightness-0 invert"
                  
                  //This is for fast and effective smooth loading of my logo in my carousel
                  priority
                  unoptimized
                />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-widest whitespace-nowrap text-white group-hover:text-[#f68b1e] transition-colors duration-150">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
