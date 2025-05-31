"use client";

import { useContext, useEffect, useState } from "react";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Github, GitBranch, Search } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { UserContext } from "@/context/UserContext/UserContext";
import axios from "axios";
import { gitReposRoute, newProjectRoute, slugAvailablityRoute } from "@/utils/routeProvider";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";


interface GitRepoType {
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
}

const checkSubdomainAvailability = async (subdomain: string): Promise<boolean> => {
  try {
    const response = await axios.post(slugAvailablityRoute, { slug: subdomain });
    if (response.data.status) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default function NewProjectPage() {
  const [selectedRepo, setSelectedRepo] = useState<GitRepoType | null>(null);
  const [subdomain, setSubdomain] = useState("");
  const [subdomainError, setSubdomainError] = useState("");
  const [gitUrl, setGitUrl] = useState("");
  const [template, setTemplate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [gitRepos, setGitRepos] = useState<GitRepoType[]>([]);
  const [searchRepos, setSearchRepos] = useState<string>("");

  const router = useRouter();

  const handleSubdomainChange = async (value: string) => {
    setSubdomain(value);
    if (value.length < 3) {
      setSubdomainError("Subdomain must be at least 3 characters.");
      return;
    }
    const available = await checkSubdomainAvailability(value);
    setSubdomainError(available ? "" : "This subdomain is already taken.");
  };

  const handleRepoSelect = (repo: GitRepoType) => {
    console.log(repo)
    setSelectedRepo(repo);
    setGitUrl(repo.html_url);
  };

  const handleCreateProject = async () => {
    if (!subdomain || !projectName) {
      alert("Fill in all required fields.");
      return;
    }
    if (subdomainError) {
      alert("Please fix errors before submitting.");
      return;
    }
    try {

      const response = await axios.post(newProjectRoute, { name: projectName, userId: user._id, slug: subdomain, gitRepoUrl: gitUrl , template })

      if (response.data.status) {
        router.push(`projects/${response.data.project._id}`);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchGitRepos();
  }, [user._id])

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

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNav />
      <div className="flex-1 p-6 md:p-8 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Create a New Project</h1>
          <p className="text-muted-foreground">Deploy your web project with a few clicks.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Import from GitHub */}
          <Card>
            <CardHeader>
              <CardTitle>Import Git Repository</CardTitle>
              <CardDescription>Select a Git repository to deploy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <Github className="h-4 w-4" />
                    Connect with GitHub
                  </Button>
                </Link>
                <div className="relative flex-[2]">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input onChange={(e)=>{setSearchRepos(e.target.value)}} className="pl-9" placeholder="Search repositories..." />
                </div>
              </div>

              <div className="space-y-4 max-h-60 overflow-y-scroll">
                {gitRepos.filter(x => x.full_name.toLowerCase().includes(searchRepos.toLocaleLowerCase())).map((repo) => (
                  <div
                    key={repo.name}
                    className={clsx(
                      "flex items-start justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer",
                      selectedRepo?.name === repo.name && "border-primary bg-muted/40"
                    )}
                    onClick={() => handleRepoSelect(repo)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Github className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{repo.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {repo.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {/* <span>⭐ {repo.stars}</span>
                        <span>Updated {repo.u}</span> */}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <GitBranch className="h-4 w-4" />
                      Import
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="git" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 border border-gray-300 rounded-lg overflow-hidden">
              <TabsTrigger
                value="git"
                className="data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-black transition"
              >
                Deploy Git Repo
              </TabsTrigger>
              <TabsTrigger
                value="template"
                className="data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-black transition"
              >
                Deploy Template
              </TabsTrigger>
            </TabsList>


            {/* Deploy Git Repo Tab */}
            <TabsContent value="git">
              <Card>
                <CardHeader>
                  <CardTitle>Deploy Project</CardTitle>
                  <CardDescription>Start with a Git project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Project Name</Label>
                    <Input
                      id="name"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="my-awesome-project"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subdomain">Subdomain</Label>
                    <Input
                      id="subdomain"
                      value={subdomain}
                      onChange={(e) => handleSubdomainChange(e.target.value)}
                      placeholder="myproject"
                    />
                    {subdomainError && (
                      <p className="text-sm text-red-500 mt-1">{subdomainError}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="giturl">Git Repository URL</Label>
                    <Input
                      id="giturl"
                      value={gitUrl}
                      onChange={(e) => setGitUrl(e.target.value)}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>

                  <Button className="w-full" onClick={handleCreateProject}>
                    Create Project
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Deploy Template Tab */}
            <TabsContent value="template">
              <Card>
                <CardHeader>
                  <CardTitle>Deploy Template</CardTitle>
                  <CardDescription>Start with a template project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="template">Select Template</Label>
                    <Select onValueChange={(val) => setTemplate(val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a template" />
                      </SelectTrigger>
                      <SelectContent>
                        {/* <SelectItem value="next">Next.js</SelectItem> */}
                        <SelectItem value="react">React</SelectItem>
                        {/* <SelectItem value="vue">Vue</SelectItem> */}
                        {/* <SelectItem value="astro">Astro</SelectItem> */}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="name">Project Name</Label>
                    <Input
                      id="name"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="my-awesome-project"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subdomain">Subdomain</Label>
                    <Input
                      id="subdomain"
                      value={subdomain}
                      onChange={(e) => handleSubdomainChange(e.target.value)}
                      placeholder="myproject"
                    />
                    {subdomainError && (
                      <p className="text-sm text-red-500 mt-1">{subdomainError}</p>
                    )}
                  </div>

                  <Button className="w-full" onClick={handleCreateProject}>
                    Create Project
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </div>
  );
}
