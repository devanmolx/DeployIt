"use client"
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { StatusCard } from "@/components/dashboard/status-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, GitBranch, ExternalLink, Settings, Activity, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectType } from "@/context/ProjectContext/ProjectContext";
import { LogType , StatusType } from "@/context/DeploymentContext/DeploymentContext";
import axios from "axios";
import { projectRoute } from "@/utils/routeProvider";
import { ProjectDeployments } from "@/components/project-deployments";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {

  const [project, setProject] = useState<ProjectType>();
  const router = useRouter();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id])

  async function fetchProject(id: string) {
    try {
      const response = await axios.post(projectRoute, { id });

      if (response.data.status) {
        setProject(response.data.project);
      }

    } catch (error) {
      console.log(error);
    }
  }

  if (project == undefined) {
    return (
      <div className=" w-screen h-screen">
        <Loading />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNav />
      <div className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold">{project.name}</h1>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" /> Settings
            </Button>
            <Button onClick={() => { router.push(project.url) }} className="gap-2">
              <ArrowUpRight className="h-4 w-4" /> Live
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="deployments">Deployments</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                    <CardDescription>
                      Details about your project configuration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* <div>
                        <div className="text-sm font-medium">Framework</div>
                        <div className="text-sm text-muted-foreground">{project.framework}</div>
                      </div> */}
                      {project.gitRepoUrl && (
                        <div>
                          <div className="text-sm font-medium">GitHub Repository</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <GitBranch className="h-4 w-4" />
                            {project.gitRepoUrl}
                          </div>
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium">Created</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(project.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Team</div>
                        <div className="text-sm text-muted-foreground">{'Personal'}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Environment Variables</CardTitle>
                    <CardDescription>
                      Stored securely and exposed to your deployment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4 text-center">
                        <p className="text-sm text-muted-foreground">
                          No environment variables have been added yet.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Add Environment Variable
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    <CardDescription>
                      Irreversible actions for your project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="destructive" size="sm" className="gap-2">
                      <Trash2 className="h-4 w-4" /> Delete Project
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <StatusCard project={project} />
                <ProjectDeployments deployments={project.deployments} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="deployments" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Deployment History</CardTitle>
                <CardDescription>
                  View all previous deployments for this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[...project.deployments].reverse().map((deployment) => (
                    <div key={deployment._id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 
                              ${deployment.status === StatusType.Success ? 'bg-green-500' :
                                deployment.status === StatusType.Deploying ? 'bg-yellow-500 animate-pulse' :
                                  deployment.status === StatusType.Failed ? 'bg-red-500' : 'bg-blue-500'}`}
                          ></div>
                          <p className="font-medium">
                            {deployment.commitMsg || "No commit message"}
                          </p>
                          <span className="ml-auto text-sm text-muted-foreground">
                            {new Date(deployment.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Status:</span>{" "}
                            <span className="font-medium">
                              {deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                            </span>
                          </div>
                          {/* {deployment.branch && (
                            <div>
                              <span className="text-muted-foreground">Branch:</span>{" "}
                              <span className="font-medium">{deployment.branch}</span>
                            </div>
                          )} */}
                          {deployment.commitSha && (
                            <div>
                              <span className="text-muted-foreground">Commit:</span>{" "}
                              <code className="text-xs bg-muted px-1 py-0.5 rounded">
                                {deployment.commitSha.substring(0, 7)}
                              </code>
                            </div>
                          )}
                          {deployment.url && (
                            <div>
                              <span className="text-muted-foreground">URL:</span>{" "}
                              <a
                                href={deployment.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                              >
                                {deployment.url.split("//")[1]}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="pt-4">
            <Card className="max-h-[600px] overflow-auto">
              <CardHeader>
                <CardTitle>Latest Deployment Logs</CardTitle>
                <CardDescription>
                  Showing logs for latest deployment {project.deployments?.[0]?._id || "(none)"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {project.deployments?.[0]?.logs?.length > 0 ? (
                  <div className="space-y-1 max-h-[500px] overflow-auto font-mono text-xs  p-4 rounded whitespace-pre-wrap">
                    {project.deployments[0].logs
                      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                      .map((log: LogType, idx: number) => (
                        <div key={idx}>
                          <span className="text-gray-500 mr-2">
                            [{new Date(log.createdAt).toLocaleTimeString()}]
                          </span>
                          {log.message}
                        </div>
                      ))}
                  </div>
                ) : (
                  <p>No logs available for the latest deployment.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>



          <TabsContent value="analytics" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Analytics</CardTitle>
                <CardDescription>
                  View performance metrics for your project
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">Analytics coming soon</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-md">
                    We are working on providing detailed analytics for your project. Check back soon for visitor counts, performance metrics, and more.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>
                  Configure your project settings and deployment options
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">Settings panel coming soon</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-md">
                    The full settings panel is under development. Soon you will be able to configure build settings, environment variables, domains, and more.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}