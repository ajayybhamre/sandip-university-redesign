import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/Banner.webp";
import deanPortrait from "../../assets/images/Dean_SOET.jpg";
import { JourneyTimeline } from "./JourneyTimeline"
import DeanSection from "../components/DeanSection";
import CourseHighlights from "../components/CourseHighlights";
import CourseTabs from "../components/CourseTabs";
import ProgramsDepartments from "./components/ProgramsDepartments";
import About from "./AboutSOET";
import soet1 from "../../assets/images/soet1.webp";
import soet2 from "../../assets/images/soet2.webp";
import soet3 from "../../assets/images/soet3.webp";
import deanData from "./data/deanData";

const SOET = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <Header overlay />
      <Breadcrumb badge="SOET" title="School of Engineering and Technology" description="" currentPage="About" image={aboutBanner} />
      <div ><ProgramsDepartments /></div>
      <CourseTabs />
      <div><DeanSection deanData={deanData} deanImage={deanPortrait} schoolName="School of Engineering & Technology" /></div>
      <div><About images={[soet1, soet2, soet3]} badgeLabel="Y Building"/></div>
      <JourneyTimeline slug="soet" />
      <div><CourseHighlights /></div>
      <Footer />
    </>
  );
};

export default SOET;