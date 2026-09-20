import campusImg from "../../../assets/images/slider1.jpg";

export default function WhoWeAreEditorial() {
  return (
    <section id="who-we-are" className="py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#161411] text-[#2B231D] dark:text-[#F3EFE9] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Editorial Header (Cols 1-4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
                01 — WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1714] dark:text-[#F3EFE9] leading-tight font-sans">
              Building Future Leaders Through <span className="text-[#C8102E]">Quality Education</span>
            </h2>
            <div className="flex items-center gap-1.5 mt-4">
              <div className="w-8 h-1 bg-[#C8102E] rounded-full"></div>
              <div className="w-4 h-1 bg-[#24201C] dark:bg-[#A89D91] rounded-full"></div>
            </div>
          </div>

          {/* Right Content Stream (Cols 5-12) */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg sm:text-xl text-[#3D342C] dark:text-[#E5DDD2] font-medium leading-relaxed">
              Sandip University is a premier UGC-recognized state private university situated across a sprawling 250+ acre eco-friendly campus in Nashik, Maharashtra. Established with a commitment to academic excellence, the university provides a transformative educational ecosystem where innovation, research, and ethics converge.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[#EAE3D7] dark:border-[#2C2720]">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider font-sans">
                  Eco-Friendly 250+ Acre Campus
                </h4>
                <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] leading-relaxed font-normal">
                  Nestled in the serene surroundings of Nashik, providing state-of-the-art academic blocks, research centers, and modern residential facilities.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider font-sans">
                  Pedagogy 5.0 & Industry 4.0
                </h4>
                <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] leading-relaxed font-normal">
                  Curriculum designed in sync with global industrial shifts, ensuring students gain hands-on technical skills and corporate readiness.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider font-sans">
                  Eminent Faculty
                </h4>
                <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] leading-relaxed font-normal">
                  Well-qualified professors holding advanced degrees from premier institutions including IITs, NITs, and IIMs across India.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider font-sans">
                  Holistic Ecosystem
                </h4>
                <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] leading-relaxed font-normal">
                  Nurturing entrepreneurship, sports excellence, cultural development, and global leadership opportunities for every learner.
                </p>
              </div>
            </div>

            {/* Feature Image Frame */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5DDD0] dark:border-[#332C24] shadow-md bg-[#EFE8DD] dark:bg-[#24201A]">
              <img
                src={campusImg}
                alt="Sandip University Infrastructure"
                className="w-full h-[320px] sm:h-[380px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
