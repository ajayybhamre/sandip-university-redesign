// One programme page = Header + Hero (part 1) + Layout (part 2) + Sections (part 3) + Footer.
// This file only decides WHICH pieces to use; it holds no programme data and no copy.

import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";

import ProgrammeHero from "./ProgrammeHero";
import ProgrammeLayout from "./ProgrammeLayout";
import schoolProfiles from "./schoolProfiles";
import { buildSections } from "./sections";

export default function ProgrammePage({ programme }) {
  const profile = schoolProfiles[programme.schoolSlug] || {};
  const Hero = profile.Hero || ProgrammeHero;
  const sections = buildSections(programme.content, profile);

  return (
    <>
      {/* TODO: pass programme-specific title/description once SEO's props are confirmed. */}
      <SEO {...seoData.about} />
      <Header overlay />
      <Hero programme={programme} />
      <ProgrammeLayout
        programme={programme}
        sections={sections}
        sidebarTitle={profile.sidebarTitle}
        sidebarSubtitle={profile.sidebarSubtitle}
      />
      <Footer />
    </>
  );
}
