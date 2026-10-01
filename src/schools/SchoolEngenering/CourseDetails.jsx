import { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import Sidebar from "./components/Sidebar";

import aboutBanner from "../../assets/images/slider2.webp";

import sectionComponents from "./data/sectionComponents";

const CourseDetails = () => {
  const [activeSection, setActiveSection] = useState("about");
  const ActiveSection = sectionComponents[activeSection];

  return (
    <>
      <SEO {...seoData.about} />

      <Header />

      <Breadcrumb
        badge="Engineering"
        title="Engineering"
        description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence."
        currentPage="About"
        image={aboutBanner}
      />

      <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-6">

          <div className="grid lg:grid-cols-[320px_1fr] gap-10">

            {/* Sidebar */}
            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            {/* Content */}
            <div
              className="
                bg-white
                dark:bg-[#111111]
                border
                border-red-100
                dark:border-red-900
                rounded-3xl
                shadow-xl
                min-h-[700px]
                p-10
                transition-colors
                duration-300
              "
            >

              
              <h2 className="text-3xl font-bold text-red-600 capitalize">
                {activeSection}
              </h2>
               {ActiveSection && (
                <ActiveSection />
              )}

              {/* Add your section content here */}
             
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default CourseDetails;