import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineTrophy,
} from "react-icons/hi2";

const steps = [
  {
    id: 1,
    title: "Registration",
    desc: "Students register for placement activities.",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    id: 2,
    title: "Resume Building",
    desc: "Professional resume preparation sessions.",
    icon: HiOutlineDocumentText,
  },
  {
    id: 3,
    title: "Training",
    desc: "Aptitude, coding and soft skill training.",
    icon: HiOutlineAcademicCap,
  },
  {
    id: 4,
    title: "Mock Interview",
    desc: "Technical and HR interview practice.",
    icon: HiOutlineUserGroup,
  },
  {
    id: 5,
    title: "Campus Drive",
    desc: "Top recruiters conduct hiring drives.",
    icon: HiOutlineBriefcase,
  },
  {
    id: 6,
    title: "Dream Offer",
    desc: "Students receive placement offers.",
    icon: HiOutlineTrophy,
  },
];

export default function PlacementJourney() {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-red-600 uppercase tracking-[4px] font-semibold">
            Career Journey
          </span>

          <h2 className="text-4xl font-bold mt-3 text-[#0B2346] dark:text-white transition-colors">
            Your Placement Journey
          </h2>

         <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto transition-colors">
  Every student follows a structured pathway from registration to
  securing a dream career with leading organizations.
</p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                key={step.id}
                className="
relative
bg-white
dark:bg-gray-900
border
border-gray-100
dark:border-gray-800
rounded-3xl
p-8
shadow-lg
hover:-translate-y-2
hover:shadow-2xl
transition-all
duration-500
"
              >

                <div className="absolute top-5 right-5 text-6xl font-black text-gray-100 dark:text-gray-800">
                  {step.id}
                </div>

                <div className="w-16 h-16 rounded-full bg-black dark:bg-red-600 text-white flex items-center justify-center mb-6 transition-colors">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-[#0B2346] dark:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7 transition-colors">
                  {step.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}