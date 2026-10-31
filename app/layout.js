import { Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";

const firaSansCondensed = Fira_Sans_Condensed({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaSansCondensed.variable}>
      <body className="bg-[#f5f5f5] min-h-screen antialiased text-[#282828]">
        {children}
      </body>
    </html>
  );
}
