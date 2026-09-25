// components/common/Header.jsx
import TopAdBanner from "./TopAdBanner";
import MainNavBar from "./MainNavBar"; // 🟢 FIX: Change lowercase 'b' to capital 'B'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 flex flex-col">
      <TopAdBanner />
      <MainNavBar />
    </header>
  );
}


