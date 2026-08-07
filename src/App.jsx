import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import Preloader from "./components/Preloader/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import CursorArrow from "./components/CursorArrow";
import Popup from "./components/Popup";
import About from "./pages/About/About";
import Academics from "./pages/Academics/Academics";
import Placement from "./pages/Placement/Placement";
import Gallery from "./pages/Gallery/Gallery";
import FloatingAction from "./components/FloatingAction";
import SchoolEngineering from "./schools/SchoolEngenering/SchoolEngineering";
import CourseDetails from "./schools/SchoolEngenering/CourseDetails";
import Contact from "./pages/contact/Contact";
import Admission from "./pages/Admission/Admission";
import AdmissionPrograms from "./pages/Admission/AdmissionPrograms";
import DocumentList from "./pages/Admission/DocumentList";
import ScrollToTop from "./ScrollToTop";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
        duration:1000,
        once:true,
    });
},[]);

  useEffect(() => {
    // Hide preloader after 1.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader loading={loading} />;
  }





  return (
       <> <CursorArrow />
    <BrowserRouter>
      <ScrollToTop />
    <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Admission />} />
        <Route path="/programs" element={<AdmissionPrograms />} />
        <Route path="/documents" element={<DocumentList />} />
        <Route path="/brochure" element={<DocumentList />} />

        {/* Future Pages */}
        <Route path="/about" element={<About/>} />
        <Route path="/academic" element={<Academics/>} />
         <Route path="/placement" element={<Placement/>} />
          <Route path="/gallery" element={<Gallery/>} />
           <Route path="/schools/engineering" element={<SchoolEngineering/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route
  path="/schools/engineering/:courseSlug"
  element={<CourseDetails/>}
/>
        
      </Routes>
      
            <FloatingAction />
    </BrowserRouter></>
  );
}

export default App;