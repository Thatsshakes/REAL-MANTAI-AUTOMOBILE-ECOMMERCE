// components/home/BrandShowcase.jsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function BrandShowcase() {
  const carBrands = [
    { name: "Toyota", imgPath: "/images/brandshowcase/toyota.png" },
    { name: "Honda", imgPath: "/images/brandshowcase/honda.png" },
    { name: "Mercedes-Benz", imgPath: "/images/brandshowcase/mercedes.png" },
    { name: "Nissan", imgPath: "/images/brandshowcase/nissan.png" },
    { name: "Lexus", imgPath: "/images/brandshowcase/lexus.png" },
    { name: "Ford", imgPath: "/images/brandshowcase/ford.png" },
  ];

  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5 });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    }
  };

  return (
    <section className="bg-white py-10 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
            Trusted Brands
            <span className="text-green-500">✓</span>
          </h2>
        </div>

        {/* Scrolling track */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-max" ref={trackRef}>
            {/* First set */}
            <div className="flex items-center gap-12 md:gap-16 px-8">
              {carBrands.map((brand, idx) => (
                <div key={`a-${idx}`} className="flex-shrink-0 flex items-center justify-center h-12 w-28">
                  <Image
                    src={brand.imgPath}
                    alt={brand.name}
                    width={100}
                    height={40}
                    className="object-contain max-h-10 opacity-80 hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Second set (for seamless loop) */}
            <div className="flex items-center gap-12 md:gap-16 px-8" aria-hidden="true">
              {carBrands.map((brand, idx) => (
                <div key={`b-${idx}`} className="flex-shrink-0 flex items-center justify-center h-12 w-28">
                  <Image
                    src={brand.imgPath}
                    alt={brand.name}
                    width={100}
                    height={40}
                    className="object-contain max-h-10 opacity-80 hover:opacity-100 transition-opacity"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}