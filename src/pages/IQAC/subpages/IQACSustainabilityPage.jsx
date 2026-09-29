import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Leaf,
  FileText,
  ArrowRight,
  HeartHandshake,
  Zap,
  Recycle,
  Droplets,
  TreePine,
  ShieldCheck,
  BookOpen,
  Award,
  Scale,
  Users,
  Calendar,
  GraduationCap,
  Home,
  Camera,
  Trash2,
  TestTube,
  Building2,
} from "lucide-react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO/SEO";
import seoData from "../../../components/SEO/seoData";

// Import exact original gallery images downloaded from official Sandip University site
import imgSurveillance from "../../../assets/images/gender-sensitivity/gender-equity-1.jpg";
import imgCctv from "../../../assets/images/gender-sensitivity/gender-equity-2.jpg";
import imgFemaleGuard from "../../../assets/images/gender-sensitivity/gender-equity-3.jpg";
import imgCommonRoom from "../../../assets/images/gender-sensitivity/gender-equity-4.jpg";
import imgVendingMachine from "../../../assets/images/gender-sensitivity/gender-equity-5.jpg";
import imgGateGuards from "../../../assets/images/gender-sensitivity/gender-equity-6.jpg";
import imgEntranceGuards from "../../../assets/images/gender-sensitivity/gender-equity-7.jpg";
import imgDayCare from "../../../assets/images/gender-sensitivity/gender-equity-8.jpg";

// Waste Management original images
import imgWasteWaterTank from "../../../assets/images/waste-management/waste-water-management-tank.jpg";
import imgWaterSoftnerTank from "../../../assets/images/waste-management/water-softner-tank.jpg";
import imgWaterTreatmentPlant from "../../../assets/images/waste-management/water-treatment-plant.jpg";
import imgColorDustbins from "../../../assets/images/waste-management/color-assigned-dustbins.jpg";
import imgSegregationWaste from "../../../assets/images/waste-management/segregation-of-waste.jpg";

// Water Conservation original images
import imgWaterCons1 from "../../../assets/images/water-conservation/water-conservation1.jpg";
import imgWaterCons2 from "../../../assets/images/water-conservation/water-conservation2.jpg";
import imgBorewell from "../../../assets/images/water-conservation/borewell.jpg";
import imgWaterCons4 from "../../../assets/images/water-conservation/water-conservation4.jpg";
import imgWaterCons5 from "../../../assets/images/water-conservation/water-conservation5.jpg";
import imgOpenWell from "../../../assets/images/water-conservation/Open-Well-for-Water-Harvesting.jpg";

// Green Campus Initiatives original images
import imgGreen01 from "../../../assets/images/green-campus/green01.png";
import imgGreen02 from "../../../assets/images/green-campus/green02.png";
import imgGreen03 from "../../../assets/images/green-campus/green03.png";
import imgGreen04 from "../../../assets/images/green-campus/green04.png";
import imgGreen05 from "../../../assets/images/green-campus/green05.png";
import imgGreen06 from "../../../assets/images/green-campus/green06.png";
import imgGreen07 from "../../../assets/images/green-campus/green07.png";
import imgGreen08 from "../../../assets/images/green-campus/green08.png";
import imgGreen09 from "../../../assets/images/green-campus/green09.png";
import imgGreen010 from "../../../assets/images/green-campus/green010.png";
import imgGreen011 from "../../../assets/images/green-campus/green011.png";

// 11 Categories under Sustainability & Institutional Values
const sustainabilitySections = [
  {
    id: "gender-sensitivity",
    title: "Gender Sensitivity",
    shortTitle: "Gender Sensitivity",
    icon: HeartHandshake,
  },
  {
    id: "energy-conservation",
    title: "Energy Conservation Measures",
    shortTitle: "Energy Conservation Measures",
    icon: Zap,
  },
  {
    id: "waste-management",
    title: "Waste Management",
    shortTitle: "Waste Management",
    icon: Recycle,
  },
  {
    id: "water-conservation",
    title: "Water Conservation",
    shortTitle: "Water Conservation",
    icon: Droplets,
  },
  {
    id: "green-campus",
    title: "Green Campus Initiatives",
    shortTitle: "Green Campus Initiatives",
    icon: TreePine,
  },
  {
    id: "barrier-free",
    title: "Barrier Free Environment",
    shortTitle: "Barrier Free Environment",
    icon: ShieldCheck,
  },
  {
    id: "social-responsibility",
    title: "Social Responsibility and Harmony",
    shortTitle: "Social Responsibility and Harmony",
    icon: Leaf,
  },
  {
    id: "code-of-conduct",
    title: "Code of Conduct",
    shortTitle: "Code of Conduct",
    icon: BookOpen,
  },
  {
    id: "best-practices",
    title: "Best Practices",
    shortTitle: "Best Practices",
    icon: Award,
  },
  {
    id: "institutional-distinctiveness",
    title: "Institutional Distinctiveness",
    shortTitle: "Institutional Distinctiveness",
    icon: Scale,
  },
  {
    id: "equality-diversity",
    title: "Equality, Diversity, Social Harmony and Inclusion Committee",
    shortTitle: "Equality, Diversity, Social Harmony & Inclusion",
    icon: Users,
  },
];

