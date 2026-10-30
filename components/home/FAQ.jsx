// components/home/FAQ.js
"use client";

import { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Most orders placed before 2 PM are dispatched the same day. Delivery usually takes 1–3 business days depending on your location.",
  },
  {
    question: "Are your products genuine and warrantied?",
    answer: "Yes. All parts are genuine and come with a minimum 12-month warranty. We only source from trusted brands.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept card payments, bank transfer, and OPay. Payment is secured and processed instantly.",
  },
  {
    question: "Can I return an item if I change my mind?",
    answer: "Yes, you can return unused items within 7 days of delivery. Contact support to start a return.",
  },
  {
    question: "Do you offer installation for large appliances?",
    answer: "Installation is available for selected parts in major cities. Contact us after ordering to schedule it.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is dispatched, you’ll receive a tracking link via email and SMS.",
  },
  {
    question: "Is same-day delivery available everywhere?",
    answer: "Same-day delivery is currently available in Lagos and Abuja for orders placed before 2 PM. Other locations take 1–3 days.",
  },
  {
    question: "Do you price match?",
    answer: "Yes, we offer price matching on genuine parts. Contact support with the competitor’s link and we’ll review it.",
  },
  {
    question: "What if my item arrives damaged?",
    answer: "If your item arrives damaged, contact us within 48 hours with photos and we’ll arrange a replacement or refund.",
  },
  {
    question: "How can I reach customer support?",
    answer: "You can reach us via WhatsApp, email, or the live chat on the website. Our team is available Monday to Saturday, 8 AM – 6 PM.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="bg-white py-14">
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Everything you need to know before you order. Still stuck? Our team is here 24/7.
          </p>
        </div>

        <div className="space-y-3">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-orange-400 bg-orange-50/40" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className={`font-medium text-sm md:text-base ${isOpen ? "text-orange-600" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      isOpen ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {isOpen ? (
                      <RiSubtractLine className="w-4 h-4" />
                    ) : (
                      <RiAddLine className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-500 hover:text-white hover:bg-orange-400 font-medium text-sm border border-orange-200 hover:border-orange-300 px-5 py-2 rounded-full transition-colors"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
}