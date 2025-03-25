import { Project } from './project.type';

export type ApiResponse = {
  projects: Project[];
  totalPages: number;
  currentPage: number;
  totalObjects: number;
};
