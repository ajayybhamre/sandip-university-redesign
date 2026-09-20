import ashwiniImg from "../../../assets/images/ashwini.webp";
import gayatriImg from "../../../assets/images/gayatri.webp";
import pawanImg from "../../../assets/images/pawan.webp";
import riyaImg from "../../../assets/images/riya.webp";
import certGraduationImg from "../../../assets/images/certification-graduation.jpg";
import innovationCellImg from "../../../assets/images/innovation-cell.jpg";
import researchGrantsImg from "../../../assets/images/research-grants.jpg";
import droneImg from "../../../assets/images/drone.png";
import handsOnTrainingImg from "../../../assets/images/hands-on-training.jpg";
import intlForumImg from "../../../assets/images/intl_forum.webp";

export const CATEGORIES = [
  { id: "all", name: "All Achievements", count: 10 },
  { id: "academic", name: "Academic Excellence", count: 2 },
  { id: "placements", name: "Placements & Internships", count: 2 },
  { id: "awards", name: "Awards & Competitions", count: 2 },
  { id: "innovation", name: "Innovation & Entrepreneurship", count: 2 },
  { id: "certifications", name: "Certifications & Skills", count: 2 },
];

export const achievementsData = [
  {
    id: "ach-1",
    category: "Academic Excellence",
    categorySlug: "academic",
    title: "University Gold Medalist & 1st Rank Holder",
    description: "Secured University Rank 1 in B.Tech Computer Science & Engineering with a cumulative GPA of 9.94.",
    studentName: "Ashwini Shinde",
    department: "B.Tech CSE",
    year: "Batch of 2024",
    badge: "Rank #1",
    metric: "9.94 CGPA",
    image: ashwiniImg,
    date: "June 2024",
    fullDetails: {
      organization: "Sandip University Academic Board",
      highlights: [
        "Awarded University Gold Medal at 7th Annual Convocation",
        "Published 2 peer-reviewed research papers in IEEE Xplore",
        "Recipient of 100% Merit Scholarship throughout 4 years",
        "Appointed as Academic Student Mentor for juniors"
      ],
      tags: ["Gold Medal", "Merit Scholar", "IEEE Publication"]
    }
  },
  {
    id: "ach-2",
    category: "Placements & Internships",
    categorySlug: "placements",
    title: "LPA Record Placement Offer at Microsoft",
    description: "Secured a prestigious Software Engineering position with a highest international package offer.",
    studentName: "Sneha Kulkarni",
    department: "B.Tech CSE",
    year: "Final Year 2024",
    badge: "Microsoft",
    metric: "32 LPA Package",
    image: gayatriImg,
    date: "March 2024",
    fullDetails: {
      organization: "Microsoft India Development Center",
      highlights: [
        "Cleared 5 intense rounds of technical coding and systemic design interviews",
        "Completed 6-month pre-placement internship with outstanding performance feedback",
        "Recognized among top 1% candidates in global hiring challenge"
      ],
      tags: ["Tier-1 Placement", "Software Engineer", "Cloud Systems"]
    }
  },
  {
    id: "ach-3",
    category: "Awards & Competitions",
    categorySlug: "awards",
    title: "Smart India Hackathon 2024 National Winners",
    description: "Won 1st Prize of ₹1,000,000 at SIH 2024 for developing an AI-driven disaster management and alert system.",
    studentName: "Team AI-Shield (Led by Pawan Verma)",
    department: "Department of AI & Data Science",
    year: "Batch 2025",
    badge: "1st Prize Winner",
    metric: "₹1,00,000 Cash Prize",
    image: pawanImg,
    date: "December 2024",
    fullDetails: {
      organization: "Ministry of Education Innovation Cell (Govt. of India)",
      highlights: [
        "Built real-time GIS mapping tool using computer vision and IoT sensor fusion",
        "Selected as overall winner among 1,200+ participating universities across India",
        "Invited to prototype deployment with State Disaster Management Authority"
      ],
      tags: ["SIH 2024", "AI/ML Solution", "Govt. Recognition"]
    }
  },
  {
    id: "ach-4",
    category: "Innovation & Entrepreneurship",
    categorySlug: "innovation",
    title: "AgriTech Startup Incubated with Seed Funding",
    description: "Founded 'AgriSense Robotics', securing ₹10 Lakhs seed funding from Sandip University Incubation Centre.",
    studentName: "Riya Gupta",
    department: "BBA Entrepreneurship",
    year: "Batch 2024",
    badge: "Startup Founder",
    metric: "₹10L Seed Fund",
    image: riyaImg,
    date: "August 2024",
    fullDetails: {
      organization: "SUN Incubation & Innovation Foundation (SU-IIF)",
      highlights: [
        "Developed autonomous soil testing drone prototype for local farmers",
        "Patented smart sensor module for automated drip irrigation control",
        "Recognized as Top 10 Student Startup at Maharashtra Innovation Summit"
      ],
      tags: ["AgriTech", "Patent Granted", "SU-IIF Funded"]
    }
  },
  {
    id: "ach-5",
    category: "Certifications & Skills",
    categorySlug: "certifications",
    title: "AWS Certified Solutions Architect & GCP Expert",
    description: "Achieved dual professional cloud certifications with a perfect 100% score on advanced architectural domains.",
    studentName: "Aditya Deshmukh",
    department: "M.Tech Cloud Computing",
    year: "Batch 2024",
    badge: "AWS Certified",
    metric: "Dual Certified",
    image: certGraduationImg,
    date: "January 2025",
    fullDetails: {
      organization: "Amazon Web Services & Google Cloud",
      highlights: [
        "Passed AWS Solutions Architect Professional exam on first attempt",
        "Achieved Google Cloud Professional Cloud Architect accreditation",
        "Conducted peer workshops training 150+ students in serverless architecture"
      ],
      tags: ["Cloud Architecture", "AWS Professional", "GCP Certified"]
    }
  },
  {
    id: "ach-6",
    category: "Academic Excellence",
    categorySlug: "academic",
    title: "National Doctoral Research Fellowship",
    description: "Selected for prestigious Prime Minister's Research Fellowship (PMRF) for groundbreaking nanotechnology research.",
    studentName: "Dr. Rohan Patil",
    department: "Ph.D Nanotechnology",
    year: "Batch 2023-26",
    badge: "PMRF Fellow",
    metric: "PMRF Fellowship",
    image: researchGrantsImg,
    date: "October 2024",
    fullDetails: {
      organization: "Ministry of Education & IIT Bombay",
      highlights: [
        "Receives monthly fellowship grant of ₹80,000 for advanced nano-materials research",
        "Collaborating with national laboratories on renewable clean energy storage",
        "Authored 4 high-impact factor Q1 journal articles"
      ],
      tags: ["PMRF Fellow", "Clean Energy", "Q1 Journal"]
    }
  },
  {
    id: "ach-7",
    category: "Placements & Internships",
    categorySlug: "placements",
    title: "Summer Research Fellowship at MIT (USA)",
    description: "Selected for a fully-funded 3-month research internship at MIT Media Lab in Cambridge, USA.",
    studentName: "Amit Sharma",
    department: "M.Tech Robotics & Automation",
    year: "Batch 2024",
    badge: "MIT Internship",
    metric: "100% Funded",
    image: handsOnTrainingImg,
    date: "May 2024",
    fullDetails: {
      organization: "MIT Media Lab, Cambridge USA",
      highlights: [
        "Worked on human-robot interaction algorithms under world-renowned faculty",
        "Stipend package equivalent to $4,500/month plus travel & housing coverage",
        "Presented research findings at International Robotics Summit"
      ],
      tags: ["MIT Research", "Robotics", "Global Exposure"]
    }
  },
  {
    id: "ach-8",
    category: "Awards & Competitions",
    categorySlug: "awards",
    title: "National Formula Student Racing Championship",
    description: "Designed & fabricated an electric racing car, winning Best Engineering Design & 2nd Overall Rank.",
    studentName: "Team SUN-Motorsports",
    department: "Department of Mechanical Engineering",
    year: "Batch 2024",
    badge: "Formula Student 2nd",
    metric: "2nd Rank All-India",
    image: droneImg,
    date: "February 2025",
    fullDetails: {
      organization: "Formula Student India & SAE India",
      highlights: [
        "Custom-built 80kW EV powertrain with regenerative braking system",
        "Outperformed 45 competing engineering teams from across the nation",
        "Scored 98/100 in structural safety and battery cooling telemetry analysis"
      ],
      tags: ["Formula Student", "EV Innovation", "SAE Winner"]
    }
  },
  {
    id: "ach-9",
    category: "Innovation & Entrepreneurship",
    categorySlug: "innovation",
    title: "Patent Granted for Autonomous Drone Navigation",
    description: "Granted official Indian Patent for an innovative obstacle-avoidance lidar algorithm for agricultural drones.",
    studentName: "Karan Mehta & Dr. S. Joshi",
    department: "School of Engineering & Tech",
    year: "Batch 2024",
    badge: "Patent Granted",
    metric: "Patent No. 492810",
    image: innovationCellImg,
    date: "November 2024",
    fullDetails: {
      organization: "Indian Patent Office (Govt. of India)",
      highlights: [
        "Patent granted within record 18 months under fast-track examination",
        "Algorithm operates in low-light and adverse weather conditions",
        "Technology licensed to 2 commercial drone manufacturing firms"
      ],
      tags: ["Intellectual Property", "Drone Tech", "Commercial License"]
    }
  },
  {
    id: "ach-10",
    category: "Certifications & Skills",
    categorySlug: "certifications",
    title: "NPTEL All-India Topper with Gold Medallion",
    description: "Achieved 97% top mark in Advanced Machine Learning course conducted by IIT Kharagpur on NPTEL.",
    studentName: "Pooja Varma",
    department: "B.Tech IT",
    year: "3rd Year 2025",
    badge: "NPTEL Gold",
    metric: "Top 1% Score",
    image: intlForumImg,
    date: "December 2024",
    fullDetails: {
      organization: "NPTEL & IIT Kharagpur",
      highlights: [
        "Secured Gold Medallion with 'Topper of 1% Candidates' certificate",
        "Completed 12-week intensive curriculum with 97/100 overall score",
        "Awarded Academic Excellence Certificate by Dean of Engineering"
      ],
      tags: ["NPTEL Gold", "IIT Kharagpur", "Machine Learning"]
    }
  }
];
