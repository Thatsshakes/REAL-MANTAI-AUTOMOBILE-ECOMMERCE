"use client";

import { useState } from 'react';

export default function OPayCheckout({ selectedProduct }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const accountNumber = "8012345678";

  // Handles copying the bank details cleanly to the clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Resets button alert after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="md:col-span-1">
      <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-brand-yellow sticky top-24">
        
        {/* Title Header */}
        <h2 className="text-brand-orange mb-1 text-2xl font-bold tracking-tight">OPay Checkout</h2>
        <p className="text-slate-500 text-xs mb-5 transition-all">
          {selectedProduct ? `Selected: ${selectedProduct.name}` : "Select a spare part to generate payment info"}
        </p>
        
        {/* Verification Input Field */}
        <div className="mb-4 text-left w-full">
          <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">
            Your Phone Number (For Verification)
          </label>
          <input 
            type="tel" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g., 08012345678" 
            className="w-full p-2.5 bg-white border-2 border-brand-yellow rounded-lg text-sm font-semibold text-brand-dark focus:outline-none focus:border-brand-orange transition-colors" 
          />
        </div>

        {/* Banking Account Data Summary Box */}
        <div className="bg-white border border-brand-yellow p-4 rounded-lg text-left mb-4 text-sm space-y-2.5">
          <div className="text-brand-dark">
            <strong className="text-slate-400 font-medium">Bank:</strong> OPay Bank
          </div>
          <div className="text-brand-dark flex justify-between items-center">
            <div>
              <strong className="text-slate-400 font-medium">Account No:</strong>{" "}
              <span className="font-mono tracking-wider font-bold text-brand-dark">{accountNumber}</span>
            </div>
          </div>
          <div className="text-brand-dark">
            <strong className="text-slate-400 font-medium">Account Name:</strong> RealMantai Exp. Ltd
          </div>
          
          {/* Dynamic Price Calculation Insertion */}
          {selectedProduct && (
            <div className="text-brand-dark border-t border-brand-yellow/30 pt-2.5 mt-2 flex justify-between items-baseline animate-in fade-in duration-200">
              <strong className="text-brand-orange font-bold">Amount Due:</strong> 
              <span className="font-black text-xl text-brand-orange">{selectedProduct.priceFormatted}</span>
            </div>
          )}
        </div>

        {/* Action Trigger Button */}
        <button 
          onClick={handleCopy}
          className="bg-brand-orange hover:bg-brand-dark active:bg-brand-yellow active:text-brand-dark text-white py-3 px-4 text-xs font-bold rounded-lg w-full transition-all duration-200 uppercase tracking-wider shadow-sm cursor-pointer border-none"
        >
          {isCopied ? "✓ Account Copied!" : "Copy Account Number"}
        </button>

      </div>
    </div>
  );
}
