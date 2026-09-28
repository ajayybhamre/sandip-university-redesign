import {
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineBookOpen,
  HiOutlineCurrencyRupee,
  HiOutlineDocumentCheck,
  HiOutlineBuildingOffice2,
  HiOutlineBeaker,
  HiOutlineTrophy,
  HiOutlineFolderOpen,
} from "react-icons/hi2";

const tabData = [
  { id: "overview", title: "Overview & Objectives", icon: HiOutlineLightBulb },
  { id: "governance", title: "Governance & Ethics", icon: HiOutlineShieldCheck },
  { id: "faculty-output", title: "Faculty Research Publications", icon: HiOutlineDocumentText },
  { id: "books", title: "Books / Book Chapters", icon: HiOutlineBookOpen },
  { id: "funding", title: "Funding & Industry Engagement", icon: HiOutlineCurrencyRupee },
  { id: "ipr", title: "IPR / Patent", icon: HiOutlineDocumentCheck },
  { id: "centre-of-excellence", title: "Centre of Excellence", icon: HiOutlineBuildingOffice2 },
  { id: "cic", title: "Central Instrumentation Center (CIC)", icon: HiOutlineBeaker },
  { id: "awards", title: "Research & Innovation Awards", icon: HiOutlineTrophy },
  { id: "policies", title: "Policies", icon: HiOutlineFolderOpen },
];

export default tabData;
