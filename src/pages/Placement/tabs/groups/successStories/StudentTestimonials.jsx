import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChatBubbleLeftRight, HiOutlineChevronDown } from "react-icons/hi2";

import { featuredTestimonials, studentJourneys } from "./data/videoTestimonials";
import extractYouTubeId from "./utils/extractYouTubeId";
import VideoCard from "./components/VideoCard";
import VideoModal from "./components/VideoModal";

const JOURNEYS_INITIAL_COUNT = 8;

const StudentTestimonials = () => {

  const [activeVideoId, setActiveVideoId] = useState(null);
  const [showAllJourneys, setShowAllJourneys] = useState(false);

  const visibleJourneys = showAllJourneys
    ? studentJourneys
    : studentJourneys.slice(0, JOURNEYS_INITIAL_COUNT);

  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10"
      >

        <div className="
          flex
          items-center
          gap-3
          mb-4
        ">

          <div className="
            w-11
            h-11
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            shrink-0
          ">
            <HiOutlineChatBubbleLeftRight className="text-red-600 w-5 h-5" />
          </div>

          <span className="
            text-red-600
            font-semibold
            uppercase
            tracking-[3px]
            text-sm
          ">
            In Their Own Words
          </span>

        </div>

        <h3 className="
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Student Testimonials
        </h3>

      </motion.div>

      {/* Featured Placement Highlights */}

      <div className="mb-14">

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Placement & Career Highlights
        </h4>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {
            featuredTestimonials.map((video, index) => {

              const videoId = extractYouTubeId(video.url);
              if (!videoId) return null;

              return (
                <VideoCard
                  key={video.url}
                  videoId={videoId}
                  title={video.title}
                  delay={(index % 6) * 0.06}
                  onClick={() => setActiveVideoId(videoId)}
                />
              );

            })
          }

        </div>

      </div>

      {/* Student Journeys */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Student Journeys
        </h4>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {
            visibleJourneys.map((video, index) => {

              const videoId = extractYouTubeId(video.url);
              if (!videoId) return null;

              return (
                <VideoCard
                  key={video.url}
                  videoId={videoId}
                  title={video.title}
                  delay={(index % 6) * 0.06}
                  onClick={() => setActiveVideoId(videoId)}
                />
              );

            })
          }

        </div>

        {
          studentJourneys.length > JOURNEYS_INITIAL_COUNT && (

            <div className="
              flex
              justify-center
              mt-8
            ">

              <button
                onClick={() => setShowAllJourneys(!showAllJourneys)}
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
                  showAllJourneys
                  ? "Show Less"
                  : `Show ${studentJourneys.length - JOURNEYS_INITIAL_COUNT} More Journeys`
                }

                <motion.span
                  animate={{ rotate: showAllJourneys ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <HiOutlineChevronDown className="w-4 h-4" />
                </motion.span>

              </button>

            </div>

          )
        }

      </div>

      <VideoModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />

    </div>
  );
};

export default StudentTestimonials;
