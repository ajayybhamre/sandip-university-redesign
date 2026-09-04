import { motion } from "framer-motion";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import LeaderMessageCard from "./groups/leadership/LeaderMessageCard";
import leaders from "./groups/leadership/data/leaders";

const LeadershipGroup = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-14 text-center"
      >

        <div className="
          w-14
          h-14
          rounded-full
          bg-red-100
          dark:bg-red-900/30
          flex
          items-center
          justify-center
          mx-auto
          mb-5
        ">
          <HiOutlineChatBubbleLeftRight className="text-red-600 w-6 h-6" />
        </div>

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          From Our Leadership
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Leadership Messages
        </h3>

      </motion.div>

      <div className="space-y-16">

        {
          leaders.map((leader, index) => (

            <div key={leader.id}>

              <LeaderMessageCard
                leader={leader}
                reverse={index % 2 === 1}
                delay={index * 0.1}
              />

              {
                index < leaders.length - 1 && (

                  <div className="
                    mt-16
                    border-b
                    border-gray-100
                    dark:border-slate-800
                  " />

                )
              }

            </div>

          ))
        }

      </div>

    </div>
  );
};

export default LeadershipGroup;
