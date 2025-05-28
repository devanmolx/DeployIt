import { createContext } from "react";

enum StatusType{
    Success,
    Failed,
    Deploying
}

interface LogType{
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface DeploymentType{
    _id: string;
    project: string;
    status: StatusType;
    logs: LogType[]
}

interface DeploymentContextType{
    deployments: DeploymentType[];
    setDeployments: (deployments: DeploymentType[]) => void
}

const defaultValues = {
    deployments : [],
    setDeployments :  ()=>{}
}

export const DeploymentContext = createContext<DeploymentContextType>(defaultValues);