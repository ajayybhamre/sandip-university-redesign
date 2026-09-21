// Finds a programme and returns everything the programme page needs.
//
// This file holds NO page copy. Programme text lives only in the programme's own
// content file (schools/<SCHOOL>/data/programmeContent/<slug>.js). Whatever is not
// in that file is simply not shown.

import socsePrograms from "../SOCSE/data/programsData";
import socmsPrograms from "../SOCMS/data/programsData";
import sodPrograms from "../SOD/data/programsData";
import soetDepartments from "../SOET/data/departmentsData";
import soetPrograms from "../SOET/data/programsData";
import solPrograms from "../SOL/data/programsData";
import sopsPrograms from "../SOPS/data/programsData";
import sosPrograms from "../SOS/data/programsData";

import soetContent from "../SOET/data/programmeContent/index.js";
import socseContent from "../SOCSE/data/programmeContent/index.js";
import socmsContent from "../SOCMS/data/programmeContent/index.js";
import sosContent from "../SOS/data/programmeContent/index.js";
import sopsContent from "../SOPS/data/programmeContent/index.js";
import solContent from "../SOL/data/programmeContent/index.js";
import sodContent from "../SOD/data/programmeContent/index.js";

// One entry per school, keyed by the slug used in the URL.
// `departments` is optional (only SOET has a departments list today).
const schools = {
  "engineering-technology": { name: "School of Engineering & Technology", programs: soetPrograms, content: soetContent, departments: soetDepartments },
  "computer-science": { name: "School of Computer Science & Engineering", programs: socsePrograms, content: socseContent },
  management: { name: "School of Commerce & Management Studies", programs: socmsPrograms, content: socmsContent },
  science: { name: "School of Sciences", programs: sosPrograms, content: sosContent },
  pharma: { name: "School of Pharmacy & Paramedical Sciences", programs: sopsPrograms, content: sopsContent },
  law: { name: "School of Law", programs: solPrograms, content: solContent },
  "fashion-beauty": { name: "School of Design", programs: sodPrograms, content: sodContent },
};

const LEVEL_LABELS = { undergraduate: "Undergraduate", postgraduate: "Postgraduate" };
const levelLabel = (key) => LEVEL_LABELS[key] || key.charAt(0).toUpperCase() + key.slice(1);

// Looks through every level for a programme, or a specialisation of one, with this slug.
function findProgramme(programs, courseSlug) {
  for (const [levelKey, list] of Object.entries(programs)) {
    for (const program of list) {
      if (program.slug === courseSlug) return { program, levelKey };

      const specialisation = program.specializations?.find((item) => item.slug === courseSlug);
      if (specialisation) return { program: specialisation, parent: program, levelKey };
    }
  }
  return null;
}

export function getProgramDetails(schoolSlug, courseSlug) {
  const school = schools[schoolSlug];
  if (!school) return null;

  const found = findProgramme(school.programs, courseSlug);
  if (!found) return null;

  const { program, parent, levelKey } = found;
  const departmentSlug = program.departmentSlug ?? parent?.departmentSlug;
  const department = school.departments?.find((item) => item.slug === departmentSlug);

  return {
    ...program,
    schoolSlug,
    schoolName: school.name,
    level: levelLabel(levelKey),
    parentTitle: parent?.title,
    departmentName: department?.name,
    departmentDescription: department?.description,
    // The programme's own content file, exactly as written. null when none exists yet.
    content: school.content?.[courseSlug] || null,
  };
}
