import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react";


const stats = [
  {
    icon: GraduationCap,
    number: "50+",
    title: "Programs Offered",
    desc: "Undergraduate, postgraduate and doctoral programs",
  },
  {
    icon: BookOpen,
    number: "100+",
    title: "Specializations",
    desc: "Industry focused academic disciplines",
  },
  {
    icon: Users,
    number: "10000+",
    title: "Students",
    desc: "Learning across diverse fields",
  },
  {
    icon: Award,
    number: "15+",
    title: "Years Excellence",
    desc: "Commitment towards quality education",
  },
];


const AcademicsOverview = () => {


  return (

    <section
      className="
      relative
      overflow-hidden
      bg-white
      dark:bg-black
      rounded-3xl
      
      dark:border-slate-800
      p-8
      md:p-12
      "
    >



      <div className="relative">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.7
          }}

          viewport={{
            once:true
          }}

          className="mb-12"

        >

          <span className="
            text-red-600
            font-semibold
            uppercase
            tracking-[3px]
            text-sm
          ">
            Academics Overview
          </span>


          <h2 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-gray-900
            dark:text-white
          ">

            Building Future Through Quality Education

          </h2>


          <p className="
            mt-6
            text-gray-600
            dark:text-gray-300
            leading-8
            text-justify
          ">

            Sandip University provides a comprehensive academic environment
            designed to nurture innovation, creativity and professional
            excellence. Our curriculum combines theoretical knowledge with
            practical exposure to prepare students for successful careers
            in a rapidly changing world.

          </p>


        </motion.div>




        {/* Content Grid */}

        <div className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
        ">


          {/* Left Content */}

          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.8
            }}

            viewport={{
              once:true
            }}

          >


            <h3 className="
              text-2xl
              font-bold
              text-gray-900
              dark:text-white
            ">

              Academic Excellence & Innovation

            </h3>


            <p className="
              mt-5
              text-gray-600
              dark:text-gray-300
              leading-8
            ">

              Our academic framework focuses on experiential learning,
              research opportunities, industry collaboration and skill
              development. Students gain knowledge through modern teaching
              methodologies, advanced laboratories and real-world projects.

            </p>



            <ul className="
              mt-6
              space-y-4
            ">


              {[
                "Industry aligned curriculum",
                "Experienced faculty members",
                "Research and innovation focused learning",
                "Practical training and internships",
              ].map((item,index)=>(

                <li
                  key={index}
                  className="
                  flex
                  items-center
                  gap-3
                  text-gray-700
                  dark:text-gray-300
                  "
                >

                  <span className="
                    w-3
                    h-3
                    rounded-full
                    bg-red-600
                  "></span>

                  {item}

                </li>

              ))}


            </ul>


          </motion.div>





          {/* Right Stats */}

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">


            {stats.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    y:40
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:index*.15
                  }}

                  viewport={{
                    once:true
                  }}

                  whileHover={{
                    y:-8
                  }}

                  className="
                  bg-gray-50
                  dark:bg-slate-900
                  rounded-2xl
                  p-6
                  border
                  border-gray-200
                  dark:border-slate-700
                  shadow-lg
                  "

                >


                  <Icon
                    className="
                    text-red-600
                    mb-4
                    "
                    size={35}
                  />


                  <h4 className="
                    text-3xl
                    font-bold
                    text-gray-900
                    dark:text-white
                  ">

                    {item.number}

                  </h4>


                  <h5 className="
                    mt-2
                    font-semibold
                    text-gray-900
                    dark:text-white
                  ">

                    {item.title}

                  </h5>


                  <p className="
                    mt-2
                    text-sm
                    text-gray-600
                    dark:text-gray-400
                  ">

                    {item.desc}

                  </p>


                </motion.div>

              )

            })}


          </div>


        </div>


      </div>


    </section>

  );

};


export default AcademicsOverview;