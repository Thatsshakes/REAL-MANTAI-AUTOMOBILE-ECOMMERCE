// components/home/FlashSales.jsx
"use client";

import { useState, useEffect } from "react";
// 🟢 Next.js magical router link engine
import Link from "next/link"; 

export default function FlashSales({ onSelectProduct }) {
  // 1. DYNAMIC COUNTDOWN STATE: Hours, Minutes, Seconds
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 34, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        let s = prev.seconds - 1;
        let m = prev.minutes;
        let h = prev.hours;

        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Flash sales discounted auto parts items inventory array data models
  const flashProducts = [
    { id: 101, name: "Premium Oil Filter Kit", originalPrice: "₦12,500", dealPrice: "₦7,500", discount: "-40%", tag: "Filters" },
    { id: 102, name: "Heavy Duty 12V Alternator", originalPrice: "₦85,000", dealPrice: "₦59,500", discount: "-30%", tag: "Electricals" },
    { id: 103, name: "Synthetic Engine Oil 5W-30 (4L)", originalPrice: "₦32,000", dealPrice: "₦24,000", discount: "-25%", tag: "Lubricants" },
    { id: 104, name: "Halogen Headlight Bulb H4", originalPrice: "₦6,000", dealPrice: "₦3,900", discount: "-35%", tag: "Headlights" },
    { id: 105, name: "Front Shock Absorber Pair", originalPrice: "₦95,000", dealPrice: "₦71,250", discount: "-25%", tag: "Suspension" }
  ];

  // Helper function to format single numbers to double digits (e.g. 9 into 09)
  const padNum = (num) => String(num).padStart(2, "0");

  return (
    <div className="max-w-[1195px] mx-auto px-4 mt-3">
      
      {/* THE CORE DARK-RED HEADER BANNER WRAPPER CONTAINER */}
      <div className="w-full bg-[#e61601] rounded-t-[20px] text-white px-6 py-3 flex items-center justify-between shadow-xs select-none">
        
        {/* Left Side Group: Title Text & Countdown Box Blocks */}
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5">
            ⚡ Flash Sales
          </span>
          
          <div className="flex items-center gap-1.5 text-xs font-black">
            <span className="text-white/70 uppercase font-bold text-[10px] tracking-wide mr-1">Time Left:</span>
            <span className="bg-black/90 px-2 py-1 rounded text-white font-mono">{padNum(timeLeft.hours)}h</span>
            <span className="text-white animate-pulse">:</span>
            <span className="bg-black/90 px-2 py-1 rounded text-white font-mono">{padNum(timeLeft.minutes)}m</span>
            <span className="text-white animate-pulse">:</span>
            <span className="bg-black/90 px-2 py-1 rounded text-white font-mono">{padNum(timeLeft.seconds)}s</span>
          </div>
        </div>

        {/* Right Side Group: Redirection link */}
        <a href="#" className="text-xs font-bold uppercase tracking-wider text-white hover:text-amber-300 transition-colors flex items-center gap-0.5">
          See All <span className="text-xs">&gt;</span>
        </a>

      </div>

      {/* LOWER GRID SHELF: 5 Horizontal product discount item cards */}
      <div className="w-full bg-white border border-t-0 border-gray-200 rounded-b-[20px] p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 shadow-sm">
        {flashProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl p-3 border border-gray-100 hover:shadow-md transition duration-150 relative flex flex-col justify-between group">
            
            {/* Corner floating red percentage clearance label badge */}
            <span className="absolute top-2 left-2 bg-[#ffebec] text-[#e61601] text-[9px] font-black px-1.5 py-0.5 rounded-sm z-10">
              {product.discount}
            </span>

            <div>
              {/* Product Visual Frame Placeholder */}
              <div className="bg-gray-50 rounded-md h-32 w-full mb-3 flex items-center justify-center overflow-hidden border border-gray-50">
                <span className="text-gray-300 text-[10px] font-mono group-hover:scale-110 transition duration-200 select-none">
                  [{product.tag}]
                </span>
              </div>
              
              {/* 🟢 FIXED DYNAMIC ROUTING POINT: Changed <h3> to Next.js <Link> wrapper tag */}
              {/* 💡 This tells Next.js to direct the shopper to /products/101 or /products/102 dynamically based on array ID mapping! */}
              <Link 
                href={`/products/${product.id}`} 
                className="text-[#282828] font-semibold text-xs text-left line-clamp-2 leading-tight hover:text-[#f68b1e] transition-colors block cursor-pointer"
              >
                {product.name}
              </Link>
            </div>

            <div className="mt-3">
              {/* Price Tags Stack Layer */}
              <div className="text-left leading-none">
                <span className="text-[#282828] font-black text-sm block">{product.dealPrice}</span>
                <span className="text-gray-400 font-medium text-[10px] line-through block mt-1">{product.originalPrice}</span>
              </div>
              
              <button 
                type="button"
                onClick={() => onSelectProduct({ id: product.id, name: product.name, compatibility: "Genuine Replacement Part", priceFormatted: product.dealPrice })}
                className="mt-3 bg-[#f68b1e] hover:bg-[#e07b16] text-white font-bold text-[10px] uppercase py-2 px-3 rounded-lg transition shadow-2xs tracking-wide cursor-pointer border-none"
              >
                Buy Deal
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

