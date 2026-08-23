import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import deanPortrait from "../../assets/images/Dean_SOET.jpg";
import Programs from "../components/Programs";
import DeanSection from "../components/DeanSection";
import CourseTabs from "../components/CourseTabs";
import CourseHighlights from "../components/CourseHighlights";
import programsData from "./data/programsData";
import deanData from "./data/deanData";

const SOET = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge="SOET" title="School of Engineering and Technology" description="" currentPage="About" image={aboutBanner} />

      <Programs programsData={programsData} schoolName="School of Engineering & Technology" schoolSlug="soet" />
      <CourseTabs />
      <DeanSection deanData={deanData} deanImage={deanPortrait} schoolName="School of Engineering & Technology" />
      <CourseHighlights />

      <Footer />
    </>
  );
};

export default SOET;
