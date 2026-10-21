// components/home/ScrollAnimatedHero.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiSearchLine, RiQrScanLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states for text
      gsap.set(".hero-badge", { opacity: 0, y: 20 });
      gsap.set(".hero-title", { opacity: 0, y: 50 });
      gsap.set(".hero-subtitle", { opacity: 0, y: 30 });
      gsap.set(".hero-search", { opacity: 0, y: 20 });
      gsap.set(".hero-cta", { opacity: 0, y: 20 });

      // Text entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".hero-badge", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.1)
        .to(".hero-title", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.25)
        .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.45)
        .to(".hero-search", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.55)
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" }, 0.65);

      // Background zoom on scroll
      // Scroll down = zoom out, Scroll up = zoom in
      gsap.fromTo(
        ".hero-bg img",
        { scale: 1.25 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0">
        <img
          src="/images/bg-landscape.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl text-white">
          <span className="hero-badge inline-block text-xs font-semibold tracking-wider bg-orange-500 text-white px-3 py-1 rounded-full mb-4">
            ENGINEERED FOR SPEED
          </span>

          <h1 className="hero-title text-5xl md:text-7xl font-black leading-[0.95] uppercase">
            UNLEASH<br />
            <span className="text-orange-500">MAX POWER</span>
          </h1>

          <p className="hero-subtitle mt-5 text-lg text-gray-200 max-w-md">
            Premium performance parts built for speed, precision, and reliability.
          </p>

          {/* Search / VIN */}
          <div className="hero-search flex max-w-md mt-6 mb-4">
            <div className="relative flex-1">
              <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Part number, VIN or vehicle reg"
                className="w-full bg-white/10 border border-white/20 rounded-l-lg pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 rounded-r-lg font-medium">
              Find part
            </button>
          </div>

          {/* Buttons */}
          <div className="hero-cta flex gap-3">
            <button className="flex items-center gap-2 border border-white/30 hover:bg-white/10 px-5 py-2.5 rounded-lg text-sm">
              <RiQrScanLine className="w-4 h-4" />
              Scan a part QR
            </button>
            <button className="flex items-center gap-2 border border-white/30 hover:bg-white/10 px-5 py-2.5 rounded-lg text-sm">
              Shop Performance Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}