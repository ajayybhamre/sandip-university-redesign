import { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import committeesBanner from "../../assets/images/campus-life/campus/campus-1.jpg";

import committees from "./data/committeesData";
import CommitteesTabs from "./CommitteesTabs";
import CommitteeContent from "./CommitteeContent";

export default function Committees() {

  const [activeId, setActiveId] = useState(committees[0].id);

  return (
    <>
      <SEO {...seoData.committees} />

      <Header />

      <Breadcrumb
        badge="Governance & Grievances"
        title="Committees"
        description="Statutory committees and cells at Sandip University — members, mandates, and how to reach each one."
        currentPage="Committees"
        image={committeesBanner}
      />

      <section className="py-20 bg-white dark:bg-black transition-colors">
        <div className="max-w-[1400px] mx-auto px-5">

          <CommitteesTabs activeId={activeId} setActiveId={setActiveId} />

          <div className="
            bg-white dark:bg-[#111111]
            border border-red-100 dark:border-red-900
            rounded-3xl shadow-lg
            p-8 lg:p-10
            min-h-[400px]
          ">
            <CommitteeContent activeId={activeId} />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
