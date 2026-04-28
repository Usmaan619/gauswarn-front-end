// import AboutUsHero from "../Common/Navbar/About/About-us-hero";
import DiscoverHeroSection from "../Discover/discover-hero-section";
import Certified from "../Pages/Certified";
import VideoPage from "../Pages/VideoPage";
import ProductHeroSection from "../Products/product-hero-section";
import Seo from "../SEO/Seo";
import BilonaAboutUsSection from "./bilona-aboutus";
import GheePurity from "./ghee-purity";
import NurituringAboutUs from "./nurturing-about-us-page";
import SustainableFeaturesAboutus from "./sustainable-features-aboutus";

export default function AboutUsHeroMain() {
  return (
    <>
      <Seo
        title="About Gauswarn India | Pure A2 Cow Ghee Journey & Process"
        description="Discover how Gauswarn India prepares 100% pure A2 Cow Ghee using the traditional Bilona method. Learn about our Gaushala, values, and commitment to quality."
        url="https://gauswarn.com/about"
      />
      <h1 className="sr-only">
        About Gauswarn India - Our Journey and Bilona Method
      </h1>
      <ProductHeroSection />
      <Certified />
      {/* <AboutUsHero /> */}
      <DiscoverHeroSection />
      <NurituringAboutUs />
      <GheePurity />
      <BilonaAboutUsSection />
      <VideoPage />
      <SustainableFeaturesAboutus />
    </>
  );
}
