// components/home/TrustStrip.js
"use client";

import { RiTruckLine, RiShieldCheckLine, RiToolsLine, RiCustomerService2Line } from "react-icons/ri";

const trustItems = [
  {
    icon: RiTruckLine,
    title: "Fast delivery",
    subtitle: "Same-day dispatch before 2pm",
  },
  {
    icon: RiShieldCheckLine,
    title: "12-month warranty",
    subtitle: "On every genuine part",
  },
  {
    icon: RiToolsLine,
    title: "Fitment guaranteed",
    subtitle: "Check by VIN or reg",
  },
  {
    icon: RiCustomerService2Line,
    title: "Expert support",
    subtitle: "Mon–Sat, 8am–6pm",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-orange-50/60 rounded-xl px-4 py-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
