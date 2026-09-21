import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";

const VideoLightbox = ({ videoId, onClose }) => {

  if (!videoId) return null;

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

        <motion.div

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.25 }}

          onClick={(e) => e.stopPropagation()}

          className="
            w-full
            max-w-4xl
            aspect-video
            rounded-xl
            overflow-hidden
            shadow-2xl
          "
        >

          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

};

export default VideoLightbox;
