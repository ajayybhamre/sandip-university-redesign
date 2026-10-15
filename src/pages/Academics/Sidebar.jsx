import tabData from "./tabData";
import { motion } from "framer-motion";


const Sidebar = ({
  activeTab,
  setActiveTab
}) => {


  return (

    <div className="
      bg-white
      dark:bg-[#111]
      rounded-full
      shadow-xl
      border
      border-red-100
      dark:border-red-900
      p-2
      flex
      gap-2
      overflow-x-auto
      max-w-full
    ">


      {
        tabData.map((item)=>(
          
          <motion.button

            key={item.id}

            whileTap={{
              scale:0.95
            }}

            onClick={()=>
              setActiveTab(item.id)
            }


            className={`
              whitespace-nowrap
              px-6
              py-3
              rounded-full
              font-semibold
              transition-all

              ${
                activeTab === item.id
                ?
                "bg-red-600 text-white shadow-lg"
                :
                "text-gray-700 dark:text-white hover:bg-red-50 dark:hover:bg-red-900/30"
              }

            `}
          >

            {item.title}

          </motion.button>

        ))
      }


    </div>

  );

};


export default Sidebar;