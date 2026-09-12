import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu'; // Pulling in our fresh isolated script

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-brand-yellow p-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Section: Renders your standalone component side-by-side with text */}
        <div className="flex items-center gap-4 text-center md:text-left">
          
          {/* CALLING THE SEPARATED MENU BLOCK HERE */}
          <HamburgerMenu />

          <div className="flex flex-col">
            <h1 className="text-brand-orange text-2xl font-black tracking-tight select-none">
              REALMANTAI <span className="text-brand-dark">EXPRESS</span>
            </h1>
          </div>
        </div>
        
        {/* Center Section: Search Field */}
        <div className="w-full md:flex-1 max-w-xl mx-0 md:mx-6 flex items-center shadow-xs">
          <input 
            type="text" 
            placeholder="Search spare parts, engine oils, brake pads..." 
            className="w-full border-2 border-brand-orange border-r-0 rounded-l-md px-3 py-2 text-sm text-brand-dark bg-white focus:outline-none placeholder-slate-400"
          />
          <button className="bg-brand-orange text-white text-xs font-bold px-5 py-2.5 rounded-r-md uppercase tracking-wider transition-colors hover:bg-brand-dark active:bg-brand-yellow active:text-brand-dark whitespace-nowrap">
            Search
          </button>
        </div>
        
        {/* Right Section: Navigation Menu Anchors */}
        <div className="flex items-center space-x-6 text-sm font-medium text-brand-dark">
          <Link 
            href="/login" 
            className="hover:text-brand-orange active:bg-brand-yellow px-3 py-2 rounded-lg transition-all flex items-center gap-1 border border-transparent whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            User Login
          </Link>
          <div className="hover:text-brand-orange cursor-pointer flex items-center gap-1 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
          </div>
        </div>

      </div>
    </header>
  );
}
