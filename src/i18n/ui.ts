/**
 * UI string dictionaries, organised by feature/component.
 * English is the source language and the fallback for missing keys.
 */

export const en = {
  common: {
    skipToContent: "Skip to content",
    email: "Email",
    phone: "Phone",
    location: "Location",
    present: "Present",
    languageLabel: "Language",
    switchToEnglish: "Switch language to English",
    switchToSpanish: "Cambiar el idioma a español",
  },
  nav: {
    ariaMain: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Home",
    about: "About",
    experience: "Experience",
    expertise: "Expertise",
    achievements: "Achievements",
    certifications: "Certifications",
    contact: "Contact",
    emailCta: "Email",
    emailChef: "Email Deepak",
    call: "Call {phone}",
  },
  hero: {
    portraitAlt: "Portrait of {name}, professional chef, in chef whites",
    intro:
      "Flight catering, cruise lines, international restaurants, luxury rail and hotels — high-volume kitchens across India, Kuwait and the USA, now continuing his culinary development in Barcelona.",
    ctaExperience: "View My Experience",
    ctaEmail: "Email Deepak",
    basedIn: "Based in {location}",
    scroll: "Scroll",
    scrollAria: "Scroll to professional profile",
    factSince: "In kitchens since",
    factCountries: "Countries worked in",
    factEnvironments: "Hospitality environments",
    factRoles: "Documented roles",
  },
  about: {
    eyebrow: "Professional Profile",
    title: "A career built around craft, precision and scale.",
    body: "His work spans flight kitchens, cruise operations, international restaurants, luxury train hospitality, hotels and retail food operations — environments where consistency, food safety and volume are non-negotiable.",
    quote:
      "Currently based in Barcelona — continuing his international culinary development.",
    coreDisciplines: "Core Disciplines",
    keySkills: "Key Skills",
    highlights: [
      "Bakery",
      "Pastry",
      "Mass Food Production",
      "Kitchen Operations",
      "Food Safety",
      "Cost Management",
    ],
  },
  career: {
    eyebrow: "Career Journey",
    title: "Kitchens on the ground, at altitude and at sea.",
    intro:
      "A documented progression through bakery, pastry and high-volume production across India, Kuwait and the USA — followed by ongoing culinary development in Europe. Currently based in Barcelona.",
    routeSoFar: "The route so far",
    documentedRoles: "Documented roles",
    countries: "Countries",
    environments: "Environments",
    currentlyBasedIn: "Currently based in",
    developmentGroup: "International Culinary Development",
    documentedGroup: "Documented Professional Experience",
    currentChapter: "Current chapter",
  },
  expertise: {
    eyebrow: "Culinary Expertise",
    title: "Disciplines practised daily, at scale.",
  },
  international: {
    eyebrow: "International Experience",
    title: "Five countries. Six hospitality environments.",
    environments: "Environments",
  },
  achievements: {
    eyebrow: "Achievements",
    title: "Recognition earned on the line.",
  },
  certifications: {
    eyebrow: "Certifications & Training",
    title: "Trained to international safety and management standards.",
    education: "Education",
  },
  languages: {
    eyebrow: "Languages",
    title: "Working across languages and regions.",
    interestsEyebrow: "Beyond the Kitchen",
    interestsTitle: "Personal interests.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about the next kitchen.",
    intro:
      "For roles, consulting or collaboration in flight catering, hospitality and high-volume production kitchens.",
    cta: "Get In Touch",
  },
  export: {
    groupLabel: "Export this CV",
    pdf: "Export PDF",
    print: "Print",
    pdfAria: "Export this CV as a PDF document",
    printAria: "Open the print dialog for this CV",
    pdfToast: "Preparing your PDF — choose \u201cSave as PDF\u201d in the dialog.",
    printToast: "Opening the print dialog\u2026",
    documentTitle: "{name} — Curriculum Vitae",
  },
  footer: {
    rights: "© {year} {name}. All rights reserved.",
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    back: "Return to Home",
  },
  meta: {
    title: "Deepak Yashwant Telang | Professional Chef",
    description:
      "Professional chef specializing in bakery, pastry, mass food production and culinary operations, with international experience across India, Kuwait, the USA and Europe.",
  },
};

export type Dictionary = typeof en;

