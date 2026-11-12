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
