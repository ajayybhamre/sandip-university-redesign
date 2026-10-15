import PhdSubPage from "./sections/PhdSubPage";
import ResponsiveTable from "../Research/shared/ResponsiveTable";
import degreeAwardedList from "./data/degreeAwardedList";

const degreeAwardedColumns = [
  { key: "sr", label: "Sr. No." },
  { key: "name", label: "Name of the PhD Scholar" },
  { key: "title", label: "Title of the Thesis" },
  { key: "guide", label: "Name of the Guide/s" },
  { key: "year", label: "Year" },
];

export default function PhdDegreeAwarded() {
  return (
    <PhdSubPage
      seo={{
        title: "Ph.D Degree Awarded | Sandip University",
        description: "Complete list of Ph.D degrees awarded by Sandip University — scholar, thesis title, guide and year.",
        keywords: "Sandip University PhD Degree Awarded, PhD Scholars List",
        image: "https://yourdomain.com/phd.jpg",
        url: "https://yourdomain.com/phd/degree-awarded",
      }}
      title="Ph.D Degree Awarded"
      description="Degree Completed List — scholar, thesis title, guide and year of award."
      currentPage="Ph.D Degree Awarded"
    >
      <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Ph.D Degree Awarded
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{degreeAwardedList.length} degrees awarded</p>
      <ResponsiveTable columns={degreeAwardedColumns} rows={degreeAwardedList} />
    </PhdSubPage>
  );
}
