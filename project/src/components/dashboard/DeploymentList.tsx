import React from 'react';
import { deployments } from '../../data/mockData';
import { GitBranch, GitCommit } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

const DeploymentList: React.FC = () => {
  return (
    <div className="card overflow-hidden animate-slide-up">
      <div className="border-b border-border px-6 py-4">
        <h2 className="font-semibold">Recent Deployments</h2>
      </div>
      
      <div className="divide-y divide-border">
        {deployments.map(deployment => (
          <div key={deployment.id} className="p-4 px-6 hover:bg-card-hover transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <StatusBadge status={deployment.status} className="mr-3" />
                <span className="text-sm font-medium">{deployment.environment}</span>
              </div>
              <span className="text-sm text-foreground-muted">{deployment.createdAt}</span>
            </div>
            
            <div className="mt-3 flex items-center gap-3 text-foreground-muted text-sm">
              <div className="flex items-center">
                <GitBranch size={14} className="mr-1" />
                {deployment.branch}
              </div>
              <div className="flex items-center">
                <GitCommit size={14} className="mr-1" />
                {deployment.commit.substring(0, 7)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-border p-4 text-center">
        <button className="text-accent hover:text-accent-hover transition-colors text-sm font-medium">
          View All Deployments
        </button>
      </div>
    </div>
  );
};

export default DeploymentList;