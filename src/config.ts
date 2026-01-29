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
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
skills: [],
  projects: [],
  experience: [],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
