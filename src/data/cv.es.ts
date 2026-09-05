import type {
  CareerEntry,
  DevelopmentEntry,
} from "@/data/cv";

/**
 * Spanish version of the documented CV content.
 * Proper nouns (employers, institutions, brand names) are intentionally unchanged.
 */

export const chefEs = {
  name: "Deepak Yashwant Telang",
  role: "Chef profesional",
  disciplines: "Panadería • Pastelería • Operaciones de cocina",
  currentPosition: {
    title: "Chef profesional",
    org: "Desarrollo culinario internacional",
    location: "Barcelona, España",
  },
  profile:
    "Chef con experiencia internacional y una sólida trayectoria en panadería, pastelería, catering aéreo, operaciones en cruceros, cocinas de restaurante y producción alimentaria de gran volumen. Su carrera abarca entornos culinarios profesionales en India, Kuwait y Estados Unidos, seguidos de un desarrollo culinario adicional en Alemania y Barcelona, donde ha ampliado su contacto con la cocina europea, española y catalana.",
  email: "deepak.telang123@gmail.com",
  phones: ["+34 623 58 40 76"],
  location: "Barcelona, España",
};

export const careerEs: CareerEntry[] = [
  {
    period: "2000 — 2001",
    org: "Kamat Lingapur Hotel",
    location: "Hyderabad, India",
    title: "Supervisor de cocina",
    points: ["Cocina india, china y del sur de la India"],
  },
  {
    period: "2005 — 2006",
    org: "The Deccan Odyssey",
    location: "Tren de lujo, India",
    title: "Chef del equipo de cocina",
    points: [
      "Elaboración de cocina regional de Maharashtra y menús continentales",
    ],
  },
  {
    period: "2006 — 2007",
    org: "Taj SATS Flight Kitchen",
    location: "Bombay, India",
    title: "Panadero",
    points: ["Gestión de la sección de masas", "Trabajo en la sección de pastelería"],
  },
  {
    period: "2007",
    org: "Princess Cruise Lines",
    location: "Los Ángeles, EE. UU.",
    title: "Panadero auxiliar (turnos de noche)",
    points: [
      "Responsable de la producción de panadería para desayuno, comida y cena",
      "Propuesto para ascender a tercer panadero",
    ],
  },
  {
    period: "2008 — 2010",
    org: "Sitar Indian Restaurant",
    location: "Nashville, Tennessee, EE. UU.",
    title: "Jefe de partida de panadería y pastelería",
    points: [
      "Cocinero auxiliar de tandoor",
      "Apoyo en la elaboración de currys, postres indios, ensaladas y aperitivos",
    ],
  },
  {
    period: "2010 — 2011",
    org: "C'est La Vie",
    location: "Bandra, Bombay",
    title: "Jefe de partida de panadería y pastelería continental",
    points: ["Producción de panadería y pastelería continental"],
  },
  {
    period: "2011 — 2012",
    org: "Taj SATS Flight Kitchen",
    location: "Bombay, India",
    title: "Jefe de partida de panadería y pastelería",
    points: ["Participación en la apertura de locales Starbucks en Bombay"],
  },
  {
    period: "",
    org: "Chefair Flight Catering",
    location: "Aeropuerto Internacional Chhatrapati Shivaji, Bombay",
    title: "Chef",
    points: ["Producción de catering aéreo y operaciones de cocina"],
  },
  {
    period: "2012 — 2015",
    org: "Café Coco",
    location: "Kuwait",
    title: "Jefe de partida de panadería y pastelería",
    points: [
      "Trabajo junto al chef pastelero ejecutivo Nicolas, de Francia",
      "Miembro del equipo de preapertura",
    ],
  },
];

export const developmentEs: DevelopmentEntry[] = [
  {
    period: "jul 2025 — dic 2025",
    place: "Alemania",
    note: "Contacto práctico con la cocina en un entorno profesional de restaurante, ampliando su conocimiento culinario europeo y su experiencia en cocina.",
  },
  {
    period: "ene 2026 — actualidad",
    place: "Barcelona, España",
    note: "Desarrollo culinario práctico continuo en Barcelona, centrado en las tradiciones culinarias españolas y catalanas, con contacto directo con los pintxos, las técnicas e ingredientes de la cocina española y las prácticas profesionales de cocina de restaurante.",
    current: true,
  },
];

