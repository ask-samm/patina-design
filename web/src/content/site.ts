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
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  headline: "Thoughtful design, timeless spaces guided by your story.",
  supporting: "Empathy in design. Simplicity in form. Care in every detail.",
  primaryCta: { label: "Book a Consultation", href: "#contact" },
  secondaryCta: { label: "View Portfolio", href: "#portfolio" },
};

export const about = {
  label: "ABOUT",
  heading: "Spaces that feel right",
  paragraphs: [
    "Patina Design is a London-based interior design studio creating spaces that look beautiful and feel right. Our approach is honest, balanced, and personal.",
    "With a strong foundation in interior architecture and product design, we connect people to their environments through refined and purposeful design.",
    "Every project begins with listening. We take the time to understand your daily rhythms, personal values, and individual style. From that, we create interiors that reflect who you are, spaces that are functional, aesthetic, and intuitively designed.",
  ],
  founder: {
    name: "Aysel Selimbeyoglu",
    title: "Founder",
  },
  credentials: ["Interiors of the Year 2024"],
};

export const services = {
  label: "SERVICES",
  heading: "What we do",
  intro:
    "From concept to completion, Patina Design provides thoughtful guidance at every stage of your project, from initial creative direction and detailed architectural drawings to the full installation of interiors.",
  items: [
    {
      name: "Interior Design and Architecture",
      description:
        "The team creates tailored interiors from start to finish by combining creative concepts, space planning, technical layouts, and detailed design documentation. Each project is thoughtfully curated to feel personal, timeless, and effortlessly functional.",
    },
    {
      name: "Furniture, Fittings and Equipment",
      description:
        "Patina Design curates bespoke furniture, finishes, lighting, artwork, and all specifications to ensure every element complements the overall design and enhances the personality of each space.",
    },
    {
      name: "Installation and Styling",
      description:
        "Patina Design brings visions to life through meticulous installation, final dressing, styling, and photography preparation to ensure every detail feels polished, purposeful, and uniquely tailored.",
    },
    {
      name: "Site Support and Procurement",
      description:
        "Patina Design oversees every delivery stage with supervision, quality control, tendering, and sourcing to ensure seamless execution and the highest standards.",
    },
    {
      name: "Technical Design Packages",
      description:
        "Comprehensive technical drawings, construction documentation, and specification packages delivered as a standalone service for projects requiring precise architectural detailing.",
    },
  ],
  cta: { label: "Discuss Your Project", href: "#contact" },
};

export const portfolio = {
  label: "PORTFOLIO",
  heading: "Selected work",
  tagline: "Beyond Architecture. Creating Experiences.",
  projects: [
    {
      name: "Searcys at RICS",
      collaborator: "with LXA",
      category: "Commercial",
      image: "searcys-rics",
    },
    {
      name: "Orchard House Nursery",
      collaborator: "with LXA",
      category: "Residential",
      image: "orchard-house",
    },
    {
      name: "MNKY HSE MCR",
      collaborator: "with LXA",
      category: "Commercial",
      image: "mnky-hse",
    },
    {
      name: "IGA Istanbul Airport",
      collaborator: "with Autoban",
      category: "Commercial",
      image: "iga-istanbul",
    },
    {
      name: "Hilton Bosphorus",
      collaborator: "with Autoban",
      category: "Commercial",
      image: "hilton-bosphorus",
    },
    {
      name: "Dior, Dubai Airport",
      collaborator: "with Oral Architecture",
      category: "Commercial",
      image: "dior-dubai",
    },
    {
      name: "DMR Peninsula",
      collaborator: "with LXA",
      category: "Commercial",
      image: "dmr-peninsula",
    },
    {
      name: "Dior, Bodrum Yalikavak Marina",
      collaborator: "with Oral Architecture",
      category: "Residential",
      image: "dior-bodrum",
    },
    {
      name: "Chanel GUM Russia",
      collaborator: "with Oral Architecture",
      category: "Residential",
      image: "chanel-gum",
    },
    {
      name: "Searcys, Battersea Power Station",
      collaborator: "with LXA",
      category: "Commercial",
      image: "searcys-battersea",
    },
    {
      name: "MNKY HSE Lounge",
      collaborator: "with LXA",
      category: "Residential",
      image: "mnky-hse-lounge",
    },
    {
      name: "DMR Canary Wharf",
      collaborator: "with LXA",
      category: "Residential",
      image: "dmr-canary-wharf",
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
        "As construction nears completion, we conduct a final walkthrough with you to ensure every detail aligns with our shared vision.",
    },
  ],
  bridging: "Ready to start your project?",
  cta: { label: "Get in Touch", href: "#contact" },
};

export const contact = {
  label: "CONTACT",
  heading: "Have something in mind?",
  subheading: "Let's talk.",
  intro:
    "Tell us about your project and we'll arrange an initial conversation.",
  location: "Based in London, working across the UK.",
  email: "info@patinadesign.uk",
};
