import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusType } from "@/context/DeploymentContext/DeploymentContext"
import {DeploymentType} from "@/context/DeploymentContext/DeploymentContext"
import { GitCommit } from "lucide-react";

interface PropType {
    deployments:DeploymentType[]
}

export function ProjectDeployments({deployments}:PropType) {

  function getStatusColor(status: StatusType) {
    switch(status) {
      case StatusType.Success:
        return 'bg-green-500';
      case StatusType.Deploying:
        return 'bg-yellow-500';
      case StatusType.Failed:
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Deployments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deployments.map((deployment) => (
            <div key={deployment._id} className="flex items-start">
              <div className={`mt-1 w-3 h-3 rounded-full mr-3 ${getStatusColor(deployment.status)}`}></div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium">
                    {deployment.commitMsg || "No commit message"}
                  </p>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(deployment.createdAt), { addSuffix: true })}
                  </span>
                </div>
                {deployment.commitSha && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <GitCommit className="mr-1 h-3 w-3" />
                    <code>{deployment.commitSha.substring(0, 7)}</code>
                  </div>
                )}
                <div className="text-xs text-muted-foreground">
                  {deployment.status === StatusType.Deploying ? 'Building...' : 
                   deployment.status === StatusType.Success ? 'Deployment successful' : 
                   deployment.status === StatusType.Failed ? 'Deployment failed' : 'Queued for deployment'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}