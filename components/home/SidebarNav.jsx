//LEFT SIDEBAR NAVIGATUION OF JUMIA

// components/home/SidebarNav.js
// components/home/SidebarNav.js
export default function SidebarNav() {
  const categories = [
    { name: "Engine Mechanics", icon: "⚙️" },
    { name: "Braking Components", icon: "🛑" },
    { name: "Car Batteries & Power", icon: "🔋" },
    { name: "Lubricants & Engine Oils", icon: "🛢️" },
    { name: "Headlights & Electricals", icon: "💡" },
    { name: "Suspension Systems", icon: "🔩" },
    { name: "Filters & Spark Plugs", icon: "🔌" },
    { name: "Tires & Wheels", icon: "⭕" },
    { name: "Car Accessories", icon: "🚗" },
    { name: "Body Parts & Mirrors", icon: "🪞" },
    { name: "Tools & Equipment", icon: "🛠️" },
  ];

  return (
    <nav className="flex flex-col text-[12px] text-marketplace-text font-normal">
      {categories.map((cat, idx) => (
        <a 
          key={idx} 
          href="#" 
          className="flex items-center gap-2.5 px-3 py-[7px] hover:text-brand-primary transition-colors duration-150 rounded-sm"
        >
          <span className="text-[14px] opacity-80">{cat.icon}</span>
          <span className="truncate">{cat.name}</span>
        </a>
      ))}
    </nav>
  );
}
