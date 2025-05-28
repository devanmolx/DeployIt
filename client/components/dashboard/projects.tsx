"use client"
import React, { useContext } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectContext } from '@/context/ProjectContext/ProjectContext';
import { ProjectCard } from './project-card';

const Projects = () => {

    const { projects } = useContext(ProjectContext);
    console.log(projects)

    return (
        <div className="lg:col-span-2">
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Your Projects</CardTitle>
                    <CardDescription>
                        {projects.length} total projects
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Projects