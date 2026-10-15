import { motion } from "framer-motion";

const ResponsiveTable = ({ columns, rows }) => (

  <motion.div

    initial={{ opacity: 0, y: 20 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.5 }}

    viewport={{ once: true }}

    className="
      rounded-2xl
      border
      border-gray-200
      dark:border-slate-700
      overflow-hidden
      shadow-sm
    "
  >

    {/* Desktop table */}

    <div className="
      hidden
      md:block
      overflow-x-auto
    ">

      <table className="w-full text-sm">

        <thead>

          <tr className="
            bg-gray-50
            dark:bg-slate-900
            border-b
            border-gray-200
            dark:border-slate-700
          ">

            {
              columns.map((col) => (

                <th
                  key={col.key}
                  className="
                    text-left
                    font-bold
                    text-gray-900
                    dark:text-white
                    px-5
                    py-4
                  "
                >
                  {col.label}
                </th>

              ))
            }

          </tr>

        </thead>

        <tbody>

          {
            rows.map((row, i) => (

              <tr
                key={i}
                className="
                  border-b
                  border-gray-100
                  dark:border-slate-800
                  last:border-0
                  odd:bg-white
                  even:bg-gray-50/50
                  dark:odd:bg-transparent
                  dark:even:bg-slate-900/40
                "
              >

                {
                  columns.map((col) => (

                    <td
                      key={col.key}
                      className="
                        px-5
                        py-4
                        text-gray-600
                        dark:text-gray-300
                        leading-6
                        align-top
                      "
                    >
                      {row[col.key]}
                    </td>

                  ))
                }

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

    {/* Mobile stacked cards */}

    <div className="
      md:hidden
      divide-y
      divide-gray-100
      dark:divide-slate-800
    ">

      {
        rows.map((row, i) => (

          <div
            key={i}
            className="
              p-5
              bg-white
              dark:bg-transparent
              space-y-2
            "
          >

            {
              columns.map((col) => (

                <div key={col.key}>

                  <span className="
                    block
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-red-600
                  ">
                    {col.label}
                  </span>

                  <span className="
                    block
                    text-sm
                    text-gray-700
                    dark:text-gray-300
                    leading-6
                  ">
                    {row[col.key]}
                  </span>

                </div>

              ))
            }

          </div>

        ))
      }

    </div>

  </motion.div>

);

export default ResponsiveTable;
