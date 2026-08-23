import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import Programs from "../components/Programs";
import DeanSection from "../components/DeanSection";
import CourseTabs from "../components/CourseTabs";
import programsData from "./data/programsData";
import deanData from "./data/deanData";

const SOPS = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge="SOPS" title="School of Pharmacy & Paramedical Sciences" description="" currentPage="About" image={aboutBanner} />

      <Programs programsData={programsData} schoolName="School of Pharmacy & Paramedical Sciences" schoolSlug="sops" />
      <CourseTabs />
      <DeanSection deanData={deanData} schoolName="School of Pharmacy & Paramedical Sciences" />

      <Footer />
    </>
  );
};

export default SOPS;
