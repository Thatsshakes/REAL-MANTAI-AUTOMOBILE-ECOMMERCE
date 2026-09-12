"use client";

export default function CategoryMenu({ activeCategory, setActiveCategory }) {
  const categories = [
    {
      name: "Engine Mechanics",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: "Braking Components",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3" />
        </svg>
      )
    },
    {
      name: "Car Batteries & Power",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 6V4h2v2M15 6V4h2v2M7 12h2m6 0h2" />
        </svg>
      )
    },
    {
      name: "Lubricants & Engine Oils",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V21" />
        </svg>
      )
    },
    {
      name: "Headlights & Electricals",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      )
    },
    {
      name: "Suspension Systems",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8M8 20h8M12 4v16M9 9h6M9 15h6" />
        </svg>
      )
    }
  ];

  return (
    <aside className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col space-y-1 text-sm col-span-1 hidden md:flex h-fit">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-3 pt-1">Top Categories</span>
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(index)}
          className={`w-full text-left px-3 py-2 rounded-md transition-all font-medium text-sm flex items-center gap-2.5 cursor-pointer border-none bg-white ${
            activeCategory === index
              ? 'bg-brand-yellow text-brand-dark shadow-sm font-semibold' 
              : 'text-slate-600 hover:text-brand-orange hover:bg-slate-50'
          }`}
        >
          <span className={activeCategory === index ? "text-brand-dark" : "text-slate-400"}>
            {cat.icon}
          </span>
          {cat.name}
        </button>
      ))}
    </aside>
  );
}
