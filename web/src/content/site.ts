export const siteConfig = {
  name: "Patina Design",
  tagline: "Interior Design Studio",
  email: "info@patinadesign.uk",
  instagram: "https://www.instagram.com/patinadesignuk/",
  linkedin: "https://www.linkedin.com/in/aysel-selimbeyoglu/",
  copyright: `\u00A9 2021 - ${new Date().getFullYear()} Patina Design`,
};

export const nav = {
  links: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  headline: "Thoughtful design, timeless spaces guided by your story",
  supporting: "London-based interior design for homes, restaurants, and retail spaces that feel as good as they look.",
  primaryCta: { label: "Book a Consultation", href: "#contact" },
  secondaryCta: { label: "View Portfolio", href: "#portfolio" },
};

export const about = {
  label: "ABOUT",
  heading: "Spaces that feel right",
  paragraphs: [
    "Patina Design is a London-based interior design studio. The work is honest, balanced, and personal, built around how you actually live or host, not how spaces are supposed to look.",
    "With roots in interior architecture and product design, every project begins with listening. We take the time to understand your daily rhythms, personal values, and individual style, then create interiors that reflect who you are.",
  ],
  founder: {
    name: "Aysel Selimbeyoglu",
    title: "Founder",
  },
  credentials: [],
};

export const services = {
  label: "SERVICES",
  heading: "How we can help",
  intro:
    "Patina Design covers every stage of your project, from the first creative conversation through to technical drawings, procurement, and final installation. You get one point of contact throughout.",
  items: [
    {
      number: "01",
      name: "Interior Design and Architecture",
      description:
        "Creative concepts, space planning, technical layouts, and detailed documentation to shape interiors that feel personal, timeless, and functional.",
    },
    {
      number: "02",
      name: "Furniture, Fittings and Equipment",
      description:
        "Bespoke furniture, finishes, lighting, and artwork selected and specified so every element complements the overall design.",
    },
    {
      number: "03",
      name: "Installation and Styling",
      description:
        "Meticulous installation, final dressing, and styling to ensure every detail is polished and purposeful.",
    },
    {
      number: "04",
      name: "Site Support and Procurement",
      description:
        "On-site supervision, quality control, tendering, and sourcing at every delivery stage.",
    },
    {
      number: "05",
      name: "Technical Design Packages",
      description:
        "Construction documentation, technical drawings, and specification packages as a standalone service for projects requiring precise architectural detailing.",
    },
  ],
  cta: { label: "Discuss Your Project", href: "#contact" },
};

export const portfolio = {
  label: "PORTFOLIO",
  heading: "Selected work",
  tagline: "Residential, commercial, and hospitality projects across the UK and beyond.",
  projects: [
    {
      name: "Searcys at RICS",
      collaborator: "with LXA",
      category: "Commercial",
      image: "searcys-rics",
      alt: "Warm-toned bar interior with scalloped timber counter, navy velvet seating, and brass-lit arched shelving",
    },
    {
      name: "Orchard House Nursery",
      collaborator: "with LXA",
      category: "Residential",
      image: "orchard-house",
      alt: "Pastel nursery playroom with pink joinery, mint staircase, ring pendant lights, and child-scaled wooden furniture",
    },
    {
      name: "MNKY HSE MCR",
      collaborator: "with LXA",
      category: "Commercial",
      image: "mnky-hse",
      alt: "Dimly lit bar with herringbone timber floor, leather banquette seating, and textured coin-mosaic feature wall",
    },
    {
      name: "IGA Istanbul Airport",
      collaborator: "with Autoban",
      category: "Commercial",
      image: "iga-istanbul",
      alt: "Grand airport retail hall with sculptural spiral staircase, patterned terrazzo floor, and orchid-topped display tables",
    },
    {
      name: "Hilton Bosphorus",
      collaborator: "with Autoban",
      category: "Commercial",
      image: "hilton-bosphorus",
      alt: "Hotel suite living room with teal upholstered seating, circular chandelier, and panoramic Bosphorus views",
    },
    {
      name: "Dior, Dubai Airport",
      collaborator: "with Oral Architecture",
      category: "Commercial",
      image: "dior-dubai",
      alt: "Luxury retail interior with backlit shelving, glass display cases, and geometric timber and stone flooring",
    },
    {
      name: "DMR Peninsula",
      collaborator: "with LXA",
      category: "Commercial",
      image: "dmr-peninsula",
      alt: "Jewellery boutique with pink onyx counter, warm timber partitions, and softly lit glass display cabinets",
    },
    {
      name: "Dior, Bodrum Yalikavak Marina",
      collaborator: "with Oral Architecture",
      category: "Residential",
      image: "dior-bodrum",
      alt: "Open-air marina terrace with navy and white patterned loungers, teak decking, and parasol shading",
    },
    {
      name: "Chanel GUM Russia",
      collaborator: "with Oral Architecture",
      category: "Residential",
      image: "chanel-gum",
      alt: "Chanel boutique lounge with tweed upholstery, mannequin displays, and woven-panel digital screen surround",
    },
    {
      name: "Searcys, Battersea Power Station",
      collaborator: "with LXA",
      category: "Commercial",
      image: "searcys-battersea",
      alt: "Industrial-style restaurant with marble counter bar, blue woven chairs, and an indoor olive tree beneath exposed services",
    },
    {
      name: "MNKY HSE Lounge",
      collaborator: "with LXA",
      category: "Residential",
      image: "mnky-hse-lounge",
      alt: "Moody restaurant dining room with copper leather booths, ornate metal screens, and warm ambient lighting",
    },
    {
      name: "DMR Canary Wharf",
      collaborator: "with LXA",
      category: "Residential",
      image: "dmr-canary-wharf",
      alt: "Patek Philippe showroom with walnut panelling, glass display table, and mosaic tile accent wall",
    },
  ],
};

export const process = {
  label: "PROCESS",
  heading: "How we work",
  intro:
    "Every project follows a clear, collaborative path from first conversation to final detail.",
  steps: [
    {
      number: "01",
      name: "Research",
      description:
        "We study your lifestyle, values, and needs through conversations, site visits, and research to create spaces that truly reflect how you want to live and feel.",
    },
    {
      number: "02",
      name: "Plan",
      description:
        "We translate insights into a clear project brief, defining scope, timelines, and spatial strategies that guide every decision from this point forward.",
    },
    {
      number: "03",
      name: "Design",
      description:
        "We develop floor plans, layouts, custom furnishings, and material concepts, refining each element until the design feels complete.",
    },
    {
      number: "04",
      name: "Realize",
      description:
        "We manage delivery, oversee installation, and walk through the finished space with you to make sure every detail lands as intended.",
    },
  ],
  bridging: "Every project starts with a conversation.",
  cta: { label: "Book a Consultation", href: "#contact" },
};

export const contact = {
  label: "CONTACT",
  heading: "Have something in mind?",
  subheading: "Let's talk.",
  intro:
    "Tell us a little about your project. We typically reply within one working day to arrange an initial conversation.",
  location: "Based in London, working across the UK.",
  email: "info@patinadesign.uk",
};
