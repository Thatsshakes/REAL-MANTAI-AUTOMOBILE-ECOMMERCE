// components/home/HeroSection.js
import SidebarNav from "./SidebarNav";
import MainSlider from "./MainSlider";
import UtilityCards from "./UtilityCards";

export default function HeroSection() {
  return (
    // Max width 1184px perfectly centers the layout on desktop screens
    <section className="max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 px-2 py-4">
      
      {/* 1. LEFT COLUMN: Spans 3 columns out of 12 (Hidden on mobile screens) */}
      <div className="hidden lg:block lg:col-span-3 bg-white rounded shadow-sm py-2 px-1 h-[384px]">
        <SidebarNav />
      </div>

      {/* 2. CENTER COLUMN: Spans 6 columns out of 12 (Takes full width on mobile) */}
      <div className="col-span-1 lg:col-span-6 bg-white rounded shadow-sm overflow-hidden h-[384px]">
        <MainSlider />
      </div>

      {/* 3. RIGHT COLUMN: Spans 3 columns out of 12 (Hidden on mobile screens) */}
      <div className="hidden lg:block lg:col-span-3 h-[384px]">
        <UtilityCards />
      </div>
      
    </section>
  );
}
