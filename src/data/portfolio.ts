export interface Education {
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Contribution {
  project: string;
  description: string;
  date: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Contact {
  email: string;
  socials: SocialLink[];
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  education: Education[];
  experiences: Experience[];
  hobbies: string[];
  projects: Project[];
  contributions: Contribution[];
  contact: Contact;
}

export const portfolioData: PortfolioData = {
  name: "Mattia Beccari",
  title: "Software Developer",
  tagline: "Building digital experiences that matter",
  about:
    "I'm a passionate developer focused on creating innovative web solutions. With a keen eye for design and a love for clean code, I transform ideas into reality.",
  education: [
    {
      institution: "University Name",
      degree: "Bachelor's in Computer Science",
      year: "2018 - 2022",
      description: "Specialized in software engineering and web development.",
    },
  ],
  experiences: [
    {
      company: "Company Name",
      role: "Software Developer",
      period: "2022 - Present",
      description:
        "Developing modern web applications and leading frontend initiatives.",
      technologies: ["React", "TypeScript", "Node.js"],
    },
  ],
  hobbies: ["Open Source", "Reading Tech Blogs", "Gaming", "Photography"],
  projects: [
    {
      name: "Project One",
      description:
        "An innovative web application that solves real-world problems.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://example.com",
      github: "https://github.com/username/project",
    },
  ],
  contributions: [
    {
      project: "Open Source Project",
      description: "Added new features and fixed bugs.",
      date: "2023",
    },
  ],
  contact: {
    email: "hello@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com/username", icon: "github" },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/username",
        icon: "linkedin",
      },
      { name: "Twitter", url: "https://twitter.com/username", icon: "twitter" },
    ],
  },
};
