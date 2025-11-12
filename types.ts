
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
  gradient: string;
}

export interface Project {
  title: string;
  description: string;
  details: string;
  tags: string[];
  type: 'gradient' | 'image';
  Icon?: React.FC<{className: string}>;
  gradient?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  Icon: React.FC<{className: string}>;
  iconBg: string;
  iconColor: string;
}
