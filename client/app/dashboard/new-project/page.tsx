"use client";

import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Github, GitBranch, Search } from "lucide-react";
import Link from "next/link";

const sampleRepositories = [
  {
    name: "next-blog-starter",
    description: "A statically generated blog example using Next.js and Markdown",
    stars: 2100,
    updated: "2 days ago"
  },
  {
    name: "react-dashboard-template",
    description: "Modern dashboard template with Tailwind CSS and TypeScript",
    stars: 1800,
    updated: "1 week ago"
  },
  {
    name: "ecommerce-platform",
    description: "Full-stack e-commerce solution with Next.js and Supabase",
    stars: 950,
    updated: "3 days ago"
  }
];

export default function NewProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNav />
      <div className="flex-1 p-6 md:p-8 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Create a New Project</h1>
          <p className="text-muted-foreground">
            Deploy your web project with a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Import Git Repository</CardTitle>
              <CardDescription>
                Select a Git repository to deploy
              </CardDescription>
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
                  <Input className="pl-9" placeholder="Search repositories..." />
                </div>
              </div>
              
              <div className="space-y-4">
                {sampleRepositories.map((repo) => (
                  <div
                    key={repo.name}
                    className="flex items-start justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
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
                        <span>⭐ {repo.stars}</span>
                        <span>Updated {repo.updated}</span>
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

          <Card>
            <CardHeader>
              <CardTitle>Deploy Template</CardTitle>
              <CardDescription>
                Start with a pre-configured template
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="template">Select Template</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="name">Project Name</Label>
                <Input id="name" placeholder="my-awesome-project" />
              </div>
              <Button className="w-full">Create Project</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deploy Your Own Code</CardTitle>
              <CardDescription>
                Deploy from your local machine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <p className="mb-2"># Install the CLI</p>
                <p className="text-muted-foreground">$ npm install -g deploy-cli</p>
                <p className="mt-4 mb-2"># Deploy your project</p>
                <p className="text-muted-foreground">$ deploy init</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}