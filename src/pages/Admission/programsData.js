// Detailed Programs Dataset for Sandip University
// Modular structure for 3-Step Course Finder and Dedicated Program Details view

export const SCHOOLS_DATA = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "Computer Science",
    icon: "💻",
    count: 7,
    description: "Cutting-edge artificial intelligence, software engineering, and data science programs.",
  },
  {
    id: "eng",
    name: "Engineering & Technology",
    shortName: "Engineering",
    icon: "⚙️",
    count: 9,
    description: "Core mechanical, civil, electrical, and robotics engineering disciplines.",
  },
  {
    id: "mgmt",
    name: "Commerce & Management",
    shortName: "Commerce & Management",
    icon: "💼",
    count: 7,
    description: "Top-tier business administration, finance, marketing, and HR specializations.",
  },
  {
    id: "pharm",
    name: "Pharmaceutical Sciences",
    shortName: "Pharmaceutical Sciences",
    icon: "💊",
    count: 5,
    description: "PCI-approved pharmacy degrees focusing on drug synthesis and clinical R&D.",
  },
  {
    id: "law",
    name: "School of Law",
    shortName: "School of Law",
    icon: "⚖️",
    count: 5,
    description: "BCI-recognized integrated law, constitutional law, and corporate legal studies.",
  },
  {
    id: "sci",
    name: "School of Sciences",
    shortName: "School of Sciences",
    icon: "🔬",
    count: 7,
    description: "Advanced research programs in Biotechnology, Organic Chemistry, and Physics.",
  },
  {
    id: "des",
    name: "School of Design",
    shortName: "School of Design",
    icon: "🎨",
    count: 5,
    description: "Studio-based degrees in UI/UX Communication, Fashion, and Spatial Interior Design.",
  },
  {
    id: "voc",
    name: "Vocational Studies",
    shortName: "Vocational Studies",
    icon: "🛠️",
    count: 4,
    description: "Skill-first work-integrated degrees and advanced diplomas certified under NSQF.",
  },
];

export const POPULAR_CHIPS = [
  { label: "B.Tech", schoolId: "cse", level: "UG", query: "b.tech" },
  { label: "MBA", schoolId: "mgmt", level: "PG", query: "mba" },
  { label: "BCA", schoolId: "cse", level: "UG", query: "bca" },
  { label: "MCA", schoolId: "cse", level: "PG", query: "mca" },
  { label: "B.Pharm", schoolId: "pharm", level: "UG", query: "b.pharm" },
  { label: "Law", schoolId: "law", level: "UG", query: "law" },
];

