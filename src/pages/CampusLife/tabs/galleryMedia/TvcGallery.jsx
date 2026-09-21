import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlinePlayCircle } from "react-icons/hi2";

import VideoLightbox from "./shared/VideoLightbox";
import tvcVideos from "./data/tvcData";

const TvcGallery = () => {

  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <div>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
      ">

        {
          tvcVideos.map((video, index) => (

            <motion.button

              key={video.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4, delay: (index % 9) * 0.05 }}

              viewport={{ once: true }}

              whileHover={{ y: -4 }}

              onClick={() => setActiveVideoId(video.id)}

              className="
                text-left
                bg-gray-50
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                overflow-hidden
                shadow-sm
              "
            >

              <div className="relative">

                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="w-full aspect-video object-cover"
                />

                <div className="
                  absolute
                  inset-0
                  bg-black/30
                  flex
                  items-center
                  justify-center
                ">
                  <HiOutlinePlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                </div>

              </div>

              <p className="
                p-4
                text-sm
                font-semibold
                text-gray-800
                dark:text-gray-100
                leading-6
                line-clamp-2
              ">
                {video.title}
              </p>

            </motion.button>

          ))
        }

      </div>

      <VideoLightbox
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />

    </div>
  );
};

export default TvcGallery;