export const es: Dictionary = {
  common: {
    skipToContent: "Saltar al contenido",
    email: "Correo electrónico",
    phone: "Teléfono",
    location: "Ubicación",
    present: "Actualidad",
    languageLabel: "Idioma",
    switchToEnglish: "Switch language to English",
    switchToSpanish: "Cambiar el idioma a español",
  },
  nav: {
    ariaMain: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Inicio",
    about: "Perfil",
    experience: "Trayectoria",
    expertise: "Especialidades",
    achievements: "Reconocimientos",
    certifications: "Certificaciones",
    contact: "Contacto",
    emailCta: "Escribir",
    emailChef: "Escribir a Deepak",
    call: "Llamar al {phone}",
  },
  hero: {
    portraitAlt: "Retrato de {name}, chef profesional, con chaquetilla de cocina",
    intro:
      "Catering aéreo, cruceros, restaurantes internacionales, trenes de lujo y hoteles: cocinas de gran volumen en India, Kuwait y Estados Unidos, y actualmente continúa su desarrollo culinario en Barcelona.",
    ctaExperience: "Ver mi trayectoria",
    ctaEmail: "Escribir a Deepak",
    basedIn: "Con base en {location}",
    scroll: "Desplazar",
    scrollAria: "Desplazarse al perfil profesional",
    factSince: "En cocinas desde",
    factCountries: "Países donde ha trabajado",
    factEnvironments: "Entornos hosteleros",
    factRoles: "Puestos documentados",
  },
  about: {
    eyebrow: "Perfil profesional",
    title: "Una carrera construida sobre oficio, precisión y escala.",
    body: "Su trabajo abarca cocinas de catering aéreo, operaciones en cruceros, restaurantes internacionales, hostelería en trenes de lujo, hoteles y operaciones de alimentación al por menor: entornos donde la constancia, la seguridad alimentaria y el volumen no admiten concesiones.",
    quote:
      "Actualmente reside en Barcelona, donde continúa su desarrollo culinario internacional.",
    coreDisciplines: "Disciplinas principales",
    keySkills: "Competencias clave",
    highlights: [
      "Panadería",
      "Pastelería",
      "Producción alimentaria a gran escala",
      "Operaciones de cocina",
      "Seguridad alimentaria",
      "Control de costes",
    ],
  },
  career: {
    eyebrow: "Trayectoria profesional",
    title: "Cocinas en tierra, en altura y en alta mar.",
    intro:
      "Una progresión documentada por la panadería, la pastelería y la producción de gran volumen en India, Kuwait y Estados Unidos, seguida de un desarrollo culinario continuo en Europa. Actualmente con base en Barcelona.",
    routeSoFar: "El recorrido hasta ahora",
    documentedRoles: "Puestos documentados",
    countries: "Países",
    environments: "Entornos",
    currentlyBasedIn: "Con base actualmente en",
    developmentGroup: "Desarrollo culinario internacional",
    documentedGroup: "Experiencia profesional documentada",
    currentChapter: "Etapa actual",
  },
  expertise: {
    eyebrow: "Especialidades culinarias",
    title: "Disciplinas que practica a diario y a gran escala.",
  },
  international: {
    eyebrow: "Experiencia internacional",
    title: "Cinco países. Seis entornos hosteleros.",
    environments: "Entornos",
  },
  achievements: {
    eyebrow: "Reconocimientos",
    title: "Reconocimientos ganados en la cocina.",
  },
  certifications: {
    eyebrow: "Certificaciones y formación",
    title: "Formado según estándares internacionales de seguridad y gestión.",
    education: "Formación académica",
  },
  languages: {
    eyebrow: "Idiomas",
    title: "Trabajando entre idiomas y regiones.",
    interestsEyebrow: "Más allá de la cocina",
    interestsTitle: "Intereses personales.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de la próxima cocina.",
    intro:
      "Para puestos, consultoría o colaboraciones en catering aéreo, hostelería y cocinas de producción de gran volumen.",
    cta: "Ponerse en contacto",
  },
  export: {
    groupLabel: "Exportar este CV",
    pdf: "Exportar PDF",
    print: "Imprimir",
    pdfAria: "Exportar este CV como documento PDF",
    printAria: "Abrir el cuadro de impresión de este CV",
    pdfToast: "Preparando tu PDF: elige \u201cGuardar como PDF\u201d en el cuadro de diálogo.",
    printToast: "Abriendo el cuadro de impresión\u2026",
    documentTitle: "{name} — Currículum vítae",
  },
  footer: {
    rights: "© {year} {name}. Todos los derechos reservados.",
  },
  notFound: {
    title: "404",
    message: "Vaya, no encontramos esta página",
    back: "Volver al inicio",
  },
  meta: {
    title: "Deepak Yashwant Telang | Chef profesional",
    description:
      "Chef profesional especializado en panadería, pastelería, producción alimentaria a gran escala y operaciones de cocina, con experiencia internacional en India, Kuwait, Estados Unidos y Europa.",
  },
};

export const dictionaries = { en, es };
