import { RenderableData } from './ui-types';
import groupBy from 'lodash/groupBy';

export class Resume {
  constructor(
    public skills: Skill[],
    public projects: Project[],
  ) {}

  getSkillsByCategory(): { [category: string]: Skill[] } {
    return groupBy(this.skills, (skill) => skill.category);
  }
}

export interface Skill {
  id: string;
  category: string;
  name: string;
  description?: string;
  color: string;
  foregroundColor: string;
  renderableData: RenderableData;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  skillIds: string[];
  color: string;
  foregroundColor: string;
  renderableData: RenderableData;
}
