import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineXMark,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";

const Lightbox = ({ images, activeIndex, onClose, onNavigate }) => {

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, onClose, goPrev, goNext]);

  if (activeIndex === null) return null;

  const active = images[activeIndex];

  return (

    <AnimatePresence>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}

        onClick={onClose}

        className="
          fixed
          inset-0
          z-[999]
          bg-black/90
          backdrop-blur-sm
          flex
          items-center
          justify-center
          p-4
          md:p-10
        "
      >

        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            md:top-6
            md:right-6
            w-11
            h-11
            rounded-full
            bg-white/10
            hover:bg-white/20
            flex
            items-center
            justify-center
            text-white
            transition-colors
            z-10
          "
          aria-label="Close"
        >
          <HiOutlineXMark className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="
            absolute
            left-2
            md:left-6
            w-11
            h-11
            rounded-full
            bg-white/10
            hover:bg-white/20
            flex
            items-center
            justify-center
            text-white
            transition-colors
            z-10
          "
          aria-label="Previous image"
        >
          <HiOutlineChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="
            absolute
            right-2
            md:right-6
            w-11
            h-11
            rounded-full
            bg-white/10
            hover:bg-white/20
            flex
            items-center
            justify-center
            text-white
            transition-colors
            z-10
          "
          aria-label="Next image"
        >
          <HiOutlineChevronRight className="w-6 h-6" />
        </button>

        <motion.img

          key={active.id}

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.25 }}

          onClick={(e) => e.stopPropagation()}

          src={active.src}

          alt={active.id}

          className="
            max-w-full
            max-h-full
            rounded-xl
            shadow-2xl
            object-contain
          "
        />

        <span className="
          absolute
          bottom-4
          md:bottom-6
          text-white/70
          text-xs
          md:text-sm
          font-medium
        ">
          {activeIndex + 1} / {images.length}
        </span>

      </motion.div>

    </AnimatePresence>

  );

};

export default Lightbox;
