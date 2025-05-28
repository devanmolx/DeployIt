"use client"
import { createContext } from "react";

export enum StatusType{
    Success = "Success",
    Failed = "Failed",
    Deploying = "Deploying"
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
    logs: LogType[];
    createdAt: Date;
    updatedAt: Date;
    user: string;
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