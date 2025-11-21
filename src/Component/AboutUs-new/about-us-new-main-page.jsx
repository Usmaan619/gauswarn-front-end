import AboutUsHero from "../Common/Navbar/About/About-us-hero";
import DiscoverHeroSection from "../Discover/discover-hero-section";
import Certified from "../Pages/Certified";
import ProductHeroSection from "../Products/product-hero-section";
import VideoSection from "../Video/Video-hero";
import BilonaAboutUsSection from "./bilona-aboutus";
import GheePurity from "./ghee-purity";
import NurituringAboutUs from "./nurturing-about-us-page";
import SustainableFeaturesAboutus from "./sustainable-features-aboutus";

export default function AboutUsHeroMain() {
  return (
    <>
      <ProductHeroSection />
      <Certified />
      <AboutUsHero />
      <DiscoverHeroSection />
      <NurituringAboutUs />
      <GheePurity />
      <BilonaAboutUsSection />
      <VideoSection />
      <SustainableFeaturesAboutus />
    </>
  );
}
