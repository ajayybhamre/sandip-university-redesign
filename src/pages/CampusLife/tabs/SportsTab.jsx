import { motion } from "framer-motion";
import {
  HiOutlineHomeModern,
  HiOutlineUserGroup,
  HiOutlineCalendarDays,
  HiOutlinePhoto,
  HiOutlineTrophy,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import {
  sportsAdvisoryCommittee,
  committeeColumns,
  indoorFacilities,
  outdoorFacilities,
  facilityPerks,
  sportsAwardsByYear,
} from "./sports/data/sportsData";

const facilityColumns = [
  { key: "facility", label: "Facility" },
  { key: "detail", label: "Courts / Boards" },
];

const topTiles = [
  { title: "Sports Facility", icon: HiOutlineHomeModern },
  { title: "Sports Advisory Committee", icon: HiOutlineUserGroup },
  { title: "Sports Events", icon: HiOutlineCalendarDays },
  { title: "Sports Gallery", icon: HiOutlinePhoto, href: "/campus-life?tab=gallery-media" },
  { title: "Students Achievement", icon: HiOutlineTrophy, href: "/campus-life?tab=achievement" },
];

const SportsTab = () => (
  <div className="space-y-14">

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

    {/* Top tiles */}

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {
        topTiles.map((tile, index) => {

          const Icon = tile.icon;
          const Wrapper = tile.href ? "a" : "div";

          return (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Wrapper
                href={tile.href}
                className="
                  flex flex-col items-center text-center gap-3
                  bg-gray-50 dark:bg-slate-900
                  border border-gray-200 dark:border-slate-700
                  rounded-2xl p-6 h-full
                "
              >
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Icon className="text-red-600 w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {tile.title}
                </span>
              </Wrapper>
            </motion.div>
          );

        })
      }
    </div>

    {/* Advisory Committee */}

    <div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
        Constitution of Sports Advisory Committee
      </h4>
      <ResponsiveTable columns={committeeColumns} rows={sportsAdvisoryCommittee} />
    </div>

    {/* Facility Information */}

    <div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
        Sports Facility Information
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        State-of-the-art Indoor Stadium: 30,000 sq. ft.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div>
          <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-3">
            Indoor
          </p>
          <ResponsiveTable columns={facilityColumns} rows={indoorFacilities} />
        </div>

        <div>
          <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-3">
            Outdoor
          </p>
          <ResponsiveTable columns={facilityColumns} rows={outdoorFacilities} />
        </div>

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

    {/* Student Sports Awards */}

    <div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
        Student Sports Awards (National-Level)
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Condensed by year and sport — full roster available on request.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          sportsAwardsByYear.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-2xl p-6
              "
            >
              <span className="
                inline-block px-3 py-1 mb-3
                rounded-full bg-red-100 dark:bg-red-900/30
                text-red-600 text-xs font-bold tracking-wide
              ">
                {entry.year}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
                {entry.highlights}
              </p>
            </motion.div>
          ))
        }
      </div>
    </div>

  </div>
);

export default SportsTab;
