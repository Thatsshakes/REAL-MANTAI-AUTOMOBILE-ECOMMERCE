// components/common/MainNavbar.js

//slider for my MainNavBar
"use client";

import { useRef, useState } from "react";
// 🟢 IMPORT THE NEW DROPDOWN COMPONENT FILE RIGHT HERE
import NavbarDropdown from "./NavbarDropdown";

export default function MainNavbar() {
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const autoLinks = [
    { name: "Engine Mechanics", icon: "⚙️", subItems: ["Pistons & Rings", "Timing Belts", "Engine Gaskets", "Crankshafts", "Valves & Guides"] },
    { name: "Braking Components", icon: "🛑", subItems: ["Brake Pads", "Brake Discs", "Brake Calipers", "Master Cylinders", "ABS Sensors"] },
    { name: "Car Batteries & Power", icon: "🔋", subItems: ["12V Batteries", "Alternators", "Starter Motors", "Battery Terminals", "Fuses"] },
    { name: "Lubricants & Engine Oils", icon: "🛢️", subItems: ["Synthetic Motor Oil", "Transmission Fluid", "Brake Fluid", "Coolants", "Grease"] },
    { name: "Headlights & Electricals", icon: "💡", subItems: ["LED Bulbs", "Headlight Assemblies", "Tail Lights", "Wiper Motors", "Wiring Harnesses"] },
    { name: "Suspension Systems", icon: "🔩", subItems: ["Shock Absorbers", "Control Arms", "Ball Joints", "Coil Springs", "Tie Rod Ends"] },
    { name: "Filters & Spark Plugs", icon: "🔌", subItems: ["Oil Filters", "Air Filters", "Fuel Filters", "Iridium Spark Plugs", "Cabin Filters"] },
    { name: "Tires & Wheels", icon: "⭕", subItems: ["All-Season Tires", "Alloy Rims", "Wheel Lugs", "Tire Pressure Sensors", "Valves"] },
    { name: "Car Accessories", icon: "🚗", subItems: ["Seat Covers", "Floor Mats", "Car Chargers", "Phone Mounts", "Steering Covers"] },
    { name: "Body Parts & Mirrors", icon: "🪞", subItems: ["Side Mirrors", "Bumper Guards", "Grilles", "Door Handles", "Wiper Blades"] },
    { name: "Tools & Equipment", icon: "🛠️", subItems: ["Hydraulic Jacks", "Wrench Sets", "OBD2 Scanners", "Jump Starters", "Toolboxes"] }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    //The z-40 stands for z-index and doesn't allow the dropdown enu to collapse quickly
    <div className="w-full bg-white border-b border-gray-200 relative z-40">
      
      {/* Upper Row: Main Navigation Elements (Logo, Curved Search, Utilities) */}
      <div className="max-w-[1184px] mx-auto px-4 py-3 flex items-center justify-between gap-6">
        <a href="/" className="text-xl font-black tracking-tighter text-[#282828] flex items-baseline select-none">
          <span>THATSSHAKES</span>
          <span className="text-xs font-bold tracking-normal text-[#f68b1e] ml-1.5 uppercase">Express</span>
        </a>

        <div className="flex-1 max-w-[620px] flex items-center shadow-xs">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs z-10">🔍</span>
            <input 
              type="text" 
              placeholder="Search products, brands and vehicle parts categories..." 
              className="w-full pl-8 pr-4 py-1.5 border border-gray-300 rounded-l-full text-xs text-black focus:outline-none focus:border-[#f68b1e]"
            />
          </div>
          <button className="bg-[#f68b1e] hover:bg-[#e07b16] text-white font-bold text-xs uppercase px-6 py-[9px] rounded-r-full transition-colors tracking-wider">
            Search
          </button>
        </div>

        <div className="flex items-center gap-5 text-[#282828] font-semibold text-xs">
          <button className="hover:text-[#f68b1e] bg-transparent border-none cursor-pointer">👤 Account ▼</button>
          <button className="hover:text-[#f68b1e] bg-transparent border-none cursor-pointer">❓ Help ▼</button>
          <a href="/cart" className="hover:text-[#f68b1e] font-bold">🛒 Cart</a>
        </div>
      </div>

      {/* Lower Row: Horizontal Custom Action Scroller Bar Strip */}
      <div className="w-full border-t border-gray-100 hidden md:block bg-white relative">
        <div className="max-w-[1184px] mx-auto px-8 relative flex items-center">

          {/* LEFT SCROLL ARROW BUTTON */}
          <button 
            type="button" 
            onClick={scrollLeft}
            className="absolute left-1 z-30 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md text-gray-500 hover:text-black text-xs font-bold transition cursor-pointer"
          >
            &lt;
          </button>

          {/* THE OVERFLOW CONTAINER TRACK ROW CONTAINER */}
          <div 
            ref={scrollContainerRef}
            className="w-full flex items-center justify-start gap-6 text-[11px] font-medium text-gray-600 overflow-x-auto scrollbar-none py-3 relative scroll-smooth"
          >
            {autoLinks.map((category, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative py-1"
              >
                <a href="#" className="whitespace-nowrap hover:text-[#f68b1e] transition-colors tracking-wide flex items-center gap-1.5 py-0.5">
                  <span className="text-sm opacity-90">{category.icon}</span>
                  <span>{category.name}</span>
                </a>
              </div>
            ))}
          </div>

          {/* RIGHT SCROLL ARROW BUTTON */}
          <button 
            type="button" 
            onClick={scrollRight}
            className="absolute right-1 z-30 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md text-gray-500 hover:text-black text-xs font-bold transition cursor-pointer"
          >
            &gt;
          </button>

        </div>
      </div>

      {/* 🟢 FIXED DRAG AND DROPDOWN CONNECTOR HOOKS */}
      <NavbarDropdown 
        activeData={autoLinks[hoveredIndex]} 
        // Keeps the index active when hovering the container box
        onHover={() => setHoveredIndex(hoveredIndex)} 
        // Wipes the index to null only when exiting completely
        onLeave={() => setHoveredIndex(null)} 
      />
    </div>
  );
}
