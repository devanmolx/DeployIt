import React from 'react';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';
import StatusBadge from '../common/StatusBadge';
import FrameworkIcon from '../common/FrameworkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card p-5 hover:shadow-md animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <FrameworkIcon framework={project.framework} size={24} className="mr-3" />
          <div>
            <h3 className="text-lg font-medium">{project.name}</h3>
            <p className="text-foreground-muted text-sm mt-1">{project.description}</p>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </div>
      
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <p className="text-foreground-muted text-xs">Deployed</p>
          <p className="text-sm">{project.lastDeployed}</p>
        </div>
        <div>
          <p className="text-foreground-muted text-xs">Visits</p>
          <p className="text-sm">{project.visits.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="border-t border-border mt-4 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a 
            href={`https://${project.url}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-foreground-muted hover:text-foreground flex items-center transition-colors"
          >
            <ExternalLink size={14} className="mr-1" />
            Visit
          </a>
          <a 
            href={`https://${project.githubUrl}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-foreground-muted hover:text-foreground flex items-center transition-colors"
          >
            <Github size={14} className="mr-1" />
            Code
          </a>
        </div>
        <button className="text-foreground-muted hover:text-foreground transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;