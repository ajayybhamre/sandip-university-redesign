import { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import placementBanner from "../../assets/images/placement-gallery/pg1.jpg";

import PlacementTabs from "./PlacementTabs";
import PlacementContentArea from "./PlacementContentArea";


export default function Placement() {

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <Header />

      <Breadcrumb
        badge="Careers & Placements"
        title="Placements at Sandip University"
        description="From industry-ready training and 200+ recruiting partners to real student success stories — explore everything that powers our placement record."
        currentPage="Placements"
        image={placementBanner}
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

          {/* Horizontal Section Tabs */}

          <div className="
            flex
            justify-center
            mb-12
            w-full
          ">
            <PlacementTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Content Below Tabs */}

          <div>
            <PlacementContentArea
              activeTab={activeTab}
            />
          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}
