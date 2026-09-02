import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import FloatingAction from "../../components/FloatingAction";

import InternationalHero from "../../components/InternationalAdmissions/InternationalHero";
import InternationalIntro from "../../components/InternationalAdmissions/InternationalIntro";
import WhyChooseSection from "../../components/InternationalAdmissions/WhyChooseSection";
import UniversityStats from "../../components/InternationalAdmissions/UniversityStats";
import AcademicSchools from "../../components/InternationalAdmissions/AcademicSchools";
import StudentJourney from "../../components/InternationalAdmissions/StudentJourney";
import CampusLife from "../../components/InternationalAdmissions/CampusLife";
import InternationalCommunity from "../../components/InternationalAdmissions/InternationalCommunity";
import EventsSection from "../../components/InternationalAdmissions/EventsSection";
import InternationalCTA from "../../components/InternationalAdmissions/InternationalCTA";
import InternationalSupport from "../../components/InternationalAdmissions/InternationalSupport";

import "./Overview.css";

export default function InternationalOverviewPage() {
  return (
    <div className="intl-overview-page min-h-screen bg-white dark:bg-[#0c0c0d] text-slate-900 dark:text-white font-sans selection:bg-orange-500 selection:text-white">
      <SEO {...seoData.international} />
      <Header />

      {/* 1. Hero Section */}
      <InternationalHero />

      {/* 2. Experience Intro */}
      <InternationalIntro />

      {/* 3. Why Choose Sandip */}
      <WhyChooseSection />

      {/* 4. University At A Glance (Stats) */}
      <UniversityStats />

      {/* 5. Schools & Academic Opportunities */}
      <AcademicSchools />

      {/* 6. International Student Journey */}
      <StudentJourney />

      {/* 7. Campus & Student Life */}
      <CampusLife />

      {/* 8. International Community */}
      <InternationalCommunity />

      {/* 9. Events & Experiences */}
      <EventsSection />

      {/* 10. Final CTA */}
      <InternationalCTA />

      {/* 11. Quick Contact / Support */}
      <InternationalSupport />

      {/* 12. Global Footer */}
      <Footer />

      <FloatingAction />
    </div>
  );
}
