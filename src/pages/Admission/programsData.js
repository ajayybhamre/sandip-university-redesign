// Comprehensive Programs Dataset for Sandip University
// Sourced from official academic catalog, formatted for search, filter, grid cards, and detail modal.

export const SCHOOLS_LIST = [
  { id: "all", name: "All Schools" },
  { id: "cse", name: "School of Computer Sciences & Engineering" },
  { id: "eng", name: "School of Engineering & Technology" },
  { id: "mgmt", name: "School of Commerce & Management Studies" },
  { id: "pharm", name: "School of Pharmaceutical Sciences" },
  { id: "law", name: "School of Law" },
  { id: "sci", name: "School of Science" }
];

export const ALL_PROGRAMS_DATA = [
  // ==========================================
  // SCHOOL OF COMPUTER SCIENCES & ENGINEERING
  // ==========================================
  {
    id: "btech-cse",
    slug: "btech-computer-engineering",
    title: "B.Tech Computer Engineering",
    schoolId: "cse",
    school: "School of Computer Sciences & Engineering",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved | UGC Recognized",
    overview: "Industry-aligned 4-year degree focusing on Distributed Systems, Cloud Architecture, Modern Web Protocols, and Enterprise Software Systems. Built with hands-on AWS and RedHat labs.",
    specializations: ["Software Engineering", "Cloud Computing"],
    compactEligibility: "10+2 PCM min 45% (40% for Reserved) with SU-JEE / MHT-CET / JEE Main",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "Passed 10+2 / Higher Secondary Examination from a recognized Board." },
      { title: "Mandatory Subjects", description: "Physics, Mathematics, and Chemistry / Computer Science / Biotechnology." },
      { title: "Minimum Aggregate Marks", description: "Minimum 45% aggregate in PCM (40% for SC/ST/OBC Maharashtra candidates)." },
      { title: "Entrance Test Requirement", description: "Valid score in SU-JEE 2026, MHT-CET 2026, or JEE Main 2026." },
      { title: "Document Verification", description: "10th & 12th marksheets, Transfer Certificate, and DTE CAP registration letter." }
    ],
    relaxationNote: "5% relaxation in aggregate marks for SC/ST/OBC candidates belonging to Maharashtra State domicile.",
    curriculumDetails: {
      model: "Outcome-Based Education (OBE) Model following AICTE/UGC Guidelines",
      industryCourses: [
        "Data Structures & Algorithm Optimization",
        "Full Stack Development (React, Node, Express, MongoDB)",
        "AWS Cloud Architecture & Kubernetes Orchestration",
        "Machine Learning Fundamentals with Python",
        "Enterprise Java & Spring Microservices"
      ],
      handsOnHighlights: [
        "6-Month Paid Corporate Internship in Semester 8",
        "AWS & RedHat Academy Certification Integration",
        "24/7 High-Performance Computing Lab Access"
      ]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee of ₹ 1,35,000 per year, payable in two semester installments.",
      additionalCharges: [
        "One-time Admission Processing Fee: ₹ 10,000",
        "Refundable Caution Deposit: ₹ 5,000",
        "Semester Examination Fee: ₹ 2,500 per semester"
      ],
      hostelInfo: "In-campus hostel facilities (AC & Non-AC) available starting from ₹ 85,000/year including 3 nutritious meals daily.",
      transportInfo: "Air-conditioned fleet of buses connecting Nashik and surrounding regions.",
      uniformInfo: "Official university uniform kit provided during freshman orientation."
    },
    careerDetails: {
      overview: "100% placement training and internship assistance provided through the Corporate Relations Cell.",
      highlights: [
        "Average Salary Package: ₹ 6.5 - 7.2 LPA",
        "Highest Salary Package: ₹ 28.0 LPA",
        "Target Roles: Software Engineer, Full Stack Developer, Cloud Architect, DevOps Lead"
      ],
      placementAssistance: "Dedicated placement cell with 200+ global hiring partners including Amazon, TCS, Infosys, and Cognizant.",
      alumniNetwork: "Strong global network of 15,000+ alumni working in Silicon Valley, MNCs, and tech unicorns."
    }
  },
  {
    id: "btech-ai",
    slug: "btech-artificial-intelligence",
    title: "B.Tech Artificial Intelligence & Machine Learning",
    schoolId: "cse",
    school: "School of Computer Sciences & Engineering",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved | UGC Recognized",
    overview: "Specialized undergraduate program in Deep Learning, Computer Vision, Generative AI, and Natural Language Processing using PyTorch and TensorFlow.",
    specializations: ["Deep Learning", "Generative AI"],
    compactEligibility: "10+2 PCM min 50% aggregate with SU-JEE / MHT-CET / JEE Main",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 / HSC Science stream pass from recognized Board." },
      { title: "Required Subjects", description: "Physics, Mathematics, and Chemistry or IT." },
      { title: "Minimum Aggregate", description: "50% aggregate marks in 10+2 Science (45% for Reserved categories)." },
      { title: "Entrance Score", description: "Non-zero valid score in SU-JEE, MHT-CET, or JEE Main." }
    ],
    relaxationNote: "Relaxation applicable as per Govt of Maharashtra DTE norms.",
    curriculumDetails: {
      model: "Outcome-Based Education (OBE) Model",
      industryCourses: [
        "Linear Algebra & Matrix Computations for AI",
        "Neural Networks & Deep Learning Architectures",
        "Computer Vision & Pattern Recognition",
        "Natural Language Processing (NLP) & Transformers",
        "AI Ethics, Bias & Governance"
      ],
      handsOnHighlights: [
        "IBM & NVIDIA AI Innovation Center Access",
        "Live Capstone Projects on Autonomous Systems"
      ]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 1,45,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 10,000", "Caution Deposit: ₹ 5,000", "Exam Fee: ₹ 2,500/sem"],
      hostelInfo: "Hostel rooms with Wi-Fi, laundry, and dining: ₹ 85,000/year.",
      transportInfo: "University bus service on all major routes.",
      uniformInfo: "Standard uniform blazer kit provided."
    },
    careerDetails: {
      overview: "High-demand career paths in AI engineering and data science research.",
      highlights: ["Highest Package: ₹ 32 LPA", "Avg Package: ₹ 8.5 LPA", "Roles: AI Specialist, ML Engineer, Data Scientist"],
      placementAssistance: "Hiring drives with Microsoft, IBM, Accenture, Intel, and NVIDIA.",
      alumniNetwork: "Alumni placed in global AI R&D labs and top research institutions."
    }
  },
  {
    id: "bca",
    slug: "bca-computer-applications",
    title: "BCA - Bachelor of Computer Applications",
    schoolId: "cse",
    school: "School of Computer Sciences & Engineering",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "3-year application development degree covering web technologies, database architecture, mobile app programming, and cyber security.",
    specializations: ["Web Technologies", "Mobile App Dev"],
    compactEligibility: "10+2 in any stream min 45% aggregate",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 / HSC pass in Science, Commerce, or Arts." },
      { title: "Preferred Subject", description: "Mathematics or Computer Science at 10+2 level." },
      { title: "Minimum Aggregate", description: "45% aggregate marks (40% for SC/ST candidates)." },
      { title: "Admission Basis", description: "Direct Merit Aggregate in 10+2." }
    ],
    relaxationNote: "Category relaxations per university rules.",
    curriculumDetails: {
      model: "OBE Skill-Oriented Framework",
      industryCourses: ["Object-Oriented C++ & Java", "Database Systems (MySQL/MongoDB)", "React & Node.js Web Apps", "Android App Dev"],
      handsOnHighlights: ["Weekly Coding Hackathons", "Live Mini Web Project"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 75,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 5,000", "Caution Deposit: ₹ 3,000"],
      hostelInfo: "Standard hostel accommodation: ₹ 80,000/year.",
      transportInfo: "Bus transport facility available.",
      uniformInfo: "Uniform provided at admission."
    },
    careerDetails: {
      overview: "Preparation for software development, system administration, and web programming.",
      highlights: ["Highest Package: ₹ 12 LPA", "Avg Package: ₹ 5.1 LPA", "Roles: Web Developer, System Analyst, QA"],
      placementAssistance: "On-campus recruitment by Deloitte, Wipro, Capgemini, and TCS.",
      alumniNetwork: "Strong network of IT professionals across India."
    }
  },
  {
    id: "bsc-cs",
    slug: "bsc-computer-science",
    title: "B.Sc Computer Science",
    schoolId: "cse",
    school: "School of Computer Sciences & Engineering",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "Foundation degree in computer science principles, computational logic, data structures, and operating system kernels.",
    specializations: ["Computational Logic", "Software Testing"],
    compactEligibility: "10+2 Science with Math min 45% aggregate",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 Science stream pass." },
      { title: "Mandatory Subjects", description: "Physics, Chemistry, and Mathematics." },
      { title: "Minimum Aggregate", description: "45% marks in 10+2 Science." }
    ],
    relaxationNote: "Standard category relaxations applied.",
    curriculumDetails: {
      model: "UGC Choice Based Credit System (CBCS)",
      industryCourses: ["Discrete Mathematics", "Data Structures & C++", "Operating Systems & Linux", "Software Engineering"],
      handsOnHighlights: ["Software Testing Labs", "Hardware Interfacing Workshop"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 60,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 5,000"],
      hostelInfo: "Hostel available: ₹ 80,000/year.",
      transportInfo: "Bus facility available.",
      uniformInfo: "Uniform included."
    },
    careerDetails: {
      overview: "Core technical careers in software development and testing.",
      highlights: ["Highest Package: ₹ 10 LPA", "Avg Package: ₹ 4.8 LPA", "Roles: Software Programmer, Technical Lead"],
      placementAssistance: "Placement drives with Infosys, LTI Mindtree, and Hexaware.",
      alumniNetwork: "Alumni working in leading tech firms."
    }
  },
  {
    id: "mca",
    slug: "mca-master-computer-applications",
    title: "MCA - Master of Computer Applications",
    schoolId: "cse",
    school: "School of Computer Sciences & Engineering",
    level: "PG",
    duration: "2 Years",
    approval: "AICTE Approved | UGC Recognized",
    overview: "Post-graduate degree in full-stack enterprise architecture, DevOps, cloud engineering, microservices, and database optimization.",
    specializations: ["Cloud & DevOps", "Full Stack Architecture"],
    compactEligibility: "BCA / B.Sc CS / B.Tech degree min 50% with MAH-MCA-CET",
    eligibilityRequirements: [
      { title: "Graduation Degree", description: "Passed BCA / B.Sc CS / B.Tech or equivalent." },
      { title: "Mathematics Prerequisite", description: "Mathematics at 10+2 level or Graduation level." },
      { title: "Minimum Aggregate", description: "50% aggregate in graduation (45% for Reserved)." },
      { title: "Entrance Test", description: "Valid score in MAH-MCA-CET or SU-JEE MCA." }
    ],
    relaxationNote: "Reservation relaxations as per DTE Maharashtra rules.",
    curriculumDetails: {
      model: "OBE Outcome-Based Architecture",
      industryCourses: ["Enterprise Java & Spring Boot", "Cloud DevOps with Docker/K8s", "Cyber Security & Cryptography", "Microservices"],
      handsOnHighlights: ["Full Semester Corporate Internship", "Industry Mentorship"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 1,10,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 10,000", "Caution Deposit: ₹ 5,000"],
      hostelInfo: "Hostel facility: ₹ 85,000/year.",
      transportInfo: "Bus service available.",
      uniformInfo: "Uniform provided."
    },
    careerDetails: {
      overview: "Advanced enterprise technology roles.",
      highlights: ["Highest Package: ₹ 20 LPA", "Avg Package: ₹ 7.0 LPA", "Roles: Software Architect, DevOps Engineer"],
      placementAssistance: "Recruitment by Oracle, SAP, Cognizant, JPMorgan, and Salesforce.",
      alumniNetwork: "Post-graduates leading software development teams globally."
    }
  },
  {
    id: "msc-ds",
    slug: "msc-data-science",
    title: "M.Sc Data Science & Analytics",
    schoolId: "cse",
    school: "School of Computer Sciences & Engineering",
    level: "PG",
    duration: "2 Years",
    approval: "UGC Approved",
    overview: "Advanced master's degree in statistical modeling, big data systems (Hadoop/Spark), business intelligence, and predictive machine learning.",
    specializations: ["Big Data Analytics", "Business Intelligence"],
    compactEligibility: "B.Sc / BCA with Math/Stats min 50% aggregate",
    eligibilityRequirements: [
      { title: "Qualifying Degree", description: "B.Sc (CS/IT/Stats/Math) or BCA / B.Tech degree." },
      { title: "Subject Requirement", description: "Mathematics or Statistics background in graduation." },
      { title: "Minimum Marks", description: "50% aggregate marks." }
    ],
    relaxationNote: "Applicable relaxations for reserved categories.",
    curriculumDetails: {
      model: "CBCS Research & Industry Model",
      industryCourses: ["Advanced Statistics & Probability", "Python Data Science Stack", "Big Data Frameworks (Spark/Hadoop)", "BI Dashboards"],
      handsOnHighlights: ["Live Industry Data Projects", "Scopus Research Publication"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 95,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 8,000"],
      hostelInfo: "Hostel: ₹ 85,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Uniform kit provided."
    },
    careerDetails: {
      overview: "High-growth analytics and data engineering roles.",
      highlights: ["Highest Package: ₹ 24 LPA", "Avg Package: ₹ 8.0 LPA", "Roles: Data Scientist, Analytics Manager"],
      placementAssistance: "Campus drives with Deloitte, EY, Mu Sigma, KPMG, and Amazon.",
      alumniNetwork: "Alumni network in top consultancy firms."
    }
  },
  {
    id: "phd-cs",
    slug: "phd-computer-science",
    title: "Ph.D. Computer Science & Engineering",
    schoolId: "cse",
    school: "School of Computer Sciences & Engineering",
    level: "PhD",
    duration: "3 - 5 Years",
    approval: "UGC Recognized | Ph.D. Regulations 2022 Compliant",
    overview: "Doctoral research program for developing advancements in AI, Quantum Computing, Cybersecurity, and Network Protocols.",
    specializations: ["Artificial Intelligence", "Cyber Security"],
    compactEligibility: "Master's degree in CS/IT/MCA min 55% aggregate + PET Test",
    eligibilityRequirements: [
      { title: "Master's Degree", description: "M.E. / M.Tech / MCA / M.Sc CS from recognized University." },
      { title: "Minimum Aggregate", description: "55% aggregate marks (50% for SC/ST/OBC)." },
      { title: "Ph.D. Entrance Test", description: "Pass in PET entrance exam (GATE/NET exempted)." },
      { title: "Research Proposal", description: "Defense of synoptic research proposal before RDC committee." }
    ],
    relaxationNote: "5% relaxation for reserved categories.",
    curriculumDetails: {
      model: "UGC Doctoral Research Regulations",
      industryCourses: ["Research Methodology & Ethics", "Quantitative Data Analysis", "Domain Electives"],
      handsOnHighlights: ["Scopus/SCI Publications", "Doctoral Defense Colloquium"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 70,000 per year.",
      additionalCharges: ["Registration Fee: ₹ 15,000", "Thesis Evaluation Fee: ₹ 10,000"],
      hostelInfo: "Scholar hostel available.",
      transportInfo: "Campus shuttle available.",
      uniformInfo: "Not applicable."
    },
    careerDetails: {
      overview: "Academic and high-level industrial R&D positions.",
      highlights: ["Highest Package: ₹ 35 LPA", "Avg Package: ₹ 12 LPA", "Roles: Research Scientist, University Professor"],
      placementAssistance: "Research ties with DRDO, ISRO, and global research centers.",
      alumniNetwork: "Doctoral alumni serving in senior academic and research leadership."
    }
  },

  // ==========================================
  // SCHOOL OF ENGINEERING & TECHNOLOGY
  // ==========================================
  {
    id: "btech-mech",
    slug: "btech-mechanical-engineering",
    title: "B.Tech Mechanical Engineering",
    schoolId: "eng",
    school: "School of Engineering & Technology",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved | UGC Recognized",
    overview: "Core engineering discipline covering CAD/CAM modeling, thermodynamics, robotics, CNC manufacturing systems, and automotive design.",
    specializations: ["Automotive Design", "Robotics & Automation"],
    compactEligibility: "10+2 PCM min 45% aggregate with MHT-CET / JEE Main / SU-JEE",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 Science stream pass." },
      { title: "Mandatory Subjects", description: "Physics, Mathematics, and Chemistry / Vocational." },
      { title: "Minimum Aggregate", description: "45% marks in PCM (40% for Reserved)." },
      { title: "Entrance Score", description: "Valid score in MHT-CET, JEE Main, or SU-JEE." }
    ],
    relaxationNote: "5% relaxation for reserved candidates.",
    curriculumDetails: {
      model: "Outcome-Based Education (OBE) Model",
      industryCourses: ["Engineering Mechanics & Thermodynamics", "CAD/CAM & 3D Printing", "Robotics & Industrial Automation", "Fluid Machines"],
      handsOnHighlights: ["CNC Machine Practical Workshop", "Formula Student Car Project"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 1,15,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 10,000", "Caution Deposit: ₹ 5,000"],
      hostelInfo: "Hostel facility: ₹ 85,000/year.",
      transportInfo: "Bus fleet covering Nashik region.",
      uniformInfo: "Uniform provided."
    },
    careerDetails: {
      overview: "Engineering design, manufacturing, and automotive sectors.",
      highlights: ["Highest Package: ₹ 18 LPA", "Avg Package: ₹ 6.0 LPA", "Roles: Design Engineer, Production Manager"],
      placementAssistance: "Recruitment by Tata Motors, Bosch, L&T, Mahindra, and Thermax.",
      alumniNetwork: "Alumni working in top manufacturing & automotive majors."
    }
  },
  {
    id: "btech-civil",
    slug: "btech-civil-engineering",
    title: "B.Tech Civil Engineering",
    schoolId: "eng",
    school: "School of Engineering & Technology",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved | UGC Recognized",
    overview: "Structural engineering, smart city planning, environmental engineering, GIS land surveying, and sustainable green building infrastructure design.",
    specializations: ["Structural Engineering", "Smart City Infrastructure"],
    compactEligibility: "10+2 PCM min 45% aggregate with MHT-CET / JEE Main / SU-JEE",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 Science pass from recognized Board." },
      { title: "Required Subjects", description: "Physics, Mathematics, and Chemistry." },
      { title: "Minimum Aggregate", description: "45% aggregate in PCM." },
      { title: "Entrance Exam", description: "MHT-CET / JEE Main / SU-JEE." }
    ],
    relaxationNote: "Category relaxations applied.",
    curriculumDetails: {
      model: "OBE Curriculum Model",
      industryCourses: ["Structural Analysis & Design", "Geotechnical Engineering", "Transportation & Highway Engg", "Environmental Engineering"],
      handsOnHighlights: ["Total Station Land Surveying", "Green Building Design Lab"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 1,10,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 10,000"],
      hostelInfo: "Hostel: ₹ 85,000/year.",
      transportInfo: "Bus service available.",
      uniformInfo: "Uniform kit provided."
    },
    careerDetails: {
      overview: "Construction management and civil infrastructure planning.",
      highlights: ["Highest Package: ₹ 15 LPA", "Avg Package: ₹ 5.5 LPA", "Roles: Structural Engineer, Site Manager"],
      placementAssistance: "Placement drives with L&T Construction, Shapoorji Pallonji, and DLF.",
      alumniNetwork: "Alumni leading infrastructure mega-projects."
    }
  },
  {
    id: "diploma-mech",
    slug: "diploma-mechanical-engineering",
    title: "Diploma in Mechanical Engineering",
    schoolId: "eng",
    school: "School of Engineering & Technology",
    level: "Diploma",
    duration: "3 Years",
    approval: "DTE Maharashtra Approved",
    overview: "Hands-on machining, CAD drafting, workshop practice, CNC lathe operations, and quality inspection for 10th pass students.",
    specializations: ["CNC Machining", "CAD Drafting"],
    compactEligibility: "10th SSC Pass with min 35% aggregate",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "Passed 10th Standard (SSC) examination." },
      { title: "Required Subjects", description: "Science and Mathematics mandatory." },
      { title: "Minimum Aggregate", description: "35% aggregate marks." }
    ],
    relaxationNote: "DTE CAP allotment rules apply.",
    curriculumDetails: {
      model: "MSBTE Practical Curriculum",
      industryCourses: ["Workshop Practice", "Engineering Drawing", "CNC Machine Operations", "Strength of Materials"],
      handsOnHighlights: ["Machining Shop Training", "Quality Assurance Lab"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 45,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 3,000"],
      hostelInfo: "Hostel: ₹ 75,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Uniform provided."
    },
    careerDetails: {
      overview: "Junior engineering and technical supervisor roles.",
      highlights: ["Highest Package: ₹ 8 LPA", "Avg Package: ₹ 3.8 LPA", "Roles: Junior Engineer, CAD Drafter"],
      placementAssistance: "Drives with Bajaj Auto, Force Motors, and Thermax.",
      alumniNetwork: "Diploma alumni working across industrial hubs."
    }
  },

  // ==========================================
  // SCHOOL OF COMMERCE & MANAGEMENT STUDIES
  // ==========================================
  {
    id: "mba-gen",
    slug: "mba-general-management",
    title: "MBA - Master of Business Administration",
    schoolId: "mgmt",
    school: "School of Commerce & Management Studies",
    level: "PG",
    duration: "2 Years",
    approval: "UGC Approved | NAAC Grade A | AICTE Recognized",
    overview: "Flagship 2-year business leadership program offering dual specializations in Marketing, Finance, Human Resources, Business Analytics, and International Business.",
    specializations: ["Marketing & Finance", "HR & Business Analytics"],
    compactEligibility: "Graduation min 50% (45% Reserved) with MAH-MBA-CET / CAT / MAT",
    eligibilityRequirements: [
      { title: "Qualifying Degree", description: "Bachelor's Degree in any discipline from recognized University." },
      { title: "Minimum Aggregate", description: "50% aggregate marks (45% for Reserved categories)." },
      { title: "Entrance Score", description: "Valid score in MAH-MBA-CET, CAT, MAT, CMAT, or SU-JEE." },
      { title: "GD & PI Evaluation", description: "Performance in Group Discussion & Personal Interview." }
    ],
    relaxationNote: "5% relaxation for reserved categories of Maharashtra State.",
    curriculumDetails: {
      model: "Outcome-Based Management Curriculum",
      industryCourses: ["Managerial Economics & Accounting", "Corporate Finance & Risk Analysis", "Digital Marketing & Brand Lead", "Strategic Management"],
      handsOnHighlights: ["8-Week Paid Corporate Internship", "Harvard Case Study Modules"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 1,30,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 10,000", "Caution Deposit: ₹ 5,000"],
      hostelInfo: "Hostel: ₹ 85,000/year.",
      transportInfo: "Bus transport available.",
      uniformInfo: "Executive suit & uniform provided."
    },
    careerDetails: {
      overview: "Management trainee and executive leadership positions.",
      highlights: ["Highest Package: ₹ 24.0 LPA", "Avg Package: ₹ 8.2 LPA", "Roles: Business Analyst, HR Manager, Financial Consultant"],
      placementAssistance: "Hiring partners include Deloitte, HDFC Bank, KPMG, ICICI Bank, and Amazon.",
      alumniNetwork: "Alumni network in top tier corporate financial institutions."
    }
  },
  {
    id: "bba",
    slug: "bba-business-administration",
    title: "BBA - Bachelor of Business Administration",
    schoolId: "mgmt",
    school: "School of Commerce & Management Studies",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "Undergraduate degree in management fundamentals, corporate operations, digital marketing, business analytics, and entrepreneurial strategy.",
    specializations: ["Digital Marketing", "Financial Accounting"],
    compactEligibility: "10+2 in any stream min 45% aggregate",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 / HSC pass in Commerce, Science, or Arts." },
      { title: "Language Prerequisite", description: "English mandatory at 10+2 level." },
      { title: "Minimum Aggregate", description: "45% aggregate marks." }
    ],
    relaxationNote: "Category relaxations applied.",
    curriculumDetails: {
      model: "UGC Choice Based Credit System",
      industryCourses: ["Principles of Management", "Business Communication", "Digital Marketing & SEO", "Financial Accounting"],
      handsOnHighlights: ["Live Entrepreneurship Cell Projects", "Corporate Visits"]
    },
    feeDetails: {
      generalNote: "Annual Tuition Fee: ₹ 70,000 per year.",
      additionalCharges: ["Admission Fee: ₹ 5,000"],
      hostelInfo: "Hostel: ₹ 80,000/year.",
      transportInfo: "Bus facility available.",
      uniformInfo: "Uniform provided."
    },
    careerDetails: {
      overview: "Corporate management and digital marketing careers.",
      highlights: ["Highest Package: ₹ 11 LPA", "Avg Package: ₹ 5.0 LPA", "Roles: Management Trainee, Brand Associate"],
      placementAssistance: "Recruitment by Kotak Mahindra, Swiggy, Zomato, and BYJU'S.",
      alumniNetwork: "Active business and startup alumni network."
    }
  },

  // ==========================================
  // SCHOOL OF PHARMACEUTICAL SCIENCES
  // ==========================================
  {
    id: "bpharm",
    slug: "bpharm-bachelor-pharmacy",
    title: "B.Pharm - Bachelor of Pharmacy",
    schoolId: "pharm",
    school: "School of Pharmaceutical Sciences",
    level: "UG",
    duration: "4 Years",
    approval: "PCI (Pharmacy Council of India) Approved | AICTE Approved",
    overview: "PCI-approved 4-year degree in drug formulation, pharmacology, clinical trial management, medicinal chemistry, and quality assurance.",
    specializations: ["Pharmaceutics", "Pharmacology"],
    compactEligibility: "10+2 PCB/PCM min 45% aggregate with MHT-CET / NEET / SU-JEE",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 / Higher Secondary examination pass." },
      { title: "Mandatory Subjects", description: "Physics & Chemistry mandatory + Math or Biology third subject." },
      { title: "Minimum Aggregate", description: "45% in PCB/PCM (40% for Reserved candidates)." },
      { title: "Entrance Scorecard", description: "Valid score in MHT-CET, NEET UG, or SU-JEE Pharmacy." }
    ],
    relaxationNote: "PCI & DTE Maharashtra category relaxations apply.",
    curriculumDetails: {
      model: "PCI Standard Education Regulations",
      industryCourses: ["Human Anatomy & Physiology", "Pharmaceutics & Formulation", "Medicinal Chemistry", "Pharmacology & Clinical Pharmacy"],
      handsOnHighlights: ["PCI Standard High-Tech Formulation Lab", "Hospital Training"]
    },
    feeDetails: {
      tuitionFeePerYear: "₹ 1,25,000",
      additionalCharges: ["Admission Fee: ₹ 10,000", "Caution Deposit: ₹ 5,000"],
      hostelInfo: "Hostel: ₹ 85,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Apron & uniform provided."
    },
    careerDetails: {
      overview: "Clinical R&D, drug regulatory affairs, and pharmaceutical manufacturing.",
      highlights: ["Highest Package: ₹ 16 LPA", "Avg Package: ₹ 5.8 LPA", "Roles: Clinical Research Associate, Drug Inspector, QA Lead"],
      placementAssistance: "Hiring by Sun Pharma, Cipla, Lupin, Dr. Reddy's, and Glenmark.",
      alumniNetwork: "Registered pharmacists and R&D scientists worldwide."
    }
  },
  {
    id: "dpharm",
    slug: "dpharm-diploma-pharmacy",
    title: "D.Pharm - Diploma in Pharmacy",
    schoolId: "pharm",
    school: "School of Pharmaceutical Sciences",
    level: "Diploma",
    duration: "2 Years",
    approval: "PCI Approved | DTE Maharashtra Approved",
    overview: "2-year professional diploma granting eligibility for Registered Pharmacist licensure under the State Pharmacy Council.",
    specializations: ["Community Pharmacy", "Hospital Pharmacy"],
    compactEligibility: "10+2 Science stream (PCB or PCM) Pass",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 Science stream pass." },
      { title: "Required Subjects", description: "Physics, Chemistry, and Biology or Mathematics." },
      { title: "Minimum Marks", description: "Pass marks in qualifying 10+2 Science." }
    ],
    relaxationNote: "DTE D.Pharm CAP process rules apply.",
    curriculumDetails: {
      model: "PCI Diploma Syllabus Framework",
      industryCourses: ["Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacognosy", "Community Pharmacy"],
      handsOnHighlights: ["Hospital Internship Training", "Retail Pharmacy Workshop"]
    },
    feeDetails: {
      tuitionFeePerYear: "₹ 65,000",
      additionalCharges: ["Admission Fee: ₹ 5,000"],
      hostelInfo: "Hostel: ₹ 80,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Lab coat provided."
    },
    careerDetails: {
      overview: "Licensed pharmacist, retail chemist, and medical representative.",
      highlights: ["Highest Package: ₹ 8 LPA", "Avg Package: ₹ 3.8 LPA", "Roles: Registered Pharmacist, Medical Rep"],
      placementAssistance: "Drives with Apollo Pharmacy, MedPlus, and regional hospitals.",
      alumniNetwork: "Licensed community pharmacists."
    }
  },

  // ==========================================
  // SCHOOL OF LAW
  // ==========================================
  {
    id: "ballb",
    slug: "ba-llb-integrated",
    title: "B.A. LL.B (Hons) - 5 Years Integrated",
    schoolId: "law",
    school: "School of Law",
    level: "UG",
    duration: "5 Years",
    approval: "BCI (Bar Council of India) Approved | UGC Recognized",
    overview: "5-year integrated law degree blending humanities with corporate law, criminal jurisprudence, constitutional law, and moot court practice.",
    specializations: ["Corporate & Mergers Law", "Constitutional Advocacy"],
    compactEligibility: "10+2 in any stream min 45% aggregate with MH-CET Law / CLAT",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 / HSC pass in any stream." },
      { title: "Mandatory Subject", description: "English language mandatory." },
      { title: "Minimum Aggregate", description: "45% aggregate marks (40% for Reserved)." },
      { title: "Law Entrance Score", description: "Valid score in MH-CET Law 5-Year, CLAT, or SU-JEE Law." }
    ],
    relaxationNote: "BCI & DTE category relaxations applicable.",
    curriculumDetails: {
      model: "BCI Legal Education Regulations",
      industryCourses: ["Constitutional Law & Jurisprudence", "Indian Penal Code & Criminal Procedure", "Corporate & Mergers Law", "Intellectual Property Law"],
      handsOnHighlights: ["Moot Court Competition Training", "High Court / Law Firm Internship"]
    },
    feeDetails: {
      tuitionFeePerYear: "₹ 90,000",
      additionalCharges: ["Admission Fee: ₹ 8,000", "Caution Deposit: ₹ 4,000"],
      hostelInfo: "Hostel: ₹ 80,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Advocate uniform dress provided."
    },
    careerDetails: {
      overview: "Advocacy, judicial services, and corporate legal counseling.",
      highlights: ["Highest Package: ₹ 20 LPA", "Avg Package: ₹ 6.8 LPA", "Roles: Corporate Lawyer, Judicial Officer, Legal Advisor"],
      placementAssistance: "Internship tie-ups with AZB & Partners, Cyril Amarchand Mangaldas, and Khaitan & Co.",
      alumniNetwork: "Alumni practicing in High Courts and top legal firms."
    }
  },
  {
    id: "llb",
    slug: "llb-degree",
    title: "LL.B - 3 Years Degree",
    schoolId: "law",
    school: "School of Law",
    level: "UG",
    duration: "3 Years",
    approval: "BCI Approved | UGC Recognized",
    overview: "3-year professional law degree for graduates aiming for advocate enrollment under the Bar Council and judicial services examinations.",
    specializations: ["Litigation Advocacy", "Cyber Law"],
    compactEligibility: "Graduation in any stream min 45% aggregate with MH-CET Law 3-Yr",
    eligibilityRequirements: [
      { title: "Qualifying Degree", description: "Bachelor's degree in any stream from recognized University." },
      { title: "Minimum Aggregate", description: "45% aggregate marks (40% for Reserved)." },
      { title: "Entrance Score", description: "MH-CET Law 3-Year or SU-JEE Law score." }
    ],
    relaxationNote: "BCI category relaxations apply.",
    curriculumDetails: {
      model: "BCI Curriculum Model",
      industryCourses: ["Jurisprudence & Contract Law", "Civil Procedure Code", "Evidence Act & Property Law", "Drafting & Pleading"],
      handsOnHighlights: ["Courtroom Trial Advocacy", "Legal Aid Clinic"]
    },
    feeDetails: {
      tuitionFeePerYear: "₹ 75,000",
      additionalCharges: ["Admission Fee: ₹ 5,000"],
      hostelInfo: "Hostel: ₹ 80,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Uniform provided."
    },
    careerDetails: {
      overview: "Legal practice, advocate enrollment, and public prosecution.",
      highlights: ["Highest Package: ₹ 14 LPA", "Avg Package: ₹ 5.5 LPA", "Roles: Advocate, Legal Consultant, Prosecutor"],
      placementAssistance: "Court attachment programs and law firm recruitment.",
      alumniNetwork: "Active network of judicial officers and advocates."
    }
  },

  // ==========================================
  // SCHOOL OF SCIENCE
  // ==========================================
  {
    id: "bsc-biotech",
    slug: "bsc-biotechnology",
    title: "B.Sc Biotechnology",
    schoolId: "sci",
    school: "School of Science",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "Genetic engineering, molecular biology, bioinformatics, immunology, and industrial fermentation with modern biotech research labs.",
    specializations: ["Genetic Engineering", "Bioinformatics"],
    compactEligibility: "10+2 Science (PCB or PCM) min 45% aggregate",
    eligibilityRequirements: [
      { title: "Academic Qualification", description: "10+2 / HSC Science stream pass." },
      { title: "Required Subjects", description: "Physics, Chemistry, and Biology or Mathematics." },
      { title: "Minimum Aggregate", description: "45% aggregate marks." }
    ],
    relaxationNote: "Standard category relaxations applied.",
    curriculumDetails: {
      model: "UGC CBCS Science Framework",
      industryCourses: ["Cell & Molecular Biology", "Recombinant DNA Tech", "Bioprocess Technology", "Immunology"],
      handsOnHighlights: ["DNA Isolation Lab Practicals", "Industrial Fermentation Visits"]
    },
    feeDetails: {
      tuitionFeePerYear: "₹ 65,000",
      additionalCharges: ["Admission Fee: ₹ 5,000"],
      hostelInfo: "Hostel: ₹ 80,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Lab coat & uniform provided."
    },
    careerDetails: {
      overview: "Biotechnology R&D, clinical labs, and genetics research.",
      highlights: ["Highest Package: ₹ 12 LPA", "Avg Package: ₹ 5.0 LPA", "Roles: Biotechnologist, Lab Analyst, QC Specialist"],
      placementAssistance: "Recruitment drives with Biocon, Bharat Biotech, and Serum Institute.",
      alumniNetwork: "Biotech research alumni globally."
    }
  },
  {
    id: "msc-org-chem",
    slug: "msc-organic-chemistry",
    title: "M.Sc Organic Chemistry",
    schoolId: "sci",
    school: "School of Science",
    level: "PG",
    duration: "2 Years",
    approval: "UGC Approved",
    overview: "Advanced synthetic organic chemistry, reaction mechanisms, spectroscopic analysis (NMR/FTIR/HPLC), and pharmaceutical API R&D.",
    specializations: ["Synthetic Organic Chemistry", "API Drug Analysis"],
    compactEligibility: "B.Sc Chemistry degree min 50% aggregate",
    eligibilityRequirements: [
      { title: "Qualifying Degree", description: "B.Sc degree with Chemistry as principal subject." },
      { title: "Minimum Aggregate", description: "50% aggregate marks in B.Sc." }
    ],
    relaxationNote: "5% relaxation for reserved categories.",
    curriculumDetails: {
      model: "CBCS Advanced Science Framework",
      industryCourses: ["Advanced Organic Synthesis", "Spectroscopic Characterization (NMR/UV/IR)", "Asymmetric Catalysis"],
      handsOnHighlights: ["HPLC & FTIR Instrument Labs", "API Synthesis Research Project"]
    },
    feeDetails: {
      tuitionFeePerYear: "₹ 70,000",
      additionalCharges: ["Admission Fee: ₹ 5,000"],
      hostelInfo: "Hostel: ₹ 80,000/year.",
      transportInfo: "Bus transport provided.",
      uniformInfo: "Lab coat provided."
    },
    careerDetails: {
      overview: "Synthetic chemistry R&D and pharmaceutical quality control.",
      highlights: ["Highest Package: ₹ 15 LPA", "Avg Package: ₹ 6.2 LPA", "Roles: Synthetic Chemist, Research Associate"],
      placementAssistance: "Drives with Syngene, Thermo Fisher, BASF, and Lupin R&D.",
      alumniNetwork: "R&D scientists in top chemical & pharma companies."
    }
  }
];
