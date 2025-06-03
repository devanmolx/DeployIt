"use client"
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { GitRepoContext, GitRepoType } from './GitRepoContext'
import { gitReposRoute } from '@/utils/routeProvider';
import { UserContext } from '../UserContext/UserContext';
import axios from 'axios';

const GitRepoContextProviser = ({ children }: { children: ReactNode }) => {

    const [gitRepos, setGitRepos] = useState<GitRepoType[]>([]);
    const { user } = useContext(UserContext);

    async function fetchGitRepos() {
        try {
            if (user._id) {
                const response = await axios.post(gitReposRoute, { userId: user._id });
                if (response.data.status) {
                    setGitRepos(response.data.repos);
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        
        fetchGitRepos();

    } , [user._id])

    return (
        <GitRepoContext.Provider value={{ gitRepos, setGitRepos }}>
            {children}
        </GitRepoContext.Provider>
    )
}

export default GitRepoContextProviser