// app/layout.js
import { Fira_Sans_Condensed } from "next/font/google";
import "./globals.css"; 
import Header from "../components/common/Header";
import Footer from "@/components/common/Footer"; 

const firaSansCondensed = Fira_Sans_Condensed({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaSansCondensed.variable}>
      <body className="bg-[#f5f5f5] min-h-screen antialiased text-[#282828] flex flex-col m-0 p-0">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}