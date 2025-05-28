"use client"

import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { DeploymentContext, DeploymentType } from './DeploymentContext'
import { UserContext } from '../UserContext/UserContext';
import axios from 'axios';
import { deploymentsRoute } from '@/utils/routeProvider';

const DeploymentContextProvider = ({ children }: { children: ReactNode }) => {

    const [deployments, setDeployments] = useState<DeploymentType[]>([]);
    const { user } = useContext(UserContext);
    
        async function fetchProjects() {
            try {
                const response = await axios.post(deploymentsRoute, { userId: user._id });
                setDeployments(response.data.deployments);
            } catch (error) {
                console.log(error);
            }
        }
    
        useEffect(() => {
            if (user._id) {   
                fetchProjects();
            }
        }, [user])

    return (
        <DeploymentContext.Provider value={{deployments , setDeployments}}>
            {children}
        </DeploymentContext.Provider>
    )
}

export default DeploymentContextProvider