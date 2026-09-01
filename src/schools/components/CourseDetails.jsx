import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "./Sidebar";
import aboutBanner from "../../assets/images/slider2.webp";
import { getProgramDetails } from "../data/courseDetailsData";
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

const sectionsMap = { "engineering-technology": soetSections, "computer-science": socseSections, management: socmsSections, science: sosSections, pharma: sopsSections, law: solSections, "fashion-beauty": sodSections };
const sidebarMap = { "engineering-technology": soetSidebar, "computer-science": socseSidebar, management: socmsSidebar, science: sosSidebar, pharma: sopsSidebar, law: solSidebar, "fashion-beauty": sodSidebar };

function DetailList({ items }) {
  return <ul className="mt-8 space-y-4">{items.map((item) => <li key={item} className="flex items-start gap-3 text-[var(--ink)]"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-red-600)]" />{item}</li>)}</ul>;
}

function ProgramSection({ section, program }) {
  const heading = section.id === "overview" ? program.title : section.heading;
  const body = section.id === "overview" ? program.departmentDescription || `This programme is part of ${program.schoolName}.` : section.body;

  return <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">{section.title}</p><h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)] md:text-5xl">{heading}</h2><p className="mt-5 max-w-3xl leading-8 text-[var(--ink-muted)]">{body}</p>{section.id === "overview" && <div className="mt-10 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] p-5"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)]">Level</p><p className="mt-2 font-[var(--font-display)] text-xl font-bold text-[var(--ink)]">{program.level}</p></div><div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] p-5"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)]">School</p><p className="mt-2 font-[var(--font-display)] text-xl font-bold text-[var(--ink)]">{program.schoolName}</p></div></div>}{section.items && <DetailList items={section.items} />}{section.cards && <div className="mt-8 grid gap-4 sm:grid-cols-2">{section.cards.map((card) => <div key={card} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] p-5 font-semibold text-[var(--ink)]">{card}</div>)}</div>}{section.cta && <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-navy)] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--brand-red-600)]">{section.cta} <ArrowRight size={17} /></Link>}</div>;
}

function NotFound() {
  return <><SEO {...seoData.about} /><Header /><main className="mx-auto max-w-3xl px-6 py-40 text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">Programme</p><h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--ink)]">Programme not found.</h1><Link to="/schools" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[var(--brand-red-600)] px-6 py-3 font-semibold text-white">Back to schools <ArrowRight size={17} /></Link></main><Footer /></>;
}

function ProgramDetails({ program }) {
  const [activeSection, setActiveSection] = useState("overview");
  const activeContent = program.sections.find((section) => section.id === activeSection) || program.sections[0];

  return <><SEO {...seoData.about} /><Header /><Breadcrumb badge={`${program.schoolName} · PROGRAMME`} title={program.title} description={program.departmentDescription || `Explore this programme at ${program.schoolName}.`} currentPage="Programme" image={aboutBanner} /><section className="bg-[var(--surface)] py-20 transition-colors duration-300 md:py-28"><div className="mx-auto max-w-[1600px] px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12"><Sidebar sidebarData={program.sections} schoolName="Programme" activeSection={activeSection} setActiveSection={setActiveSection} /><div className="min-h-[700px] rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-6 md:p-10"><ProgramSection section={activeContent} program={program} /></div></div></div></section><Footer /></>;
}

function SchoolDetails({ schoolSlug }) {
  const [activeSection, setActiveSection] = useState("about");
  const sectionComponents = sectionsMap[schoolSlug] || soetSections;
  const sidebarData = sidebarMap[schoolSlug] || soetSidebar;
  const ActiveSection = sectionComponents[activeSection];

  return <><SEO {...seoData.about} /><Header /><Breadcrumb badge={schoolSlug ? schoolSlug.toUpperCase() : "School"} title={schoolSlug ? schoolSlug.toUpperCase() : "School"} description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence." currentPage="About" image={aboutBanner} /><section className="bg-[var(--surface)] py-20 transition-colors duration-300 md:py-28"><div className="mx-auto max-w-[1600px] px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12"><Sidebar sidebarData={sidebarData} schoolName={schoolSlug ? schoolSlug.toUpperCase() : "School"} activeSection={activeSection} setActiveSection={setActiveSection} /><div className="min-h-[700px] rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] p-6 transition-colors duration-300 md:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">School profile</p><h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold capitalize text-[var(--ink)]">{activeSection}</h2>{ActiveSection && <ActiveSection />}</div></div></div></section><Footer /></>;
}

export default function CourseDetails() {
  const { schoolSlug, courseSlug } = useParams();
  const program = courseSlug ? getProgramDetails(schoolSlug, courseSlug) : null;

  if (courseSlug && program) return <ProgramDetails program={program} />;
  if (courseSlug) return <NotFound />;
  return <SchoolDetails schoolSlug={schoolSlug} />;
}
