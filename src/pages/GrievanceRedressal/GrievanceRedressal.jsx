import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlineInboxStack, HiOutlineGlobeAlt } from "react-icons/hi2";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import stakeholdersImg from "../../assets/images/campus-life/grievance-redressal/stakeholders.png";
import sectionsBannerImg from "../../assets/images/campus-life/grievance-redressal/sections-banner.png";

const sections = [
  { section: "Grievances Redressal Committee", refNo: "F.91-1/2013", date: "2nd May, 2016" },
  { section: "Anti Ragging Committee", refNo: "F. No. 14-4/2012 (CPP-II)", date: "7th December, 2018" },
  { section: "Internal Complaints Committee for Women", refNo: "F.91-1/2013", date: "2nd May, 2016" },
  { section: "Committee for SC/ST", refNo: "Govt. Act No. 33 of 1989", date: "11/09/1989" },
];

export default function GrievanceRedressal() {
  return (
    <>
      <SEO {...seoData.grievanceRedressal} />

      <Header />

      <Breadcrumb
        badge="Governance & Grievances"
        title="Grievances Redressal Mechanism"
        description="How Sandip University addresses general grievances, ragging issues, women's issues, and SC/ST issues on campus, per UGC guidelines."
        currentPage="Grievances Redressal Mechanism"
        image={sectionsBannerImg}
      />

      <section className="py-20 bg-white dark:bg-black transition-colors">
        <div className="max-w-[1100px] mx-auto px-5 space-y-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
              While imparting professional education, we take utmost care
              that students and other stakeholders feel guidance of our
              honorable founder, Dr. Sandipkumar Jha. Campus observes high
              moral and ethical practices. Our GRM efficiently addresses
              General grievances, Ragging issues, Women issues and SC/ST
              issues in the campus, as per UGC guidelines.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <img
              src={stakeholdersImg}
              alt="Grievance Redressal stakeholders — Students, Parents, Faculties, Non-Teaching Staff, Grievance Cell Members, Management"
              className="max-w-sm w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              The 4 Sections of the GRM
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {
                sections.map((item, index) => (
                  <motion.div
                    key={item.section}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="
                      bg-gray-50 dark:bg-slate-900
                      border border-gray-200 dark:border-slate-700
                      rounded-2xl p-5
                    "
                  >
                    <p className="font-bold text-gray-900 dark:text-white mb-2">{item.section}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Reference No: {item.refNo}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Date: {item.date}</p>
                  </motion.div>
                ))
              }
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              How to File a Complaint
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5">
                <HiOutlineInboxStack className="text-red-600 w-6 h-6 shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
                  Suggestion/Complaint Boxes installed at different points
                  on campus.
                </p>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5">
                <HiOutlineGlobeAlt className="text-red-600 w-6 h-6 shrink-0" />
                <a
                  href="https://wecare.sandipuniversity.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 leading-6 transition-colors"
                >
                  Online Grievance form: wecare.sandipuniversity.edu.in
                </a>
              </div>

              <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-2xl p-5">
                <HiOutlineEnvelope className="text-red-600 w-6 h-6 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">General complaints</p>
                  <a href="mailto:dirsw@sandipuniversity.edu.in" className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors">
                    dirsw@sandipuniversity.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-2xl p-5">
                <HiOutlineEnvelope className="text-red-600 w-6 h-6 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Women-related complaints</p>
                  <a href="mailto:deanmgt@sandipuniversity.edu.in" className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors">
                    deanmgt@sandipuniversity.edu.in
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
