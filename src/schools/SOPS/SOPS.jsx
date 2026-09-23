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
import About from "./AboutSOPS";
// TODO: import real showcase photos, e.g.:
// import photo1 from "../../assets/images/pharma1.webp";
// import photo2 from "../../assets/images/pharma2.webp";
// import photo3 from "../../assets/images/pharma3.webp";
// TODO: import a real dean portrait, e.g.:
// import deanPortrait from "../../assets/images/Dean_SOPS.jpg";
import deanData from "./data/deanData";

const SOPS = () => {
  return (
    <>
      <SEO {...seoData.about} />
      <Header overlay />
      <Breadcrumb badge="SOPS" title="School of Pharmacy & Paramedical Sciences" description="" currentPage="About" image={aboutBanner} />

      <div><ProgramsDepartments /></div>
      <CourseTabs />
      <div><DeanSection deanData={deanData} schoolName="School of Pharmacy & Paramedical Sciences" /* deanImage={deanPortrait} */ /></div>
      <div><About images={[/* photo1, photo2, photo3 */]} badgeLabel="SOPS" /></div>
      <JourneyTimeline slug="pharma" />
      <div><CourseHighlights highlights={[
        { icon: "clock", title: "Duration", value: "TODO" },
        { icon: "graduation", title: "Degree", value: "B.Pharm" },
        { icon: "flask", title: "Laboratories", value: "TODO" },
        { icon: "users", title: "Placement Support", value: "TODO" },
      ]} /></div>
      <Footer />
    </>
  );
};

export default SOPS;
