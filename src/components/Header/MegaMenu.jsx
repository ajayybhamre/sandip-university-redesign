import { Link } from "react-router-dom";

function MegaMenu({ sections }) {
  return (
    <div
      className="
        absolute 
        left-1/2 
        -translate-x-1/2 
        top-full 
        pt-5
        opacity-0 
        invisible 
        group-hover:opacity-100 
        group-hover:visible
        transition-all 
        duration-300
        z-50
      "
    >

      <div
        className="
          grid
          gap-10
          bg-white
          dark:bg-[#111111]
          shadow-2xl
          rounded-2xl
          p-8
          border
          border-gray-200
          dark:border-gray-700
          w-max
          max-w-[90vw]
        "
        style={{
          gridTemplateColumns: `repeat(${sections.length}, minmax(220px, auto))`
        }}
      >

        {sections.map((section, index) => (

          <div key={index}>

            {/* Heading */}

            <h3
              className="
                font-bold
                text-red-700
                dark:text-red-400
                uppercase
                text-sm
                tracking-wide
                pb-3
                mb-3
                border-b
                border-red-200
                dark:border-red-900
              "
            >
              {section.heading}
            </h3>


            {/* Links */}

            <ul className="space-y-1">

              {section.links.map((link, i) => (

                <li key={i}>

                  {
                    typeof link === "string" ? (

                      <span
                        className="
                          flex
                          items-center
                          gap-3
                          py-3
                          px-3
                          text-gray-600
                          dark:text-gray-300
                          border-b
                          border-gray-100
                          dark:border-gray-800
                          hover:text-red-600
                          hover:bg-red-50
                          dark:hover:bg-red-900/20
                          rounded-lg
                          cursor-pointer
                          transition-all
                        "
                      >

                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-red-600
                          "
                        ></span>

                        {link}

                      </span>


                    ) : (


                      <Link
                        to={link.path}
                        className="
                          flex
                          items-center
                          gap-3
                          py-3
                          px-3
                          text-gray-600
                          dark:text-gray-300
                          border-b
                          border-gray-100
                          dark:border-gray-800
                          hover:text-red-600
                          hover:bg-red-50
                          dark:hover:bg-red-900/20
                          rounded-lg
                          transition-all
                        "
                      >

                        {
                          link.icon && (
                            <link.icon
                              size={18}
                              className="
                                text-red-600
                              "
                            />
                          )
                        }


                        <span>
                          {link.title}
                        </span>


                      </Link>


                    )
                  }

                </li>

              ))}

            </ul>


          </div>

        ))}


      </div>

    </div>
  );
}

export default MegaMenu;