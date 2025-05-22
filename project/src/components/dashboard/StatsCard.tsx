import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, change }) => {
  return (
    <div className="card p-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-foreground-muted text-sm">{title}</h3>
        <div className="p-2 rounded-full bg-background-lighter">
          {icon}
        </div>
      </div>
      
      <div className="mt-3">
        <p className="text-2xl font-semibold">{value}</p>
        
        {change && (
          <div className="mt-2 flex items-center">
            <span className={`text-xs ${change.positive ? 'text-success' : 'text-error'}`}>
              {change.positive ? '↑' : '↓'} {change.value}
            </span>
            <span className="text-xs text-foreground-muted ml-1">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;