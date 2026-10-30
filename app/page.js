"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import FlashSales from "@/components/home/FlashSales";
import CategoryMenu from "@/components/home/CategoryMenu";
import FeaturedParts from "@/components/home/FeaturedParts";
import BrandShowcase from "@/components/home/BrandShowcase";
import WhyShopWithUs from "@/components/home/WhyShopWithUs";
import QRBand from "@/components/home/QRBand";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import FAQ from "@/components/home/FAQ";

export default function HomePage() { useState(null);
  return (
    <div className="w-full bg-[#f5f5f5] font-sans pb-12">
      {/* Hero */}
      <HeroSection />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Flash Sales */}
      <FlashSales onSelectProduct={(dealItem) => setSelectedProduct(dealItem)} />

      {/* Category Menu */}
      <CategoryMenu />

      {/* Featured Parts */}
      <FeaturedParts />

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Why shop with us */}
      <WhyShopWithUs />

      {/* QRBand */}
      <QRBand />

      {/* Testimonials */}
      <Testimonials />

      {/* NewsLetter */}
      <Newsletter />

      {/* FAQ */}
      <FAQ />
      
    </div>
  );
}

