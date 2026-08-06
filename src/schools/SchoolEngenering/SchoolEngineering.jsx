
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import aboutBanner from "../../assets/images/slider2.webp";
import Programs from "../components/Programs";
import DeanSection from "../components/DeanSection";
import CourseHighlights from "./components/CourseHighlights";
import CourseTabs from "../components/CourseTabs";
import programsData from "../SOET/data/programsData";
import deanData from "../SOET/data/deanData";
import sidebarData from "../SOET/data/sidebarData";
import sectionComponents from "../SOET/data/sectionComponents";
import deanImage from "../../assets/images/Dean_SOET.jpg";


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
 <Programs programsData={programsData} schoolName="School of Engineering" schoolSlug="engineering" />
 <CourseTabs />
 <DeanSection deanData={deanData} deanImage={deanImage} schoolName="School of Engineering" />
 <CourseHighlights />
  

      <Footer />
    </>
  );
};

export default SchoolEngineering;