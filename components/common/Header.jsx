// components/common/Header.jsx
import TopAdBanner from "./TopAdBanner";
import MainNavBar from "./MainNavBar"; // 🟢 FIX: Change lowercase 'b' to capital 'B'

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 flex flex-col shadow-none border-none border-b-0 outline-none">
      <TopAdBanner />
      <MainNavBar />
    </header>
  );
}


