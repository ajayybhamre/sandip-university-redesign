const stats = [
  {
    number: "25,000+",
    title: "Students",
  },
  {
    number: "1,200+",
    title: "Faculty Members",
  },
  {
    number: "180+",
    title: "Programs",
  },
  {
    number: "500+",
    title: "Recruiters",
  },
  {
    number: "150+",
    title: "Research Projects",
  },
];

export default function CounterSection() {
  return (
    <section className="relative -mt-20 z-20 ">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

            {stats.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >

                <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2346]">
                  {item.number}
                </h2>

                <p className="mt-3 text-gray-600 font-medium">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}