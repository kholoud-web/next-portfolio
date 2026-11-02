export interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  metricOrPractice: string;
}
