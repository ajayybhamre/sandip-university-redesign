import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineArrowRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineTrophy,
  HiOutlineInformationCircle,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import AccordionSection from "./shared/AccordionSection";
import {
  programmes,
  aboutText,
  selectionProcedureText,
  eligibilityIntro,
  eligibilityCriteria,
  programmeDuration,
  admissionRulesIntro,
  admissionRules,
  applicationRejectionReasons,
  admissionRulesContinued,
  tuitionFeesEngineering,
  tuitionFeesScience,
  researchFellowshipsText,
  accommodationText,
  leaveText,
  howToApplyText,
  applicationInstructions,
  documentsRequired,
  applicationFeeText,
  applicationFeePaymentText,
  entranceTest,
} from "./data/phdData";

const phdHero = "/phd/hero/phd-hero.png";

const admissionRecordLinks = [
  {
    to: "/phd/admission",
    title: "PH.D Admission",
    description: "Notification, SUNPET syllabus, important dates & eligible candidates list",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    to: "/phd/degree-awarded",
    title: "Ph.D Degree Awarded",
    description: "Full list of scholars, thesis titles, guides and year of award",
    icon: HiOutlineTrophy,
  },
  {
    to: "/phd/info-degrees-awarded",
    title: "Information about the Ph.D. Degrees awarded by Sandip University, Nashik during 2020, 2021, 2022, 2023 and 2024",
    description: "RAC/DRC constitution, admission & fellowship policies, ethics board constitution",
    icon: HiOutlineInformationCircle,
  },
  {
    to: "/phd/undertaking",
    title: "Undertaking regarding Compliance of UGC Standing Committee",
    description: "View the compliance undertaking",
    icon: HiOutlineShieldCheck,
  },
];

const Prose = ({ children }) => (
  <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">{children}</p>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {
      items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-6">
          <HiOutlineCheckCircle className="text-red-600 w-4 h-4 shrink-0 mt-0.5" />
          <span className="text-justify">{item}</span>
        </li>
      ))
    }
  </ul>
);

