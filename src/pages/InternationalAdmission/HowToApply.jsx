import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import FloatingAction from "../../components/FloatingAction";

import HowToApplyHero from "../../components/HowToApply/HowToApplyHero";
import ApplicationJourney from "../../components/HowToApply/ApplicationJourney";
import AdmissionProcedure from "../../components/HowToApply/AdmissionProcedure";
import DocumentChecklist from "../../components/HowToApply/DocumentChecklist";
import ApplicationCTA from "../../components/HowToApply/ApplicationCTA";
import FeePayment from "../../components/HowToApply/FeePayment";
import WireTransferDetails from "../../components/HowToApply/WireTransferDetails";
import PaymentInstructions from "../../components/HowToApply/PaymentInstructions";
import ImportantPaymentNote from "../../components/HowToApply/ImportantPaymentNote";
import ApplicationProgress from "../../components/HowToApply/ApplicationProgress";
import FAQ from "../../components/HowToApply/FAQ";
import FinalCTA from "../../components/HowToApply/FinalCTA";

import "./HowToApply.css";

export default function HowToApplyPage() {
  return (
    <div className="how-to-apply-page min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <SEO
        title="How to Apply & International Wire Transfer | Sandip University"
        description="Complete step-by-step application guide and official international wire transfer bank details for Sandip University foreign applicants."
        keywords="How to apply Sandip University, International wire transfer, Sandip University bank details, SWIFT code, admission procedure"
        url="https://yourdomain.com/international-admission/how-to-apply"
      />
      <Header />

      {/* 1. Hero Section */}
      <HowToApplyHero />

      {/* 2. Application Journey Overview */}
      <ApplicationJourney />

      {/* 3. Admission Procedure */}
      <AdmissionProcedure />

      {/* 4. Required Documents */}
      <DocumentChecklist />

      {/* 5. Application Submission CTA */}
      <ApplicationCTA />

      {/* 6. Fee Payment Section */}
      <FeePayment />

      {/* 7. International Wire Transfer Details */}
      <WireTransferDetails />

      {/* 8. Payment Instructions */}
      <PaymentInstructions />

      {/* 9. Important Payment Note */}
      <ImportantPaymentNote />

      {/* 10. Application + Payment Progress */}
      <ApplicationProgress />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Final CTA */}
      <FinalCTA />

      <Footer />
      <FloatingAction />
    </div>
  );
}
