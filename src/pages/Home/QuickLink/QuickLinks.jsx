import quickLinks from "./quickLinksData";

export default function QuickLinks() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative z-20 -mt-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {quickLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.target)}
                className={`group p-8 transition-all duration-300 hover:bg-red-700 ${
                  index !== quickLinks.length - 1
                    ? "border-r border-gray-200"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center">

                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white">

                    <Icon className="text-4xl text-[#000] group-hover:scale-110 transition-transform" />

                  </div>

                  <h3 className="font-semibold text-gray-800 group-hover:text-white text-center">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 group-hover:text-gray-200 mt-1 text-center">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}