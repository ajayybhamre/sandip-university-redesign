import { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import aboutBanner from "../../assets/images/slider2.webp";

import PlacementTabs from "./PlacementTabs";
import PlacementContentArea from "./PlacementContentArea";


export default function Placement() {

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <Header />

      <Breadcrumb
        badge="Placement University"
        title="Placement Sandip University"
        description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence."
        currentPage="Academic"
        image={aboutBanner}
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