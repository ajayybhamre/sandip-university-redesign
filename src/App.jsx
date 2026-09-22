import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import Preloader from "./components/Preloader/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
  import CursorArrow from "./components/CursorArrow";
import Popup from "./components/Popup";
import About from "./pages/About/About";
import Placement from "./pages/Placement/Placement";
import CampusLife from "./pages/CampusLife/CampusLife";
import Committees from "./pages/Committees/Committees";
import GrievanceRedressal from "./pages/GrievanceRedressal/GrievanceRedressal";
import Gallery from "./pages/Gallery/Gallery";
import FloatingAction from "./components/FloatingAction";
import CourseDetails from "./schools/components/CourseDetails";
import SOET from "./schools/SOET/SOET";
import SOCSE from "./schools/SOCSE/SOCSE";
import SOCMS from "./schools/SOCMS/SOCMS";
import SOS from "./schools/SOS/SOS";
import SOPS from "./schools/SOPS/SOPS";
import SOL from "./schools/SOL/SOL";
import SOD from "./schools/SOD/SOD";
import Contact from "./pages/contact/Contact";

import Admission from "./pages/Admission/Admission";
import AdmissionPrograms from "./pages/Admission/AdmissionPrograms";
import DocumentList from "./pages/Admission/DocumentList";
import Scholarships from "./pages/Admission/Scholarships";
import Help from "./pages/Admission/Help";
import InternationalOverviewPage from "./pages/InternationalAdmission/Overview";
import HowToApplyPage from "./pages/InternationalAdmission/HowToApply";
import InternationalProgramsPage from "./pages/InternationalAdmission/ProgramsOffered";
import InternationalPartnershipsPage from "./pages/InternationalAdmission/Partnerships";
import InternationalFAQPage from "./pages/InternationalAdmission/FAQ";
import ContactSupportPage from "./pages/InternationalAdmission/ContactSupport";

import Schools from "./schools/Schools";
import AcademicsPage from "./pages/Academics/AcademicsPage";
import RegulationsPage from "./pages/Academics/pages/RegulationsPage";
import EvaluationPage from "./pages/Academics/pages/EvaluationPage";
import CalendarPage from "./pages/Academics/pages/CalendarPage";
import COE from "./pages/COE/COE";
import COENotices from "./pages/COE/Notices";
import COEResults from "./pages/COE/Results";
import COETimetables from "./pages/COE/Timetables";
import COEHowToApply from "./pages/COE/HowToApply";


// IQAC Main Page & Sub-Pages
import IQAC from "./pages/IQAC/IQAC";
import IQACAboutPage from "./pages/IQAC/subpages/IQACAboutPage";
import IQACAimsObjectivesPage from "./pages/IQAC/subpages/IQACAimsObjectivesPage";
import IQACMembersPage from "./pages/IQAC/subpages/IQACMembersPage";
import IQACSustainabilityPage from "./pages/IQAC/subpages/IQACSustainabilityPage";
import IQACStrategicPlanPage from "./pages/IQAC/subpages/IQACStrategicPlanPage";
import IQACCommitteesPage from "./pages/IQAC/subpages/IQACCommitteesPage";
import IQACMinutesPage from "./pages/IQAC/subpages/IQACMinutesPage";
import IQACIIQADisclosurePage from "./pages/IQAC/subpages/IQACIIQADisclosurePage";
import IQACPublicDisclosurePage from "./pages/IQAC/subpages/IQACPublicDisclosurePage";
import IQACAcademicPolicyPage from "./pages/IQAC/subpages/IQACAcademicPolicyPage";
import IQACFeedbackSystemPage from "./pages/IQAC/subpages/IQACFeedbackSystemPage";
import IQACInstitutionalDistinctivenessPage from "./pages/IQAC/subpages/IQACInstitutionalDistinctivenessPage";
import IQACNAACPage from "./pages/IQAC/subpages/IQACNAACPage";
import CentralLibraryPage from "./pages/Library/CentralLibraryPage";

