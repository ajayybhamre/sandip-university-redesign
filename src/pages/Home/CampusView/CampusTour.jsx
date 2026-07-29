import {   useState} from "react";


import campusData from "./campusData";


import { HiOutlineArrowRight} from "react-icons/hi2";


import "./campus.css";



export default function CampusTour() {


    const [active, setActive] = useState(campusData[0]);



    return (

       <section
  className="py-24 bg-white dark:bg-black transition-colors duration-300"
  id="campus360"
  data-aos="zoom-in"
  
>


            <div className="
max-w-[1600px]
mx-auto
px-6
">



                <div className="
grid
lg:grid-cols-4
gap-8
items-center
">





                    {/* LEFT CONTENT */}


                    <div
                        className="
lg:col-span-1
"
                    >


                        <p
  className="
uppercase
tracking-[4px]
text-red-600
dark:text-red-400
text-sm
font-semibold
"
>
                            Campus Experience

                        </p>



                      <h2
  className="
text-4xl
font-bold
mt-4
text-[#0b2346]
dark:text-white
transition-colors
"
>

                            Explore Our
                           <span className="text-red-600 dark:text-red-400">
                                Campus
                            </span>

                        </h2>



                      <p
  className="
text-gray-600
dark:text-gray-300
mt-5
transition-colors
">

                            Take a virtual tour of our beautiful
                            campus and explore world-class
                            academic and student facilities.

                        </p>




                        <button
                         className="
mt-8
bg-black
dark:bg-red-600
hover:bg-red-600
text-white
px-6
py-3
rounded-full
flex
items-center
gap-2
transition-all
duration-300
"   
                        >

                            Explore 360° Tour

                            <HiOutlineArrowRight />

                        </button>



                    </div>






                    {/* CAMPUS IMAGE */}



                    <div
                        className="
lg:col-span-3
relative
rounded-3xl
overflow-hidden
shadow-xl
"
                    >


                        <img

                            src={active.image}

                            className="
w-full
h-[450px]
object-cover
transition duration-700
"

                        />





                        {/* LOCATION PINS */}



                        {
                            campusData.map((item) => (


                                <button

                                    key={item.id}

                                    onMouseEnter={() =>
                                        setActive(item)
                                    }


                                    style={{
                                        top: item.position.top,
                                        left: item.position.left
                                    }}

                                    className="
absolute
campus-pin
"


                                >


                                    <span></span>


                                    <div
                                        className="
absolute
hidden
group-hover:block
"
                                    >


                                    </div>


                                </button>


                            ))
                        }





                        {/* BOTTOM NAV */}



                     <div
  className="
  absolute
  bottom-4
  left-4
  right-4
  lg:left-1/2
  lg:right-auto
  lg:-translate-x-1/2

 bg-white/95 dark:bg-gray-800/95
  backdrop-blur-md
  rounded-2xl
  lg:rounded-full
  shadow-xl

  px-3
  py-3

  flex
  gap-3

  overflow-x-auto
  scrollbar-hide
  whitespace-nowrap
  "
>
  {campusData.map((item) => (
    <button
      key={item.id}
      onClick={() => setActive(item)}
      className={`
      shrink-0
      px-4
      py-2
      rounded-full
      text-xs
      sm:text-sm
      font-medium
      transition-all
      duration-300

      ${
active.id === item.id
  ? "bg-red-600 text-white"
  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-red-100 dark:hover:bg-red-900"
      }
      `}
    >
      {item.name}
    </button>
  ))}
</div>




                    </div>





                </div>


            </div>


        </section>


    )

}