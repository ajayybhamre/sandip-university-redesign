const SimpleList = ({ items, numbered = false }) => (

  <ol className={`
    space-y-3
    ${numbered ? "list-decimal" : "list-none"}
    pl-1
  `}>

    {
      items.map((item, index) => (

        <li
          key={index}
          className="
            flex
            items-start
            gap-3
            text-sm
            text-gray-600
            dark:text-gray-300
            leading-6
          "
        >

          {
            !numbered && (
              <span className="
                w-1.5
                h-1.5
                rounded-full
                bg-red-600
                shrink-0
                mt-2
              " />
            )
          }

          <span>{item}</span>

        </li>

      ))
    }

  </ol>

);

export default SimpleList;
