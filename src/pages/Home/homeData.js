/* ------------------------------------------------------------------
   homeData.js — every editable piece of home-page content in one place.
   Images are the ones already in src/assets/images. Swap freely.
------------------------------------------------------------------- */
import mapImage from "../../assets/images/home/campus-map.jpg";
import lifeLibrary from "../../assets/images/home/life/library.jpg";
import lifeCulturalFests from "../../assets/images/home/life/cultural-fests.jpg";
import lifeSeminarHall from "../../assets/images/home/life/seminar-hall.jpg";
import lifeSportsComplex from "../../assets/images/home/life/sports-complex.jpg";
import lifeTechLabs from "../../assets/images/home/life/tech-labs.jpg";
import about1 from "../../assets/images/home/about-1.jpg";
import about2 from "../../assets/images/home/about-2.jpg";
import imgSOET from "../../assets/images/home/schools/SOET.jpg";
import imgSOCSE from "../../assets/images/home/schools/SOCSE.jpg";
import imgSOCMS from "../../assets/images/home/schools/SOCMS.jpg";
import imgSOS from "../../assets/images/home/schools/SOS.jpg";
import imgSOPS from "../../assets/images/home/schools/SOPS.jpg";
import imgSOL from "../../assets/images/home/schools/SOL.jpg";
import imgSOD from "../../assets/images/home/schools/SOD.jpg";
import aboutEntrance from "../../assets/images/about-entrance.jpg";
import handsOn from "../../assets/images/hands-on-training.jpg";
import research from "../../assets/images/research-grants.jpg";
import graduation from "../../assets/images/why-sandip-graduation.jpg";
import campus1 from "../../assets/images/campus-1.jpg";
import campus2 from "../../assets/images/campus-2.webp";
import campus3 from "../../assets/images/campus-3.png";
import gallery1 from "../../assets/images/gallery1.jpg";
import soet from "../../assets/images/soet2.webp";

/* ---------- HERO VIDEOS ----------
   The two campus videos you sent, compressed to ~5 MB each, are in
   public/videos/hero-1.mp4 and hero-2.mp4 (with hero-1.jpg / hero-2.jpg posters).
   Replace the files to change the videos. `maxSeconds` is a safety limit: the
   slider moves on after this long even if a video stalls. */
export const heroVideos = [
  { src: "/videos/hero-1.mp4", poster: "/videos/hero-1.jpg", maxSeconds: 12 },
  { src: "/videos/hero-2.mp4", poster: "/videos/hero-2.jpg", maxSeconds: 12 },
];

/* ---------- ABOUT ---------- */
/* hover the first photo and the second one opens */
export const aboutImages = [about2, about1]; // [shown first, shown on hover]

export const aboutStats = [
  { to: 250, suffix: "+", label: "Acre campus" },
  { to: 100, suffix: "+", label: "Programs" },
  { to: 12000, suffix: "+", label: "Students" },
];

/* ---------- WHY CHOOSE US ---------- */
export const whyImage = campus2;
export const features = [
  {
    icon: "FlaskConical",
    title: "Hands-on industry training",
    text: "Outcome-based lab work designed with input from industry and research organisations.",
  },
  {
    icon: "Rocket",
    title: "Innovation & incubation cell",
    text: "Mentorship, prototyping support and seed-funding guidance for student start-ups.",
  },
  {
    icon: "Briefcase",
    title: "Internships built into the degree",
    text: "Corporate and research internships give every student real workplace exposure.",
  },
  {
    icon: "Globe",
    title: "Global exposure",
    text: "MoUs with international universities enable exchange and joint research.",
  },
  {
    icon: "GraduationCap",
    title: "Faculty from IITs, NITs & IIMs",
    text: "Experienced, well-qualified mentors who push students towards excellence.",
  },
  {
    icon: "Building2",
    title: "250+ acre eco-campus",
    text: "Smart classrooms, labs, hostels and sports facilities in the lap of nature.",
  },
];

/* ---------- SCHOOLS (tilted card strip) ---------- */
export const schools = [
  { name: "Engineering & Technology", code: "SOET", path: "/schools/engineering-technology", image: imgSOET },
  { name: "Computer Science & Engineering", code: "SOCSE", path: "/schools/computer-science", image: imgSOCSE },
  { name: "Management", code: "SOCMS", path: "/schools/management", image: imgSOCMS },
  { name: "Science", code: "SOS", path: "/schools/science", image: imgSOS },
  { name: "Pharmaceutical Sciences", code: "SOPS", path: "/schools/pharma", image: imgSOPS },
  { name: "Law", code: "SOL", path: "/schools/law", image: imgSOL },
  { name: "Fashion & Beauty", code: "SOD", path: "/schools/fashion-beauty", image: imgSOD },
];

/* ---------- CAMPUS LIFE (3D round carousel, 8 slides) ---------- */
export const lifeSlides = [
  { title: "Cultural Fests", text: "Music, dance, drama and the annual SUN Fest.", image: lifeCulturalFests },
  { title: "Tech Labs", text: "Hands-on workshops, bootcamps and hackathons.", image: lifeTechLabs },
  { title: "Sports Complex", text: "Inter-collegiate tournaments and athletics.", image: lifeSportsComplex },
  { title: "Research & Innovation", text: "Funded projects and faculty mentorship.", image: research },
  { title: "Convocation", text: "Celebrating every graduating batch.", image: graduation },
  { title: "Grand Entrance", text: "Where every Sandip story begins.", image: aboutEntrance },
  { title: "Seminar Hall", text: "Modern auditorium for lectures, talks and events.", image: lifeSeminarHall },
  { title: "Library", text: "A quiet, well-stocked space for study and research.", image: lifeLibrary },
];

