import {
  HiOutlineMegaphone,
  HiOutlineDocumentChartBar,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

import NoticesTab from "./tabs/NoticesTab";
import ResultsTab from "./tabs/ResultsTab";
import TimetablesTab from "./tabs/TimetablesTab";
import HowToApplyTab from "./tabs/HowToApplyTab";

/*
  `id` values must match the ?tab= values used in components/Header/menuData.js.
  CoE Co-ordinators and Helpline are dropdown-only items (PDF / phone link), so they have no tab.
*/
const tabData = [
  { id: "notices", title: "Examination Notices", icon: HiOutlineMegaphone, component: NoticesTab },
  { id: "results", title: "Results", icon: HiOutlineDocumentChartBar, component: ResultsTab },
  { id: "timetables", title: "Timetables", icon: HiOutlineCalendarDays, component: TimetablesTab },
  { id: "how-to-apply", title: "How to Apply", icon: HiOutlineClipboardDocumentList, component: HowToApplyTab },
];

export default tabData;
