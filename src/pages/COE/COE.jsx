import Header from "../../components/Header/Header";
import Footer from "../../components/Footer"; // single file, not a folder — confirm default export name matches
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import COEHero from "./components/COEHero";
import COEAbout from "./components/COEAbout";
import COEQuickLinks from "./components/COEQuickLinks";
import COEContact from "./components/COEContact";

import { coeHero } from "./data/coeData";

const COE = () => {
  return (
    <>
      <SEO data={seoData.coe} />
      <Header overlay />

      <main>
        <COEHero headline={coeHero.headline} />
        <COEAbout />
        <COEQuickLinks />
        <COEContact />
      </main>

      <Footer />
    </>
  );
};

export default COE;
