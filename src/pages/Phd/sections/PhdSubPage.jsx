import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft } from "react-icons/hi2";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO/SEO";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

const phdHero = "/phd/hero/phd-hero.png";

const PhdSubPage = ({ seo, title, description, currentPage, children }) => (
  <>
    <SEO {...seo} />

    <Header />

    <Breadcrumb
      badge="Ph.D Programmes"
      title={title}
      description={description}
      currentPage={currentPage}
      image={phdHero}
    />

    <section className="py-16 bg-white dark:bg-black transition-colors">
      <div className="max-w-[1100px] mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/phd"
            className="
              inline-flex items-center gap-2 mb-8
              text-sm font-semibold text-red-600 hover:text-red-700
              transition-colors
            "
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Ph.D Programmes
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>

      </div>
    </section>

    <Footer />
  </>
);

export default PhdSubPage;
