import React from 'react';
import { activities } from '../../data/mockData';
import Avatar from '../common/Avatar';
import { FileCode, Send, Settings, Globe } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'deployment':
        return <FileCode size={16} className="text-accent" />;
      case 'invite':
        return <Send size={16} className="text-success" />;
      case 'settings':
        return <Settings size={16} className="text-warning" />;
      case 'domain':
        return <Globe size={16} className="text-foreground-muted" />;
      default:
        return <FileCode size={16} className="text-accent" />;
    }
  };

  return (
    <div className="card overflow-hidden animate-slide-up">
      <div className="border-b border-border px-6 py-4">
        <h2 className="font-semibold">Recent Activity</h2>
      </div>
      
      <div className="divide-y divide-border">
        {activities.map(activity => (
          <div key={activity.id} className="p-4 px-6 flex items-start hover:bg-card-hover transition-colors">
            <div className="mr-3 mt-1 p-2 rounded-full bg-background-lighter">
              {getActivityIcon(activity.type)}
            </div>
            
            <div className="flex-1">
              <p className="text-sm">{activity.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar 
                    src={activity.user.avatar} 
                    alt={activity.user.name} 
                    size="sm" 
                    className="mr-2"
                  />
                  <span className="text-xs text-foreground-muted">{activity.user.name}</span>
                </div>
                <span className="text-xs text-foreground-muted">{activity.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-border p-4 text-center">
        <button className="text-accent hover:text-accent-hover transition-colors text-sm font-medium">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;