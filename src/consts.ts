import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Manuel Duran",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Manuel Duran",
}

// Work Page
export const WORK: Page = {
  TITLE: "Trabajo",
  DESCRIPTION: "Lugares donde he trabajado.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Blog de Manuel Durán.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos recientes en los que he trabajado.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Buscar todas las publicaciones y proyectos por palabra clave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Trabajos", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contacto@manuelduran.cl",
    HREF: "mailto:contacto@manuelduran.cl",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "sonixmc",
    HREF: "https://github.com/sonixmc"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "manuelpduranb",
    HREF: "https://www.linkedin.com/in/manuelpduranb/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "manuelduran.cl",
    HREF: "https://www.instagram.com/manuelduran.cl/",
  },
  { 
    NAME: "instagram",
    ICON: "instagram",
    TEXT: "manuelduran.cl",
    HREF: "https://www.instagram.com/manuelduran.cl/",
  },
]

