import React from 'react';
import { CircleDot, Loader2, AlertCircle } from 'lucide-react';

type Status = 'online' | 'building' | 'error' | 'ready';

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'online':
      case 'ready':
        return {
          bgColor: 'bg-success-light',
          textColor: 'text-success',
          icon: <CircleDot size={14} className="text-success" />,
          label: status === 'online' ? 'Online' : 'Ready'
        };
      case 'building':
        return {
          bgColor: 'bg-warning-light',
          textColor: 'text-warning',
          icon: <Loader2 size={14} className="text-warning animate-spin" />,
          label: 'Building'
        };
      case 'error':
        return {
          bgColor: 'bg-error-light',
          textColor: 'text-error',
          icon: <AlertCircle size={14} className="text-error" />,
          label: 'Error'
        };
      default:
        return {
          bgColor: 'bg-foreground-muted/10',
          textColor: 'text-foreground-muted',
          icon: <CircleDot size={14} className="text-foreground-muted" />,
          label: status
        };
    }
  };

  const { bgColor, textColor, icon, label } = getStatusConfig();

  return (
    <div className={`status-badge ${bgColor} ${textColor} ${className}`}>
      {icon}
      <span className="ml-1">{label}</span>
    </div>
  );
};

export default StatusBadge;