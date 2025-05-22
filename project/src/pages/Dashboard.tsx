import React from 'react';
import ProjectList from '../components/dashboard/ProjectList';
import DeploymentList from '../components/dashboard/DeploymentList';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import StatsCard from '../components/dashboard/StatsCard';
import { Cpu, LineChart, Users, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-6">Welcome back, Alex!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Deployments" 
          value="124" 
          icon={<Cpu size={18} className="text-accent" />} 
          change={{ value: "12%", positive: true }}
        />
        <StatsCard 
          title="Total Traffic" 
          value="23.5K" 
          icon={<LineChart size={18} className="text-success" />} 
          change={{ value: "8.3%", positive: true }}
        />
        <StatsCard 
          title="Team Members" 
          value="8" 
          icon={<Users size={18} className="text-warning" />} 
        />
        <StatsCard 
          title="Average Deploy Time" 
          value="1m 24s" 
          icon={<Clock size={18} className="text-foreground-muted" />} 
          change={{ value: "10%", positive: false }}
        />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
        <ProjectList />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeploymentList />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;