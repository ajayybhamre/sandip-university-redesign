import { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import FloatingAction from "../../components/FloatingAction";

import PartnershipsHero from "../../components/InternationalPartnerships/PartnershipsHero";
import GlobalStats from "../../components/InternationalPartnerships/GlobalStats";
import GlobalNetworkMap from "../../components/InternationalPartnerships/GlobalNetworkMap";
import FeaturedPartners from "../../components/InternationalPartnerships/FeaturedPartners";
import PartnerExplorer from "../../components/InternationalPartnerships/PartnerExplorer";
import PartnerDetailsModal from "../../components/InternationalPartnerships/PartnerDetailsModal";
import RegionExplorer from "../../components/InternationalPartnerships/RegionExplorer";
import CountryExplorer from "../../components/InternationalPartnerships/CountryExplorer";
import PartnershipOpportunities from "../../components/InternationalPartnerships/PartnershipOpportunities";
import CollaborationSpotlight from "../../components/InternationalPartnerships/CollaborationSpotlight";
import MouDocuments from "../../components/InternationalPartnerships/MouDocuments";
import GlobalBenefits from "../../components/InternationalPartnerships/GlobalBenefits";
import FinalCTA from "../../components/InternationalPartnerships/FinalCTA";

import { PARTNERS_DATA } from "./partnersData";
import "./Partnerships.css";

export default function InternationalPartnershipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPartnerModal, setSelectedPartnerModal] = useState(null);

  // Clear Filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("All");
    setSelectedCountry("All");
    setSelectedType("All");
  };

  // Select Country from Map or Pills
  const handleSelectCountry = (countryName) => {
    setSelectedCountry(countryName);
    setSelectedRegion("All");
    const el = document.getElementById("partner-explorer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Select Region from Cards
  const handleSelectRegion = (regionName) => {
    setSelectedRegion(regionName);
    setSelectedCountry("All");
    const el = document.getElementById("partner-explorer");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Filtered Partners
  const filteredPartners = useMemo(() => {
    return PARTNERS_DATA.filter((p) => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCountry = p.country.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesName && !matchesCountry && !matchesDesc) return false;
      }

      // Region Filter
      if (selectedRegion !== "All" && p.region !== selectedRegion) {
        return false;
      }

      // Country Filter
      if (selectedCountry !== "All" && p.country !== selectedCountry) {
        return false;
      }

      // Type Filter
      if (selectedType !== "All" && p.type !== selectedType) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedRegion, selectedCountry, selectedType]);

  return (
    <div className="intl-partnerships-page min-h-screen bg-white dark:bg-[#0c0c0d] text-slate-900 dark:text-white font-sans selection:bg-[#bd1e2d] selection:text-white">
      <SEO
        title="International Partnerships & MOUs | Sandip University"
        description="Explore Sandip University's global academic partner institutions, MOUs, student exchanges, and joint research collaborations."
        keywords="Sandip University international partnerships, global university MOUs, Charles Sturt University tie up, foreign study exchange"
        url="https://yourdomain.com/international-admission/partnerships"
      />
      <Header />

      {/* 1. Hero Section */}
      <PartnershipsHero />

      {/* 2. Global Partnership Stats */}
      <GlobalStats />

      {/* 3. Global Network Map */}
      <GlobalNetworkMap onSelectCountry={handleSelectCountry} />

      {/* 4. Featured Key Partners */}
      <FeaturedPartners onViewDetails={(partner) => setSelectedPartnerModal(partner)} />

      {/* 5. Region Explorer */}
      <RegionExplorer onSelectRegion={handleSelectRegion} />

      {/* 6. Country Directory */}
      <CountryExplorer onSelectCountry={handleSelectCountry} />

      {/* 7. Complete Partner Directory */}
      <PartnerExplorer
        partners={filteredPartners}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        onClearFilters={handleClearFilters}
        onViewDetails={(partner) => setSelectedPartnerModal(partner)}
      />

      {/* 8. Partnership Mobility Opportunities */}
      <PartnershipOpportunities />

      {/* 9. Collaboration Spotlight Stories */}
      <CollaborationSpotlight />

      {/* 10. MOU Agreements & Documents */}
      <MouDocuments onViewDetails={(partner) => setSelectedPartnerModal(partner)} />

      {/* 11. Institutional Benefits */}
      <GlobalBenefits />

      {/* 12. Final CTA */}
      <FinalCTA />

      {/* Partner Details Modal */}
      <PartnerDetailsModal
        partner={selectedPartnerModal}
        onClose={() => setSelectedPartnerModal(null)}
      />

      <Footer />
      <FloatingAction />
    </div>
  );
}
