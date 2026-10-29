// components/home/WhyShopWithUs.js
"use client";

import { RiTruckLine, RiShieldCheckLine, RiLockLine, RiCustomerService2Line } from "react-icons/ri";

const reasons = [
  {
    icon: RiTruckLine,
    title: "Fast Delivery",
    description: "Same-day dispatch on orders placed before 2PM, nationwide.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Genuine Products",
    description: "Only authentic items, sourced directly from trusted brands.",
  },
  {
    icon: RiLockLine,
    title: "Secure Payment",
    description: "Your transactions are protected end to end, every time.",
  },
  {
    icon: RiCustomerService2Line,
    title: "24/7 Support",
    description: "A real team ready to help before, during and after your order with integrated AI Automobile service.",
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            Why Shop With Us
            <span className="text-orange-500">🛒</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            The little things that make every order worry-free.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
