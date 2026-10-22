// components/home/CategoryMenu.js
"use client";

import { 
  RiSettings3Line, 
  RiShieldLine, 
  RiLayoutGridLine, 
  RiFlashlightLine, 
  RiFilterLine, 
  RiCarLine 
} from "react-icons/ri";

const categories = [
  { name: "Engine", count: "1,240 parts", icon: RiSettings3Line },
  { name: "Brakes", count: "860 parts", icon: RiShieldLine },
  { name: "Suspension", count: "740 parts", icon: RiLayoutGridLine },
  { name: "Electrical", count: "1,050 parts", icon: RiFlashlightLine },
  { name: "Filters", count: "430 parts", icon: RiFilterLine },
  { name: "Body", count: "910 parts", icon: RiCarLine },
];

export default function CategoryMenu() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Shop by category</h2>
          <p className="text-sm text-gray-500 mt-1">Everything from filters to full engine kits</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <a
                key={index}
                href="#"
                className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md hover:border-orange-300 transition-all group"
              >
                <div className="w-10 h-10 mx-auto mb-3 bg-gray-100 group-hover:bg-orange-50 text-gray-600 group-hover:text-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-semibold text-sm text-gray-900">{cat.name}</p>
                <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}