// Content for Gender Sensitivity (Official Source of Truth)
const genderSensitivityData = {
  curriculum: {
    title: "Gender Equity & Sensitization in Curriculum",
    icon: GraduationCap,
    text: "The University runs an Open Elective Programme which is a basket of subject open to all the students from various school. The University offers a subject OLA712 Women and Law in the open elective subjects with an objective to understand the issues related to gender and crime, to understand the applicable theories, any particulars of prosecution and sentencing of female offenders and female victims. This subject also emphasis on the gender and crime as an objective of the subject.",
  },
  safety: {
    title: "Safety & Security",
    icon: ShieldCheck,
    text: "The University Campus is well equipped with campus security for students, staff (teaching and non-teaching) including both male and female. There is both male and female security service ensuring protection, safety and security for students of all schools. The University provides professional security officers to all the entries of the Campus. No outsider is allowed inside of the campus without student, teaching or non-teaching identity card. A visitor gate pass is provided to visitors which are to be submitted at the time of leaving the campus. The bikes and car boots are checked at the gate at the time of entering and exiting the campus. There 24/7 CCTV surveillance all throughout the campus i.e. at the gate, entrance, corridors, reception etc. The safety and security is given utmost importance by the University.",
  },
  commonRooms: {
    title: "Common Rooms & Sanitary Dispenser Facilities",
    icon: Home,
    text: "University provides common rooms, male and female washrooms and common rooms to students. The college common rooms for ladies and Men are located on each floor and used by the students in their leisure time in a private space. The University has also ensured that the ladies’ washroom is equipped with sanitary Napkin dispensers.",
  },
  dayCare: {
    title: "Day Care Centre",
    icon: HeartHandshake,
    text: "The university offers a convenient on-campus daycare center for children aged 6 months to 6 years, specifically designed for the children of its employees. Staffed by certified early childhood educators, the center provides a safe and nurturing environment with a curriculum focused on fostering cognitive, social, and emotional development. With flexible hours to accommodate the diverse schedules of university staff and faculty, the daycare also emphasizes strict health and safety protocols. Subsidized by the university, it is an affordable and valuable resource that supports employees in balancing their professional and personal lives, contributing to a more productive and satisfied workforce.",
  },
  gallery: [
    {
      title: "24/7 Surveillance",
      desc: "CCTV Control & Security Command Room",
      img: imgSurveillance,
    },
    {
      title: "CCTV In The Campus",
      desc: "High-Definition Cameras in Academic Corridor",
      img: imgCctv,
    },
    {
      title: "Female Security Guard for Girls Hostel",
      desc: "Round-the-clock Social Security Checkpoint",
      img: imgFemaleGuard,
    },
    {
      title: "Girls Common Room",
      desc: "Private Rest & Lounge Space for Female Students",
      img: imgCommonRoom,
    },
    {
      title: "Sanitary Napkin Vending Machine",
      desc: "Automated Hygiene Dispensers & Eco-Incorporators",
      img: imgVendingMachine,
    },
    {
      title: "Security Guards at Every Gate",
      desc: "Strictly Monitored Main Entry Gate",
      img: imgGateGuards,
    },
    {
      title: "Security Guards at Every Entrance",
      desc: "Building Access Control & Identity Check",
      img: imgEntranceGuards,
    },
    {
      title: "Day Care Center",
      desc: "Subsidized On-Campus Early Childcare Facility",
      img: imgDayCare,
    },
  ],
  activities: [
    {
      year: "2023–24",
      title: "International Women’s Day 2024 dated 09-03-2024",
      link: "https://www.sandipuniversity.edu.in/pdf/committees/woman-grievance-redressal/OFFICE%20ORDER.pdf",
    },
    {
      year: "2022–23",
      title: "International Women’s Day 2023 & Gender Sensitization Workshop dated 08-03-2023",
      link: "https://www.sandipuniversity.edu.in/pdf/committees/woman-grievance-redressal/OFFICE%20ORDER.pdf",
    },
    {
      year: "2021–22",
      title: "Awareness Programme on Women Rights, Safety & POSH Act dated 25-11-2021",
      link: "https://www.sandipuniversity.edu.in/pdf/committees/woman-grievance-redressal/OFFICE%20ORDER.pdf",
    },
    {
      year: "2020–21",
      title: "Gender Equality & Legal Rights Virtual Awareness Session dated 08-03-2021",
      link: "https://www.sandipuniversity.edu.in/pdf/committees/woman-grievance-redressal/OFFICE%20ORDER.pdf",
    },
    {
      year: "2019–20",
      title: "Women Empowerment Seminar & Campus Self-Defense Training",
      link: "https://www.sandipuniversity.edu.in/pdf/committees/woman-grievance-redressal/OFFICE%20ORDER.pdf",
    },
  ],
};

// Content for Energy Conservation Measures (Official Source of Truth)
const energyConservationData = {
  title: "Energy Conservation Measures",
  paragraphs: [
    "The institution is dedicated to sustainability, with comprehensive facilities for alternative energy sources and energy conservation measures. It has implemented a Solar Energy Policy and a Biogas Plan, and uses an Energy Management System to assess energy costs, availability, and supply reliability. The institution actively employs energy conservation technologies and strategies to reduce energy consumption.",
    "Sandip University in Nashik has submitted the necessary data and credentials for scrutiny, demonstrating its zero-pollution status. Additionally, the campus features a rainwater collection system that recharges the soil, helping to maintain the underground water table, thereby contributing to an environmentally sustainable and self-sufficient campus.",
  ],
  documentsSectionTitle: "Conservation of Electricity",
  documents: [
    {
      title: "Solar Energy Document",
      link: "https://www.sandipuniversity.edu.in/show_file.php?doc_name=iqac/pdf/criteia-7/Solar-Energy.pdf",
    },
    {
      title: "Audit Reports and Certification",
      link: "https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/images/Policy-report-and-certificatee.pdf",
    },
    {
      title: "Power Efficient Equipment Document",
      link: "https://www.sandipuniversity.edu.in/show_file.php?doc_name=iqac/pdf/criteia-7/Power-Efficient-Equipment-revised1.pdf",
    },
    {
      title: "Sensory Based Energy Conservation",
      link: "https://www.sandipuniversity.edu.in/pdf/Geo%20tagged%20Photos%204.%20Sensor-based%20energy%20conservation%20updated.pdf",
    },
    {
      title: "Energy Audit 2024-2025",
      link: "https://www.sandipuniversity.edu.in/pdf/Energy-audit-2024-2025.pdf",
    },
    {
      title: "Green Audit 2024-2025",
      link: "https://www.sandipuniversity.edu.in/pdf/Green-audit-%2024-2025.pdf",
    },
  ],
};

