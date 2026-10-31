// components/common/TopAdBanner.js
"use client";

export default function TopAdBanner() {
  const messages = [
    "Genuine Auto Parts Trusted by Thousands",
    "Same-Day Dispatch on Orders Before 2PM",
    "10% Off Your First Order — Use Code: SHAKES10",
    "Free Delivery on Orders Over ₦100,000",
    "12-Month Warranty",
  ];

  return (
    <div className="bg-black text-white text-xs md:text-xs overflow-hidden py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {messages.map((msg, i) => (
          <span key={i} className="mx-6 flex items-center gap-2">
            <span className="w-1 h-1 bg-orange-500 rounded-full" />
            {msg}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {messages.map((msg, i) => (
          <span key={`dup-${i}`} className="mx-6 flex items-center gap-2">
            <span className="w-1 h-1 bg-orange-500 rounded-full" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}