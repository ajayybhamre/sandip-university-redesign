// Sandip University Factual Contact & Travel Dataset

export const OFFICIAL_CONTACT_INFO = {
  address: "Sandip University Campus, Trimbak Road, Mahiravani, Nashik, Maharashtra - 422213, India",
  tollFree: "1800-212-2714",
  admissionsPhone1: "+91 91686 44445",
  admissionsPhone2: "+91 91686 44446",
  internationalEmail: "international@sandipuniversity.edu.in",
  generalEmail: "info@sandipuniversity.edu.in",
  officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM IST",
  mapsUrl: "https://maps.google.com/?q=Sandip+University+Nashik",
};

export const CONTACT_TEAMS = [
  {
    title: "International Admissions Cell",
    purpose: "Queries regarding degree programs, eligibility, document review, and offer letter issuance.",
    phone: "+91 91686 44445",
    email: "international@sandipuniversity.edu.in",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM IST",
  },
  {
    title: "International Student Support Desk",
    purpose: "Post-admission assistance, airport reception, visa support letters, and FRRO registration.",
    phone: "+91 91686 44446",
    email: "support.intl@sandipuniversity.edu.in",
    hours: "24/7 Helpline Support",
  },
  {
    title: "General Campus Enquiry",
    purpose: "Hostel facilities, campus visits, general university verification, and administration.",
    phone: "1800-212-2714",
    email: "info@sandipuniversity.edu.in",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM IST",
  },
];

export const TRAVEL_ROUTES = {
  air: [
    {
      name: "Mumbai International Airport (CSIA / BOM)",
      distance: "~180 km",
      time: "3.5 to 4 Hours",
      desc: "Chhatrapati Shivaji Maharaj International Airport (BOM) is the primary gateway for international flights. Taxi/cab options, express highway buses, or train connections via Dadar/CSMT to Nashik Road Railway Station are available.",
    },
    {
      name: "Shirdi Airport (SAG)",
      distance: "~90 km",
      time: "2 Hours",
      desc: "Shirdi Airport connects major domestic hubs. Direct cabs and state transport buses run frequently between Shirdi and Nashik campus.",
    },
  ],
  road: [
    { city: "Mumbai", distance: "~180 km", via: "NH 160 Highway", time: "3.5 Hours" },
    { city: "Pune", distance: "~210 km", via: "NH 60 Highway", time: "4.5 Hours" },
    { city: "Shirdi", distance: "~90 km", via: "MH SH 7", time: "2 Hours" },
  ],
  busSteps: [
    { step: "01", title: "Intercity Boarding", desc: "Board an express bus from Mumbai, Pune, or Shirdi toward Nashik." },
    { step: "02", title: "Arrive at Nashik Terminal", desc: "Alight at Central Bus Stand (CBS) or Mumbai Naka bus hub in Nashik." },
    { step: "03", title: "Local Trimbak Road Transit", desc: "Take a local city bus or auto-rickshaw heading towards Trimbakeshwar." },
    { step: "04", title: "Alight at University Campus", desc: "Alight directly at Sandip University Campus Gate on Trimbak Road." },
  ],
  railway: {
    station: "Nashik Road Railway Station (NK)",
    distance: "~25 km",
    time: "45 Minutes to Campus",
    desc: "Nashik Road is a major junction on the Central Railway network, directly connected with Mumbai, Delhi, Bengaluru, Hyderabad, and Kolkata. Cabs, Uber, and local buses operate continuously from the station to Sandip University Trimbak Road campus.",
  },
};

export const TRAVEL_COMPARISON = [
  { route: "Mumbai Airport (BOM)", bestFor: "International Arrivals", distance: "~180 km", options: "Highway Cab / Train + Taxi" },
  { route: "Shirdi Airport (SAG)", bestFor: "Domestic Connections", distance: "~90 km", options: "Direct Highway Cab / Bus" },
  { route: "Nashik Road Railway Station", bestFor: "Train Travel from Indian Cities", distance: "~25 km", options: "Local Taxi / City Bus" },
  { route: "Mumbai (By Road)", bestFor: "Car / Express Bus Travel", distance: "~180 km", options: "NH 160 Highway / Volvo Bus" },
  { route: "Pune (By Road)", bestFor: "Car / Bus Travel", distance: "~210 km", options: "NH 60 Highway / Express Bus" },
];