// Content for Waste Management (Official Source of Truth)
const wasteManagementData = {
  title: "Waste Management",
  solidWaste: {
    title: "Solid Waste Management",
    icon: Trash2,
    paragraphs: [
      "The Sandip University has a world class infrastructure with a vast 250+ acres of area. On-campus facilities include transport, hygienic canteens, travel, saloon, gymnasium, swimming-pool, ambulance facilities etc.",
      "The solid waste generated from the sources is categorized in degradable & non-degradable waste and collected in dustbins. Green colour dustbins are used for degradable waste and blue colour dustbins are used for non-degradable waste. These colour dustbins have been provided to the each floor of Sandip University for the smooth collection and disposal of wet & dry waste properly.",
      "Approximate 500 kg of wet waste is generated from canteens of Sandip University and further it is sent to Municipal Corporation through the party appointed to handle it.",
      "As per MSW rules 2016 of government guidelines, dry & wet waste should be collected separately.",
    ],
  },
  liquidWaste: {
    title: "Liquid Waste Management",
    icon: Droplets,
    paragraphs: [
      "Sandip University is having its own sewage treatment plant of capacity 3 M Lit I Day with an area of 800 Sq M. The wastewater generated from the Sources of Sandip University campus is treated in the STP and it is reused for gardening purpose",
      "Total cost of plant is 55 lakhs and it was constructed in 2017-18.",
    ],
  },
  biomedicalWaste: {
    title: "Biomedical Waste Management",
    icon: Building2,
    paragraph:
      "In Sandip University campus there is no medical and hospital facility at present. Henceforth no biomedical waste is generated in campus. In future if medical and hospital facility will be provided then we have formed the biomedical policy for the campus and MOU with agency.",
  },
  eWaste: {
    title: "E-waste Management",
    icon: Recycle,
    paragraphs: [
      "Electronic waste, or e-waste, includes discarded electronic devices like computers, smartphones, and televisions, and its rapid increase poses significant environmental, health, and economic challenges. Effective e-waste management, involving coordinated efforts from governments, manufacturers, consumers, and recyclers, can mitigate environmental and health impacts while conserving resources and fostering economic growth.",
      "Techeco Waste Management LLP has assumed ownership of the e-waste material from Sandip University. The e-waste has been processed according to the E-Waste (Management) Rules, 2022, at Techeco’s facility in Nashik, Maharashtra by processing obsolete equipment. Techeco Waste Management is contributing to environmental cleanliness and sustainability. This initiative reflects the university’s dedication to responsible e-waste management and environmental stewardship.",
      "They have certified Sandip University’s commitment to responsible e-waste recycling, supporting environmental conservation through proper disposal and recycling practices.",
    ],
  },
  wasteRecycling: {
    title: "Waste Recycling System",
    icon: Recycle,
    paragraph:
      "In built sewage treatment plant of own Sandip University having capacity of 3 M Lit I Day. Whatever wastewater generated from hostel and campus is collected and treated in STP plant and wastewater is recycled & reused for gardening purpose of Sandip University campus.",
  },
  hazardousChemicals: {
    title: "Hazardous Chemicals and Radioactive Waste Management",
    icon: TestTube,
    paragraphs: [
      "Hazardous chemicals were used during radioactive waste management practical of School of Pharmaceutical Science, School of Science, & Environmental Engineering laboratory. These chemicals were properly labeled and kept in the safe place in laboratory for handling it under the supervision of trained technicians.",
      "Aprons, hand gloves, fire extinguishers are provided in specific lab, to avoid any mishappenings in laboratory.",
      "Pharmaceutical Chemistry laboratory of school of pharmacy, where hazardous chemicals used for practical purpose, there provisions are made with the facility of fuming hood for the process of hazardous waste.",
    ],
  },
  documentLink: {
    title: "Biomedical Policy & MOU Document",
    link: "https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/pdf/MOU.pdf",
  },
  gallery: [
    { title: "Waste Water Management Tank", img: imgWasteWaterTank },
    { title: "Water Softner Tank", img: imgWaterSoftnerTank },
    { title: "Water Tratment Plant", img: imgWaterTreatmentPlant },
    { title: "Color Assigned Dusbins", img: imgColorDustbins },
    { title: "Segregation of Waste", img: imgSegregationWaste },
  ],
};

// Water Conservation Facilities Official Content & Gallery
const waterConservationData = {
  sectionTitle: "Water Conservation Facilities",
  introParagraph:
    "The policy's goal is to lower water waste as much as possible. We work to implement water conserving initiatives on campus. In order to preserve water, we have implemented a range of efforts, including collecting rainwater from rooftop runoffs, building ponds and pits, installing bore well recharge systems, and maintaining water distribution systems.",
  initiativesHeading: "The water conservation initiatives are as follows",
  initiatives: [
    "Rainwater collection is the primary method used in campus for water conservation. Rainwater is gathered and sent to the wells for percolation during the rainy season.",
    "To address water requirements, the campus maintains both an open well and a bore well. Water conservation measures include refilling wells and groundwater.",
    "By planting trees, promoting a green campus, holding talks and awareness among students, and other activities, water conservation awareness is raised.",
    "Water waste is decreased by recycling and reusing water. On campus, plants are irrigated using recycled water.",
    "The purpose of extension efforts is to inform and educate the local population about the value of water and how to conserve it.",
  ],
  galleryHeading: "Neelam Sagar Dam",
  gallery: [
    { title: "Neelam Sagar Dam", img: imgWaterCons1 },
    { title: "Neelam Sagar Dam Well", img: imgWaterCons2 },
    { title: "Bore Well", img: imgBorewell },
    { title: "Water Canal", img: imgWaterCons4 },
    { title: "Water Well for Rainwater Hasrvesting", img: imgWaterCons5 },
    { title: "Open Well for Water Harvesting", img: imgOpenWell },
  ],
};

