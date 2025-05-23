import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { ProjectCard } from "@/components/dashboard/project-card";
import { RecentDeployments } from "@/components/dashboard/recent-deployments";
import { AnalyticsCard } from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, analyticsData } from "@/lib/data";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Get the most recent deployments across all projects
  const recentDeployments = projects
    .flatMap(project => project.deployments)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  // Calculate total deployment count for the week
  const totalDeployments = analyticsData.deployments.reduce((sum, item) => sum + item.count, 0);
  
  // Calculate total visitors for the week
  const totalVisitors = analyticsData.visitors.reduce((sum, item) => sum + item.count, 0);
  
  // Calculate total bandwidth for the week
  const totalBandwidth = analyticsData.bandwidth.reduce((sum, item) => sum + item.gb, 0).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNav />
      <div className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here is an overview of your projects and recent activity.
            </p>
          </div>
          <Link href="/dashboard/new-project" className="mt-4 md:mt-0">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> New Project
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AnalyticsCard 
            title="Total Deployments"
            value={totalDeployments.toString()}
            description="Total deployments this week"
            data={analyticsData.deployments}
            dataKey="count"
            color="hsl(var(--chart-1))"
          />
          <AnalyticsCard 
            title="Total Visitors"
            value={totalVisitors.toString()}
            description="Unique visitors this week"
            data={analyticsData.visitors}
            dataKey="count"
            color="hsl(var(--chart-2))"
          />
          <AnalyticsCard 
            title="Bandwidth Usage"
            value={totalBandwidth}
            description="Total bandwidth used this week"
            data={analyticsData.bandwidth}
            dataKey="gb"
            color="hsl(var(--chart-3))"
            valueSuffix=" GB"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <RecentDeployments deployments={recentDeployments} />
          </div>
        </div>
      </div>
    </div>
  );
}