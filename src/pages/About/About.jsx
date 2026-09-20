import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";

import AboutHero from "./components/AboutHero";
import WhoWeAreEditorial from "./components/WhoWeAreEditorial";
import VisionMissionSection from "./components/VisionMissionSection";
import LeadershipSection from "./components/LeadershipSection";
import GovernanceSection from "./components/GovernanceSection";
import RecognitionsSection from "./components/RecognitionsSection";
import GroupInstitutionsSection from "./components/GroupInstitutionsSection";
import OurJourneySection from "./components/OurJourneySection";
import AboutCTA from "./components/AboutCTA";

export default function About() {
  return (
    <>
      <SEO {...seoData.about} />
      <Header />

      <main className="min-h-screen bg-[#FAF7F2] dark:bg-[#161411] font-sans antialiased selection:bg-[#C8102E] selection:text-white">
        {/* 01 — Hero */}
        <AboutHero />

        {/* 02 — Who We Are */}
        <WhoWeAreEditorial />

        {/* 03 — Vision & Mission */}
        <VisionMissionSection />

        {/* 04 — Leadership */}
        <LeadershipSection />

        {/* 05 — Governance */}
        <GovernanceSection />

        {/* 06 — Recognition & Collaborations */}
        <RecognitionsSection />

        {/* 07 — Group Institutions */}
        <GroupInstitutionsSection />

        {/* 08 — Our Journey / Milestones */}
        <OurJourneySection />

        {/* 09 — Closing CTA */}
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}