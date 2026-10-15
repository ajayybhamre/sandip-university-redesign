import { HiOutlinePhone } from "react-icons/hi2";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

import banner from "../../../assets/images/campus-life/campus/campus-2.png";

/* Shared page shell for the result lookup and PRN search pages */
export default function LookupLayout({
  badge,
  title,
  description,
  currentPage,
  heading,
  intro,
  children,
}) {
  return (
    <>
      <Header />

      <Breadcrumb
        badge={badge}
        title={title}
        description={description}
        currentPage={currentPage}
        image={banner}
      />

      <section className="py-20 bg-white dark:bg-black transition-colors">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="
            bg-white dark:bg-[#111111]
            border border-red-100 dark:border-red-900
            rounded-3xl shadow-lg
            p-8 lg:p-10
            min-h-[400px]
          ">

            <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
              {heading}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 mb-8 max-w-2xl">
              {intro}
            </p>

            {children}

            <div className="
              mt-14 flex flex-wrap items-center gap-4
              bg-red-50 dark:bg-red-900/20
              border border-red-100 dark:border-red-900
              rounded-2xl p-6
            ">
              <HiOutlinePhone className="text-red-600 w-6 h-6 shrink-0" />
              <a
                href="tel:+919607978068"
                className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors"
              >
                +91 9607978068
              </a>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Examination Helpline
              </span>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
