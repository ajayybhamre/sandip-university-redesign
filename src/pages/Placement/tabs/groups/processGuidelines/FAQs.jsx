import { motion } from "framer-motion";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

import FAQItem from "./components/FAQItem";
import faqItems from "./data/faqItems";

const FAQs = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10"
      >

        <div className="
          flex
          items-center
          gap-3
          mb-4
        ">

          <div className="
            w-11
            h-11
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            shrink-0
          ">
            <HiOutlineQuestionMarkCircle className="text-red-600 w-5 h-5" />
          </div>

          <span className="
            text-red-600
            font-semibold
            uppercase
            tracking-[3px]
            text-sm
          ">
            Got Questions?
          </span>

        </div>

        <h3 className="
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Placements FAQs
        </h3>

      </motion.div>

      <div className="space-y-4">

        {
          faqItems.map((item, index) => (

            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              showRecruiters={item.showRecruiters}
              index={index}
            />

          ))
        }

      </div>

    </div>
  );
};

export default FAQs;
