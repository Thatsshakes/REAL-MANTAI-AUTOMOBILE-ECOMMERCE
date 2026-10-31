"use client";

import { useState } from "react";
import Image from "next/image";
import { RiUserLine, RiSearchLine, RiQrScanLine, RiArrowDownSLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

export default function MainNavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Shop", href: "/shop" },
    { 
      name: "Categories", 
      href: "#categories",
      dropdown: ["Engine", "Brakes", "Batteries", "Lubricants", "Suspension", "Filters", "Electrical", "Body"]
    },
    { 
      name: "Brands", 
      href: "#",
      dropdown: ["Bosch", "NGK", "Brembo", "KYB", "Denso", "ACDelco", "Mobil"]
    },
    { 
      name: "QR Tools",
      href: "/qr-tools",
      dropdown: [
        "Generate QR",
        "Scan QR",
        "My QR Codes",
        "Print Labels"]
    },
    { 
      name: "Company", 
      href: "#",
      dropdown: ["About Us", "Contact", "Support", "FAQ"]
    },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="max-w-[1184px] mx-auto px-4 py-3 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center select-none shrink-0 group">
            <img 
              src = "/images/thatsshakes_express_logo_real.png"
              alt = "logo_of_thatsshakes_express"
              className="h-20 md:30 w-[160px] object-contain transition-transform duration-200 group-hover:scale-[1.20]"
            />
          </a>
        </div>
        
        {/* Nav Links with Dropdowns */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium text-gray-800">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a 
                href={item.href} 
                className="flex items-center gap-1 hover:text-orange-500 transition-colors py-2"
              >
                {item.name}
                {item.dropdown && <RiArrowDownSLine className="w-4 h-4" />}
              </a>

              {/* Dropdown Panel */}
              {item.dropdown && openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px] z-50">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md hidden lg:block">
          <div className="relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search part no., name or VIN"
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="p-1.5 hover:text-orange-500" title="Scan QR">
            <RiQrScanLine className="w-5 h-5" />
          </button>
          <a href="/login" className="hover:text-orange-500">
            <RiUserLine className="w-5 h-5" />
          </a>
          <a href="/cart" className="relative hover:text-orange-500">
            <FiShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
