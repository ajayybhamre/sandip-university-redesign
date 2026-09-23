import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineTrophy,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineCube,
  HiOutlineSquares2X2,
  HiOutlinePuzzlePiece,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineRocketLaunch,
  HiOutlineSun,
  HiOutlineSquare3Stack3D,
  HiOutlineFlag,
  HiOutlineShieldCheck,
  HiOutlineMapPin,
  HiOutlineLightBulb,
} from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import PhotoGrid from "./galleryMedia/shared/PhotoGrid";
import ContentModal from "./sports/shared/ContentModal";

import directorPhoto from "../../../assets/images/campus-life/sports/director-paresh-rege.jpg";
import outdoorImg from "../../../assets/images/campus-life/sports/outdoor.png";
import indoorImg from "../../../assets/images/campus-life/sports/indoor.png";
import fitnessImg from "../../../assets/images/campus-life/sports/gym.png";
import yogaImg from "../../../assets/images/campus-life/sports/yoga.jpg";

import sportsGalleryImages from "./sports/data/sportsGalleryData";
import {
  sportsAdvisoryCommittee,
  committeeColumns,
  directorMessage,
  sportsOverview,
  medalCount,
  sportsMenu,
  facilities,
  facilityPerks,
  outdoorSports,
  indoorGames,
  fitnessCenter,
  yogaMeditation,
  aiuColumns,
  aiuAchievements,
} from "./sports/data/sportsData";

const facilityIcons = {
  "table-tennis": HiOutlineCube,
  carrom: HiOutlineSquares2X2,
  chess: HiOutlinePuzzlePiece,
  athletics: HiOutlineBolt,
  ball: HiOutlineGlobeAlt,
  "power-lifting": HiOutlineFire,
  yoga: HiOutlineSparkles,
  gym: HiOutlineHeart,
  adventure: HiOutlineRocketLaunch,
  "green-gym": HiOutlineSun,
  team: HiOutlineUserGroup,
  target: HiOutlineSquare3Stack3D,
  cricket: HiOutlineFlag,
  nets: HiOutlineShieldCheck,
  track: HiOutlineMapPin,
  football: HiOutlineTrophy,
  floodlit: HiOutlineLightBulb,
};

// Sports Menu cards that open a modal instead of navigating.
const modalCards = {
  "Student Achievement": "student-achievement",
  "Advisory Committee": "advisory-committee",
};

const InfoSection = ({ image, title, paragraphs, callout }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
  >
    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
    </div>

    <div>
      <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
        {title}
      </h4>
      {
        paragraphs.map((p, i) => (
          <p key={i} className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
            {p}
          </p>
        ))
      }
      {
        callout && (
          <p className="text-sm font-bold text-red-600">
            {callout}
          </p>
        )
      }
    </div>
  </motion.div>
);

const MedalStat = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl md:text-5xl font-bold text-red-600">{value}</p>
    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-1">{label}</p>
  </div>
);

