import ResponsiveTable from "../../../shared/ResponsiveTable";

const columns = [
  { key: "sr", label: "Sl. No." },
  { key: "authors", label: "Name of the Teacher" },
  { key: "title", label: "Title of the Book Published" },
  { key: "year", label: "Year of Publication" },
  { key: "isbn", label: "ISBN Number" },
  { key: "publisher", label: "Name of the Publisher" },
];

const BooksTable = ({ items }) => {

  const rows = items.map((item, index) => ({
    sr: index + 1,
    authors: item.authors,
    title: item.title,
    year: item.year || "—",
    isbn: item.isbn || "—",
    publisher: item.publisher || "—",
  }));

  return <ResponsiveTable columns={columns} rows={rows} />;
};

export default BooksTable;
