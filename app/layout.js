// app/layout.js
import "./globals.css"; // Double check if it's "./globals.css" or "../globals.css" based on your location
import Header from "../components/common/Header"; // This path will now connect perfectly!

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5] min-h-screen font-sans antialiased text-[#282828]">
        <Header />
        {children}
      </body>
    </html>
  );
}