const SportsTab = () => {

  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="space-y-16">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-red-600 font-semibold uppercase tracking-[3px] text-sm">
          Body, Mind & Team Spirit
        </span>
        <h3 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Sports
        </h3>
      </motion.div>

      {/* Sports Overview + Medal Count */}

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
          Sports Overview
        </h4>
        {
          sportsOverview.paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
              {p}
            </p>
          ))
        }

        <div className="
          mt-8 bg-red-50 dark:bg-red-900/20
          border border-red-100 dark:border-red-900
          rounded-2xl p-8
        ">
          <p className="text-center font-bold text-gray-900 dark:text-white mb-6">
            {medalCount.title}
          </p>
          <div className="grid grid-cols-3 gap-4">
            <MedalStat value={medalCount.gold} label="Gold" />
            <MedalStat value={medalCount.silver} label="Silver" />
            <MedalStat value={medalCount.bronze} label="Bronze" />
          </div>
        </div>
      </div>

      {/* Director's Message */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          flex flex-col sm:flex-row gap-6
          bg-gray-50 dark:bg-slate-900
          border border-gray-200 dark:border-slate-700
          rounded-2xl p-6 md:p-8
        "
      >
        <img
          src={directorPhoto}
          alt={directorMessage.name}
          className="
            w-28 h-28 sm:w-32 sm:h-32
            rounded-2xl object-cover
            border-4 border-white dark:border-slate-800
            shadow-md shrink-0 mx-auto sm:mx-0
          "
        />

        <div>
          <p className="font-bold text-gray-900 dark:text-white mb-1">
            Message from the Sports Director
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            {directorMessage.name} — {directorMessage.title}
          </p>
          {
            directorMessage.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4 last:mb-0">
                {p}
              </p>
            ))
          }
        </div>
      </motion.div>

      {/* Sports Menu */}

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
          Sports Menu
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {
            sportsMenu.map((item, index) => {

              const modalKey = modalCards[item.title];
              const externalProps = item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};

              const cardClasses = `
                flex flex-col items-center text-center gap-3
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-2xl p-6 h-full
              `;

              const cardInner = (
                <>
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineTrophy className="text-red-600 w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {item.title}
                  </span>
                </>
              );

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {
                    modalKey ? (
                      <button onClick={() => setOpenModal(modalKey)} className={cardClasses}>
                        {cardInner}
                      </button>
                    ) : item.href ? (
                      <a href={item.href} {...externalProps} className={cardClasses}>
                        {cardInner}
                      </a>
                    ) : (
                      <div className={cardClasses}>
                        {cardInner}
                      </div>
                    )
                  }
                </motion.div>
              );

            })
          }
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/campus-life?tab=achievement"
            className="
              inline-flex items-center gap-2
              text-sm font-semibold text-red-600
              hover:text-red-700 transition-colors
            "
          >
            All Sports Achievements
            <HiOutlineArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Facility Information */}

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
          Sports Facilities & Infrastructure
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          State-of-the-art Indoor Stadium: 30,000 sq. ft.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            facilities.map((f, index) => {

              const Icon = facilityIcons[f.icon] || HiOutlineTrophy;

              return (
                <motion.div
                  key={f.facility}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 12) * 0.04 }}
                  viewport={{ once: true }}
                  className="
                    flex flex-col items-center text-center gap-2
                    bg-gray-50 dark:bg-slate-900
                    border border-gray-200 dark:border-slate-700
                    rounded-2xl p-5
                  "
                >
                  <Icon className="text-red-600 w-6 h-6" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-5">
                    {f.facility}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Count: {f.count}
                  </span>
                </motion.div>
              );

            })
          }
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {
            facilityPerks.map((perk) => (
              <div key={perk} className="flex items-start gap-3">
                <HiOutlineCheckCircle className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{perk}</span>
              </div>
            ))
          }
        </div>
      </div>

      {/* A glimpse into Sandip University Sports */}

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
          A glimpse into Sandip University Sports
        </h4>
        <PhotoGrid images={sportsGalleryImages} />
      </div>

      {/* Dominate the Game */}

      <div>
        <div className="mb-10">
          <span className="text-red-600 font-semibold uppercase tracking-[3px] text-sm">
            Dominate the Game
          </span>
          <h4 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
            Outdoor & Indoor Sports
          </h4>
        </div>

        <div className="space-y-14">
          <InfoSection image={outdoorImg} {...outdoorSports} />
          <InfoSection image={indoorImg} {...indoorGames} />
        </div>
      </div>

      {/* Fitness Center */}

      <InfoSection image={fitnessImg} {...fitnessCenter} />

      {/* Yoga & Meditation */}

      <InfoSection image={yogaImg} {...yogaMeditation} />

      {/* Modals */}

      <ContentModal
        open={openModal === "student-achievement"}
        title="Student Achievement — AIU All India Inter-University Awards"
        onClose={() => setOpenModal(null)}
      >
        <ResponsiveTable columns={aiuColumns} rows={aiuAchievements} />
      </ContentModal>

      <ContentModal
        open={openModal === "advisory-committee"}
        title="Constitution of Sports Advisory Committee"
        onClose={() => setOpenModal(null)}
      >
        <ResponsiveTable columns={committeeColumns} rows={sportsAdvisoryCommittee} />
      </ContentModal>

    </div>
  );
};

export default SportsTab;
