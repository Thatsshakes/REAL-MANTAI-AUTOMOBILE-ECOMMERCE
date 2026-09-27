// components/home/HeroSection.jsx
"use client";

// Pull in my standalone GSAP scroll animation building block file
import ScrollAnimatedHero from "./ScrollAnimatedHero";

export default function HeroSection() {
  return (
    /* This full-width section acts as the master container block on the homepage */
    <section className="w-full bg-transparent border-none outline-none">
      
      {/* Renders my cinematic GSAP scroll trigger canvas right here */}
      <ScrollAnimatedHero />
      
    </section>
  );
}
