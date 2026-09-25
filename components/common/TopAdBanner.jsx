// components/common/TopAdBanner.js
export default function TopAdBanner() {
  return (
    <div className="w-full bg-[#8a3ffc] text-white overflow-hidden shadow-sm">
      <div className="max-w-[1184px] mx-auto flex items-center justify-between h-[50px] px-4">
        
        {/* Left Side: Brand Ad Graphic Label */}
        <div className="flex items-center gap-3">
          <div className="font-serif italic text-lg border-b border-white leading-none">V</div>
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-wider leading-none">Brand Day</span>
            <span className="text-[9px] opacity-80 tracking-tight">Up to 30% off top items</span>
          </div>
        </div>

        {/* Right Side: Call to Order Callout */}
        <div className="bg-white text-[#282828] h-full flex flex-col justify-center items-end px-6 border-l border-gray-100 min-w-[180px]">
          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Call to order</span>
          <span className="text-xs font-black tracking-tight">0201 888 3300</span>
        </div>

      </div>
    </div>
  );
}
