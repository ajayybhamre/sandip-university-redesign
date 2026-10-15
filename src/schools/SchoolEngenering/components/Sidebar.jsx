import sidebarData from "../data/sidebarData";
import { ChevronRight } from "lucide-react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
   <aside
  className="
    self-start
    h-fit
    bg-white
    dark:bg-[#111111]
    border
    border-red-100
    dark:border-red-900
    rounded-3xl
    shadow-xl
    overflow-hidden
    sticky
    top-24
    transition-colors
    duration-300
  "
>
      {/* Header */}
      <div className="bg-red-600 text-white p-8">
        <h2 className="text-3xl font-bold">
          Engineering
        </h2>

        <p className="text-white/80 mt-2">
          School Sections
        </p>
      </div>

      {/* Menu */}
        {/* Menu */}
      <div className="p-3">

        {sidebarData.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                w-full
                flex
                items-center
                justify-between
                rounded-xl
                px-4
                py-4
                mb-2
                transition-all
                duration-300

                ${
                  activeSection === item.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-transparent text-black dark:text-white hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={20}
                  className={
                    activeSection === item.id
                      ? "text-white"
                      : "text-red-600"
                  }
                />

                <span className="font-medium">
                  {item.title}
                </span>
              </div>

              <ChevronRight
                size={18}
                className={
                  activeSection === item.id
                    ? "text-white"
                    : "text-red-600"
                }
              />
            </button>
          );
        })}

    
      </div>

    </aside>
  );
};

export default Sidebar;