"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import FlashSales from "@/components/home/FlashSales";
import CategoryMenu from "@/components/home/CategoryMenu";
import BrandShowcase from "@/components/home/BrandShowcase";
import OPayCheckout from "@/components/OPayCheckout";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "High-Performance Brake Pads",
      compatibility: "Fits: Toyota Camry, Corolla (2015-2022)",
      price: 25000,
      priceFormatted: "₦25,000",
      tag: "Ceramic Brake Pads",
    },
    {
      id: 2,
      name: "NGK Iridium Spark Plugs (Pack of 4)",
      compatibility: "Fits: Honda Civic, Accord (2012-2020)",
      price: 18500,
      priceFormatted: "₦18,500",
      tag: "Laser Iridium Spark Plug",
    },
  ];

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

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Products + Checkout */}
      <main className="max-w-[1184px] mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md border border-gray-100 transition text-center flex flex-col justify-between"
            >
              <div>
                <div className="bg-gray-100 rounded-md h-44 w-full mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-400 text-sm font-mono select-none">
                    [{product.tag}]
                  </span>
                </div>
                <h3 className="text-marketplace-text font-bold text-sm text-left line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs text-left mt-1">
                  {product.compatibility}
                </p>
              </div>

              <div className="mt-4">
                <div className="text-brand-primary font-black text-lg text-left mb-3">
                  {product.priceFormatted}
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-brand-primary hover:bg-brand-hover text-white font-semibold text-xs uppercase py-2.5 px-4 rounded w-full transition shadow-xs tracking-wider"
                >
                  Buy via OPay
                </button>
              </div>
            </div>
          ))}
        </div>

        <OPayCheckout selectedProduct={selectedProduct} />
      </main>
    </div>
  );
}