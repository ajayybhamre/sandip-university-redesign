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

const SOCSE = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge="CSE" title="School of Computer Science & Engineering" description="" currentPage="About" image={aboutBanner} />

      <Programs programsData={programsData} schoolName="School of Computer Science & Engineering" schoolSlug="socse" />
      <CourseTabs />
      <DeanSection deanData={deanData} schoolName="School of Computer Science & Engineering" />

      <Footer />
    </>
  );
};

export default SOCSE;
