// import AboutUsHero from "../Common/Navbar/About/About-us-hero";
import DiscoverHeroSection from "../Discover/discover-hero-section";
import Certified from "../Pages/Certified";
import ProductHeroSection from "../Products/product-hero-section";
import Seo from "../SEO/Seo";
import VideoSection from "../Video/Video-hero";
import BilonaAboutUsSection from "./bilona-aboutus";
import GheePurity from "./ghee-purity";
import NurituringAboutUs from "./nurturing-about-us-page";
import SustainableFeaturesAboutus from "./sustainable-features-aboutus";

export default function AboutUsHeroMain() {
  return (
    <>
      <Seo
        title="About Gauswarn India | Pure A2 Gir Cow Ghee"
        description="Learn about Gauswarn India's journey, values and traditional bilona process for A2 Gir cow ghee."
        url="https://gauswarn.com/about"
      />
      <ProductHeroSection />
      <Certified />
      {/* <AboutUsHero /> */}
      <DiscoverHeroSection />
      <NurituringAboutUs />
      <GheePurity />
      <BilonaAboutUsSection />
      <VideoSection />
      <SustainableFeaturesAboutus />
    </>
  );
}
