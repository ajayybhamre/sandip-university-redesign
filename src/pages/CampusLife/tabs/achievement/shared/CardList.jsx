import { motion } from "framer-motion";

const CardList = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {
      items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: (index % 8) * 0.06 }}
          viewport={{ once: true }}
          className="
            bg-gray-50 dark:bg-slate-900
            border border-gray-200 dark:border-slate-700
            rounded-2xl overflow-hidden
          "
        >

          {
            item.image && (
              <div className="w-full h-64 bg-white dark:bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )
          }

          <div className="p-5">

            <p className="font-bold text-gray-900 dark:text-white mb-1 leading-6">
              {item.title}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
              {item.detail}
            </p>
            {
              item.date && (
                <p className="text-xs text-red-600 font-semibold mt-3">
                  {item.date}
                </p>
              )
            }

          </div>

        </motion.div>
      ))
    }
  </div>
);

export default CardList;
