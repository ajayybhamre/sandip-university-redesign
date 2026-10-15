import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
  HiOutlineTrophy,
} from "react-icons/hi2";

const journey = [
  {
    id: "01",
    title: "Registration",
    desc: "Students register for placement activities and create their placement profile.",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    id: "02",
    title: "Resume Building",
    desc: "Professional resume review sessions with career mentors and experts.",
    icon: HiOutlineDocumentText,
  },
  {
    id: "03",
    title: "Skill Development",
    desc: "Coding, aptitude, communication and personality development training.",
    icon: HiOutlineAcademicCap,
  },
  {
    id: "04",
    title: "Mock Interviews",
    desc: "Technical, HR and Group Discussion practice sessions.",
    icon: HiOutlineUserGroup,
  },
  {
    id: "05",
    title: "Campus Recruitment",
    desc: "Top recruiters visit the campus for hiring drives.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "06",
    title: "Dream Offer",
    desc: "Students receive placement offers from leading companies.",
    icon: HiOutlineTrophy,
  },
];

export default function PlacementRoadmap() {
  return (
   <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="container mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-red-600 uppercase tracking-[5px] font-semibold">
            Placement Process
          </span>

          <h2 className="text-5xl font-bold mt-3 text-black dark:text-white transition-colors">
            Your Journey to Success
          </h2>

         <p className="text-black/70 dark:text-white/80 mt-5 max-w-3xl mx-auto transition-colors">
            Every student follows a structured pathway designed to prepare
            them for successful careers with leading organizations.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-red-600/30 -translate-x-1/2"></div>

          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >

                {/* Card */}
                <div className="w-full lg:w-5/12">

                  <div
                   className="
bg-white
dark:bg-[#111111]
rounded-3xl
shadow-xl
p-8
border
border-red-100
dark:border-red-600/40
hover:-translate-y-2
hover:shadow-[0_15px_40px_rgba(234,31,40,0.25)]
transition-all
duration-500
"
                  >

                    <div className="flex items-center gap-4 mb-5">

                      <div className="w-16 h-16 rounded-2xl bg-black dark:bg-red-600 text-white flex items-center justify-center transition-colors">

                        <Icon size={30} />

                      </div>

                      <div>

                       <span className="text-red-600 font-bold tracking-widest text-sm">
                          STEP {item.id}
                        </span>

                        <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">
                          {item.title}
                        </h3>

                      </div>

                    </div>

                    <p className="text-black/70 dark:text-white/75 leading-7 transition-colors">
                      {item.desc}
                    </p>

                  </div>

                </div>

                {/* Timeline Circle */}
                <div className="hidden lg:flex w-2/12 justify-center">

                 <div className="w-8 h-8 rounded-full bg-red-600 border-8 border-white dark:border-black z-10 transition-colors"></div>

                </div>

                <div className="hidden lg:block w-5/12"></div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}