import { createContext } from "react";
import { DeploymentType } from "@/context/DeploymentContext/DeploymentContext"

export interface ProjectType{
    _id: string;
    name: string;
    user: string;
    slug: string;
    gitRepoUrl: string;
    createdAt: Date;
    updatedAt: Date;
    deployments:DeploymentType[]
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