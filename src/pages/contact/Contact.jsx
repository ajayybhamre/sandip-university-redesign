

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import aboutBanner from "../../assets/images/slider2.webp";
import ContactSection from "./ContactSection";


export default function Contact() {


  return (
    <>
      <Header />


      <Breadcrumb
        badge="Contact"
        title="Contact us"
        description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence."
        currentPage="Contact"
        image={aboutBanner}
      />

<ContactSection/>
   

      <Footer />

    </>
  );
}