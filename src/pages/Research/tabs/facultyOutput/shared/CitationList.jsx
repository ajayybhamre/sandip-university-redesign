const CitationList = ({ items }) => (
  <ol className="space-y-4">
    {
      items.map((item, index) => (
        <li
          key={index}
          className="
            flex gap-3
            text-sm text-gray-600 dark:text-gray-300 leading-6
            pb-4
            border-b border-gray-100 dark:border-slate-800
            last:border-0
          "
        >
          <span className="text-red-600 font-bold shrink-0">{index + 1}.</span>
          <span>{item}</span>
        </li>
      ))
    }
  </ol>
);

export default CitationList;
