import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineHandRaised } from "react-icons/hi2";

import campusPrideImages from "./data/campusPrideImages";
import Lightbox from "../../shared/Lightbox";

const CampusPrideProgram = () => {

  const [activeIndex, setActiveIndex] = useState(null);

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
          <HiOutlineHandRaised className="text-red-600 w-6 h-6" />
        </div>

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Campus Pride Program 2.0
        </span>

        <h3 className="
          mt-4
          text-3xl
          md:text-5xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          सच हुए सपने
        </h3>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
      ">

        {
          campusPrideImages.map((img, index) => (

            <motion.button

              key={img.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}

              viewport={{ once: true }}

              whileHover={{ scale: 1.02 }}

              onClick={() => setActiveIndex(index)}

              className="
                block
                rounded-2xl
                overflow-hidden
                shadow-md
                border
                border-gray-100
                dark:border-slate-700
                cursor-zoom-in
                aspect-[3/2]
              "
            >

              <img
                src={img.src}
                alt={`Campus Pride Program moment ${index + 1}`}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />

            </motion.button>

          ))
        }

      </div>

      <Lightbox
        images={campusPrideImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />

    </div>
  );
};

export default CampusPrideProgram;
