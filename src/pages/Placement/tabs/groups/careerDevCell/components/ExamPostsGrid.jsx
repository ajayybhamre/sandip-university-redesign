import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi2";

const ExamPostsGrid = ({ groups }) => {
  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
    ">

      {
        groups.map((group, index) => (

          <motion.div

            key={group.title}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5, delay: index * 0.1 }}

            viewport={{ once: true }}

            className="
              bg-gray-50
              dark:bg-slate-900
              border
              border-gray-200
              dark:border-slate-700
              rounded-2xl
              p-6
              md:p-7
              shadow-md
            "
          >

            <h5 className="
              font-bold
              text-gray-900
              dark:text-white
              mb-5
              pb-4
              border-b
              border-gray-200
              dark:border-slate-700
            ">
              {group.title}
            </h5>

            <ul className="
              grid
              sm:grid-cols-2
              gap-x-4
              gap-y-2.5
            ">

              {
                group.items.map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-2.5
                      text-sm
                      text-gray-600
                      dark:text-gray-300
                      leading-6
                    "
                  >

                    <HiOutlineCheckCircle className="
                      text-red-600
                      w-4 h-4
                      shrink-0
                      mt-0.5
                    " />

                    <span>{item}</span>

                  </li>

                ))
              }

            </ul>

          </motion.div>

        ))
      }

    </div>
  );
};

export default ExamPostsGrid;
