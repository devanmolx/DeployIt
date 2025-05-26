import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/data";
import { CalendarDays, GitBranch, Github } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const latestDeployment = project.deployments[0];
  
  function getStatusColor(status: string) {
    switch(status) {
      case 'success':
        return 'bg-green-500';
      case 'building':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      case 'queued':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
            <CardTitle className="text-lg">{project.name}</CardTitle>
          </Link>
          <Badge variant="outline">{project.framework}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-1 h-3 w-3" />
          <span>Updated {formatDistanceToNow(new Date(project.updatedAt), { addSuffix: true })}</span>
        </div>
        {project.githubRepo && (
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Github className="mr-1 h-3 w-3" />
            <span>{project.githubRepo}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 border-t bg-muted/50">
        {latestDeployment && (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(latestDeployment.status)}`}></div>
              <span className="text-xs text-muted-foreground">
                {latestDeployment.status === 'building' ? 'Building...' : 
                 latestDeployment.status === 'success' ? 'Ready' : 
                 latestDeployment.status === 'failed' ? 'Failed' : 'Queued'}
              </span>
            </div>
            {latestDeployment.branch && (
              <div className="flex items-center text-xs text-muted-foreground">
                <GitBranch className="mr-1 h-3 w-3" />
                {latestDeployment.branch}
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}