"use client";

import { useState } from 'react';
import Header from '../components/Header';
import CategoryMenu from '../components/CategoryMenu';
import OPayCheckout from '../components/OPayCheckout';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Clean data store array for your spare parts inventory
  const products = [
    {
      id: 1,
      name: "High-Performance Brake Pads",
      compatibility: "Fits: Toyota Camry, Corolla (2015-2022)",
      price: 25000,
      priceFormatted: "₦25,000",
      tag: "Ceramic Brake Pads"
    },
    {
      id: 2,
      name: "NGK Iridium Spark Plugs (Pack of 4)",
      compatibility: "Fits: Honda Civic, Accord (2012-2020)",
      price: 18500,
      priceFormatted: "₦18,500",
      tag: "Laser Iridium Spark Plug"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg font-sans pb-12">
      
      {/* 1. Top Navigation Bar (Contains Hamburger Component) */}
      <Header />

      {/* 2. Jumia-Style Hero Banner Grid Block */}
      <div className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-4 gap-4">
        
        {/* Left Side Category Menu Sidebar */}
        <CategoryMenu activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Right Side: Big Promotional Sales Banner Box */}
        <section className="col-span-4 md:col-span-3 bg-gradient-to-br from-brand-orange to-amber-500 rounded-xl p-8 flex flex-col justify-center text-white shadow-sm relative overflow-hidden h-[340px]">
          <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-white/10 skew-x-12 origin-bottom-right transition-transform pointer-events-none" />
          
          <div className="relative z-10 max-w-md">
            <span className="bg-brand-dark/30 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider border border-white/20">
              WEEKLY OFFICIAL MEGA SALE
            </span>
            <h2 className="text-4xl font-black tracking-tight mt-3 mb-2 drop-shadow-xs">
              UPGRADE YOUR VEHICLE DRIVE
            </h2>
            <p className="text-sm text-white/90 font-medium mb-6 leading-relaxed">
              Get up to <strong className="text-brand-yellow text-base font-black">40% OFF</strong> genuine certified replacement brake pads, filters, and shock absorbers. 
            </p>
            <button className="bg-white text-brand-orange font-bold text-xs uppercase px-6 py-3 rounded-lg shadow-md hover:bg-brand-dark hover:text-white active:bg-brand-yellow active:text-brand-dark transition-all tracking-wider">
              Shop Spareparts Now
            </button>
          </div>
        </section>

      </div>

      {/* 3. Main Marketplace Display Shelf */}
      <main className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left/Center Side: Product Grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border-2 border-brand-yellow rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center flex flex-col justify-between">
              <div>
                <div className="bg-slate-100 rounded-xl h-44 w-full mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-slate-400 text-sm font-mono select-none">[{product.tag}]</span>
                </div>
                <h3 className="text-brand-dark font-bold text-lg text-left">{product.name}</h3>
                <p className="text-slate-500 text-xs text-left mt-1">{product.compatibility}</p>
              </div>
              <div className="mt-4">
                <div className="text-brand-orange font-bold text-xl text-left mb-3">{product.priceFormatted}</div>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="bg-brand-orange hover:bg-brand-dark active:bg-brand-yellow active:text-brand-dark text-white font-semibold py-2.5 px-4 rounded-lg w-full transition shadow-sm"
                >
                  Buy via OPay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Dynamic Checkout Counter Box */}
        <OPayCheckout selectedProduct={selectedProduct} />

      </main>
    </div>
  );
}
