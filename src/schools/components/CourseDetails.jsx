import { useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "./Sidebar";
import soetSections from "../SOET/data/sectionComponents";
import soetSidebar from "../SOET/data/sidebarData";
import socseSections from "../SOCSE/data/sectionComponents";
import socseSidebar from "../SOCSE/data/sidebarData";
import socmsSections from "../SOCMS/data/sectionComponents";
import socmsSidebar from "../SOCMS/data/sidebarData";
import sosSections from "../SOS/data/sectionComponents";
import sosSidebar from "../SOS/data/sidebarData";
import sopsSections from "../SOPS/data/sectionComponents";
import sopsSidebar from "../SOPS/data/sidebarData";
import solSections from "../SOL/data/sectionComponents";
import solSidebar from "../SOL/data/sidebarData";
import sodSections from "../SOD/data/sectionComponents";
import sodSidebar from "../SOD/data/sidebarData";
import aboutBanner from "../../assets/images/slider2.webp";

const sectionsMap = { soet: soetSections, socse: socseSections, socms: socmsSections, sos: sosSections, sops: sopsSections, sol: solSections, sod: sodSections };
const sidebarMap = { soet: soetSidebar, socse: socseSidebar, socms: socmsSidebar, sos: sosSidebar, sops: sopsSidebar, sol: solSidebar, sod: sodSidebar };

const CourseDetails = () => {
  const { schoolSlug } = useParams();
  const [activeSection, setActiveSection] = useState("about");
  const sectionComponents = sectionsMap[schoolSlug] || soetSections;
  const sidebarData = sidebarMap[schoolSlug] || soetSidebar;
  const ActiveSection = sectionComponents[activeSection];

  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge={schoolSlug ? schoolSlug.toUpperCase() : "School"} title={schoolSlug ? schoolSlug.toUpperCase() : "School"} description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence." currentPage="About" image={aboutBanner} />
      <section className="bg-[var(--surface)] py-20 transition-colors duration-300 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            <Sidebar sidebarData={sidebarData} schoolName={schoolSlug ? schoolSlug.toUpperCase() : "School"} activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="min-h-[700px] rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-6 transition-colors duration-300 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">School profile</p>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold capitalize text-[var(--ink)]">{activeSection}</h2>
              {ActiveSection && <ActiveSection />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CourseDetails;
