import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineCalendarDays, HiOutlineChevronDown } from "react-icons/hi2";

import placementEventImages from "./data/placementEventImages";
import Lightbox from "../../shared/Lightbox";

const INITIAL_COUNT = 9;

const PlacementEvents = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll
    ? placementEventImages
    : placementEventImages.slice(0, INITIAL_COUNT);

  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10 text-center"
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
          <HiOutlineCalendarDays className="text-red-600 w-6 h-6" />
        </div>

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          On Campus & Beyond
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Placement Events
        </h3>

      </motion.div>

      <div className="
        columns-2
        sm:columns-3
        lg:columns-4
        gap-3
        [column-fill:_balance]
      ">

        {
          visibleImages.map((img, index) => (

            <motion.button

              key={img.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4, delay: (index % 8) * 0.04 }}

              viewport={{ once: true }}

              whileHover={{ scale: 1.02 }}

              onClick={() => setActiveIndex(index)}

              className="
                block
                w-full
                mb-3
                break-inside-avoid
                rounded-lg
                overflow-hidden
                shadow-md
                border
                border-gray-100
                dark:border-slate-700
                cursor-zoom-in
              "
            >

              <img
                src={img.src}
                alt={`Placement event ${index + 1}`}
                loading="lazy"
                className="
                  w-full
                  h-auto
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />

            </motion.button>

          ))
        }

      </div>

      {
        placementEventImages.length > INITIAL_COUNT && (

          <div className="
            flex
            justify-center
            mt-8
          ">

            <button
              onClick={() => setShowAll(!showAll)}
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-full
                bg-red-50
                dark:bg-red-900/20
                text-red-600
                font-semibold
                text-sm
                hover:bg-red-100
                dark:hover:bg-red-900/30
                transition-colors
              "
            >

              {
                showAll
                ? "Show Less"
                : `Show ${placementEventImages.length - INITIAL_COUNT} More`
              }

              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <HiOutlineChevronDown className="w-4 h-4" />
              </motion.span>

            </button>

          </div>

        )
      }

      <Lightbox
        images={visibleImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />

    </div>
  );
};

export default PlacementEvents;
