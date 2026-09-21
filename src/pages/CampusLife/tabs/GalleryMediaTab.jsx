import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBuildingOffice2,
  HiOutlineHomeModern,
  HiOutlineNewspaper,
  HiOutlineCalendarDays,
  HiOutlineSparkles,
  HiOutlineFilm,
} from "react-icons/hi2";

import CampusGallery from "./galleryMedia/CampusGallery";
import FacilityGallery from "./galleryMedia/FacilityGallery";
import MediaCoverage from "./galleryMedia/MediaCoverage";
import EventsList from "./galleryMedia/EventsList";
import EventGallery from "./galleryMedia/EventGallery";
import TvcGallery from "./galleryMedia/TvcGallery";

const innerTabs = [
  { id: "campus", title: "Campus", icon: HiOutlineBuildingOffice2 },
  { id: "facility", title: "Facility", icon: HiOutlineHomeModern },
  { id: "media-coverage", title: "Media Coverage", icon: HiOutlineNewspaper },
  { id: "events", title: "Events", icon: HiOutlineCalendarDays },
  { id: "event-gallery", title: "Event Gallery", icon: HiOutlineSparkles },
  { id: "tvc", title: "TVC", icon: HiOutlineFilm },
];

const GalleryMediaTab = () => {

  const [innerTab, setInnerTab] = useState("campus");

  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-8"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          See It For Yourself
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Gallery & Media
        </h3>

      </motion.div>

      {/* Inner tabs: Campus | Facility | Media Coverage | Event Gallery | TVC */}

      <div className="
        flex
        flex-wrap
        gap-2
        mb-8
        border-b
        border-gray-200
        dark:border-slate-700
        pb-4
      ">

        {
          innerTabs.map((tab) => {

            const Icon = tab.icon;

            return (

              <button

                key={tab.id}

                onClick={() => setInnerTab(tab.id)}

                className={`
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all

                  ${
                    innerTab === tab.id
                    ?
                    "bg-gray-900 dark:bg-white text-white dark:text-black shadow-md"
                    :
                    "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                  }
                `}
              >

                <Icon className="w-4 h-4" />

                {tab.title}

              </button>

            );

          })
        }

      </div>

      {innerTab === "campus" && <CampusGallery />}

      {innerTab === "facility" && <FacilityGallery />}

      {innerTab === "media-coverage" && <MediaCoverage />}

      {innerTab === "events" && <EventsList />}

      {innerTab === "event-gallery" && <EventGallery />}

      {innerTab === "tvc" && <TvcGallery />}

    </div>
  );
};

export default GalleryMediaTab;
