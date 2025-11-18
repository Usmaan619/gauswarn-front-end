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
        // Scrolling down → hide banner
        setHideBanner(true);
      } else {
        // Scrolling up → show banner
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
      <Header />
    </div>
  );
}
