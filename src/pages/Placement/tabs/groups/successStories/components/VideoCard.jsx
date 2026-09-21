import { motion } from "framer-motion";
import { HiOutlinePlay } from "react-icons/hi2";

const VideoCard = ({ videoId, title, onClick, delay = 0 }) => (

  <motion.button

    initial={{ opacity: 0, y: 20 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.4, delay }}

    viewport={{ once: true }}

    whileHover={{ y: -4 }}

    onClick={onClick}

    className="
      text-left
      rounded-2xl
      overflow-hidden
      shadow-md
      border
      border-gray-100
      dark:border-slate-700
      bg-white
      dark:bg-[#111]
      group
    "
  >

    <div className="
      relative
      aspect-video
      overflow-hidden
    ">

      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-300
          group-hover:scale-105
        "
      />

      <div className="
        absolute
        inset-0
        bg-black/20
        group-hover:bg-black/30
        transition-colors
        flex
        items-center
        justify-center
      ">

        <div className="
          w-12
          h-12
          md:w-14
          md:h-14
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          shadow-lg
          transition-transform
          duration-300
          group-hover:scale-110
        ">
          <HiOutlinePlay className="text-white w-5 h-5 md:w-6 md:h-6 ml-0.5" />
        </div>

      </div>

    </div>

    <div className="p-4">

      <h5 className="
        text-sm
        font-semibold
        text-gray-800
        dark:text-gray-100
        leading-5
        line-clamp-2
      ">
        {title}
      </h5>

    </div>

  </motion.button>

);

export default VideoCard;
