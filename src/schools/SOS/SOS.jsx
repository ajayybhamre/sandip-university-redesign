import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import Programs from "../components/Programs";
import DeanSection from "../components/DeanSection";
import CourseTabs from "../components/CourseTabs";

const SOS = () => {
  const emptyPrograms = { undergraduate: [], postgraduate: [] };
  const emptyDean = { name: "", designation: "", message: "", experience: "" };

  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge="SOS" title="School of Sciences" description="" currentPage="About" image={aboutBanner} />

      <Programs programsData={emptyPrograms} schoolName="School of Sciences" schoolSlug="sos" />
      <CourseTabs />
      <DeanSection deanData={emptyDean} schoolName="School of Sciences" />

      <Footer />
    </>
  );
};

export default SOS;
