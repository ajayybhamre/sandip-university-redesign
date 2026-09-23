import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import aboutBanner from "../../assets/images/slider2.webp";
import DeanSection from "../components/DeanSection";
import CourseHighlights from "../components/CourseHighlights";
import CourseTabs from "../components/CourseTabs";
import ProgramsDepartments from "./components/ProgramsDepartments";
import { JourneyTimeline } from "./JourneyTimeline";
import About from "./AboutSOCMS";
// TODO: import real showcase photos, e.g.:
// import photo1 from "../../assets/images/management1.webp";
// import photo2 from "../../assets/images/management2.webp";
// import photo3 from "../../assets/images/management3.webp";
// TODO: import a real dean portrait, e.g.:
// import deanPortrait from "../../assets/images/Dean_SOCMS.jpg";
import deanData from "./data/deanData";

const SOCMS = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <Header overlay />
      <Breadcrumb badge="CMS" title="School of Commerce & Management Studies" description="" currentPage="About" image={aboutBanner} />

      <div><ProgramsDepartments /></div>
      <CourseTabs />
      <div><DeanSection deanData={deanData} schoolName="School of Commerce & Management Studies" /* deanImage={deanPortrait} */ /></div>
      <div><About images={[/* photo1, photo2, photo3 */]} badgeLabel="CMS" /></div>
      <JourneyTimeline slug="management" />
      <div><CourseHighlights highlights={[
        { icon: "clock", title: "Duration", value: "TODO" },
        { icon: "graduation", title: "Degree", value: "BBA / B.Com" },
        { icon: "flask", title: "Laboratories", value: "TODO" },
        { icon: "users", title: "Placement Support", value: "TODO" },
      ]} /></div>
      <Footer />
    </>
  );
};

export default SOCMS;
