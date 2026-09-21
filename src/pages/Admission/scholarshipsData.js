// Sandip University Scholarships Master Dataset
// Modular structure for Merit, Sports, and Special Category Scholarships

export const QUICK_STATS = [
  {
    label: "Scholarship Schemes",
    value: "3 Main Categories",
    description: "Merit, Sports, & Special Welfare Waivers",
    icon: "Medal"
  },
  {
    label: "Maximum Waiver Available",
    value: "100% Tuition Fee",
    description: "Full tuition waiver for top rankers & sports gold medalists",
    icon: "Sparkles"
  },
  {
    label: "Intake Entitlement",
    value: "Up to 15% Intake",
    description: "Awarded on first-come-first-served basis",
    icon: "Users"
  }
];

export const MERIT_SCHOLARSHIPS_UG = [
  {
    id: "merit-ug-1",
    title: "Merit Scholarship - I",
    tier: "Tier 1 (Gold)",
    criteria: [
      "90% or above in qualifying examination (HSC / MHT-CET / IIT-JEE)",
      "Rank holders in SU-JEE 2026 Entrance Examination"
    ],
    waiverValue: "100%",
    waiverText: "Tuition Fee Waiver"
  },
  {
    id: "merit-ug-2",
    title: "Merit Scholarship - II",
    tier: "Tier 2 (Silver)",
    criteria: [
      "85% to 89.99% in qualifying examination (HSC / MHT-CET / IIT-JEE)",
      "High percentile in SU-JEE 2026 Entrance Examination"
    ],
    waiverValue: "75%",
    waiverText: "Tuition Fee Waiver"
  },
  {
    id: "merit-ug-3",
    title: "Merit Scholarship - III",
    tier: "Tier 3 (Bronze)",
    criteria: [
      "75% to 84.99% in qualifying examination (HSC / MHT-CET / IIT-JEE)",
      "Valid rank in SU-JEE 2026 Entrance Examination"
    ],
    waiverValue: "50%",
    waiverText: "Tuition Fee Waiver"
  }
];

export const MERIT_SCHOLARSHIPS_MS = [
  {
    id: "merit-ms-1",
    title: "Merit Scholarship - I",
    tier: "Tier 1 (Gold)",
    criteria: [
      "9.0 CGPA and above in qualifying graduation examination",
      "Top rank in Post-Graduate Entrance Screening"
    ],
    waiverValue: "100%",
    waiverText: "Tuition Fee Waiver"
  },
  {
    id: "merit-ms-2",
    title: "Merit Scholarship - II",
    tier: "Tier 2 (Silver)",
    criteria: [
      "8.5 CGPA to 8.9 CGPA in qualifying graduation examination"
    ],
    waiverValue: "75%",
    waiverText: "Tuition Fee Waiver"
  },
  {
    id: "merit-ms-3",
    title: "Merit Scholarship - III",
    tier: "Tier 3 (Bronze)",
    criteria: [
      "7.5 CGPA to 8.4 CGPA in qualifying graduation examination"
    ],
    waiverValue: "50%",
    waiverText: "Tuition Fee Waiver"
  }
];

export const SPORTS_SCHOLARSHIPS = [
  {
    id: "sports-1",
    title: "International - Medal / Placement",
    tier: "Gold Tier",
    level: "International",
    achievement: "Medallion (Gold, Silver, Bronze) OR 1st/2nd/3rd Position at International Sports Event",
    waiverValue: "100%",
    waiverText: "Tuition Fee Waiver"
  },
  {
    id: "sports-2",
    title: "International - Participation",
    tier: "Silver Tier",
    level: "International",
    achievement: "Official Participation in recognized International Tournament/Championship",
    waiverValue: "80%",
    waiverText: "Tuition Fee Waiver"
  },
  {
    id: "sports-3",
    title: "National / AIU / IUT - Medal / Placement",
    tier: "Bronze Tier",
    level: "National / AIU / IUT",
    achievement: "Medallion (Gold, Silver, Bronze) OR 1st/2nd/3rd Position in National / AIU Games",
    waiverValue: "50%",
    waiverText: "Tuition Fee Waiver"
  },
  {
    id: "sports-4",
    title: "State Level - Medal / Placement",
    tier: "State Level",
    level: "State",
    achievement: "Medallion (Gold, Silver, Bronze) OR 1st/2nd/3rd Position in State Sports Championship",
    waiverValue: "15%",
    waiverText: "Tuition Fee Waiver"
  }
];

