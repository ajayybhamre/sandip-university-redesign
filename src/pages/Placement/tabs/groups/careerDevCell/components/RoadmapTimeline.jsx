import { motion } from "framer-motion";

const RoadmapTimeline = ({ steps }) => {
  return (
    <div className="relative">

      {/* Connecting vertical line */}

      <div className="
        absolute
        left-5
        top-2
        bottom-2
        w-0.5
        bg-red-100
        dark:bg-red-900/40
      " />

      <div className="space-y-8">

        {
          steps.map((step, index) => (

            <motion.div

              key={step.title}

              initial={{ opacity: 0, x: -20 }}

              whileInView={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.4, delay: index * 0.08 }}

              viewport={{ once: true }}

              className="
                relative
                flex
                items-start
                gap-5
                pl-0
              "
            >

              <div className="
                relative
                z-10
                w-10
                h-10
                rounded-full
                bg-red-600
                text-white
                font-bold
                text-sm
                flex
                items-center
                justify-center
                shrink-0
                shadow-md
                ring-4
                ring-white
                dark:ring-[#111111]
              ">
                {index + 1}
              </div>

              <div className="
                pt-1.5
                pb-2
              ">

                <h5 className="
                  font-bold
                  text-gray-900
                  dark:text-white
                  mb-1.5
                ">
                  {step.title}
                </h5>

                <p className="
                  text-sm
                  text-gray-600
                  dark:text-gray-400
                  leading-6
                  text-justify
                ">
                  {step.description}
                </p>

              </div>

            </motion.div>

          ))
        }

      </div>

    </div>
  );
};

export default RoadmapTimeline;
