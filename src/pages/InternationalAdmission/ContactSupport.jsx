import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import FloatingAction from "../../components/FloatingAction";

import ContactSupportHero from "../../components/InternationalContact/ContactSupportHero";
import QuickContactCards from "../../components/InternationalContact/QuickContactCards";
import ContactTeamCards from "../../components/InternationalContact/ContactTeamCards";
import ContactForm from "../../components/InternationalContact/ContactForm";
import UniversityLocation from "../../components/InternationalContact/UniversityLocation";
import HowToReach from "../../components/InternationalContact/HowToReach";
import TravelJourneyVisual from "../../components/InternationalContact/TravelJourneyVisual";
import InternationalArrivalGuide from "../../components/InternationalContact/InternationalArrivalGuide";
import TravelComparison from "../../components/InternationalContact/TravelComparison";
import PreArrivalSupport from "../../components/InternationalContact/PreArrivalSupport";
import ContactFAQ from "../../components/InternationalContact/ContactFAQ";
import FinalCTA from "../../components/InternationalContact/FinalCTA";

import "./ContactSupport.css";

export default function ContactSupportPage() {
  return (
    <div className="intl-contact-page min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <SEO
        title="Contact Us & How to Reach Sandip University Campus | International Support"
        description="Official contact details, international admissions desk helpline, campus location, Google Maps directions, and complete travel guide by air, road, bus, or rail."
        keywords="Contact Sandip University, How to reach Sandip University, Nashik campus address, International admissions contact, Sandip University phone"
        url="https://yourdomain.com/international-admission/contact"
      />
      <Header />

      {/* 1. Hero Section */}
      <ContactSupportHero />

      {/* 2. Quick Contact Cards */}
      <QuickContactCards />

      {/* 3. Organized Department Team Cards */}
      <ContactTeamCards />

      {/* 4. Direct Message Enquiry Form */}
      <ContactForm />

      {/* 5. Campus Location & Interactive Map Embed */}
      <UniversityLocation />

      {/* 6. Merged How to Reach Travel Guide */}
      <HowToReach />

      {/* 7. Travel Journey Visual Timeline */}
      <TravelJourneyVisual />

      {/* 8. International Arrival Protocol */}
      <InternationalArrivalGuide />

      {/* 9. Travel Comparison Matrix */}
      <TravelComparison />

      {/* 10. Pre-Arrival & Post-Arrival Support Stages */}
      <PreArrivalSupport />

      {/* 11. Contact & Travel FAQs */}
      <ContactFAQ />

      {/* 12. Final CTA */}
      <FinalCTA />

      <Footer />
      <FloatingAction />
    </div>
  );
}
