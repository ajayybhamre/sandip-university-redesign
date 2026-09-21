import { useState } from "react";
import { motion } from "framer-motion";

import studentPlacementImages from "./data/studentPlacementImages";
import Lightbox from "../../shared/Lightbox";

const StudentPlacementGallery = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (imageId) => {
    const index = studentPlacementImages.findIndex((img) => img.id === imageId);
    setActiveIndex(index);
  };

  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10 text-center"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Celebrating Every Success
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Student Placement
        </h3>

      </motion.div>

      <div className="
        columns-3
        sm:columns-4
        lg:columns-6
        gap-3
        [column-fill:_balance]
      ">

        {
          studentPlacementImages.map((img, i) => (

            <motion.button

              key={img.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}

              viewport={{ once: true }}

              whileHover={{ scale: 1.02 }}

              onClick={() => openLightbox(img.id)}

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
                alt={`Student placement ${img.id}`}
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

      <Lightbox
        images={studentPlacementImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />

    </div>
  );
};

export default StudentPlacementGallery;
