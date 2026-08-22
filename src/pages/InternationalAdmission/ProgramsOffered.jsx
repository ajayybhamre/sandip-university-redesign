import { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import FloatingAction from "../../components/FloatingAction";

import ProgramsHero from "../../components/InternationalPrograms/ProgramsHero";
import ProgramFilters from "../../components/InternationalPrograms/ProgramFilters";
import StudyAreas from "../../components/InternationalPrograms/StudyAreas";
import SchoolExplorer from "../../components/InternationalPrograms/SchoolExplorer";
import FoundationPathway from "../../components/InternationalPrograms/FoundationPathway";
import PathwayComparison from "../../components/InternationalPrograms/PathwayComparison";
import ProgramDetailsModal from "../../components/InternationalPrograms/ProgramDetailsModal";
import InternationalBenefits from "../../components/InternationalPrograms/InternationalBenefits";
import ProgramCTA from "../../components/InternationalPrograms/ProgramCTA";
import FinalCTA from "../../components/InternationalPrograms/FinalCTA";

import { ALL_PROGRAMS_DATA } from "../Admission/programsData";
import "./ProgramsOffered.css";

// Foundation Program data entry
const foundationProgramData = {
  id: "intl-foundation",
  slug: "international-foundation-program",
  title: "International Foundation Program (IFP)",
  schoolId: "eng",
  school: "School of Engineering & Technology",
  level: "Foundation",
  duration: "1 Year (2 Semesters)",
  approval: "UGC Recognized International Pathway",
  overview: "Intensive 1-year preparatory academic pathway covering Academic English, Foundation Mathematics, Computing, and Research Methodology for direct progression into 1st Year degrees.",
  specializations: ["Engineering Track", "Business Track"],
  compactEligibility: "High School Pass (Grade 11/12) with passing grades",
  eligibilityRequirements: [
    { title: "Academic Qualification", description: "Completion of High School (Grade 11/12) or foreign equivalent." },
    { title: "Language Proficiency", description: "Basic English communication skills." }
  ],
  careerDetails: {
    overview: "Direct 1st Year entry into B.Tech, BBA, BCA, B.Sc or BA undergraduate degree programs at Sandip University.",
    placementAssistance: "100% Academic Guidance and English transition support."
  }
};

const combinedPrograms = [foundationProgramData, ...ALL_PROGRAMS_DATA];

export default function InternationalProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSchool, setSelectedSchool] = useState("all");
  const [selectedProgramModal, setSelectedProgramModal] = useState(null);

  // Compute Active Filter Count
  const activeFilterCount = (searchQuery ? 1 : 0) + (selectedLevel !== "all" ? 1 : 0) + (selectedSchool !== "all" ? 1 : 0);

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedLevel("all");
    setSelectedSchool("all");
  };

  // Filter Programs
  const filteredPrograms = useMemo(() => {
    return combinedPrograms.filter((prog) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = prog.title.toLowerCase().includes(q);
        const matchesSchool = prog.school.toLowerCase().includes(q);
        const matchesOverview = prog.overview.toLowerCase().includes(q);
        const matchesSpec = prog.specializations && prog.specializations.some(s => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSchool && !matchesOverview && !matchesSpec) {
          return false;
        }
      }

      // 2. Level Filter
      if (selectedLevel !== "all") {
        if (prog.level !== selectedLevel) {
          return false;
        }
      }

      // 3. School Filter
      if (selectedSchool !== "all") {
        if (prog.schoolId !== selectedSchool) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedLevel, selectedSchool]);

  return (
    <div className="intl-programs-page min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <SEO
        title="International Academic Programs & Foundation Pathway | Sandip University"
        description="Explore Sandip University undergraduate, postgraduate, and foundation degree programs for international applicants."
        keywords="Sandip University international programs, B.Tech international, MBA foreign students, International foundation program"
        url="https://yourdomain.com/international-admission/programs"
      />
      <Header />

      {/* 1. Hero Section */}
      <ProgramsHero />

      {/* 2. Program Discovery Filter Bar */}
      <ProgramFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        onClearFilters={handleClearFilters}
        activeFilterCount={activeFilterCount}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* 3. Popular Study Areas Quick Links */}
        <StudyAreas onSelectSchool={(schId) => setSelectedSchool(schId)} />

        {/* 4. School-Based Program Explorer & Grid */}
        <SchoolExplorer
          programsData={filteredPrograms}
          onViewDetails={(prog) => setSelectedProgramModal(prog)}
        />
      </div>

      {/* 5. Integrated Foundation Program Pathway */}
      <FoundationPathway />

      {/* 6. Entry Pathway Comparison */}
      <PathwayComparison />

      {/* 7. International Student Benefits */}
      <InternationalBenefits />

      {/* 8. Program Selection Counselor CTA */}
      <ProgramCTA />

      {/* 9. Final CTA */}
      <FinalCTA />

      {/* Program Details Modal */}
      <ProgramDetailsModal
        program={selectedProgramModal}
        onClose={() => setSelectedProgramModal(null)}
      />

      <Footer />
      <FloatingAction />
    </div>
  );
}
