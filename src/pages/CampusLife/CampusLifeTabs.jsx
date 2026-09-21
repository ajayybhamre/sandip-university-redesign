import tabData from "./tabData";
import { motion } from "framer-motion";


const CampusLifeTabs = ({
  activeTab,
  setActiveTab
}) => {


  return (

    <div className="
      bg-white
      dark:bg-[#111]
      rounded-3xl
      shadow-xl
      border
      border-red-100
      dark:border-red-900
      p-3
      flex
      flex-wrap
      justify-center
      gap-2
      w-full
    ">


      {
        tabData.map((item)=>{

          const Icon = item.icon;

          return(

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
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              text-sm
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

            <Icon className="w-4 h-4 shrink-0" />

            {item.title}

          </motion.button>

          )

        })
      }


    </div>

  );

};


export default CampusLifeTabs;
