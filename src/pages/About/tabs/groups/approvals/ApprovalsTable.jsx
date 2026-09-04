import { HiOutlineDocumentText } from "react-icons/hi2";

import ResponsiveTable from "../../shared/ResponsiveTable";
import approvalsData from "./data/approvals";

const columns = [
  { key: "sr", label: "Sr No" },
  { key: "name", label: "Approval Name" },
  { key: "date", label: "Date" },
  { key: "link", label: "Document" },
];

const rows = approvalsData.map((item, index) => ({
  sr: index + 1,
  name: item.name,
  date: item.date,
  link: (
    <a
      href="#"
      className="
        inline-flex
        items-center
        gap-1.5
        text-red-600
        font-semibold
        hover:underline
      "
    >
      <HiOutlineDocumentText className="w-4 h-4" />
      View PDF
    </a>
  ),
}));

const ApprovalsTable = () => <ResponsiveTable columns={columns} rows={rows} />;

export default ApprovalsTable;
