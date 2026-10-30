"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRBand() {
  return (
    <section className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
              Every part gets a QR code.
            </h2>
            <p className="text-orange-100 mb-6 max-w-md">
              Generate labels for your stock, scan to see fitment, price and stock, and reorder in one tap.
            </p>

            <ul className="space-y-2.5 text-sm mb-8">
              <li className="flex items-center gap-2">
                <span>✓</span> Generate single or bulk QR labels
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span> Print-ready PNG, SVG and PDF
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span> Scan opens the live product page
              </li>
            </ul>

            <a
              href="/qr-tools"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white hover:text-orange-300 font-medium px-5 py-3 rounded-lg transition-colors"
            >
              → Open QR generator
            </a>
          </div>

          {/* Right QR Card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white text-black rounded-2xl p-5 shadow-lg text-center">
              <QRCodeSVG
                value="https://thatsshakes.com/p/BP-2041"
                size={160}
              />
              <p className="text-xs text-gray-500 mt-3">
                thatsshakesexp.com/p/BP-2041
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}