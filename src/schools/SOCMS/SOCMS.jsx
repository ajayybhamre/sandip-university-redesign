import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import Programs from "../components/Programs";
import DeanSection from "../components/DeanSection";
import CourseTabs from "../components/CourseTabs";

const SOCMS = () => {
  const emptyPrograms = { undergraduate: [], postgraduate: [] };
  const emptyDean = { name: "", designation: "", message: "", experience: "" };

  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge="CMS" title="School of Commerce & Management Studies" description="" currentPage="About" image={aboutBanner} />

      <Programs programsData={emptyPrograms} schoolName="School of Commerce & Management Studies" schoolSlug="socms" />
      <CourseTabs />
      <DeanSection deanData={emptyDean} schoolName="School of Commerce & Management Studies" />

      <Footer />
    </>
  );
};

export default SOCMS;
