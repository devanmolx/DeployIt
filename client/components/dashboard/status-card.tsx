import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusType } from "@/context/DeploymentContext/DeploymentContext";
import { ProjectType } from "@/context/ProjectContext/ProjectContext";

interface StatusCardProps {
  project: ProjectType;
}

export function StatusCard({ project }: StatusCardProps) {
  const latestDeployment = project.deployments[0];
  
  function getStatusColor(status: string) {
    switch(status) {
      case StatusType.Success:
        return 'bg-green-500';
      case StatusType.Deploying:
        return 'bg-yellow-500 animate-pulse';
      case StatusType.Failed:
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }

  function getStatusText(status: string) {
    switch(status) {
      case StatusType.Success:
        return 'Ready';
      case StatusType.Deploying:
        return 'Building';
      case StatusType.Failed:
        return 'Failed';
      default:
        return 'Unknown';
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status</CardTitle>
      </CardHeader>
      <CardContent>
        {latestDeployment ? (
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(latestDeployment.status)}`}></div>
            <span className="font-medium">{getStatusText(latestDeployment.status)}</span>
          </div>
        ) : (
          <div className="text-muted-foreground">No deployments yet</div>
        )}
        {project.slug && (
          <div className="mt-4">
            <div className="text-sm text-muted-foreground mb-1">Production URL</div>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4"
            >
              {project.url}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}