export const expertiseEs = [
  {
    title: "Panadería",
    note: "Masas, panes y bollería a escala de producción",
  },
  { title: "Pastelería", note: "Pastelería continental y clásica" },
  {
    title: "Producción alimentaria a gran escala",
    note: "Catering aéreo y de cruceros de alto volumen",
  },
  {
    title: "Operaciones de cocina",
    note: "Gestión de partidas y flujo de producción diario",
  },
  {
    title: "Desarrollo de cartas",
    note: "Planificación de cartas para distintas cocinas y formatos",
  },
  {
    title: "Seguridad alimentaria",
    note: "Estándares APPCC (HACCP) y cumplimiento de la normativa FSSAI",
  },
  {
    title: "Escandallos y estandarización de recetas",
    note: "Control de costes y rendimientos constantes",
  },
  {
    title: "Gestión de proveedores",
    note: "Desarrollo de proveedores y coordinación de suministros",
  },
  { title: "Liderazgo", note: "Comunicación y supervisión de equipos" },
  {
    title: "Desarrollo culinario español y catalán",
    note: "Contacto práctico con los pintxos, las técnicas y los ingredientes de la cocina española",
  },
  {
    title: "Prácticas de restauración europea",
    note: "Ampliación de conocimientos sobre las prácticas profesionales de cocina de restaurante en Alemania y España",
  },
];

export const skillsEs = [
  "Producción de alimentos y bebidas a gran escala",
  "APPCC (HACCP)",
  "Cumplimiento de la normativa FSSAI",
  "Escandallos y estandarización de recetas",
  "Desarrollo y gestión de proveedores",
  "Análisis de datos y previsión",
  "Comunicación y liderazgo sólidos",
  "Dominio de MS Office",
];

export const countriesEs = [
  {
    name: "India",
    detail: "Hoteles, tren de lujo, cocinas de catering aéreo y restaurantes",
  },
  { name: "Kuwait", detail: "Café Coco — preapertura de panadería y pastelería" },
  { name: "EE. UU.", detail: "Princess Cruise Lines, Sitar Indian Restaurant" },
  {
    name: "Alemania",
    detail: "Desarrollo culinario práctico en un entorno de restaurante",
  },
  {
    name: "España",
    detail:
      "Desarrollo culinario en curso en Barcelona — tradiciones española y catalana",
  },
];

export const environmentsEs = [
  "Catering aéreo",
  "Cruceros",
  "Restaurante internacional",
  "Tren de lujo",
  "Hoteles",
  "Operaciones de alimentación al por menor",
];

export const achievementsEs = [
  {
    title: "Mejor proveedor de alimentos de Starbucks",
    org: "Distinción otorgada por Taj SATS Air Catering",
  },
  {
    title: "Mejor catering y mejor menú de la ciudad",
    org: "Distinción otorgada",
  },
  {
    title: "Finalista — Concurso nacional de chefs de India",
    org: "NCHMCT · Cocina continental",
  },
  {
    title: "Finalista — Concurso nacional de chefs de India",
    org: "NCHMCT · Cocina india",
  },
];

export const certificationsEs = [
  { title: "Lean Management y escandallos", org: "Lufthansa" },
  { title: "Formación en APPCC (HACCP)", org: "USPH" },
  { title: "ISO, seguridad alimentaria y gestión de residuos", org: "" },
  { title: "Seguridad contra incendios y primeros auxilios", org: "" },
  { title: "Gestión de multitudes y emergencias", org: "Carnival Cruise Lines" },
  {
    title: "Responsable certificado de balsas salvavidas",
    org: "Carnival Cruise Lines",
  },
];

export const languagesEs = [
  { name: "Maratí", level: "Lengua materna" },
  { name: "Hindi", level: "Fluido" },
  { name: "Inglés", level: "Fluido" },
  { name: "Francés", level: "Básico" },
  { name: "Telugu", level: "Conversacional" },
];

export const educationEs = {
  degree: "Diplomatura en Gestión Hotelera",
  year: "2002",
  institute:
    "Institute of Hotel Management and Applied Nutrition (IHM), Hyderabad",
};

export const interestsEs = [
  {
    title: "Fotografía",
    note: "Documenta cocinas, productos y viajes",
  },
  { title: "Dibujo", note: "Bocetos de conceptos de emplatado y formas" },
];