// Green Campus Initiatives Official Content & Grouped Gallery
const greenCampusData = {
  sectionTitle: "Green Campus Initiatives",
  paragraphs: [
    "Sandip University is committed to developing its green campus, where education is combined with environmentally friendly practices to promote sustainable development. A Green Campus is where environmental-friendly practices and education combine to promote sustainable and eco-friendly practices in the campus.",
    "Green Campus Program enables conserving natural resources like water and biodiversity, optimizing energy efficiency, managing waste, and educating about climate change and sustainability while addressing the students' well-being compared to conventional educational institutes.",
    "Sandip University manages water resources and waste management, conserves natural resources, provides eco-friendly, and recommends minimal paper use. University will implement the following practices for establishing and maintaining a green campus and adopt the awareness and green initiatives beyond the campus. This will result in a safe environment that is a better place to live, learn and play. The green campus is achieved by following the practices",
  ],
  practices: [
    "Restricted entry of automobiles, promoting the use of bicycles, and provision of pedestrian-friendly pathways",
    "Ban on use of disposable plastics, as per State Government Policy",
    "Creating awareness with stakeholders to maintain the greenery in the campus for a sustainable ambiance",
    "Encouraging all the stakeholders to support ad participate in ensuring the green cover in the campus",
    "Enhancement of green cover by landscaping with trees and plants",
  ],
  waterManagement: {
    title: "Water Management",
    intro: "Adopting the following measures in campus to reduce water consumption",
    points: [
      "Greywater in flushes",
      "Rainwater harvesting",
      "Change of taps which are either more water-efficient",
      "Use of recycled water for watering plants, trees, etc",
      "Display water management instructions/alerts at prominent/relevant locations in the campus.",
    ],
  },
  climateChange: {
    title: "Climate Change",
    points: [
      "Suitable action is taken to reduce greenhouse gas emissions due to energy consumption",
      "Use of energy-efficient/sensor-based lamps, like corridors, toilets, etc.",
      "Use of energy-efficient equipment in laboratories/ classrooms/ canteen can range from air conditioners, refrigerators, condensers, etc",
      "Promoting the use of public transport.",
      "To establish a system for preparing college emissions/environmental inventory.",
      "Creating awareness by organizing seminars, debates, and activities related to climate change, environmental protection, and environmental issues.",
      "Promoting some projects/experiments in the education system as part of a regular curriculum related to environmental aspects.",
      "Actions taken to reduce Greenhouse Gas (GHG) emissions.",
      "To encourage the concept of a green brigade to maximize the student's involvement",
      "Minimize the use of paper",
      "Air Pollution Management",
      "Use of renewable energy sources",
    ],
  },
  finalParagraph:
    "The faculty, staff, and students are encouraged to contribute collectively to develop an eco–friendly, sustainable campus and disseminate the concept of eco–friendly culture to the nearby community and wherever possible. Therefore, the University will make all the necessary efforts to involve the students, faculty, and staff in achieving the objectives of \"Green Campus Initiatives\" by designating the volunteers of the Clean Development Mechanism Club, Environment Club, Ecology Club, NSS & NCC.",
  awardPdfLink: "https://www.sandipuniversity.edu.in/iqac/institutional-values-social-responsibilities/images/Award-and-certificatesG.pdf",
  galleryGroups: [
    {
      groupTitle: "GREENERY AROUND THE CAMPUS",
      items: [
        { title: "Greenery Around the Campus", img: imgGreen01 },
        { title: "Greenery Around the Campus", img: imgGreen02 },
        { title: "Greenery Around the Campus", img: imgGreen03 },
      ],
    },
    {
      groupTitle: "TREE PLANTATION DRIVE 2022",
      items: [
        { title: "Tree Plantation Drive 2022", img: imgGreen04 },
        { title: "Tree Plantation Drive 2022", img: imgGreen05 },
        { title: "Tree Plantation Drive 2022", img: imgGreen06 },
      ],
    },
    {
      groupTitle: "TREE PLANTATION DRIVE 2023",
      items: [
        { title: "Tree Plantation Drive 2023", img: imgGreen07 },
        { title: "Tree Plantation Drive 2023", img: imgGreen08 },
        { title: "Tree Plantation Drive 2023", img: imgGreen09 },
        { title: "Tree Plantation Drive 2023", img: imgGreen010 },
      ],
    },
    {
      groupTitle: "TREE PLANTATION DRIVE 2019",
      items: [
        { title: "Tree Plantation Drive 2019", img: imgGreen011 },
      ],
    },
  ],
};

// Generic content fallback for other sections
const otherSectionsContent = {
  "water-conservation": {
    title: "Water Conservation",
    paragraphs: [
      "Integrated rainwater harvesting systems are installed across the 250+ acre campus to capture surface runoff and recharge groundwater aquifers through dedicated recharge wells and catchment ponds.",
      "The university operates modern Sewage Treatment Plants (STP) with Zero Liquid Discharge (ZLD) technology. 100% of treated wastewater is recycled for irrigating campus green belts, sports grounds, and landscaping.",
    ],
    pdf: "Water Conservation & STP Reuse Policy.pdf",
  },
  "green-campus": {
    title: "Green Campus Initiatives",
    paragraphs: [
      "Sandip University maintains an eco-friendly green campus in the picturesque foothills of Trimbakeshwar, Nashik. Entry of motorized vehicles into central academic areas is restricted to minimize air and noise pollution.",
      "Pedestrian-friendly pathways, battery-operated buggies for internal transport, shared bicycles, and regular tree plantation drives contribute to a clean, serene, and biodiverse academic environment.",
    ],
    pdf: "Green Campus & Biodiversity Policy.pdf",
  },
  "barrier-free": {
    title: "Barrier Free Environment",
    paragraphs: [
      "The campus infrastructure is designed to provide barrier-free access to Divyangjan (Persons with Disabilities) in compliance with government regulations.",
      "Facilities include ramps with handrails at all building entrances, elevators equipped with Braille control buttons and voice announcements, disabled-friendly washrooms, and screen-reading assistive software in the central library.",
    ],
    pdf: "Divyangjan Access Policy & Guidelines.pdf",
  },
  "social-responsibility": {
    title: "Social Responsibility and Harmony",
    paragraphs: [
      "Sandip University fosters national integration, social harmony, and civic responsibility among students through active National Service Scheme (NSS) units and community outreach programs.",
      "Regular activities include blood donation drives, health check-up camps in adopted rural villages under Unnat Bharat Abhiyan, environmental awareness rallies, and the celebration of national commemorative days.",
    ],
    pdf: "Institutional Social Responsibility Report.pdf",
  },
  "code-of-conduct": {
    title: "Code of Conduct",
    paragraphs: [
      "The university maintains clear, well-defined codes of conduct for students, teaching faculty, and administrative staff to ensure high standards of academic integrity and professional ethics.",
      "Handbooks and policy documents outline rights, responsibilities, classroom discipline, research integrity standards, anti-ragging mandates, and grievance redressal mechanisms.",
    ],
    pdf: "Student & Faculty Code of Ethics.pdf",
  },
  "best-practices": {
    title: "Best Practices",
    paragraphs: [
      "The Institutional Quality Assurance Cell (IQAC) has established two major institutional best practices: (1) Holistic Eco-Governance & Solar Energy Integration, and (2) Industry 4.0 Skill Enhancement through hands-on corporate partnerships.",
      "These initiatives ensure sustainable campus operations alongside industry-aligned experiential learning for all students.",
    ],
    pdf: "NAAC Institutional Best Practices Summary.pdf",
  },
  "institutional-distinctiveness": {
    title: "Institutional Distinctiveness",
    paragraphs: [
      "Sandip University distinguishes itself by combining world-class technical and professional education with a deep commitment to environmental sustainability and rural upliftment.",
      "Located in North Maharashtra, the institution serves as a hub for quality higher education, innovation, and community development while maintaining green, carbon-conscious campus operations.",
    ],
    pdf: "Institutional Distinctiveness Statement.pdf",
  },
  "equality-diversity": {
    title: "Equality, Diversity, Social Harmony and Inclusion Committee",
    paragraphs: [
      "The Equality, Diversity and Social Inclusion Committee works to safeguard equal opportunity and non-discrimination for all students and staff regardless of caste, creed, gender, or socio-economic background.",
      "The committee operates an Equal Opportunity Cell, monitors anti-discrimination policies, and provides guidance and academic support to students from marginalized communities.",
    ],
    pdf: "Equality & Inclusion Committee Charter.pdf",
  },
};