export const OTHER_SCHOLARSHIPS = [
  {
    id: "other-1",
    title: "Freedom Fighter Family Welfare",
    type: "Son / Daughter / Grandson / Granddaughter of registered Freedom Fighters",
    waiverValue: "10%",
    waiverText: "Tuition Fee Waiver",
    note: "Applicable for entire course duration subject to guidelines."
  },
  {
    id: "other-2",
    title: "Sandip Foundation Transfer Scheme",
    type: "Students seeking admission from Sandip Foundation colleges (Diploma to Degree, UG to PG)",
    waiverValue: "10%",
    waiverText: "Tuition Fee Waiver",
    note: "Limited seats available on first-come-first-served basis."
  },
  {
    id: "other-3",
    title: "Armed Forces & Police Family Scheme",
    type: "Son / Daughter of Armed Forces, Para-Military Forces, or Police personnel",
    waiverValue: "15%",
    waiverText: "Tuition Fee Waiver",
    note: "Valid service proof / discharge book copy required."
  },
  {
    id: "other-4",
    title: "Sandip Group Employee Family Scheme",
    type: "Son / Daughter / Spouse of Sandip Group Employees",
    waiverValue: "25%",
    waiverText: "Tuition Fee Waiver",
    note: "Subject to employee service verification."
  }
];

export const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Check Eligibility",
    description: "Review the scholarship criteria for Merit, Sports, or Welfare schemes and verify your eligibility.",
    icon: "CheckCircle"
  },
  {
    step: "02",
    title: "Prepare Documents",
    description: "Gather required marksheets, entrance rank scorecards, sports certificates, or service proofs.",
    icon: "FileText"
  },
  {
    step: "03",
    title: "Submit Application",
    description: "Submit your scholarship application along with academic admission documents through the portal.",
    icon: "Upload"
  },
  {
    step: "04",
    title: "Await Approval",
    description: "The University Scholarship Committee reviews applications and issues fee waiver allotment.",
    icon: "Clock"
  }
];

export const SCHOLARSHIP_FAQS = [
  {
    question: "Can I apply for multiple scholarships?",
    answer: "You can apply for all scholarship categories you are eligible for. However, students are awarded the single highest tuition fee waiver category for which they qualify."
  },
  {
    question: "What is the minimum attendance requirement to continue my scholarship?",
    answer: "Students must maintain a minimum of 75% attendance in both semesters of each academic year without exception to remain eligible for scholarship continuation."
  },
  {
    question: "Can I get a scholarship if I am a lateral entry student?",
    answer: "Yes, lateral entry diploma-to-degree students are eligible for Merit Scholarships based on their qualifying diploma aggregate percentage."
  },
  {
    question: "How are scholarships awarded if multiple students have identical scores?",
    answer: "Scholarships are sanctioned strictly on a first-come-first-served basis within the allocated 15% program intake quota."
  },
  {
    question: "Can a scholarship be withdrawn during the course?",
    answer: "Yes, scholarships are subject to annual performance review. If attendance drops below 75% or serious disciplinary action is taken, the fee waiver will be withdrawn."
  },
  {
    question: "When will I be notified about my scholarship sanction decision?",
    answer: "Scholarship sanction letters are issued within 2 to 4 weeks after document verification during the admission process."
  },
  {
    question: "Do scholarships cover hostel, mess, and exam fees?",
    answer: "No, university scholarships apply exclusively to annual Tuition Fees. Hostel lodging, dining, examination, and transport charges are payable as per standard norms."
  },
  {
    question: "Can I apply for a Sports Scholarship without high academic marks?",
    answer: "Yes! Sports scholarships are awarded based on athletic achievements at State, National, or International levels, independent of academic merit scores."
  }
];
