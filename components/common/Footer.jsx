// components/common/Footer.js
"use client";

import { RiTruckLine, RiShieldCheckLine, RiSecurePaymentLine, RiMapPinLine, RiPhoneLine, RiMailLine, RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 -mt-12">
      {/* Top trust bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex flex-col md:flex-row items-center justify-evenly gap-30 text-sm">
          <div className="flex items-center gap-2">
            <RiTruckLine className="text-orange-400 w-5 h-5" />
            <span>Fast Nationwide Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <RiShieldCheckLine className="text-orange-400 w-5 h-5" />
            <span>Genuine Products, Warrantied</span>
          </div>
          <div className="flex items-center gap-2">
            <RiSecurePaymentLine className="text-orange-400 w-5 h-5" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Brand + Logo */}
          <div className="lg:col-span-4">
            <img 
              src="/images/thatsshakes_express_logo_real.png" 
              alt="THATSSHAKES EXPRESS" 
              className="h-30 w-auto mb-5 object-contain"
            />
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Your trusted source for genuine auto parts — great prices, fast delivery and support that actually helps.
            </p>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <RiMapPinLine className="text-orange-400" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <RiPhoneLine className="text-orange-400" />
                <span>+234 814 281 4834</span>
              </div>
              <div className="flex items-center gap-2">
                <RiMailLine className="text-orange-400" />
                <span>hello@thatsshakes.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-6 mt-25">
            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-300">All Products</a></li>
                <li><a href="#categories" className="hover:text-orange-300">Categories</a></li>
                <li><a href="#" className="hover:text-orange-300">Deals</a></li>
                <li><a href="#" className="hover:text-orange-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-orange-300">Brands</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-300">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:text-orange-300">Returns & Warranty</a></li>
                <li><a href="#" className="hover:text-orange-300">Track Your Order</a></li>
                <li><a href="#" className="hover:text-orange-300">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-300">About Us</a></li>
                <li><a href="#" className="hover:text-orange-300">Our Stores</a></li>
                <li><a href="#" className="hover:text-orange-300">Careers</a></li>
                <li><a href="#" className="hover:text-orange-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} THATSSHAKES EXPRESS. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:border-orange-300 hover:text-orange-500">
              <RiTwitterXFill className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:border-orange-300 hover:text-orange-500">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:border-orange-300 hover:text-orange-500">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:border-orange-300 hover:text-orange-500">
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
