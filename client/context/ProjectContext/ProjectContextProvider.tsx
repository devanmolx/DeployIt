"use client"

import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { ProjectContext, ProjectType } from './ProjectContext'
import { UserContext } from '../UserContext/UserContext';
import axios from 'axios';
import { projectsRoute } from '@/utils/routeProvider';

const ProjectContextProvider = ({ children }: { children: ReactNode }) => {

    const [projects, setProjects] = useState<ProjectType[]>([]);
    const { user } = useContext(UserContext);

    async function fetchProjects() {
        try {
            const response = await axios.post(projectsRoute, { userId: user._id });
            setProjects(response.data.projects);
            console.log(response.data.projects);
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
        <ProjectContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider