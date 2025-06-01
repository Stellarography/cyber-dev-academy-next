
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Calendar, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  name: string;
  icon: React.ElementType;
  path: string;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'HTML Basics', icon: Calendar, path: '/html' },
  { name: 'CSS Mastery', icon: Calendar, path: '/css' },
  { name: 'JavaScript', icon: Calendar, path: '/javascript' },
  { name: 'React', icon: Calendar, path: '/react' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function SidebarNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'h-screen fixed top-0 left-0 z-40 flex flex-col bg-cyber-bg-light border-r border-cyber-neon-purple/20 transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-cyber-neon-purple/20">
        <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
          <div className="h-8 w-8 rounded-full bg-gradient-purple-blue flex items-center justify-center">
            <span className="text-white font-bold text-xs">FD</span>
          </div>
          {!collapsed && (
            <span className="font-cyber text-lg text-gradient font-semibold tracking-wider">
              FrontDev
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-cyber-text-secondary hover:text-cyber-neon-purple transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md transition-all hover:bg-cyber-neon-purple/10',
                  window.location.pathname === item.path
                    ? 'bg-cyber-neon-purple/20 text-cyber-neon-purple'
                    : 'text-cyber-text-secondary hover:text-cyber-neon-purple'
                )}
              >
                <item.icon
                  size={20}
                  className={cn(
                    'transition-colors',
                    window.location.pathname === item.path && 'text-cyber-neon-purple'
                  )}
                />
                {!collapsed && (
                  <span className={cn('text-sm font-medium transition-transform', 
                    window.location.pathname === item.path && 'text-cyber-neon-purple'
                  )}>
                    {item.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={cn(
        'py-4 px-3 border-t border-cyber-neon-purple/20',
        collapsed ? 'text-center' : 'px-6'
      )}>
        {!collapsed ? (
          <div className="flex flex-col items-start">
            <div className="w-full bg-cyber-bg-dark rounded-lg p-3 border border-cyber-neon-purple/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-cyber-text-secondary">Daily Progress</span>
                <span className="text-xs font-medium text-cyber-neon-blue">70%</span>
              </div>
              <div className="w-full h-1.5 bg-cyber-bg-dark rounded-full overflow-hidden">
                <div className="h-full bg-gradient-purple-blue rounded-full animate-pulse-glow" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-8 w-8 mx-auto rounded-full bg-gradient-purple-blue flex items-center justify-center">
            <span className="text-white font-bold text-xs">70%</span>
          </div>
        )}
      </div>
    </div>
  );
}
