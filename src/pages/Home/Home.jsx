import Hero from "./Hero/Hero";
import FloatingAction from "../../components/FloatingAction";
import QuickLinks from "./QuickLink/QuickLinks";

import Footer from "../../components/Footer";
import AboutSandipUniversity from "./AboutSandipUniversity";
import StudentStories from "./StudentStories/StudentStories";
import FindProgram from "./FindProgram";

import WhySandipAndLegacy from "./WhySandipAndLegacy";
import CampusTour from "./CampusView/CampusTour";
import ConnectCampus from "./ConnectCampus";

import Recruiters from "./Recruiters/Recruiters";
import TestimonialsFAQ from "./TestimonialsFAQ/TestimonialsFAQ";
import SocialMedia from "./SocialMedia/SocialMedia";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Popup from "../../components/Popup";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div className="homepage-wrapper font-sans antialiased text-[#2A080C] bg-[#FAF6EE] selection:bg-[#C8102E] selection:text-white transition-colors">
      <Popup />
      <SEO {...seoData.home} />

      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <AboutSandipUniversity />
        <FindProgram />
        <WhySandipAndLegacy />
        <StudentStories />
        <CampusTour />
        <ConnectCampus />
        <Recruiters />
        <TestimonialsFAQ />
        <SocialMedia />
      </main>
      <Footer />
      <FloatingAction />
    </div>
  );
}