const evaluationData = {
  header: {
    title: "System of Evaluation",
    intro: "How every course is assessed — continuous internal assessment, the end-semester exam, grading, and how results and revaluation work.",
  },
  intro:
    "For CBCS semester programmes, assessment is divided between Continuous Internal Assessment and the End Semester Examination, each carrying equal weight.",
  assessmentComponents: [
    {
      label: "Continuous Internal Assessment (CIA)",
      weight: "50%",
      detail: "Assignments, written examinations, seminars/presentations, and activities/projects, as prescribed for the course.",
    },
    {
      label: "End Semester Examination (ESE)",
      weight: "50%",
      detail: "Conducted at the end of the semester, covering the full course syllabus. Standard theory examination duration is 3 hours.",
    },
  ],
  passingThresholds: [
    {
      category: "Professional / PG courses",
      rules: ["Minimum 40% separately in CIA and ESE", "Minimum 50% overall"],
    },
    {
      category: "Other UG courses",
      rules: ["Minimum 35% separately in CIA and ESE", "Minimum 40% overall"],
    },
  ],
  passingNote: "Laboratory, practical, seminar, and project courses have separate minimum requirements as specified in the regulations.",
  columns: [
    { key: "grade", label: "Grade" },
    { key: "points", label: "Points" },
    { key: "marks", label: "Marks" },
  ],
  gradingRows: [
    { grade: "O", points: "10", marks: "91 and above" },
    { grade: "A+", points: "9", marks: "81–90" },
    { grade: "A", points: "8", marks: "71–80" },
    { grade: "B+", points: "7", marks: "61–70" },
    { grade: "B", points: "6", marks: "55–60" },
    { grade: "C+", points: "5", marks: "50–54" },
    { grade: "C", points: "4", marks: "40–49" },
    { grade: "U", points: "0", marks: "Below 40" },
    { grade: "W", points: "0", marks: "Withdrawal" },
  ],
  gradingNote: "C+ is the minimum passing grade for specified professional/PG courses; C is the minimum passing grade for specified UG and other courses.",
  gpaInfo: [
    "GPA represents performance in a particular semester.",
    "CGPA represents cumulative performance from the first semester onward.",
    "Both are calculated using the credit-weighted grade points earned by the student and are shown on the Grade Sheet.",
  ],
  revaluationInfo: [
    "Marks are made available to students according to the University schedule.",
    "Students may apply to view their ESE answer script within the prescribed period and by paying the applicable fee.",
    "Students may apply for revaluation within the prescribed period and fee.",
    "When marks change after revaluation, the better of the two marks is considered for grading.",
    "Revaluation is not available for certain components such as laboratory/practical examinations, project viva voce, seminars, design, mini-projects, and specified PBL/RBL components.",
  ],
};

export default evaluationData;