import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  title?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  variant = 'ghost',
  size = 'md',
  className = '',
  title
}) => {
  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-card border border-border text-foreground hover:bg-card-hover',
    ghost: 'text-foreground-muted hover:bg-card hover:text-foreground'
  };
  
  const sizeClasses = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3'
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      title={title}
    >
      {icon}
    </button>
  );
};

export default IconButton;