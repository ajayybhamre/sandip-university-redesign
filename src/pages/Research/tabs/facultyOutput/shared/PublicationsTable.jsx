import ResponsiveTable from "../../../shared/ResponsiveTable";

const columns = [
  { key: "sr", label: "Sr. No" },
  { key: "title", label: "Title of Paper" },
  { key: "authors", label: "Name of the Author/s" },
  { key: "department", label: "Department of the Teacher" },
  { key: "journal", label: "Name of Journal" },
  { key: "year", label: "Year of Publication" },
  { key: "issn", label: "ISSN Number" },
  { key: "listing", label: "Is it Listed in UGC Care List" },
];

const PublicationsTable = ({ items }) => {

  const rows = items.map((item, index) => ({
    sr: index + 1,
    title: item.title,
    authors: item.authors,
    department: item.department,
    journal: item.journal,
    year: item.year,
    issn: item.issn || "—",
    listing: item.listing || "—",
  }));

  return <ResponsiveTable columns={columns} rows={rows} />;
};

export default PublicationsTable;
