// components/home/Testimonials.js
"use client";

import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine, RiTeamLine } from "react-icons/ri";

const testimonials = [
  {
    name: "Exito A",
    initial: "E",
    text: "My first time ever getting something online, it came through safely and same day too. I made a big purchase from THATSSHAKES EXPRESS. They even surprised me with gifts. They've formidably opened my eyes to things that I didn’t know about. THATSSHAKES CEO is a great and handsome guy that knows his stuff.",
    rating: 5,
  },
  {
    name: "Brane Baba",
    initial: "B",
    text: "THATSSHAKES is selling trust, honesty and integrity not just auto parts. There is this mad confidence in online purchase that comes when you’re dealing with them.",
    rating: 5,
  },
  {
    name: "Chukwuma ODG",
    initial: "C",
    text: "Excellent service and quality products! The delivery was prompt and the customer support was outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "Major Dotun.",
    initial: "M",
    text: "I’ve been shopping here for months now and every single time the experience gets better. Genuine products at great prices.",
    rating: 4,
  },
  {
    name: "Precious O.",
    initial: "P",
    text: "Professional service from start to finish. They really care about customer satisfaction. Will definitely order again!",
    rating: 5,
  },
  {
    name: "Teju YD.",
    initial: "T",
    text: "Got the exact brake pads I needed for my Camry. Fitment was perfect and the QR code made reordering easy. Will buy again.",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-2xl mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => {
      if (prev >= testimonials.length - 3) {
        return 0; // jump back to start
        }
      return prev + 1;
    });
};

  const prev = () => {
      setCurrent((prev) => {
         if (prev <= 0) {
            return testimonials.length - 3; // jump to end
            }
        return prev - 1;
    });
};


  // Auto-scroll every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="mb-8">
          <p className="text-orange-400 text-sm font-medium tracking-wider flex items-center gap-1.5">
            <RiTeamLine className="w-4 h-4" />
            TESTIMONIALS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
            Hear from our Customers
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-5">
            {visible.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <StarRating rating={item.rating} />
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-5">
                  {item.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.initial}
                  </div>
                  <span className="font-medium text-gray-900 text-sm">{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 bg-white border border-gray-200 hover:border-orange-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50"
          >
            <RiArrowLeftSLine className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 bg-white border border-gray-200 hover:border-orange-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50"
          >
            <RiArrowRightSLine className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}