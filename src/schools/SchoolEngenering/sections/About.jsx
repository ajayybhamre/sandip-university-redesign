import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Building2,
  BookOpen,
} from "lucide-react";


const About = () => {

  const highlights = [
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description:
        "Advanced classrooms, laboratories, innovation centers and smart learning facilities.",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description:
        "Highly qualified faculty members focused on teaching, research and student growth.",
    },
    {
      icon: BookOpen,
      title: "Industry Oriented Learning",
      description:
        "Curriculum designed with practical knowledge, projects and industry requirements.",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "Commitment towards quality education, innovation and professional development.",
    },
  ];


  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >

      {/* Heading */}

      <div className="mb-10">

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          About School
        </span>


        <h2 className="
          mt-3
          text-4xl
          md:text-5xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          School of Engineering
        </h2>


        <p className="
          mt-5
          text-gray-600
          dark:text-gray-300
          leading-8
          text-justify
        ">
          The School of Engineering is committed to providing quality technical
          education through innovative teaching methodologies, advanced
          infrastructure, research opportunities and industry collaboration.
          The school focuses on developing skilled engineers with strong
          technical knowledge, creativity and problem-solving abilities.
        </p>

      </div>



      {/* Mission Vision */}

      <div className="
        grid
        md:grid-cols-2
        gap-6
        mb-12
      ">


        <div className="
          rounded-3xl
          p-8
          bg-red-50
          dark:bg-red-900/20
          border
          border-red-100
          dark:border-red-900
        ">

          <Target
            className="text-red-600"
            size={40}
          />


          <h3 className="
            mt-5
            text-2xl
            font-bold
            text-gray-900
            dark:text-white
          ">
            Our Mission
          </h3>


          <p className="
            mt-3
            text-gray-600
            dark:text-gray-300
            leading-7
          ">
            To provide industry-focused education, encourage innovation,
            promote research and prepare students to become successful
            professionals and responsible citizens.
          </p>

        </div>




        <div className="
          rounded-3xl
          p-8
          bg-gray-50
          dark:bg-slate-900
          border
          border-gray-200
          dark:border-slate-800
        ">

          <Eye
            className="text-red-600"
            size={40}
          />


          <h3 className="
            mt-5
            text-2xl
            font-bold
            text-gray-900
            dark:text-white
          ">
            Our Vision
          </h3>


          <p className="
            mt-3
            text-gray-600
            dark:text-gray-300
            leading-7
          ">
            To become a center of excellence in engineering education by
            creating innovative solutions through knowledge, research and
            technology.
          </p>

        </div>


      </div>




      {/* Highlights */}

      <h3 className="
        text-3xl
        font-bold
        text-gray-900
        dark:text-white
        mb-8
      ">
        Why Choose Our School?
      </h3>



      <div className="
        grid
        sm:grid-cols-2
        gap-6
      ">

        {highlights.map((item,index)=>{

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              whileHover={{
                y:-8,
              }}
              className="
                rounded-2xl
                p-6
                bg-white
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-800
                shadow-lg
                transition-all
              "
            >

              <div className="
                w-14
                h-14
                rounded-xl
                bg-red-100
                dark:bg-red-900/30
                flex
                items-center
                justify-center
              ">

                <Icon
                  className="text-red-600"
                  size={28}
                />

              </div>



              <h4 className="
                mt-5
                text-xl
                font-bold
                text-gray-900
                dark:text-white
              ">
                {item.title}
              </h4>



              <p className="
                mt-3
                text-gray-600
                dark:text-gray-300
                leading-7
              ">
                {item.description}
              </p>


            </motion.div>

          );

        })}

      </div>


    </motion.div>
  );
};


export default About;