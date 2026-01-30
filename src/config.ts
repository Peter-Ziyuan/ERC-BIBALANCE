interface Project {
  name: string;
  description: string;
  link?: string;
  skills?: string[];
}

interface Experience {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
}

interface Education {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  aboutMe: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

export const siteConfig: SiteConfig = {
  name: "ERC BIBALANCE Project",
  title: "Understanding Dyslexia and the Brain",
  description:"A reader-friendly introduction website by BCBL",
  accentColor: "#1d4ed8",
  social: {
    email: "z.li@bcbl.eu",
    linkedin: "https://www.linkedin.com/in/educational-neuroscience-and-developmental-disorders-0a25223a8/",
    twitter: "https://x.com/ENDL_BCBL",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe: "",
skills: [],
  projects: [],
  experience: [],
  education: [],
};
