import {
  HiOutlineMegaphone,
  HiOutlineDocumentChartBar,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentList,
  HiOutlineUserGroup,
} from "react-icons/hi2";

/* `id` values must match the ?tab= values used in components/Header/menuData.js */
const tabData = [
  { id: "notices", title: "Examination Notices", icon: HiOutlineMegaphone },
  { id: "results", title: "Results", icon: HiOutlineDocumentChartBar },
  { id: "timetables", title: "Timetables", icon: HiOutlineCalendarDays },
  { id: "how-to-apply", title: "How to Apply", icon: HiOutlineClipboardDocumentList },
  { id: "coe-coordinators", title: "CoE Co-ordinators AY 2025-2026", icon: HiOutlineUserGroup },
];

export default tabData;
