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
import CourseDetails from "./schools/components/CourseDetails";
import SOET from "./schools/SOET/SOET";
import SOCSE from "./schools/SOCSE/SOCSE";
import SOCMS from "./schools/SOCMS/SOCMS";
import SOS from "./schools/SOS/SOS";
import SOPS from "./schools/SOPS/SOPS";
import SOL from "./schools/SOL/SOL";
import SOD from "./schools/SOD/SOD";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./ScrollToTop";
import Schools from "./schools/Schools";


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

        {/* Future Pages */}
        <Route path="/about" element={<About/>} />
        <Route path="/academic" element={<Academics/>} />
         <Route path="/placement" element={<Placement/>} />
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
        
      </Routes>
      
            <FloatingAction />
    </BrowserRouter></>
  );
}

export default App;
