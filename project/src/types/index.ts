export interface Project {
  id: string;
  name: string;
  description: string;
  framework: string;
  status: 'online' | 'building' | 'error' | 'ready';
  lastDeployed: string;
  url: string;
  githubUrl: string;
  visits: number;
}

export interface Deployment {
  id: string;
  projectId: string;
  status: 'building' | 'ready' | 'error';
  environment: 'production' | 'preview' | 'development';
  createdAt: string;
  branch: string;
  commit: string;
  author: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'owner' | 'member' | 'viewer';
}

export interface Activity {
  id: string;
  type: 'deployment' | 'invite' | 'settings' | 'domain';
  description: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
  };
  projectId?: string;
}