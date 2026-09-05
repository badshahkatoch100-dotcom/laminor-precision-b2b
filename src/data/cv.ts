export const chef = {
  name: "Deepak Yashwant Telang",
  role: "Professional Chef",
  disciplines: "Bakery • Pastry • Culinary Operations",
  currentPosition: {
    title: "Professional Chef",
    org: "International Culinary Development",
    location: "Barcelona, Spain",
  },
  profile:
    "Internationally experienced chef with a strong background in bakery, pastry, flight catering, cruise operations, restaurant kitchens and high-volume food production. His career spans professional culinary environments in India, Kuwait and the United States, followed by further culinary development in Germany and Barcelona, where he has expanded his exposure to European, Spanish and Catalan cooking.",
  email: "deepak.telang123@gmail.com",
  phones: ["+34 623 58 40 76"],
  location: "Barcelona, Spain",
};

export interface CareerEntry {
  period: string;
  org: string;
  location: string;
  title: string;
  points: string[];
  current?: boolean;
}

/* Chronological, earliest first */
export const career: CareerEntry[] = [
  {
    period: "2000 — 2001",
    org: "Kamat Lingapur Hotel",
    location: "Hyderabad, India",
    title: "Kitchen Supervisor",
    points: ["Indian, Chinese and South Indian cuisine"],
  },
  {
    period: "2005 — 2006",
    org: "The Deccan Odyssey",
    location: "Luxury Train, India",
    title: "Chef Team Member",
    points: ["Prepared regional cuisine of Maharashtra and continental meals"],
  },
  {
    period: "2006 — 2007",
    org: "Taj SATS Flight Kitchen",
    location: "Mumbai, India",
    title: "Baker",
    points: ["Managed the dough-making section", "Worked in the pastry section"],
  },
  {
    period: "2007",
    org: "Princess Cruise Lines",
    location: "Los Angeles, USA",
    title: "Assistant Baker (Night Shifts)",
    points: [
      "Responsible for breakfast, lunch and dinner bakery production",
      "Offered promotion to Third Baker",
    ],
  },
  {
    period: "2008 — 2010",
    org: "Sitar Indian Restaurant",
    location: "Nashville, Tennessee, USA",
    title: "Chef de Partie, Bakery & Pastry",
    points: [
      "Assistant Tandoor Cook",
      "Assisted with curry, Indian desserts, salads and snack preparation",
    ],
  },
  {
    period: "2010 — 2011",
    org: "C'est La Vie",
    location: "Bandra, Mumbai",
    title: "Chef de Partie, Continental Bakery & Pastry",
    points: ["Continental bakery and pastry production"],
  },
  {
    period: "2011 — 2012",
    org: "Taj SATS Flight Kitchen",
    location: "Mumbai, India",
    title: "Chef de Partie, Bakery & Pastry",
    points: ["Assisted in the opening of Starbucks outlets in Mumbai"],
  },
  {
    period: "",
    org: "Chefair Flight Catering",
    location: "Chhatrapati Shivaji International Airport, Mumbai",
    title: "Chef",
    points: ["Flight catering production and kitchen operations"],
  },
  {
    period: "2012 — 2015",
    org: "Café Coco",
    location: "Kuwait",
    title: "Chef de Partie, Bakery & Pastry",
    points: [
      "Worked with Executive Pastry Chef Nicolas from France",
      "Pre-opening team member",
    ],
  },
];

export interface DevelopmentEntry {
  period: string;
  place: string;
  note: string;
  current?: boolean;
}

/* Practical culinary development — distinct from documented employment */
export const development: DevelopmentEntry[] = [
  {
    period: "Jul 2025 — Dec 2025",
    place: "Germany",
    note: "Practical culinary exposure in a professional restaurant environment, with further development of European culinary knowledge and kitchen experience.",
  },
  {
    period: "Jan 2026 — Present",
    place: "Barcelona, Spain",
    note: "Continued practical culinary development in Barcelona, with a focus on Spanish and Catalan culinary traditions, including practical exposure to pintxos, Spanish cooking techniques, ingredients and professional restaurant kitchen practices.",
    current: true,
  },
];

export const expertise = [
  { title: "Bakery", note: "Dough, breads and viennoiserie at production scale" },
  { title: "Pastry", note: "Continental and classical pastry work" },
  { title: "Mass Food Production", note: "High-volume flight and cruise catering" },
  { title: "Kitchen Operations", note: "Section management and daily production flow" },
  { title: "Menu Development", note: "Menu planning across cuisines and formats" },
  { title: "Food Safety", note: "HACCP standards and FSSAI compliance" },
  { title: "Costing & Recipe Standardization", note: "Cost control and consistent yields" },
  { title: "Vendor Management", note: "Vendor development and supply coordination" },
  { title: "Leadership", note: "Team communication and supervision" },
  {
    title: "Spanish & Catalan Culinary Development",
    note: "Practical exposure to pintxos, Spanish cooking techniques and ingredients",
  },
  {
    title: "European Restaurant Practices",
    note: "Developing knowledge of professional restaurant kitchen practices in Germany and Spain",
  },
];

export const skills = [
  "Mass Food & Beverage Production",
  "HACCP",
  "FSSAI Compliance",
  "Costing & Recipe Standardization",
  "Vendor Development & Management",
  "Data Analysis & Forecasting",
  "Strong Communication & Leadership",
  "MS Office Proficiency",
];

export const countries = [
  { name: "India", detail: "Hotels, luxury train, flight kitchens, restaurants" },
  { name: "Kuwait", detail: "Café Coco — pre-opening bakery & pastry" },
  { name: "USA", detail: "Princess Cruise Lines, Sitar Indian Restaurant" },
  { name: "Germany", detail: "Practical culinary development in a restaurant environment" },
  { name: "Spain", detail: "Ongoing culinary development in Barcelona — Spanish & Catalan traditions" },
];

export const environments = [
  "Flight Catering",
  "Cruise Lines",
  "International Restaurant",
  "Luxury Train",
  "Hotels",
  "Retail Food Operations",
];

export const achievements = [
  { title: "Best Starbucks Food Supplier", org: "Rated by Taj SATS Air Catering" },
  { title: "Best Catering & Best Meal in the City", org: "Rated distinction" },
  {
    title: "Finalist — All India Chef Competition",
    org: "NCHMCT · Continental Cuisine",
  },
  { title: "Finalist — All India Chef Competition", org: "NCHMCT · Indian Cuisine" },
];

export const certifications = [
  { title: "Lean Management & Costing", org: "Lufthansa" },
  { title: "HACCP Training", org: "USPH" },
  { title: "ISO, Food Safety & Waste Management", org: "" },
  { title: "Fire Safety & First Aid", org: "" },
  { title: "Crowd & Disaster Management", org: "Carnival Cruise Lines" },
  { title: "Certified Chief Life Raft Handler", org: "Carnival Cruise Lines" },
];

export const languages = [
  { name: "Marathi", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Basic" },
  { name: "Telugu", level: "Conversational" },
];

export const education = {
  degree: "Degree in Hotel Management",
  year: "2002",
  institute: "Institute of Hotel Management and Applied Nutrition (IHM), Hyderabad",
};

export const interests = [
  { title: "Photography", note: "Documenting kitchens, produce and travel" },
  { title: "Drawing", note: "Sketching plating concepts and forms" },
];
