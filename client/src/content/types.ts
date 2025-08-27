export interface Content {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  socials: Social[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
}

export interface Social {
  label: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
  group: 'frontend' | 'backend' | 'tools' | 'automation' | 'ai' | 'crm';
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  start: string;
  end: string;
}

export interface Project {
  title: string;
  summary: string;
  description?: string;
  features?: string[];
  challenges?: string;
  solution?: string;
  links: Record<string, string | undefined>;
  tech: string[];
  tags: string[];
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  url?: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}
