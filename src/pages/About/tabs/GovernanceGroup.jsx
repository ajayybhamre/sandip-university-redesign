import { motion } from "framer-motion";
import { HiOutlineUserGroup } from "react-icons/hi2";

import OrgStructureCard from "./groups/governance/OrgStructureCard";
import OfficerCards from "./groups/governance/OfficerCards";
import ResponsiveTable from "./shared/ResponsiveTable";

import governingBody from "./groups/governance/data/governingBody";
import boardOfManagement from "./groups/governance/data/boardOfManagement";
import { officers, deans, heads } from "./groups/governance/data/universityOfficers";

const roleColumns = [
  { key: "role", label: "Title" },
  { key: "names", label: "Name(s)" },
];

const deanColumns = [
  { key: "name", label: "Name" },
  { key: "designation", label: "Designation" },
  { key: "contact", label: "Contact" },
];

const headColumns = [
  { key: "name", label: "Name" },
  { key: "department", label: "Department" },
];

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


const GovernanceGroup = () => {
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
          <HiOutlineUserGroup className="text-red-600 w-6 h-6" />
        </div>

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Who Runs Sandip University
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Governance
        </h3>

      </motion.div>

      <OrgStructureCard />

      <div>
        <SectionHeading>Governing Body</SectionHeading>
        <ResponsiveTable columns={roleColumns} rows={governingBody} />
      </div>

      <div>
        <SectionHeading>Board of Management</SectionHeading>
        <ResponsiveTable columns={roleColumns} rows={boardOfManagement} />
      </div>

      <div>
        <SectionHeading>Officers of the University</SectionHeading>
        <OfficerCards officers={officers} />
      </div>

      <div>
        <SectionHeading>Deans of the Schools</SectionHeading>
        <ResponsiveTable columns={deanColumns} rows={deans} />
      </div>

      <div>
        <SectionHeading>Heads of Department</SectionHeading>
        <ResponsiveTable columns={headColumns} rows={heads} />
      </div>

    </div>
  );
};

export default GovernanceGroup;
