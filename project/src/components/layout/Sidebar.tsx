import React from 'react';
import { 
  Home, 
  Activity, 
  Settings, 
  Box, 
  PanelLeft, 
  PanelRight,
  User, 
  FileCode,
  Shield,
  Terminal,
  Globe
} from 'lucide-react';
import IconButton from '../common/IconButton';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  
  return (
    <div className={`fixed top-0 left-0 h-full bg-background-lighter border-r border-border transition-all duration-300 z-10 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between px-4 h-16 border-b border-border">
        <div className={`flex items-center ${collapsed ? 'justify-center w-full' : ''}`}>
          {!collapsed && (
            <span className="text-xl font-bold ml-2">Bolt Deploy</span>
          )}
          {collapsed && (
            <span className="text-xl font-bold">B</span>
          )}
        </div>
        {!collapsed && (
          <IconButton
            icon={<PanelLeft size={18} />}
            onClick={() => setCollapsed(true)}
            title="Collapse sidebar"
          />
        )}
        {collapsed && (
          <IconButton
            icon={<PanelRight size={18} />}
            onClick={() => setCollapsed(false)}
            className="absolute right-3"
            title="Expand sidebar"
          />
        )}
      </div>
      
      <div className="p-3">
        <nav className="space-y-1">
          <SidebarItem 
            icon={<Home size={18} />} 
            text="Dashboard" 
            to="/dashboard"
            active={location.pathname === '/dashboard'} 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Box size={18} />} 
            text="Projects" 
            to="/dashboard/projects"
            active={location.pathname === '/dashboard/projects'} 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Terminal size={18} />} 
            text="Deployments" 
            to="/dashboard/deployments"
            active={location.pathname === '/dashboard/deployments'} 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Activity size={18} />} 
            text="Analytics" 
            to="/dashboard/analytics"
            active={location.pathname === '/dashboard/analytics'} 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Globe size={18} />} 
            text="Domains" 
            to="/dashboard/domains"
            active={location.pathname === '/dashboard/domains'} 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<FileCode size={18} />} 
            text="Integrations" 
            to="/dashboard/integrations"
            active={location.pathname === '/dashboard/integrations'} 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Shield size={18} />} 
            text="Security" 
            to="/dashboard/security"
            active={location.pathname === '/dashboard/security'} 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Settings size={18} />} 
            text="Settings" 
            to="/dashboard/settings"
            active={location.pathname === '/dashboard/settings'} 
            collapsed={collapsed} 
          />
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full border-t border-border p-4">
        <SidebarItem 
          icon={<User size={18} />} 
          text="Profile" 
          to="/dashboard/profile"
          active={location.pathname === '/dashboard/profile'} 
          collapsed={collapsed} 
        />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, to, active, collapsed }) => {
  return (
    <Link 
      to={to}
      className={`sidebar-item ${active ? 'active' : ''} ${collapsed ? 'justify-center' : ''}`}
    >
      {icon}
      {!collapsed && <span>{text}</span>}
    </Link>
  );
};

export default Sidebar;