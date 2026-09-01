import { BookOpen, BriefcaseBusiness, CircleDollarSign, FlaskConical, Landmark, Target, Trophy } from "lucide-react";

import socsePrograms from "../SOCSE/data/programsData";
import socmsPrograms from "../SOCMS/data/programsData";
import sodPrograms from "../SOD/data/programsData";
import soetDepartments from "../SOET/data/departmentsData";
import soetPrograms from "../SOET/data/programsData";
import solPrograms from "../SOL/data/programsData";
import sopsPrograms from "../SOPS/data/programsData";
import sosPrograms from "../SOS/data/programsData";

export const programmeSections = [
  { id: "overview", title: "Overview", icon: BookOpen },
  { id: "syllabus", title: "Syllabus", icon: BookOpen, heading: "A curriculum built for application.", body: "The syllabus connects core concepts with practical learning, project work and the evolving needs of professional practice.", items: ["Discipline-specific foundations", "Practical and laboratory-led learning", "Project work and professional development"] },
  { id: "outcomes", title: "PEO, PO, PSO, CO", icon: Target, heading: "What students are prepared to do.", body: "This section contains the programme's PEO, PO, PSO and CO documentation.", cards: ["PEO · Educational objectives", "PO · Graduate outcomes", "PSO · Programme outcomes", "CO · Course outcomes"] },
  { id: "fees", title: "Fees", icon: CircleDollarSign, heading: "Plan your investment in the programme.", body: "Approved fee details can be added here through the programme data configuration.", cta: "Ask admissions about fees" },
  { id: "labs", title: "Labs / Lab Facility", icon: FlaskConical, heading: "Learn by making, testing and improving.", body: "The programme supports practical learning through laboratory work, projects and applied exploration.", items: ["Practical work connected to classroom learning", "Facilities for testing, simulation and project development", "A foundation for applied research and innovation"] },
  { id: "achievement", title: "Achievement", icon: Trophy, heading: "A place to turn work into progress.", body: "Programme-specific student, faculty and department achievements can be listed here through the programme data configuration." },
  { id: "career", title: "Career", icon: BriefcaseBusiness, heading: "Build a direction for what comes next.", body: "The programme develops the academic foundation and transferable skills students need to explore opportunities across their field and related industries.", items: ["Technical and problem-solving capability", "Project and teamwork experience", "Preparation for further study and professional roles"] },
  { id: "board", title: "Board of Studies", icon: Landmark, heading: "Academic direction with industry perspective.", body: "Board of Studies information can be added here through the programme data configuration." },
];

const schools = {
  "engineering-technology": { name: "School of Engineering & Technology", programs: soetPrograms },
  "computer-science": { name: "School of Computer Science & Engineering", programs: socsePrograms },
  management: { name: "School of Commerce & Management Studies", programs: socmsPrograms },
  science: { name: "School of Sciences", programs: sosPrograms },
  pharma: { name: "School of Pharmacy & Paramedical Sciences", programs: sopsPrograms },
  law: { name: "School of Law", programs: solPrograms },
  "fashion-beauty": { name: "School of Design", programs: sodPrograms },
};

// Add slug-specific content here as approved programme information becomes available.
export const programmeContent = {
  // "engineering-technology/civil-engineering": {
  //   syllabus: { body: "Programme-specific syllabus content...", items: ["..."] },
  //   fees: { body: "Approved Civil Engineering fee structure..." },
  // },
};

const findDepartment = (slug) => soetDepartments.find((department) => department.slug === slug);

export function getProgramDetails(schoolSlug, courseSlug) {
  const school = schools[schoolSlug];
  if (!school) return null;

  for (const [level, programs] of Object.entries(school.programs)) {
    const program = programs.find((item) => item.slug === courseSlug);
    if (program) {
      const department = schoolSlug === "engineering-technology" ? findDepartment(program.departmentSlug) : undefined;
      const key = `${schoolSlug}/${courseSlug}`;
      const overrides = programmeContent[key] || {};

      return {
        ...program,
        level: level === "undergraduate" ? "Undergraduate" : "Postgraduate",
        schoolName: school.name,
        departmentName: department?.name,
        departmentDescription: department?.description,
        sections: programmeSections.map((section) => ({ ...section, ...(overrides[section.id] || {}) })),
      };
    }
  }

  return null;
}
