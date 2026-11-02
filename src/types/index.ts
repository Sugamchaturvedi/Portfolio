export interface Project {
  id: string;
  title: string;
  subtitle: string;
  featured: boolean;
  category: 'Full Stack' | 'Backend / Cloud' | 'Web App';
  description: string;
  technologies: string[];
  features: string[];
  architectureHighlights: string[];
  githubUrl: string;
  hasLiveDemo?: boolean;
  liveDemoUrl?: string;
  statusBadge: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Scheduled';
  badgeColor: string;
  skillsCovered: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  details: string[];
  current?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  role: string;
  description: string;
  highlights: string[];
}

