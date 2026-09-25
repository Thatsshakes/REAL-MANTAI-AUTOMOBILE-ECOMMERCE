// components/home/UtilityCards.js
export default function UtilityCards() {
  return (
    <div className="flex flex-col h-full gap-3">
      
      {/* Top Box: Utility Links */}
      <div className="bg-white p-3.5 rounded shadow-sm flex flex-col gap-3 justify-center flex-1">
        
        {/* Call to Order Info */}
        <a href="tel:02018883300" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:border-brand-primary group-hover:text-brand-primary transition-all">
            📞
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-marketplace-text uppercase tracking-tight group-hover:text-brand-primary">CALL TO ORDER</h4>
            <p className="text-[11px] text-gray-500 font-medium">0201 888 3300</p>
          </div>
        </a>

        {/* Seller Link */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:border-brand-primary group-hover:text-brand-primary transition-all">
            📦
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-marketplace-text uppercase tracking-tight group-hover:text-brand-primary">Sell With Us</h4>
            <p className="text-[11px] text-gray-500 font-medium">Join thousands of vendors</p>
          </div>
        </a>

        {/* Hot Deals Area */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 group-hover:border-brand-primary group-hover:text-brand-primary transition-all">
            🔥
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-marketplace-text uppercase tracking-tight group-hover:text-brand-primary">Best Deals</h4>
            <p className="text-[11px] text-gray-500 font-medium">See top selling items</p>
          </div>
        </a>
        
      </div>

      {/* Bottom Box: Promo Card Graphic */}
      <div className="bg-white rounded shadow-sm overflow-hidden h-[155px] cursor-pointer hover:opacity-95 transition-opacity">
        <img 
          src="https://unsplash.com" 
          alt="Side Promotion Banner" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
