import { motion } from "framer-motion";
import { HiOutlineShieldCheck } from "react-icons/hi2";

import ApprovalsTable from "./groups/approvals/ApprovalsTable";
import MembershipGrid from "./groups/approvals/MembershipGrid";
import MOUsSection from "./groups/approvals/MOUsSection";

const SectionHeading = ({ children }) => (
  <h4 className="
    font-bold
    text-lg
    text-gray-900
    dark:text-white
    mb-6
  ">
    {children}
  </h4>
);


const ApprovalsGroup = () => {
  return (
    <div className="space-y-14">

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="text-center"
      >

        <div className="
          w-14
          h-14
          rounded-full
          bg-red-100
          dark:bg-red-900/30
          flex
          items-center
          justify-center
          mx-auto
          mb-5
        ">
          <HiOutlineShieldCheck className="text-red-600 w-6 h-6" />
        </div>

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Trusted & Recognised
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Approvals, Recognitions & Partnerships
        </h3>

      </motion.div>

      <div>
        <SectionHeading>Approvals</SectionHeading>
        <ApprovalsTable />
      </div>

      <div>
        <SectionHeading>Institutional Memberships</SectionHeading>
        <MembershipGrid />
      </div>

      <div>
        <SectionHeading>MOUs & Partner Institutions</SectionHeading>
        <MOUsSection />
      </div>

    </div>
  );
};

export default ApprovalsGroup;
