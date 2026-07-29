
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import aboutBanner from "../../assets/images/slider2.webp";
import Programs from "./components/Programs";
import DeanSection from "./components/DeanSection";
import CourseHighlights from "./components/CourseHighlights";
import ScholarshipTimeline from "./components/ScholarshipTimeline";
import CourseTabs from "./components/CourseTabs";


const SchoolEngineering = () => {
  return (
    <>
    <SEO {...seoData.about} />
    <Header/>
     <Breadcrumb
            badge="Engineering"
            title="Engineering"
            description="Discover our journey, vision, mission, leadership, innovation and commitment to academic excellence."
            currentPage="About"
            image={aboutBanner}
      />
 <Programs />
 <CourseTabs/>
 <DeanSection/>
 <CourseHighlights/>
 <ScholarshipTimeline/>
  

      <Footer />
    </>
  );
};

export default SchoolEngineering;