import { formatDistanceToNow } from "date-fns";
import { Deployment } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitCommit } from "lucide-react";

interface RecentDeploymentsProps {
  deployments: Deployment[];
}

export function RecentDeployments({ deployments }: RecentDeploymentsProps) {
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
    <Card>
      <CardHeader>
        <CardTitle>Recent Deployments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deployments.map((deployment) => (
            <div key={deployment.id} className="flex items-start">
              <div className={`mt-1 w-3 h-3 rounded-full mr-3 ${getStatusColor(deployment.status)}`}></div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium">
                    {deployment.commitMessage || "No commit message"}
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
                  {deployment.status === 'building' ? 'Building...' : 
                   deployment.status === 'success' ? 'Deployment successful' : 
                   deployment.status === 'failed' ? 'Deployment failed' : 'Queued for deployment'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}