export const ALL_PROGRAMS_DATA = [
  // Computer Science & Engineering
  {
    id: "btech-cse",
    slug: "btech-computer-engineering",
    title: "B.Tech Computer Engineering",
    schoolId: "cse",
    school: "Computer Science & Engineering",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved",
    overview: "Industry-aligned 4-year degree specializing in Software Systems, Cloud Computing, Algorithms, and Modern Distributed Architectures. Students gain hands-on expertise with AWS, RedHat, and AI frameworks.",
    eligibility: "10+2 PCM with min 45% aggregate (40% for reserved category)",
    curriculum: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Database Management & SQL",
      "Cloud Architecture & DevOps",
      "Machine Learning Fundamentals",
      "Capstone Software Project"
    ],
    careers: ["Software Engineer", "Cloud Architect", "Full Stack Developer", "System Specialist"],
    avgSalary: "₹ 6.5 - 18 LPA",
    placementStats: {
      rate: "98%",
      highestPackage: "28 LPA",
      avgPackage: "7.2 LPA"
    },
    recruiters: ["Amazon", "TCS", "Infosys", "Cognizant", "Wipro", "Capgemini"]
  },
  {
    id: "btech-ai",
    slug: "btech-artificial-intelligence",
    title: "B.Tech Artificial Intelligence",
    schoolId: "cse",
    school: "Computer Science & Engineering",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved",
    overview: "Cutting-edge degree focused on Deep Learning, Neural Networks, Computer Vision, and Natural Language Processing to build autonomous intelligent systems.",
    eligibility: "10+2 PCM with min 50% aggregate",
    curriculum: [
      "Linear Algebra & Probability for AI",
      "Deep Neural Networks & PyTorch",
      "Computer Vision & Image Processing",
      "Natural Language Processing (NLP)",
      "Reinforcement Learning",
      "AI Ethics & Governance"
    ],
    careers: ["AI Engineer", "ML Researcher", "Data Scientist", "NLP Engineer"],
    avgSalary: "₹ 7.5 - 22 LPA",
    placementStats: {
      rate: "96%",
      highestPackage: "32 LPA",
      avgPackage: "8.5 LPA"
    },
    recruiters: ["Microsoft", "IBM", "Accenture", "Intel", "NVIDIA"]
  },
  {
    id: "bca",
    slug: "bca-computer-applications",
    title: "BCA",
    schoolId: "cse",
    school: "Computer Science & Engineering",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "Comprehensive 3-year application development degree designed for aspiring software engineers, web developers, and IT consultants.",
    eligibility: "10+2 in any stream with Mathematics/Computer Science background",
    curriculum: [
      "Web Technologies (HTML/CSS/JS/React)",
      "Python & C++ Programming",
      "Database Systems & MySQL",
      "Mobile App Development",
      "Cyber Security Basics",
      "Software Testing"
    ],
    careers: ["Web Developer", "System Analyst", "Database Admin", "App Developer"],
    avgSalary: "₹ 4.5 - 9.0 LPA",
    placementStats: {
      rate: "95%",
      highestPackage: "12 LPA",
      avgPackage: "5.1 LPA"
    },
    recruiters: ["Deloitte", "Capgemini", "Wipro", "TCS", "Tech Mahindra"]
  },
  {
    id: "bsc-cs",
    slug: "bsc-computer-science",
    title: "B.Sc Computer Science",
    schoolId: "cse",
    school: "Computer Science & Engineering",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "Foundation degree in theoretical computer science, computational logic, and software engineering principles.",
    eligibility: "10+2 Science stream with Mathematics",
    curriculum: [
      "Discrete Mathematics",
      "Data Structures & C++",
      "Computer Organization & Architecture",
      "Operating Systems",
      "Software Engineering"
    ],
    careers: ["Software Developer", "QA Engineer", "Technical Specialist"],
    avgSalary: "₹ 4.0 - 7.5 LPA",
    placementStats: {
      rate: "92%",
      highestPackage: "10 LPA",
      avgPackage: "4.8 LPA"
    },
    recruiters: ["Infosys", "LTI Mindtree", "Wipro"]
  },
  {
    id: "mca",
    slug: "mca-master-computer-applications",
    title: "MCA",
    schoolId: "cse",
    school: "Computer Science & Engineering",
    level: "PG",
    duration: "2 Years",
    approval: "AICTE Approved",
    overview: "Post-graduate master's degree focusing on full-stack enterprise architecture, DevOps, cloud engineering, and database systems.",
    eligibility: "BCA / B.Sc / B.Tech degree with min 50% aggregate",
    curriculum: [
      "Enterprise Java & Spring Boot",
      "Cloud Infrastructure & Docker/K8s",
      "Distributed Systems",
      "Advanced Database Systems",
      "Cyber Security & Encryption"
    ],
    careers: ["Software Architect", "Full Stack Lead", "DevOps Engineer"],
    avgSalary: "₹ 6.5 - 16 LPA",
    placementStats: {
      rate: "97%",
      highestPackage: "20 LPA",
      avgPackage: "7.0 LPA"
    },
    recruiters: ["Oracle", "SAP", "Cognizant", "JPMorgan", "Salesforce"]
  },
  {
    id: "msc-ds",
    slug: "msc-data-science",
    title: "M.Sc Data Science",
    schoolId: "cse",
    school: "Computer Science & Engineering",
    level: "PG",
    duration: "2 Years",
    approval: "UGC Approved",
    overview: "Advanced post-graduate specialization in Statistical Modeling, Big Data Systems, Business Intelligence, and Predictive Analytics.",
    eligibility: "Bachelor's degree in CS, IT, Statistics, or Mathematics",
    curriculum: [
      "Advanced Statistics & Probability",
      "Python Data Science Stack (Pandas/Scikit)",
      "Big Data Frameworks (Hadoop/Spark)",
      "Time Series Forecasting",
      "Business Intelligence Dashboards"
    ],
    careers: ["Data Scientist", "Big Data Engineer", "BI Lead", "Analytics Manager"],
    avgSalary: "₹ 7.5 - 20 LPA",
    placementStats: {
      rate: "95%",
      highestPackage: "24 LPA",
      avgPackage: "8.0 LPA"
    },
    recruiters: ["Deloitte", "EY", "Mu Sigma", "Amazon", "KPMG"]
  },
  {
    id: "phd-cs",
    slug: "phd-computer-science",
    title: "PhD Computer Science",
    schoolId: "cse",
    school: "Computer Science & Engineering",
    level: "PhD",
    duration: "3-5 Years",
    approval: "UGC Recognized",
    overview: "Doctoral research program for developing groundbreaking advancements in AI, quantum computing, cybersecurity, and algorithms.",
    eligibility: "Master's degree in CS/IT with min 55% aggregate",
    curriculum: [
      "Research Methodology & Ethics",
      "Advanced Algorithm Analysis",
      "Domain Thesis Research",
      "Peer-Reviewed Publications"
    ],
    careers: ["Research Director", "University Professor", "Principal AI Scientist"],
    avgSalary: "₹ 10 - 28 LPA",
    placementStats: {
      rate: "100%",
      highestPackage: "35 LPA",
      avgPackage: "12 LPA"
    },
    recruiters: ["DRDO", "ISRO", "IBM Research", "Top Global Labs"]
  },

  // Engineering & Technology
  {
    id: "btech-[#mech]",
    slug: "btech-mechanical-engineering",
    title: "B.Tech Mechanical Engineering",
    schoolId: "eng",
    school: "Engineering & Technology",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved",
    overview: "Core engineering discipline covering CAD/CAM modeling, thermodynamics, robotics, manufacturing systems, and automotive design.",
    eligibility: "10+2 PCM with min 45% aggregate",
    curriculum: ["Fluid Mechanics", "Thermodynamics", "CAD/CAM", "Robotics", "Manufacturing Processes"],
    careers: ["Design Engineer", "Automotive Engineer", "Production Manager"],
    avgSalary: "₹ 5.5 - 14 LPA",
    placementStats: { rate: "94%", highestPackage: "18 LPA", avgPackage: "6.0 LPA" },
    recruiters: ["Tata Motors", "Bosch", "L&T", "Mahindra"]
  },
  {
    id: "btech-civil",
    slug: "btech-civil-engineering",
    title: "B.Tech Civil Engineering",
    schoolId: "eng",
    school: "Engineering & Technology",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved",
    overview: "Structural engineering, smart city planning, environmental engineering, and sustainable infrastructure design.",
    eligibility: "10+2 PCM with min 45% aggregate",
    curriculum: ["Structural Analysis", "Geotechnical Engg", "Transportation Engg", "Environmental Engineering"],
    careers: ["Structural Engineer", "Site Manager", "Infrastructure Planner"],
    avgSalary: "₹ 5.0 - 12 LPA",
    placementStats: { rate: "92%", highestPackage: "15 LPA", avgPackage: "5.5 LPA" },
    recruiters: ["L&T Construction", "Shapoorji Pallonji", "DLF"]
  },
  {
    id: "btech-elec",
    slug: "btech-electrical-engineering",
    title: "B.Tech Electrical Engineering",
    schoolId: "eng",
    school: "Engineering & Technology",
    level: "UG",
    duration: "4 Years",
    approval: "AICTE Approved",
    overview: "Power systems, renewable energy, EV technologies, control systems, and microelectronics.",
    eligibility: "10+2 PCM with min 45% aggregate",
    curriculum: ["Power Electronics", "Control Systems", "Electric Vehicles Tech", "Smart Grids"],
    careers: ["Power Systems Engineer", "EV Specialist", "Control Engineer"],
    avgSalary: "₹ 5.2 - 13 LPA",
    placementStats: { rate: "93%", highestPackage: "16 LPA", avgPackage: "5.8 LPA" },
    recruiters: ["ABB", "Siemens", "Schneider Electric"]
  },

  // Commerce & Management
  {
    id: "mba-gen",
    slug: "mba-general-management",
    title: "MBA",
    schoolId: "mgmt",
    school: "Commerce & Management",
    level: "PG",
    duration: "2 Years",
    approval: "UGC & NAAC Grade A",
    overview: "Flagship 2-year business leadership program with dual specializations in Finance, HR, Marketing, and Digital Analytics.",
    eligibility: "Graduation in any stream with min 50% aggregate",
    curriculum: ["Managerial Economics", "Financial Accounting", "Strategic Management", "Marketing & Brand Lead"],
    careers: ["Business Analyst", "HR Manager", "Financial Consultant", "Marketing Director"],
    avgSalary: "₹ 7.5 - 20 LPA",
    placementStats: { rate: "98%", highestPackage: "24 LPA", avgPackage: "8.2 LPA" },
    recruiters: ["Deloitte", "HDFC Bank", "KPMG", "ICICI Bank", "Amazon"]
  },
  {
    id: "bba",
    slug: "bba-business-administration",
    title: "BBA",
    schoolId: "mgmt",
    school: "Commerce & Management",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "Undergraduate degree in management fundamentals, corporate operations, and digital business strategies.",
    eligibility: "10+2 in any stream with min 45% aggregate",
    curriculum: ["Principles of Management", "Business Communication", "Digital Marketing", "Corporate Law"],
    careers: ["Management Trainee", "Operations Executive", "Brand Associate"],
    avgSalary: "₹ 4.5 - 9.0 LPA",
    placementStats: { rate: "94%", highestPackage: "11 LPA", avgPackage: "5.0 LPA" },
    recruiters: ["Kotak Mahindra", "Swiggy", "Zomato", "BYJU'S"]
  },

  // Pharmaceutical Sciences
  {
    id: "bpharm",
    slug: "bpharm-bachelor-pharmacy",
    title: "B.Pharm",
    schoolId: "pharm",
    school: "Pharmaceutical Sciences",
    level: "UG",
    duration: "4 Years",
    approval: "PCI Approved",
    overview: "PCI-approved 4-year degree in drug formulation, pharmacology, clinical trial management, and quality assurance.",
    eligibility: "10+2 PCB/PCM with min 45% aggregate",
    curriculum: ["Pharmaceutics", "Pharmacology", "Medicinal Chemistry", "Hospital & Clinical Pharmacy"],
    careers: ["Clinical Research Associate", "Quality Assurance Manager", "Drug Inspector"],
    avgSalary: "₹ 5.0 - 12 LPA",
    placementStats: { rate: "96%", highestPackage: "16 LPA", avgPackage: "5.8 LPA" },
    recruiters: ["Sun Pharma", "Cipla", "Lupin", "Dr. Reddy's"]
  },
  {
    id: "dpharm",
    slug: "dpharm-diploma-pharmacy",
    title: "D.Pharm",
    schoolId: "pharm",
    school: "Pharmaceutical Sciences",
    level: "Diploma",
    duration: "2 Years",
    approval: "PCI Approved",
    overview: "2-year professional diploma granting eligibility for registered pharmacist licensure.",
    eligibility: "10+2 Science stream pass",
    curriculum: ["Pharmaceutics", "Biochemistry", "Health Education", "Community Pharmacy"],
    careers: ["Registered Pharmacist", "Medical Chemist", "Medical Rep"],
    avgSalary: "₹ 3.2 - 6.0 LPA",
    placementStats: { rate: "95%", highestPackage: "8 LPA", avgPackage: "3.8 LPA" },
    recruiters: ["Apollo Pharmacy", "MedPlus", "Regional Hospitals"]
  },

  // School of Law
  {
    id: "ballb",
    slug: "ba-llb-integrated",
    title: "B.A. LL.B (Hons)",
    schoolId: "law",
    school: "School of Law",
    level: "UG",
    duration: "5 Years",
    approval: "Bar Council of India",
    overview: "5-year integrated law degree blending humanities with corporate law, moot court practice, and judicial training.",
    eligibility: "10+2 in any stream with min 45% aggregate",
    curriculum: ["Constitutional Law", "Corporate & Mergers Law", "Criminal Law", "Moot Court Practice"],
    careers: ["Corporate Lawyer", "Legal Advisor", "Judicial Officer", "Moot Advocate"],
    avgSalary: "₹ 6.0 - 16 LPA",
    placementStats: { rate: "95%", highestPackage: "20 LPA", avgPackage: "6.8 LPA" },
    recruiters: ["AZB & Partners", "Cyril Amarchand Mangaldas", "Khaitan & Co"]
  },
  {
    id: "llb",
    slug: "llb-degree",
    title: "LL.B",
    schoolId: "law",
    school: "School of Law",
    level: "UG",
    duration: "3 Years",
    approval: "Bar Council of India",
    overview: "3-year professional law degree for graduates aiming for advocacy and judicial services.",
    eligibility: "Graduation in any stream with min 45% aggregate",
    curriculum: ["Jurisprudence", "Contract Law", "Property Law", "Court Advocacy"],
    careers: ["Advocate", "Legal Consultant", "Public Prosecutor"],
    avgSalary: "₹ 5.0 - 12 LPA",
    placementStats: { rate: "92%", highestPackage: "14 LPA", avgPackage: "5.5 LPA" },
    recruiters: ["District & High Courts", "Legal Firms"]
  },

  // School of Sciences
  {
    id: "bsc-biotech",
    slug: "bsc-biotechnology",
    title: "B.Sc Biotechnology",
    schoolId: "sci",
    school: "School of Sciences",
    level: "UG",
    duration: "3 Years",
    approval: "UGC Approved",
    overview: "Genetic engineering, molecular biology, bioinformatics, and industrial fermentation.",
    eligibility: "10+2 PCB/PCM with min 45% aggregate",
    curriculum: ["Molecular Biology", "Genetics", "Bioprocess Tech", "Immunology"],
    careers: ["Biotechnologist", "Lab Analyst", "Genetics Specialist"],
    avgSalary: "₹ 4.5 - 9.0 LPA",
    placementStats: { rate: "93%", highestPackage: "12 LPA", avgPackage: "5.0 LPA" },
    recruiters: ["Biocon", "Bharat Biotech", "Serum Institute"]
  },

  // School of Design
  {
    id: "bdes-fashion",
    slug: "bdes-fashion-design",
    title: "B.Des Fashion Design",
    schoolId: "des",
    school: "School of Design",
    level: "UG",
    duration: "4 Years",
    approval: "UGC Approved",
    overview: "Textile creation, apparel construction, brand strategy, and fashion studio practice.",
    eligibility: "10+2 in any stream",
    curriculum: ["Garment Construction", "Textile Science", "Fashion Illustration", "Brand Management"],
    careers: ["Fashion Designer", "Stylist", "Brand Manager"],
    avgSalary: "₹ 5.0 - 14 LPA",
    placementStats: { rate: "91%", highestPackage: "15 LPA", avgPackage: "5.6 LPA" },
    recruiters: ["Raymond", "FabIndia", "Shoppers Stop"]
  },
  {
    id: "bdes-ux",
    slug: "bdes-communication-ux",
    title: "B.Des Communication (UI/UX)",
    schoolId: "des",
    school: "School of Design",
    level: "UG",
    duration: "4 Years",
    approval: "UGC Approved",
    overview: "Digital product design, user research, wireframing, interactive prototyping, and design systems.",
    eligibility: "10+2 in any stream",
    curriculum: ["User Research", "Interaction Design", "Prototyping (Figma)", "Visual Design"],
    careers: ["UI/UX Designer", "Product Designer", "Creative Lead"],
    avgSalary: "₹ 6.5 - 18 LPA",
    placementStats: { rate: "96%", highestPackage: "22 LPA", avgPackage: "7.5 LPA" },
    recruiters: ["Swiggy", "Zomato", "Thoughtworks", "Infosys UX"]
  },

  // Vocational Studies
  {
    id: "bvoc-sd",
    slug: "bvoc-software-development",
    title: "B.Voc Software Development",
    schoolId: "voc",
    school: "Vocational Studies",
    level: "UG",
    duration: "3 Years",
    approval: "UGC & NSQF Level 7",
    overview: "Work-integrated degree focusing 60% on practical industry internships and full-stack coding skills.",
    eligibility: "10+2 in any stream",
    curriculum: ["Web Programming", "Database Mgmt", "App Development", "Industry Internship"],
    careers: ["Web Developer", "Software Apprentice", "Tech Specialist"],
    avgSalary: "₹ 4.5 - 9.5 LPA",
    placementStats: { rate: "95%", highestPackage: "12 LPA", avgPackage: "5.0 LPA" },
    recruiters: ["Tech Startups", "Digital Agencies"]
  }
];

export const WHY_CHOOSE_CARDS = [
  { title: "Industry Curriculum", desc: "Designed with tech leaders & global industry partners.", icon: "Building2" },
  { title: "Expert Faculty", desc: "85%+ Ph.D holding professors with deep research experience.", icon: "Users" },
  { title: "Modern Labs", desc: "State-of-the-art supercomputing & high-tech research centers.", icon: "Zap" },
  { title: "Placement Support", desc: "100% placement cell support with 200+ top hiring partners.", icon: "Briefcase" },
  { title: "Research Opportunities", desc: "Patents, grants, and live corporate innovation projects.", icon: "Microscope" },
  { title: "Global Exposure", desc: "International student exchange & global university ties.", icon: "Globe" }
];
