
import Hero from "./Hero/Hero";
import FloatingAction from "../../components/FloatingAction";
import QuickLinks from "./QuickLink/QuickLinks";

import Footer from "../../components/Footer";
import About from "./About";
import StudentStories from "./StudentStories/StudentStories";
import FindProgram from "./FindProgram";

import Programs from "./Programs/Programs";
import StickySection from "./StickySection";
import CounterSection from "./CounterSection";
import CampusTour from "./CampusView/CampusTour";

import Recruiters from "./Recruiters/Recruiters";
import TestimonialsFAQ from "./TestimonialsFAQ/TestimonialsFAQ";
import SocialMedia from "./SocialMedia/SocialMedia";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Popup from "../../components/Popup";
import Header from "../../components/Header/Header";


export default function Home() {
  return (
    <>
     <Popup />
     <SEO {...seoData.home} />
          
 
    <Header/>
      <Hero />
     
<QuickLinks/>
     

    <About />
    
<StudentStories/>
<FindProgram/>
<Programs/>
<StickySection/>
<CounterSection/>
<CampusTour/>
<Recruiters/>
<TestimonialsFAQ/>
<SocialMedia/>

      <Footer />
      <FloatingAction />
    </>
  );
}