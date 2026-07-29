import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import AboutOverview from "./AboutOverview";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import aboutBanner from "../../assets/images/slider2.webp";
import WhoWeAre from "./WhoWeAre";

export default function About() {
  return (
    <>
      <SEO {...seoData.about} />
<Header/>
       <Breadcrumb
        badge="About University"
        title="About Sandip University"
        description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence."
        currentPage="About"
        image={aboutBanner}
      />


      <AboutOverview/>
      <WhoWeAre/>
      <Footer/>

      {/* Next Section Here */}
    </>
  );
}