import ScrollProgressBar from "./components/Animated/ScrollProgressBar";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Hide preloader after 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader loading={loading} />;
  }

  return (
    <>
      <CursorArrow />
      <BrowserRouter>
        <ScrollProgressBar />
        <ScrollToTop />
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Admission />} />
          <Route path="/programs" element={<AdmissionPrograms />} />
          <Route path="/eligibility" element={<AdmissionPrograms />} />
          <Route path="/documents" element={<DocumentList />} />
          <Route path="/brochure" element={<DocumentList />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/fee-structure" element={<Scholarships />} />
          <Route path="/help" element={<Help />} />
          <Route path="/international-admission/overview" element={<InternationalOverviewPage />} />
          <Route path="/international" element={<InternationalOverviewPage />} />
          <Route path="/international-admission/how-to-apply" element={<HowToApplyPage />} />
          <Route path="/admission-process" element={<HowToApplyPage />} />
          <Route path="/international-admission/programs" element={<InternationalProgramsPage />} />
          <Route path="/programs-offered" element={<InternationalProgramsPage />} />
          <Route path="/international-admission/partnerships" element={<InternationalPartnershipsPage />} />
          <Route path="/international-partnerships" element={<InternationalPartnershipsPage />} />
          <Route path="/international-admission/faqs" element={<InternationalFAQPage />} />
          <Route path="/international-faqs" element={<InternationalFAQPage />} />
          <Route path="/international-admission/contact" element={<ContactSupportPage />} />
          <Route path="/how-to-reach" element={<ContactSupportPage />} />
          <Route path="/contact" element={<ContactSupportPage />} />


        {/* Future Pages */}
        <Route path="/about" element={<About/>} />
        <Route path="/academics" element={<AcademicsPage/>} />
        <Route path="/placement" element={<Placement/>} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/events" element={<CampusLife />} />
          <Route path="/gallery" element={<Gallery/>} />
              <Route path="/schools" element={<Schools/>} />
           <Route path="/schools/engineering-technology" element={<SOET/>} />
           <Route path="/schools/computer-science" element={<SOCSE/>} />
           <Route path="/schools/management" element={<SOCMS/>} />
           <Route path="/schools/science" element={<SOS/>} />
           <Route path="/schools/pharma" element={<SOPS/>} />
           <Route path="/schools/law" element={<SOL/>} />
           <Route path="/schools/fashion-beauty" element={<SOD/>} />
           <Route path="/contact" element={<Contact/>} />
          <Route path="/schools/:schoolSlug/:courseSlug" element={<CourseDetails/>} />
          <Route path="/academics/regulations" element={<RegulationsPage/>} />
          <Route path="/academics/evaluation" element={<EvaluationPage/>} />
          <Route path="/academics/calendar" element={<CalendarPage/>} />
          <Route path="/coe" element={<COE/>} />
          <Route path="/coe/notices" element={<COENotices/>} />
          <Route path="/coe/results" element={<COEResults/>} />
          <Route path="/coe/timetables" element={<COETimetables/>} />
          <Route path="/coe/how-to-apply" element={<COEHowToApply/>} />

        
          <Route path="/about" element={<About />} />
          <Route path="/about/*" element={<About />} />
          {/* <Route path="/academic" element={<Academics />} /> */}

          {/* IQAC Landing Page & Sub-Pages */}
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/iqac/about" element={<IQACAboutPage />} />
          <Route path="/iqac/aims-objectives" element={<IQACAimsObjectivesPage />} />
          <Route path="/iqac/members" element={<IQACMembersPage />} />
          <Route path="/iqac/sustainability" element={<IQACSustainabilityPage />} />
          <Route path="/iqac/strategic-plan" element={<IQACStrategicPlanPage />} />
          <Route path="/iqac/committees" element={<IQACCommitteesPage />} />
          <Route path="/iqac/minutes" element={<IQACMinutesPage />} />
          <Route path="/iqac/iiqa-disclosure" element={<IQACIIQADisclosurePage />} />
          <Route path="/iqac/self-disclosure" element={<IQACIIQADisclosurePage />} />
          <Route path="/iqac/public-disclosure" element={<IQACPublicDisclosurePage />} />
          <Route path="/iqac/naac" element={<IQACNAACPage />} />
          <Route path="/iqac/academic-policy" element={<IQACAcademicPolicyPage />} />
          <Route path="/iqac/feedback-system" element={<IQACFeedbackSystemPage />} />
          <Route path="/iqac/institutional-distinctiveness" element={<IQACInstitutionalDistinctivenessPage />} />

          {/* Library Page */}
          <Route path="/central-library" element={<CentralLibraryPage />} />

          <Route path="/placement" element={<Placement />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/schools/engineering" element={<SchoolEngineering />} /> */}
          <Route path="/schools/engineering/:courseSlug" element={<CourseDetails />} />
                 <Route path="/campus-life" element={<CampusLife/>} />
                  <Route path="/committees" element={<Committees/>} />
                         <Route path="/gallery" element={<Gallery/>} />
   
           <Route path="/contact" element={<Contact/>} />


        </Routes>

        <FloatingAction />
      </BrowserRouter>
    </>

  );
}

export default App;
