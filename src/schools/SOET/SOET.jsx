import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import deanPortrait from "../../assets/images/Dean_SOET.jpg";
import DeanSection from "../components/DeanSection";
import CourseHighlights from "../components/CourseHighlights";
import CourseTabs from "../components/CourseTabs";
import ProgramsDepartments from "./components/ProgramsDepartments";
import About from "./AboutSOET";
import WhySOET from "./WhySOET";
import deanData from "./data/deanData";

const SOET = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <Header />
      <Breadcrumb badge="SOET" title="School of Engineering and Technology" description="" currentPage="About" image={aboutBanner} />
      <CourseTabs />
      <div id="overview"><ProgramsDepartments /></div>
      <div id="curriculum"><About /></div>
      <div id="career"><WhySOET /></div>
      <div id="faculty"><DeanSection deanData={deanData} deanImage={deanPortrait} schoolName="School of Engineering & Technology" /></div>
      <div id="placement"><CourseHighlights /></div>

      <Footer />
    </>
  );
};

export default SOET;
