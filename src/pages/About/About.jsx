import { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import aboutBanner from "../../assets/images/slider2.webp";

import AboutTabs from "./AboutTabs";
import AboutContentArea from "./AboutContentArea";


export default function About() {

  const [activeTab, setActiveTab] = useState("about-us");

  return (
    <>
      <SEO {...seoData.about} />

      <Header />

      <Breadcrumb
        badge="About University"
        title="About Sandip University"
        description="Discover our journey, vision, mission, leadership, governance, and commitment to academic excellence."
        currentPage="About"
        image={aboutBanner}
      />

      <section className="
        py-20
        bg-white
        dark:bg-black
        transition-colors
      ">

        <div className="
          max-w-[1600px]
          mx-auto
          px-5
        ">

          {/* Horizontal Section Tabs */}

          <div className="
            flex
            justify-center
            mb-12
            w-full
          ">
            <AboutTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Content Below Tabs */}

          <div>
            <AboutContentArea
              activeTab={activeTab}
            />
          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}
