// components/common/NavbarDropdown.jsx
"use client";

export default function NavbarDropdown({ activeData, onHover, onLeave }) {
  if (!activeData) return null;

  return (
    /* The padding cushion wrapper that keeps the menu locked open */
    <div 
      className="absolute left-0 right-0 top-full pt-2 -mt-2 bg-white border-b border-t-2 border-transparent border-gray-200 shadow-xl z-50 animate-fadeIn"
      onMouseEnter={onHover} 
      onMouseLeave={onLeave}
    >
      <div className="bg-white border-t border-gray-100 w-full">
        <div className="max-w-[1184px] mx-auto px-8 py-4 grid grid-cols-5 gap-4">
          
          {/* Left Info Sidebar */}
          <div className="col-span-1 border-r border-gray-100 pr-4">
            <h4 className="text-xs font-black uppercase text-[#f68b1e] tracking-wider mb-2">
              {activeData.name}
            </h4>
            <p className="text-[10px] text-gray-400 font-normal leading-relaxed">
              Premium certified matching replacement components.
            </p>
          </div>

          {/* Right Sub-Items Grid */}
          <div className="col-span-4 grid grid-cols-3 gap-2">
            {/*Clean up of the broken block lines to read directly from activeData */}
            {activeData.subItems.map((subItem, sIdx) => (
              <a
                key={sIdx}
                href="#"
                className="text-xs text-gray-700 hover:text-[#f68b1e] transition-colors py-1 block font-medium border-none"
              >
                🛠️ {subItem}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
