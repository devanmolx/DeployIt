import { Project, Deployment, User, Activity } from '../types';
import { formatDistance } from '../utils/dateUtils';

export const currentUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  role: 'owner'
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js',
    framework: 'Next.js',
    status: 'online',
    lastDeployed: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 2)),
    url: 'portfolio-website.vercel.app',
    githubUrl: 'github.com/username/portfolio',
    visits: 1245
  },
  {
    id: '2',
    name: 'E-Commerce App',
    description: 'Full-featured e-commerce platform for online sales',
    framework: 'React',
    status: 'building',
    lastDeployed: formatDistance(new Date(Date.now() - 1000 * 60 * 5)),
    url: 'ecommerce-app.vercel.app',
    githubUrl: 'github.com/username/ecommerce',
    visits: 5621
  },
  {
    id: '3',
    name: 'Blog Platform',
    description: 'Content management system for blogging',
    framework: 'Nuxt.js',
    status: 'error',
    lastDeployed: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 12)),
    url: 'blog-platform.vercel.app',
    githubUrl: 'github.com/username/blog',
    visits: 3478
  },
  {
    id: '4',
    name: 'Admin Dashboard',
    description: 'Internal admin dashboard for data management',
    framework: 'Vue.js',
    status: 'online',
    lastDeployed: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 6)),
    url: 'admin-dashboard.vercel.app',
    githubUrl: 'github.com/username/admin',
    visits: 984
  }
];

export const deployments: Deployment[] = [
  {
    id: 'd1',
    projectId: '1',
    status: 'ready',
    environment: 'production',
    createdAt: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 2)),
    branch: 'main',
    commit: 'a1b2c3d',
    author: 'Alex Johnson'
  },
  {
    id: 'd2',
    projectId: '2',
    status: 'building',
    environment: 'preview',
    createdAt: formatDistance(new Date(Date.now() - 1000 * 60 * 5)),
    branch: 'feature/checkout',
    commit: 'e4f5g6h',
    author: 'Alex Johnson'
  },
  {
    id: 'd3',
    projectId: '3',
    status: 'error',
    environment: 'production',
    createdAt: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 12)),
    branch: 'main',
    commit: 'i7j8k9l',
    author: 'Alex Johnson'
  }
];

export const activities: Activity[] = [
  {
    id: 'a1',
    type: 'deployment',
    description: 'Successfully deployed Portfolio Website to production',
    timestamp: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 2)),
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectId: '1'
  },
  {
    id: 'a2',
    type: 'deployment',
    description: 'Started building E-Commerce App (feature/checkout)',
    timestamp: formatDistance(new Date(Date.now() - 1000 * 60 * 5)),
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectId: '2'
  },
  {
    id: 'a3',
    type: 'invite',
    description: 'Invited Sarah Miller to collaborate on Portfolio Website',
    timestamp: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 24)),
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectId: '1'
  },
  {
    id: 'a4',
    type: 'settings',
    description: 'Updated environment variables for E-Commerce App',
    timestamp: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 36)),
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectId: '2'
  },
  {
    id: 'a5',
    type: 'domain',
    description: 'Added custom domain myportfolio.com to Portfolio Website',
    timestamp: formatDistance(new Date(Date.now() - 1000 * 60 * 60 * 48)),
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    projectId: '1'
  }
];