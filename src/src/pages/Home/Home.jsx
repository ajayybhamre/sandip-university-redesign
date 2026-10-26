import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

import Hero from "./Hero/Hero";
import QuickLinks from "./QuickLink/QuickLinks";
import AboutSection from "./sections/AboutSection";
import WhySection from "./sections/WhySection";
import SchoolsRing from "./sections/SchoolsRing";
import LifeStrip from "./sections/LifeStrip";
import AdmissionsJourney from "./sections/AdmissionsJourney";
import AchieversSection from "./sections/AchieversSection";
import RecruitersMarquee from "./sections/RecruitersMarquee";
import VoicesSection from "./sections/VoicesSection";
import FindUsOnline from "./sections/FindUsOnline";

/* NOTE: <Popup /> and <FloatingAction /> are already mounted once in App.jsx,
   so they are intentionally NOT repeated here (they were showing twice). */
export default function Home() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    AOS.init({
      duration: reduce ? 0 : 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
      disable: reduce,
    });

    // images and videos change the page height after load; re-measure
    const refresh = () => AOS.refreshHard();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 1200);
    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="homepage-wrapper bg-[#FAF8F5] font-sans text-slate-900 antialiased selection:bg-[#C8102E] selection:text-white dark:bg-[#0B0B0D] dark:text-white">
      <SEO {...seoData.home} />
      <Header overlay />

      <main>
        <Hero />
        <QuickLinks />
        <AboutSection />
        <WhySection />
        <SchoolsRing />
        <LifeStrip />
        <AdmissionsJourney />
        <AchieversSection />
        <RecruitersMarquee />
        <VoicesSection />
        <FindUsOnline />
      </main>

      <Footer />
    </div>
  );
}