/* ---------- ADMISSIONS ---------- */
export const journey = [
  {
    icon: "FileText",
    title: "Apply online",
    text: "Fill in the application form and upload your marksheets. It takes about 10 minutes.",
  },
  {
    icon: "MessageCircle",
    title: "Talk to a counsellor",
    text: "Discuss programs, career paths and campus life with an admissions counsellor.",
  },
  {
    icon: "BadgePercent",
    title: "Check scholarships",
    text: "Your merit and entrance scores are reviewed for scholarships and fee benefits.",
  },
  {
    icon: "GraduationCap",
    title: "Confirm your seat",
    text: "Pay the admission fee, submit documents and receive your enrolment number.",
  },
];

export const streams = [
  "Engineering",
  "Computer Science",
  "Management",
  "Pharmacy",
  "Design",
  "Ph.D & Research",
];

export const admissionStats = [
  { to: 100, suffix: "+", label: "Programs offered", sub: "UG, PG, Ph.D & Diploma" },
  { to: 12000, suffix: "+", label: "Active students", sub: "From across India and abroad" },
  { to: 95, suffix: "%+", label: "Placement rate", sub: "250+ recruiters" },
];

/* ---------- NEWS (EDIT: these dates are from the old site) ---------- */
export const news = [
  { day: "15", month: "JUL", title: "AI & Robotics Innovation Lab inaugurated", text: "Students now have access to advanced AI research facilities." },
  { day: "20", month: "JUL", title: "International Research Summit 2026", text: "Experts from 15+ countries will participate in the summit." },
  { day: "28", month: "JUL", title: "1000+ Placement Offers Achieved", text: "Leading recruiters visited the campus during placement week." },
];

/* ---------- FIND US ONLINE ----------
   VERIFY THESE LINKS. The screenshot only showed handles for Instagram (@sandip.university)
   and X (@sandipuniv). YouTube and Facebook currently open a search for the university;
   replace them with the real channel / page URLs. */
export const socialLinks = [
  { id: "instagram", name: "Instagram", line: "Campus stories & reels", handle: "@sandip.university", url: "https://www.instagram.com/sandip.university/", tone: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
  { id: "youtube", name: "YouTube", line: "Tours & campus life", handle: "Sandip University", url: "https://www.youtube.com/results?search_query=Sandip+University+Nashik", tone: "from-[#FF3B3B] to-[#C4001D]" },
  { id: "facebook", name: "Facebook", line: "Events & announcements", handle: "Sandip University", url: "https://www.facebook.com/search/top?q=Sandip%20University%20Nashik", tone: "from-[#2F7BFF] to-[#0B4AC9]" },
  { id: "x", name: "Twitter / X", line: "Updates & news", handle: "@sandipuniv", url: "https://x.com/sandipuniv", tone: "from-[#2B2B2B] to-[#000000]" },
  { id: "website", name: "Website", line: "Official university portal", handle: "sandipuniversity.edu.in", url: "https://www.sandipuniversity.edu.in/", tone: "from-[#10B981] to-[#047857]" },
  { id: "blogs", name: "Blogs", line: "Articles, guides & insights", handle: "sandipuniversity.edu.in/blog", url: "https://www.sandipuniversity.edu.in/blog/", tone: "from-[#FB923C] to-[#EA580C]" },
];

export const socialStats = [
  { to: 120, suffix: "K+", label: "Followers" },
  { to: 250, suffix: "K+", label: "Likes" },
  { to: 35, suffix: "+", label: "Countries" },
];

/* Pins on the campus map. x / y are % of the map image. */
export const campusMapImage = mapImage;
export const mapPins = [
  {
    id: "engineering",
    tab: "Engineering",
    kind: "Academic",
    title: "School of Engineering & Technology",
    text: "State-of-the-art technical laboratories, robotics centres and mechanical workshops.",
    image: imgSOET,
    x: 33,
    y: 64,
    to: "/schools/engineering-technology",
  },
  {
    id: "library",
    tab: "Library",
    kind: "Learning",
    title: "Central Library",
    text: "A quiet, well-stocked space for study, research and reading.",
    image: about2,
    x: 78,
    y: 40,
    to: "/central-library",
  },
  {
    id: "incubation",
    tab: "Incubation",
    kind: "Innovation",
    title: "Innovation & Entrepreneurship Cell",
    text: "Mentorship, prototyping support and seed-funding guidance for student start-ups.",
    image: imgSOCSE,
    x: 17,
    y: 27,
    to: "/research",
  },
  {
    id: "sports",
    tab: "Sports",
    kind: "Campus life",
    title: "Sports Complex",
    text: "Grounds and courts for inter-collegiate tournaments and everyday athletics.",
    image: campus3,
    x: 4,
    y: 72,
    to: "/campus-life",
  },
];
