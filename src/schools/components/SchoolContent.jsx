const SchoolContent = ({ activeSection, sectionComponents = {} }) => {
  const ActiveSection = sectionComponents[activeSection];

  return <div>{ActiveSection ? <ActiveSection /> : null}</div>;
};

export default SchoolContent;
