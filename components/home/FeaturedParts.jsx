// components/home/FeaturedParts.js
"use client";

import { RiVipCrownLine, RiSparklingLine, RiPriceTag3Line } from "react-icons/ri";

const featuredParts = [
  {
    brand: "Brembo",
    name: "Front Brake Pad Set",
    partNo: "BP-2041",
    price: "₦64,900",
    oldPrice: "₦78,000",
    rating: 4.5,
    reviews: 210,
    badge: "BEST SELLER",
    badgeIcon: RiVipCrownLine,
    badgeStyle: "text-white",
    image: "/images/featuredproducts/frontbrake-pads-set.jpg",
  },
  {
    brand: "Bosch",
    name: "Oil Filter 0451103",
    partNo: "OF-1182",
    price: "₦11,400",
    rating: 3,
    reviews: 96,
    badge: "NEW",
    badgeIcon: RiSparklingLine,
    badgeStyle: "text-white",
    image: "/images/products/oil-filter.jpg",
  },
  {
    brand: "TRW",
    name: "Brake Disc 280mm",
    partNo: "BD-3307",
    price: "₦48,000",
    oldPrice: "₦55,000",
    rating: 4,
    reviews: 74,
    badge: "SALE",
    badgeIcon: RiPriceTag3Line,
    badgeStyle: "text-white",
    image: "/images/products/brake-disc.jpg",
  },
  {
    brand: "NGK",
    name: "Spark Plug Iridium x4",
    partNo: "SP-7710",
    price: "₦32,500",
    rating: 5,
    reviews: 153,
    image: "/images/products/spark-plugs.jpg",
  },
];

{/* Star rating development */}
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5 text-yellow-400 text-sm">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}
      {hasHalf && <span>☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      ))}
    </div>
  );
}

export default function FeaturedParts() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured parts</h2>
            <p className="text-sm text-gray-500 mt-1">Popular this week</p>
          </div>
          <a href="#" className="inline-block border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-400 font-normal px-6 py-1.5 rounded-lg transition-colors">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featuredParts.map((part, index) => {
            const BadgeIcon = part.badgeIcon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow relative"
              >
                {/* Blinking Badge */}
                {part.badge && (
                  <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded flex items-center gap-1 z-10 badge-blink ${part.badgeStyle}`}>
                    {BadgeIcon && <BadgeIcon className="w-3 h-3" />}
                    {part.badge}
                  </span>
                )}

                <div className="bg-gray-10 h-72 flex items-center justify-center p-2 overflow-hidden relative">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="w-full h-auto max-h-full object-contain transition-transform duration-300 ease-out hover:scale-110 group-hover:scale-105 transform"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-semibold text-gray-400 tracking-wider">{part.brand}</p>
                  <h3 className="font-semibold text-sm text-gray-900 mt-1 leading-tight line-clamp-2">{part.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Part no. {part.partNo}</p>

                  <div className="flex items-center gap-1 mt-2">
                    <StarRating rating={part.rating} />
                    <span className="text-xs text-gray-500">({part.reviews})</span>
                  </div>

                  <div className="mt-2 flex items-baseline gap-2">
                    <p className="font-bold text-lg text-gray-900">{part.price}</p>
                    {part.oldPrice && (
                      <p className="text-sm text-gray-400 line-through">{part.oldPrice}</p>
                    )}
                  </div>

                  <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-block border border-orange-500 text-orange-500 hover:bg-orange-400 hover:text-white font-normal px-5 py-1.5 rounded-lg transition-colors">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