export default function IQACSustainabilityPage() {
  const location = useLocation();

  // Dynamically set initial active section based on URL route
  const [selectedId, setSelectedId] = useState(() => {
    if (location.pathname.includes("green")) {
      return "green-campus";
    }
    if (location.pathname.includes("water")) {
      return "water-conservation";
    }
    if (location.pathname.includes("waste-management")) {
      return "waste-management";
    }
    if (location.pathname.includes("energy-conservation")) {
      return "energy-conservation";
    }
    if (location.pathname.includes("gender-sensitivity")) {
      return "gender-sensitivity";
    }
    return "green-campus";
  });

  const scrollContainerRef = useRef(null);

  const selectedSectionInfo =
    sustainabilitySections.find((s) => s.id === selectedId) || sustainabilitySections[0];

  const handleScroll = (dir) => {
    if (!scrollContainerRef.current) return;
    const amount = 180;
    scrollContainerRef.current.scrollBy({
      top: dir === "up" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const activeNavRef = useRef(null);
  useEffect(() => {
    if (activeNavRef.current && scrollContainerRef.current) {
      activeNavRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedId]);

  return (
    <>
      <SEO {...seoData.iqacSustainability} />
      <Header />

      {/* Main Container - Minimal White + Soft Cream + Gold Accent Aesthetic */}
      <main className="min-h-screen bg-[#FDFBF7] dark:bg-[#121110] font-sans text-[#1A1A1A] dark:text-stone-200 antialiased relative overflow-hidden py-6 sm:py-10">
        
        {/* Faint Line-Art Background Accent (Extremely Low Opacity) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.015] overflow-hidden">
          <svg className="w-full h-full text-[#C99A52]" fill="none" viewBox="0 0 800 800" stroke="currentColor" strokeWidth="1">
            <path d="M100 200 C 200 100, 400 100, 500 200 C 600 300, 600 500, 500 600 C 400 700, 200 700, 100 600 Z" />
            <path d="M300 400 Q 500 200 700 400 T 300 800" />
            <path d="M50 500 Q 250 300 450 500" />
            <circle cx="650" cy="150" r="80" />
            <circle cx="150" cy="650" r="120" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* 1. Breadcrumb Navigation & Title */}
          <div className="space-y-2">
            <nav className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 select-none flex-wrap">
              <Link to="/" className="hover:text-[#E30613] transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-[#C99A52]/60" />
              <Link to="/iqac" className="hover:text-[#E30613] transition-colors">
                IQAC
              </Link>
              <ChevronRight size={13} className="text-[#C99A52]/60" />
              <Link to="/iqac/sustainability" className="hover:text-[#E30613] transition-colors">
                Sustainability
              </Link>
              <ChevronRight size={13} className="text-[#C99A52]/60" />
              <span className="text-[#E30613] dark:text-red-400 font-semibold">
                {selectedSectionInfo.shortTitle}
              </span>
            </nav>

            {/* Page Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                {selectedSectionInfo.title}
              </h1>
              {/* Subtle Red Accent Underline */}
              <div className="w-12 h-1 bg-[#E30613] rounded-full mt-2" />
            </div>
          </div>

          {/* 2. Main Layout: Left Sidebar + Right Content Block */}
          <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8 pt-2">
            
            {/* --------------------------------------------------
                LEFT SIDEBAR: SUSTAINABILITY NAVIGATION
            -------------------------------------------------- */}
            <aside className="w-full md:w-[260px] lg:w-[280px] flex-shrink-0">
              
              {/* Desktop / Tablet Vertical Navigation Panel */}
              <div className="hidden md:flex flex-col bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0] dark:border-stone-800 shadow-2xs overflow-hidden">
                
                {/* Panel Header */}
                <div className="p-4 border-b border-[#E5D5C0]/70 dark:border-stone-800 flex items-center justify-between bg-[#FAF6F0] dark:bg-stone-800/40">
                  <div className="flex items-center gap-2">
                    <Leaf size={16} className="text-[#C99A52]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-200 font-mono">
                      Sustainability
                    </span>
                  </div>
                  
                  {/* Up / Down Navigation Controls */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleScroll("up")}
                      aria-label="Scroll up"
                      className="w-6 h-6 rounded-md border border-[#E5D5C0] dark:border-stone-700 bg-white dark:bg-stone-800 text-[#C99A52] hover:bg-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronUp size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScroll("down")}
                      aria-label="Scroll down"
                      className="w-6 h-6 rounded-md border border-[#E5D5C0] dark:border-stone-700 bg-white dark:bg-stone-800 text-[#C99A52] hover:bg-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronDown size={14} />
                    </button>
                  </div>
                </div>

                {/* Category List */}
                <div
                  ref={scrollContainerRef}
                  className="max-h-[540px] overflow-y-auto no-scrollbar scroll-smooth p-2 space-y-1"
                  style={{ scrollbarWidth: "none" }}
                >
                  {sustainabilitySections.map((sec) => {
                    const isActive = sec.id === selectedId;
                    const IconComp = sec.icon;

                    return (
                      <button
                        key={sec.id}
                        ref={isActive ? activeNavRef : null}
                        type="button"
                        onClick={() => setSelectedId(sec.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2.5 cursor-pointer select-none ${
                          isActive
                            ? "bg-red-50/90 dark:bg-red-950/40 text-[#E30613] dark:text-red-400 font-semibold border border-[#E30613]/20 shadow-2xs"
                            : "text-stone-700 dark:text-stone-300 hover:text-[#E30613] hover:bg-[#FAF6F0]/60 dark:hover:bg-stone-800/40"
                        }`}
                      >
                        {/* Red Active Indicator Bar */}
                        {isActive ? (
                          <span className="w-1.5 h-4 bg-[#E30613] dark:bg-red-500 rounded-full flex-shrink-0" />
                        ) : (
                          <span className="w-1.5 h-4 bg-transparent flex-shrink-0" />
                        )}

                        <IconComp
                          size={15}
                          className={`flex-shrink-0 ${
                            isActive ? "text-[#E30613] dark:text-red-400" : "text-[#C99A52]"
                          }`}
                        />
                        <span className="truncate leading-tight">{sec.title}</span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Mobile Swipeable Horizontal Strip */}
              <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
                {sustainabilitySections.map((sec) => {
                  const isActive = sec.id === selectedId;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setSelectedId(sec.id)}
                      className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                        isActive
                          ? "bg-red-50 text-[#E30613] border-[#E30613]/30 font-semibold"
                          : "bg-white text-stone-700 border-[#E5D5C0]"
                      }`}
                    >
                      {sec.shortTitle}
                    </button>
                  );
                })}
              </div>

            </aside>

            {/* --------------------------------------------------
                RIGHT SIDE: MAIN CONTENT AREA
            -------------------------------------------------- */}
            <section className="flex-1 w-full min-h-[500px]">
              
              {selectedId === "green-campus" ? (
                /* GREEN CAMPUS INITIATIVES OFFICIAL CONTENT & GROUPED GALLERY */
                <div className="space-y-8 animate-fadeIn">
                  
                  {/* 1. MAIN INTRODUCTION & GREEN PRACTICES BLOCK */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 sm:p-8 lg:p-10 space-y-6">
                    
                    {/* SECTION HEADING */}
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight leading-snug">
                        {greenCampusData.sectionTitle}
                      </h2>
                      <div className="w-12 h-1 bg-[#E30613] rounded-full mt-2.5" />
                    </div>

                    {/* INTRODUCTION PARAGRAPHS */}
                    <div className="space-y-4 text-sm sm:text-base text-[#222222] dark:text-stone-300 leading-relaxed font-normal text-justify max-w-4xl">
                      {greenCampusData.paragraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>

                    {/* GREEN PRACTICES LIST */}
                    <div className="pt-4 border-t border-[#E5D5C0]/60 dark:border-stone-800 space-y-3">
                      {greenCampusData.practices.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#FAF9F6] dark:bg-stone-800/40 border border-[#E5D5C0]/60 dark:border-stone-800 hover:border-[#E30613]/30 transition-colors"
                        >
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#E30613] mt-2 shadow-2xs" />
                          <p className="text-xs sm:text-sm text-[#222222] dark:text-stone-300 leading-relaxed font-normal flex-1">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* 2. WATER MANAGEMENT SECTION */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 sm:p-8 lg:p-10 space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight leading-snug">
                        {greenCampusData.waterManagement.title}
                      </h2>
                      <div className="w-10 h-0.5 bg-[#E30613] rounded-full mt-2.5" />
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300 font-mono uppercase tracking-wider">
                      {greenCampusData.waterManagement.intro}
                    </p>

                    <div className="space-y-3">
                      {greenCampusData.waterManagement.points.map((pt, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-stone-800/40 border border-[#E5D5C0]/60 dark:border-stone-800"
                        >
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C99A52] mt-2" />
                          <p className="text-xs sm:text-sm text-[#222222] dark:text-stone-300 leading-relaxed font-normal">
                            {pt}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. CLIMATE CHANGE SECTION */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 sm:p-8 lg:p-10 space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight leading-snug">
                        {greenCampusData.climateChange.title}
                      </h2>
                      <div className="w-10 h-0.5 bg-[#E30613] rounded-full mt-2.5" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {greenCampusData.climateChange.points.map((pt, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-stone-800/40 border border-[#E5D5C0]/60 dark:border-stone-800"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E30613] mt-2" />
                          <p className="text-xs sm:text-sm text-[#222222] dark:text-stone-300 leading-relaxed font-normal">
                            {pt}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. FINAL GREEN CAMPUS PARAGRAPH BLOCK */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 sm:p-8 lg:p-10">
                    <p className="text-sm sm:text-base text-[#222222] dark:text-stone-300 leading-relaxed font-normal text-justify max-w-4xl">
                      {greenCampusData.finalParagraph}
                    </p>
                  </div>

                  {/* 5. AWARD AND CERTIFICATES LINK BUTTON */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 border border-[#E30613]/20 flex items-center justify-center text-[#E30613] flex-shrink-0">
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1A1A1A] dark:text-stone-100">
                          Award and Certificates
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400">
                          Official Green Campus Certificates & Recognitions
                        </p>
                      </div>
                    </div>

                    <a
                      href={greenCampusData.awardPdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white font-bold text-xs transition-all duration-200 cursor-pointer shadow-2xs group"
                    >
                      <span>View Award & Certificates</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* 6. PHOTO GALLERY (GROUPED BY EVENT / YEAR - 3 COLUMNS ON DESKTOP) */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 sm:p-8 lg:p-10 space-y-10">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight leading-snug">
                        Photo Gallery
                      </h2>
                      <div className="w-10 h-0.5 bg-[#E30613] rounded-full mt-2.5" />
                    </div>

                    {greenCampusData.galleryGroups.map((group, groupIdx) => (
                      <div key={groupIdx} className="space-y-4">
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C99A52] font-mono border-b border-[#E5D5C0]/60 pb-2">
                          {group.groupTitle}
                        </h3>

                        {/* 3-Column Grid on Desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                          {group.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="group rounded-xl border border-[#E5D5C0] dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                              <div className="overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-800 relative">
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                />
                              </div>

                              <div className="py-3 px-4 bg-[#FAF6EE] dark:bg-stone-800/80 border-t border-[#E5D5C0]/60 dark:border-stone-800 text-center">
                                <h4 className="text-xs sm:text-sm font-medium text-[#222222] dark:text-stone-200">
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ) : selectedId === "water-conservation" ? (
                /* WATER CONSERVATION FACILITIES OFFICIAL CONTENT & GALLERY */
                <div className="space-y-8 animate-fadeIn">
                  
                  {/* MAIN CONTENT AREA */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 sm:p-8 lg:p-10 space-y-6">
                    
                    {/* SECTION HEADING */}
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight leading-snug">
                        {waterConservationData.sectionTitle}
                      </h2>
                      <div className="w-12 h-1 bg-[#E30613] rounded-full mt-2.5" />
                    </div>

                    {/* OPENING PARAGRAPH */}
                    <p className="text-sm sm:text-base text-[#222222] dark:text-stone-300 leading-relaxed font-normal max-w-4xl text-justify">
                      {waterConservationData.introParagraph}
                    </p>

                    {/* SUBHEADING & INITIATIVES LIST */}
                    <div className="pt-6 border-t border-[#E5D5C0]/60 dark:border-stone-800 space-y-4">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E30613] dark:text-red-400 font-mono">
                        {waterConservationData.initiativesHeading}
                      </h3>

                      <div className="space-y-3 pt-1">
                        {waterConservationData.initiatives.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#FAF9F6] dark:bg-stone-800/40 border border-[#E5D5C0]/60 dark:border-stone-800 hover:border-[#E30613]/30 transition-colors"
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-stone-800 border border-[#E30613]/40 text-[#E30613] dark:text-red-400 font-bold text-xs flex items-center justify-center mt-0.5 shadow-2xs">
                              {idx + 1}
                            </span>
                            <p className="text-xs sm:text-sm text-[#222222] dark:text-stone-300 leading-relaxed font-normal flex-1">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* GALLERY SECTION */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-6 sm:p-8 lg:p-10 space-y-6">
                    
                    {/* GALLERY HEADING */}
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight leading-snug">
                        {waterConservationData.galleryHeading}
                      </h2>
                      <div className="w-12 h-1 bg-[#E30613] rounded-full mt-2.5" />
                    </div>

                    {/* 2-COLUMN MODERN UNIVERSITY GALLERY GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 pt-2">
                      {waterConservationData.gallery.map((item, idx) => (
                        <div
                          key={idx}
                          className="group rounded-xl border border-[#E5D5C0] dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
                        >
                          {/* Aspect 4:3 Image */}
                          <div className="overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-800 relative">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>

                          {/* Small light cream/gold caption strip */}
                          <div className="py-3 px-4 bg-[#FAF6EE] dark:bg-stone-800/80 border-t border-[#E5D5C0]/60 dark:border-stone-800 text-center">
                            <h4 className="text-xs sm:text-sm font-medium text-[#222222] dark:text-stone-200">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              ) : selectedId === "waste-management" ? (
                /* WASTE MANAGEMENT FULL OFFICIAL CONTENT & GALLERY */
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* SECTION 1: Solid Waste Management */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 lg:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Trash2 size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {wasteManagementData.solidWaste.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {wasteManagementData.solidWaste.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx}>{pText}</p>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 2: Liquid Waste Management */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 lg:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Droplets size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {wasteManagementData.liquidWaste.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {wasteManagementData.liquidWaste.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx}>{pText}</p>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 3: Biomedical Waste Management */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 lg:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {wasteManagementData.biomedicalWaste.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {wasteManagementData.biomedicalWaste.paragraph}
                    </p>
                  </div>

                  {/* SECTION 4: E-waste Management */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 lg:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Recycle size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {wasteManagementData.eWaste.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {wasteManagementData.eWaste.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx}>{pText}</p>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 5: Waste Recycling System */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 lg:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Recycle size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {wasteManagementData.wasteRecycling.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {wasteManagementData.wasteRecycling.paragraph}
                    </p>
                  </div>

                  {/* SECTION 6: Hazardous Chemicals & Radioactive Waste Management */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 lg:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <TestTube size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {wasteManagementData.hazardousChemicals.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {wasteManagementData.hazardousChemicals.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx}>{pText}</p>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 7: ORIGINAL DOCUMENT LINK BUTTON */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/40 border border-[#E30613]/20 flex items-center justify-center text-[#E30613] flex-shrink-0">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1A1A1A] dark:text-stone-100">
                          {wasteManagementData.documentLink.title}
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400">
                          Official Memorandum of Understanding & Policy Document
                        </p>
                      </div>
                    </div>

                    <a
                      href={wasteManagementData.documentLink.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white font-bold text-xs transition-all duration-200 cursor-pointer shadow-2xs group"
                    >
                      <span>View Document</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* SECTION 8: WASTE MANAGEMENT PHOTO GALLERY (Modern 2-Column Grid on Desktop) */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-5 sm:p-6 lg:p-8 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Camera size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          Waste Management Photo Gallery
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    {/* 2-Column Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {wasteManagementData.gallery.map((item, idx) => (
                        <div
                          key={idx}
                          className="group rounded-2xl border border-[#E5D5C0]/90 dark:border-stone-800 bg-white dark:bg-stone-800/60 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
                        >
                          <div className="overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-800 relative">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>
                          <div className="p-3.5 sm:p-4 border-t border-[#E5D5C0]/50 dark:border-stone-800 bg-[#FAF9F6] dark:bg-stone-900">
                            <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] dark:text-stone-100 leading-snug">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : selectedId === "energy-conservation" ? (
                /* ENERGY CONSERVATION MEASURES OFFICIAL CONTENT & DOCUMENT LIST */
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* MAIN CONTENT BLOCK: ORIGINAL PARAGRAPHS */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 lg:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Zap size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {energyConservationData.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {energyConservationData.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx}>{pText}</p>
                      ))}
                    </div>
                  </div>

                  {/* CONSERVATION OF ELECTRICITY: CLEAN DOCUMENT LIST */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-5 sm:p-6 lg:p-8 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {energyConservationData.documentsSectionTitle}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    {/* Document Row List */}
                    <div className="overflow-hidden rounded-xl border border-[#E5D5C0] dark:border-stone-800 bg-white dark:bg-stone-900 divide-y divide-[#E5D5C0]/60 dark:divide-stone-800">
                      {energyConservationData.documents.map((doc, idx) => (
                        <a
                          key={idx}
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-3.5 sm:p-4 hover:bg-[#FAF6F0]/60 dark:hover:bg-stone-800/40 transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0 pr-4">
                            <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/40 border border-[#E30613]/20 flex items-center justify-center flex-shrink-0 text-[#E30613]">
                              <FileText size={15} />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A] dark:text-stone-200 truncate group-hover:text-[#E30613] transition-colors">
                              {doc.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#E30613] dark:text-red-400 flex-shrink-0">
                            <span className="hidden sm:inline">View Document</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              ) : selectedId === "gender-sensitivity" ? (
                /* GENDER SENSITIVITY FULL OFFICIAL CONTENT */
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* SECTION 1: Gender Equity in Curriculum */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {genderSensitivityData.curriculum.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {genderSensitivityData.curriculum.text}
                    </p>
                  </div>

                  {/* SECTION 2: Safety & Security */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {genderSensitivityData.safety.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {genderSensitivityData.safety.text}
                    </p>
                  </div>

                  {/* SECTION 3: Common Rooms & Sanitary Dispenser Facilities */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Home size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {genderSensitivityData.commonRooms.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {genderSensitivityData.commonRooms.text}
                    </p>
                  </div>

                  {/* SECTION 4: Day Care Centre */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs hover:shadow-xs transition-shadow duration-300 p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <HeartHandshake size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          {genderSensitivityData.dayCare.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify pt-1">
                      {genderSensitivityData.dayCare.text}
                    </p>
                  </div>

                  {/* SECTION 5: FACILITY & SECURITY PHOTO GALLERY */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-5 sm:p-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Camera size={18} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          Facility & Security Photo Gallery
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    {/* Uniform 4-Column Image Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                      {genderSensitivityData.gallery.map((item, idx) => (
                        <div
                          key={idx}
                          className="group rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 bg-white dark:bg-stone-800/60 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
                        >
                          <div className="overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-800 relative">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>
                          <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-center space-y-1 border-t border-[#E5D5C0]/40 dark:border-stone-800 bg-white dark:bg-stone-900">
                            <h4 className="text-xs font-bold text-[#1A1A1A] dark:text-stone-100 leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-normal">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 6: ACTIVITIES & EVENTS TABLE */}
                  <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0]/80 dark:border-stone-800 shadow-2xs p-5 sm:p-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FAF6F0] dark:bg-stone-800 text-[#E30613] border border-[#E5D5C0]/60 dark:border-stone-700 flex-shrink-0">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#1A1A1A] dark:text-stone-100 tracking-tight">
                          Activities and Events for the promotion of gender equity during the last five years
                        </h2>
                        <div className="w-8 h-[2px] bg-[#E30613] rounded-full mt-1" />
                      </div>
                    </div>

                    {/* Desktop / Tablet Event Table */}
                    <div className="hidden sm:block overflow-hidden rounded-xl border border-[#E5D5C0] dark:border-stone-800">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#FAF6F0] dark:bg-stone-800/70 border-b border-[#E5D5C0] dark:border-stone-800 text-xs font-bold text-[#1A1A1A] dark:text-stone-200 uppercase tracking-wider">
                            <th className="py-3 px-4 w-28 text-center font-mono border-r border-[#E5D5C0]/60 dark:border-stone-800">YEAR</th>
                            <th className="py-3 px-4 border-r border-[#E5D5C0]/60 dark:border-stone-800">EVENT / ACTIVITY</th>
                            <th className="py-3 px-4 w-32 text-center">VIEW</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5D5C0]/60 dark:divide-stone-800 text-xs text-[#1A1A1A] dark:text-stone-300">
                          {genderSensitivityData.activities.map((act, idx) => (
                            <tr
                              key={idx}
                              className={idx % 2 === 0 ? "bg-white dark:bg-stone-900" : "bg-[#FAF6F0]/40 dark:bg-stone-800/20"}
                            >
                              <td className="py-3.5 px-4 text-center font-mono font-bold text-[#E30613] border-r border-[#E5D5C0]/60 dark:border-stone-800">
                                {act.year}
                              </td>
                              <td className="py-3.5 px-4 font-medium leading-relaxed border-r border-[#E5D5C0]/60 dark:border-stone-800">
                                {act.title}
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <a
                                  href={act.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-50 dark:bg-red-950/30 text-[#E30613] dark:text-red-400 font-bold text-[11px] hover:underline"
                                >
                                  <span>CLICK HERE</span>
                                  <ArrowRight size={12} />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Event List */}
                    <div className="sm:hidden space-y-3">
                      {genderSensitivityData.activities.map((act, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl border border-[#E5D5C0] bg-white space-y-2"
                        >
                          <div className="flex items-center justify-between border-b border-[#E5D5C0]/60 pb-1.5">
                            <span className="text-xs font-mono font-bold text-[#E30613]">{act.year}</span>
                            <a
                              href={act.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-[#E30613] hover:underline inline-flex items-center gap-1"
                            >
                              <span>CLICK HERE</span>
                              <ArrowRight size={11} />
                            </a>
                          </div>
                          <p className="text-xs font-medium text-stone-800">{act.title}</p>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              ) : (
                /* OTHER SECTIONS CONTENT CARD */
                <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#E5D5C0] dark:border-stone-800 shadow-2xs p-6 sm:p-8 transition-all duration-300 animate-fadeIn space-y-6">
                  
                  {/* Title & Accent Underline */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A] dark:text-stone-100 tracking-tight leading-snug">
                      {otherSectionsContent[selectedId]?.title || selectedSectionInfo.title}
                    </h2>
                    <div className="w-10 h-0.5 bg-[#E30613] rounded-full mt-2" />
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal text-justify">
                    {otherSectionsContent[selectedId]?.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* PDF Document Footer */}
                  {otherSectionsContent[selectedId]?.pdf && (
                    <div className="pt-6 border-t border-[#E5D5C0]/60 dark:border-stone-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs text-stone-600 dark:text-stone-400">
                        <FileText size={16} className="text-[#C99A52]" />
                        <span className="font-mono">{otherSectionsContent[selectedId].pdf}</span>
                      </div>
                      <a
                        href="#pdf"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E30613] dark:text-red-400 hover:underline"
                      >
                        <span>View PDF</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  )}

                </div>
              )}

            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
