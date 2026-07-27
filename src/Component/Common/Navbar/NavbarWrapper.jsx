import { useEffect, useState } from "react";
import TopBanner from "./TopBanner";
import Header from "./Header";

export default function NavbarWrapper() {
  const [hideBanner, setHideBanner] = useState(false);
  let lastScroll = 0;

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setHideBanner(true);
      } else {
        setHideBanner(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${hideBanner ? "banner-hide" : ""}`}>
      <TopBanner />
      <Header /> {/* ⭐ Pass cartCount here */}
    </div>
  );
}
