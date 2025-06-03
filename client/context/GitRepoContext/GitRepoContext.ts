import { createContext } from "react";

export interface GitRepoType {
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    created_at: Date;
    updated_at: Date;
  }

interface GitRepoContextType{
    gitRepos: GitRepoType[];
    setGitRepos: (gitRepos: GitRepoType[])=>void
}

const defaultValues : GitRepoContextType = {
    gitRepos: [],
    setGitRepos: ()=>{}
}

export const GitRepoContext = createContext<GitRepoContextType>(defaultValues);