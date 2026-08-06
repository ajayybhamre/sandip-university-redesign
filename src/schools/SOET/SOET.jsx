import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import Programs from "../components/Programs";
import DeanSection from "../components/DeanSection";
import CourseTabs from "../components/CourseTabs";
import CourseHighlights from "../SchoolEngenering/components/CourseHighlights";

const SOET = () => {
  const emptyPrograms = { undergraduate: [], postgraduate: [] };
  const emptyDean = { name: "", designation: "", message: "", experience: "" };

  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge="SOET" title="School of Engineering and Technology" description="" currentPage="About" image={aboutBanner} />

      <Programs programsData={emptyPrograms} schoolName="School of Engineering & Technology" schoolSlug="soet" />
      <CourseTabs />
      <DeanSection deanData={emptyDean} schoolName="School of Engineering & Technology" />
      <CourseHighlights />

      <Footer />
    </>
  );
};

export default SOET;
