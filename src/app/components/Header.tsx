
import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-1">
          Welcome back, <span className="text-gradient">Developer</span>
        </h1>
        <p className="text-cyber-text-secondary">
          Continue your journey to frontend mastery
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:flex">
          <input 
            type="text" 
            placeholder="Search modules..."
            className="cyber-input pr-10 w-64"
          />
          <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-cyber-text-secondary" />
        </div>
        
        <button className="relative p-2 rounded-full hover:bg-cyber-bg-light transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-neon-pink rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-purple-blue flex items-center justify-center">
            <span className="text-white font-bold text-sm">FD</span>
          </div>
        </div>
      </div>
    </header>
  );
}
