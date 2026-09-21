import { useState } from "react";
import { motion } from "framer-motion";

import Lightbox from "./Lightbox";

const PhotoGrid = ({ images }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (imageId) => {
    const index = images.findIndex((img) => img.id === imageId);
    setActiveIndex(index);
  };

  return (
    <div>

      <div className="
        columns-2
        sm:columns-3
        lg:columns-4
        gap-3
        [column-fill:_balance]
      ">

        {
          images.map((img, i) => (

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
                alt={img.id}
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
        images.length === 0 && (

          <p className="
            text-center
            text-gray-500
            dark:text-gray-400
            py-16
          ">
            No photos in this category yet.
          </p>

        )
      }

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />

    </div>
  );
};

export default PhotoGrid;