export default function Phd() {

  return (
    <>
      <SEO {...seoData.phd} />

      <Header />

      <Breadcrumb
        badge="Knowledge & Innovation"
        title="Ph.D Programmes"
        description="Doctoral research across 16 disciplines at Sandip University, Nashik — admissions, eligibility, fees and fellowships."
        currentPage="Ph.D"
        image={phdHero}
      />

      <section className="py-20 bg-white dark:bg-black transition-colors">
        <div className="max-w-[1200px] mx-auto px-5 space-y-16">

          {/* PH.D Admission / Degree Awarded / Info / Undertaking — each opens its own page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {
              admissionRecordLinks.map((link) => {

                const Icon = link.icon;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="
                      flex items-start gap-4
                      bg-gray-50 dark:bg-slate-900
                      border border-gray-200 dark:border-slate-700
                      hover:border-red-300 dark:hover:border-red-800
                      hover:shadow-md
                      rounded-2xl p-6
                      transition-all
                    "
                  >
                    <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 dark:text-white leading-6 mb-1">{link.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-5">{link.description}</p>
                    </div>
                    <HiOutlineArrowRight className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                  </Link>
                );

              })
            }
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              flex flex-col md:flex-row items-start gap-6
              bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-transparent
              border border-red-100 dark:border-red-900
              rounded-3xl p-8
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0">
              <HiOutlineAcademicCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-3">
                About Ph.D. Programme
              </h2>
              <Prose>{aboutText}</Prose>
            </div>
          </motion.div>

          {/* Programmes Offered */}
          <div>
            <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-8">
              Programmes Offered
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                programmes.map((programme, index) => (
                  <motion.div
                    key={programme.discipline}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                    viewport={{ once: true }}
                    className="
                      bg-white dark:bg-[#111111]
                      border border-gray-200 dark:border-slate-700
                      rounded-2xl overflow-hidden
                      hover:shadow-lg hover:border-red-200 dark:hover:border-red-900
                      transition-all
                    "
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={programme.image}
                        alt={programme.discipline}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {programme.discipline}
                      </h3>
                      <p className="text-xs uppercase tracking-wide text-red-600 dark:text-red-400 font-semibold mb-1">
                        Research Area
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
                        {programme.area}
                      </p>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>

          {/* Admissions accordion */}
          <div>
            <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-8">
              Admissions
            </h2>

            <div className="space-y-4">

              <AccordionSection title="Ph.D Selection Procedure" defaultOpen>
                <Prose>{selectionProcedureText}</Prose>
              </AccordionSection>

              <AccordionSection title="Eligibility Criteria for Admission to Ph.D Programme">
                <p className="text-sm text-gray-700 dark:text-gray-200 font-semibold mb-4">{eligibilityIntro}</p>
                <BulletList items={eligibilityCriteria} />
              </AccordionSection>

              <AccordionSection title="Duration of the Programme">
                <BulletList items={programmeDuration} />
              </AccordionSection>

              <AccordionSection title={admissionRulesIntro}>
                <BulletList items={admissionRules} />
                <div className="my-5 pl-8">
                  <ol className="list-[lower-roman] space-y-2 text-sm text-gray-600 dark:text-gray-300 leading-6">
                    {
                      applicationRejectionReasons.map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))
                    }
                  </ol>
                </div>
                <BulletList items={admissionRulesContinued} />
              </AccordionSection>

            </div>
          </div>

          {/* Fees & Fellowship */}
          <div>
            <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-8">
              Fees & Fellowship
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {
                [tuitionFeesEngineering, tuitionFeesScience].map((fee) => (
                  <div key={fee.title} className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6">
                    <p className="font-bold text-gray-900 dark:text-white mb-3">{fee.title}</p>
                    <Prose>{fee.text}</Prose>
                  </div>
                ))
              }
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6">
                  <p className="font-bold text-gray-900 dark:text-white mb-3">Research Fellowships</p>
                  <Prose>{researchFellowshipsText}</Prose>
                </div>
                <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6">
                  <p className="font-bold text-gray-900 dark:text-white mb-3">Accomodation</p>
                  <Prose>{accommodationText}</Prose>
                </div>
                <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6">
                  <p className="font-bold text-gray-900 dark:text-white mb-3">Leave</p>
                  <Prose>{leaveText}</Prose>
                </div>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div>
            <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
              How to Apply
            </h2>
            <Prose>{howToApplyText}</Prose>

            <h3 className="font-bold text-lg text-gray-900 dark:text-white mt-8 mb-4">
              Application Instructions
            </h3>
            <BulletList items={applicationInstructions} />

            <h3 className="font-bold text-lg text-gray-900 dark:text-white mt-10 mb-4">
              Certificates/Documents to be Enclosed
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 mb-5">
              Candidates should append the attested photocopies of certificates and other documents as mentioned below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {
                documentsRequired.map((doc) => (
                  <div key={doc} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-6">
                    <HiOutlineDocumentText className="text-red-600 w-4 h-4 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))
              }
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-2xl p-6">
                <p className="font-bold text-gray-900 dark:text-white mb-2">Application Fee & Mode of Payment</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-6 mb-1">{applicationFeeText}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">{applicationFeePaymentText}</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-2xl p-6">
                <p className="font-bold text-gray-900 dark:text-white mb-2">Ph.D. Entrance Test</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-6 mb-1">Venue: {entranceTest.venue}</p>
                {
                  entranceTest.parts.map((part) => (
                    <p key={part} className="text-sm text-gray-600 dark:text-gray-300 leading-6">{part}</p>
                  ))
                }
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 mt-1">{entranceTest.total}</p>
              </div>
            </div>
          </div>

          {/* CTA back to Research */}
          <motion.a
            href="/research"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="
              inline-flex items-center gap-2
              text-sm font-semibold text-red-600 hover:text-red-700
              transition-colors
            "
          >
            Back to Research
            <HiOutlineArrowRight className="w-4 h-4" />
          </motion.a>

        </div>
      </section>

      <Footer />
    </>
  );
}
