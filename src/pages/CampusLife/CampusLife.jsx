import { useSearchParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import campusLifeBanner from "../../assets/images/campus-life/campus/campus-1.jpg";

import tabData from "./tabData";
import CampusLifeContentArea from "./CampusLifeContentArea";


export default function CampusLife() {

  const [searchParams] = useSearchParams();

  const requestedTab = searchParams.get("tab");

  const validTabIds = tabData.map((tab) => tab.id);

  // Which section to show is driven entirely by the ?tab= query param
  // set by the Campus Life dropdown in the navbar — there is no
  // in-page tab switcher.
  const activeTab = validTabIds.includes(requestedTab)
    ? requestedTab
    : "gallery-media";

  return (
    <>
      <SEO {...seoData.campusLife} />

      <Header />

      <Breadcrumb
        badge="Life at Sandip University"
        title="Campus Life"
        description="Explore student clubs, welfare initiatives, achievements, sports and everything that happens beyond the classroom."
        currentPage="Campus Life"
        image={campusLifeBanner}
      />

      <section className="
        py-20
        bg-white
        dark:bg-black
        transition-colors
      ">

        <div className="
          max-w-[1600px]
          mx-auto
          px-5
        ">

          <CampusLifeContentArea
            activeTab={activeTab}
          />

        </div>

      </section>

      <Footer />

    </>
  );
}
