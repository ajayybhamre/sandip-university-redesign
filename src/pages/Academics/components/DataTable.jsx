export default function DataTable({ columns, rows, caption }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="hidden bg-gray-50 text-gray-900 dark:bg-white/5 dark:text-white sm:table-header-group">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-4 py-3 font-bold">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="block border-t border-gray-200 first:border-t-0 dark:border-gray-800 sm:table-row"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  data-label={column.label}
                  className="flex min-h-11 items-baseline gap-4 px-4 py-2 text-gray-600 before:w-28 before:shrink-0 before:font-bold before:text-gray-900 before:content-[attr(data-label)] dark:text-gray-400 dark:before:text-white sm:table-cell sm:px-4 sm:py-4 sm:before:content-none"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
