import { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import aboutBanner from "../../assets/images/slider2.webp";

import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";


export default function Academics() {

  const [activeTab, setActiveTab] = useState("overview");


  return (
    <>
      <Header />


      <Breadcrumb
        badge="Academic University"
        title="Academic Sandip University"
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


          {/* Center Tabs */}

       <div
  className="
    sticky
    top-20
    z-40
    flex
    justify-center
    mb-12
    w-full
    py-4
   
    dark:bg-black/90
    
  "
>
  <Sidebar
    activeTab={activeTab}
    setActiveTab={setActiveTab}
  />
</div>



          {/* Content Below Tabs */}

          <div>

            <ContentArea
              activeTab={activeTab}
            />

          </div>


        </div>


      </section>


      <Footer />

    </>
  );
}