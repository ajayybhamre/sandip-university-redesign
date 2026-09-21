import { useEffect } from "react";
import { Scale, ClipboardCheck, CalendarDays, Landmark } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import AcademicsHero from "./components/AcademicsHero";
import DeanSection from "./components/DeanSection";
import SectionCard from "./components/SectionCard";
import deanData from "./data/deanData";

const sections = [
  {
    to: "/academics/regulations",
    icon: Scale,
    title: "Academic Regulations",
    description: "Credit requirements, attendance rules, passing marks, and degree classification.",
  },
  {
    to: "/academics/evaluation",
    icon: ClipboardCheck,
    title: "System of Evaluation",
    description: "How courses are graded, from continuous assessment through to the final grade.",
  },
  {
    to: "/academics/calendar",
    icon: CalendarDays,
    title: "Academic Calendar",
    description: "Semester dates, exam windows, and holidays by academic year.",
  },
  {
    to: "https://www.sandipuniversity.edu.in/academics/csik/index.php",
    icon: Landmark,
    title: "CIKS",
    description: "The Centre for Indian Knowledge Systems — vision, mission, and courses offered.",
  },
];

export default function AcademicsPage() {
  useEffect(() => {
    document.title = "Academics | Sandip University";
  }, []);

  return (
    <>
      <Header overlay />
      <main className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <AcademicsHero />

        <section className="px-5 pb-4 pt-14 sm:px-8 lg:px-12 lg:pt-20">
          <div className="mx-auto max-w-[1400px]">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">A connected academic framework</h2>
              <p className="mt-4 max-w text-base leading-7 text-gray-600 dark:text-gray-400">
                Sandip University runs outcome-based education under a Choice
                Based Credit System across its seven schools. Since aligning
                with NEP 2020, that framework has grown to include
                interdisciplinary pathways, multiple entry and exit points,
                and honours and research tracks.
              </p>
            </div>
          </div>
        </section>

        <DeanSection deanData={deanData} />

        <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-[760px]">
              <h2 className="text-2xl font-bold sm:text-3xl">Explore Academics</h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                The rules, the grading, the dates, and the Centre for Indian
                Knowledge Systems.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sections.map((section) => (
                <SectionCard key={section.to} {...section} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}