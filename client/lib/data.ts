export interface Project {
  id: string;
  name: string;
  description: string;
  framework: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  deployments: Deployment[];
  githubRepo?: string;
  team?: string;
}

export interface Deployment {
  id: string;
  projectId: string;
  status: 'success' | 'failed' | 'building' | 'queued';
  createdAt: string;
  commitMessage?: string;
  commitSha?: string;
  branch?: string;
  url?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member';
  avatar: string;
}

// Mock data for projects
export const projects: Project[] = [
  {
    id: "proj_1",
    name: "Next.js Blog",
    description: "A blog built with Next.js and MDX",
    framework: "Next.js",
    createdAt: "2023-05-15T10:30:00Z",
    updatedAt: "2023-08-20T14:25:00Z",
    url: "https://nextjs-blog-demo.vercel.app",
    githubRepo: "user/nextjs-blog",
    team: "Personal",
    deployments: [
      {
        id: "dep_1",
        projectId: "proj_1",
        status: "success",
        createdAt: "2023-08-20T14:25:00Z",
        commitMessage: "Update blog post content",
        commitSha: "abc123",
        branch: "main",
        url: "https://nextjs-blog-demo.vercel.app"
      },
      {
        id: "dep_2",
        projectId: "proj_1",
        status: "success",
        createdAt: "2023-08-18T09:15:00Z",
        commitMessage: "Fix responsive layout issues",
        commitSha: "def456",
        branch: "main",
        url: "https://nextjs-blog-demo-git-fix-layout.vercel.app"
      }
    ]
  },
  {
    id: "proj_2",
    name: "E-commerce Dashboard",
    description: "Admin dashboard for managing products",
    framework: "React",
    createdAt: "2023-04-10T08:45:00Z",
    updatedAt: "2023-08-22T11:10:00Z",
    url: "https://ecommerce-dashboard.vercel.app",
    githubRepo: "user/ecommerce-dashboard",
    team: "Acme Inc",
    deployments: [
      {
        id: "dep_3",
        projectId: "proj_2",
        status: "building",
        createdAt: "2023-08-22T11:10:00Z",
        commitMessage: "Add analytics dashboard",
        commitSha: "ghi789",
        branch: "main"
      },
      {
        id: "dep_4",
        projectId: "proj_2",
        status: "success",
        createdAt: "2023-08-21T16:30:00Z",
        commitMessage: "Update product form validation",
        commitSha: "jkl012",
        branch: "main",
        url: "https://ecommerce-dashboard.vercel.app"
      }
    ]
  },
  {
    id: "proj_3",
    name: "Marketing Website",
    description: "Company marketing site with blog",
    framework: "Astro",
    createdAt: "2023-06-05T13:20:00Z",
    updatedAt: "2023-08-19T10:45:00Z",
    url: "https://acme-marketing.vercel.app",
    githubRepo: "acme/marketing-site",
    team: "Acme Inc",
    deployments: [
      {
        id: "dep_5",
        projectId: "proj_3",
        status: "success",
        createdAt: "2023-08-19T10:45:00Z",
        commitMessage: "Update team page",
        commitSha: "mno345",
        branch: "main",
        url: "https://acme-marketing.vercel.app"
      },
      {
        id: "dep_6",
        projectId: "proj_3",
        status: "failed",
        createdAt: "2023-08-18T14:15:00Z",
        commitMessage: "Refactor navigation component",
        commitSha: "pqr678",
        branch: "refactor/nav"
      }
    ]
  },
  {
    id: "proj_4",
    name: "API Service",
    description: "Backend API for mobile applications",
    framework: "Node.js",
    createdAt: "2023-03-12T09:10:00Z",
    updatedAt: "2023-08-21T08:30:00Z",
    url: "https://api-service.vercel.app",
    githubRepo: "user/api-service",
    team: "Personal",
    deployments: [
      {
        id: "dep_7",
        projectId: "proj_4",
        status: "success",
        createdAt: "2023-08-21T08:30:00Z",
        commitMessage: "Implement caching layer",
        commitSha: "stu901",
        branch: "main",
        url: "https://api-service.vercel.app"
      }
    ]
  }
];

// Analytics data for charts
export const analyticsData = {
  deployments: [
    { date: "Mon", count: 4 },
    { date: "Tue", count: 3 },
    { date: "Wed", count: 5 },
    { date: "Thu", count: 2 },
    { date: "Fri", count: 6 },
    { date: "Sat", count: 1 },
    { date: "Sun", count: 3 }
  ],
  visitors: [
    { date: "Mon", count: 120 },
    { date: "Tue", count: 145 },
    { date: "Wed", count: 190 },
    { date: "Thu", count: 210 },
    { date: "Fri", count: 250 },
    { date: "Sat", count: 180 },
    { date: "Sun", count: 130 }
  ],
  bandwidth: [
    { date: "Mon", gb: 1.2 },
    { date: "Tue", gb: 1.5 },
    { date: "Wed", gb: 1.9 },
    { date: "Thu", gb: 2.1 },
    { date: "Fri", gb: 2.5 },
    { date: "Sat", gb: 1.8 },
    { date: "Sun", gb: 1.3 }
  ]
};

export const teamMembers: TeamMember[] = [
  {
    id: "user_1",
    name: "Sarah Connor",
    email: "sarah@example.com",
    role: "owner",
    avatar: "https://i.pravatar.cc/150?u=sarah@example.com"
  },
  {
    id: "user_2",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    avatar: "https://i.pravatar.cc/150?u=john@example.com"
  },
  {
    id: "user_3",
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "member",
    avatar: "https://i.pravatar.cc/150?u=emma@example.com"
  }
];

// Function to get a project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

// Function to get deployments for a project
export function getDeploymentsForProject(projectId: string): Deployment[] {
  const project = getProjectById(projectId);
  return project ? project.deployments : [];
}