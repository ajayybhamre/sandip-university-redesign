import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlinePhoto } from "react-icons/hi2";

import placementGalleryImages from "./data/placementGalleryImages";
import Lightbox from "../../shared/Lightbox";

const PlacementGallery = () => {

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
          <HiOutlinePhoto className="text-red-600 w-6 h-6" />
        </div>

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Moments Worth Remembering
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Placement Gallery
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
          placementGalleryImages.map((img, index) => (

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
                alt={`Placement gallery ${index + 1}`}
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
        images={placementGalleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />

    </div>
  );
};

export default PlacementGallery;
