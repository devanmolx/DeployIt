import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/lib/data";

interface StatusCardProps {
  project: Project;
}

export function StatusCard({ project }: StatusCardProps) {
  const latestDeployment = project.deployments[0];
  
  function getStatusColor(status: string) {
    switch(status) {
      case 'success':
        return 'bg-green-500';
      case 'building':
        return 'bg-yellow-500 animate-pulse';
      case 'failed':
        return 'bg-red-500';
      case 'queued':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  }

  function getStatusText(status: string) {
    switch(status) {
      case 'success':
        return 'Ready';
      case 'building':
        return 'Building';
      case 'failed':
        return 'Failed';
      case 'queued':
        return 'Queued';
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
        {project.url && (
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