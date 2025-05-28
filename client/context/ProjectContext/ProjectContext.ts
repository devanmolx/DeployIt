import { createContext } from "react";

export interface ProjectType{
    _id: string;
    user: string;
    slug: string;
    gitRepoUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

interface ProjectContextType{
    projects: ProjectType[];
    setProjects: (project: ProjectType[]) => void;
}

const defaultValues = {
    projects: [],
    setProjects:()=>{}
}

export const ProjectContext = createContext<ProjectContextType>(defaultValues);