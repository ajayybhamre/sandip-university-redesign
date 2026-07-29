import sectionComponents from "../data/sectionComponents";


const SchoolContent = ({
  activeSection
}) => {


  const ActiveSection =
    sectionComponents[activeSection];


  return (
    <div>

      {ActiveSection && (
        <ActiveSection />
      )}

    </div>
  );
};


export default SchoolContent;