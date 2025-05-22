import React from 'react';
import { Search, Bell, Plus, ChevronDown } from 'lucide-react';
import Avatar from '../common/Avatar';
import { currentUser } from '../../data/mockData';
import IconButton from '../common/IconButton';

interface HeaderProps {
  sidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarCollapsed }) => {
  return (
    <header className={`fixed top-0 h-16 bg-background z-10 border-b border-border flex items-center justify-between transition-all duration-300 ${sidebarCollapsed ? 'left-16 right-0' : 'left-64 right-0'}`}>
      <div className="flex items-center h-full px-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4 px-6">
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-card rounded-md py-2 px-4 pl-10 border border-border focus:outline-none focus:ring-1 focus:ring-accent text-sm w-64"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-foreground-muted" />
        </div>
        
        <IconButton
          icon={<Plus size={18} />}
          variant="primary"
          title="New Project"
          className="hidden sm:flex"
        />
        
        <IconButton
          icon={<Bell size={18} />}
          title="Notifications"
        />
        
        <div className="flex items-center space-x-2 cursor-pointer group">
          <Avatar src={currentUser.avatar} alt={currentUser.name} size="sm" />
          <span className="hidden md:inline-flex items-center text-sm">
            {currentUser.name}
            <ChevronDown size={16} className="ml-1 text-foreground-muted group-hover:text-foreground transition-colors" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;