import { useEffect } from "react";
import { CalendarDays } from "lucide-react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header/Header";
import SubPageHeader from "../components/SubPageHeader";
import DocumentCard from "../components/DocumentCard";
import calendarData from "../data/calendarData";

export default function CalendarPage() {
  useEffect(() => {
    document.title = "Academic Calendar | Sandip University";
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <SubPageHeader icon={CalendarDays} title={calendarData.header.title} intro={calendarData.header.intro} />

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[1400px]">
       

            <div className="max-w-[1100px] space-y-10">
              {calendarData.years.map((group) => (
                <section key={group.year}>
                  <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">{group.year}</h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <DocumentCard key={item.label} {...item} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
