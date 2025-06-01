
import { cn } from '@/lib/utils';

interface StreakCardProps {
  currentStreak: number;
  maxStreak: number;
  className?: string;
}

export default function StreakCard({ currentStreak, maxStreak, className }: StreakCardProps) {
  // Generate the last 7 days (true means completed, false means not)
  const last7Days = [true, true, true, false, true, true, true];
  
  return (
    <div className={cn('cyber-card', className)}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium">Daily Streak</h3>
          <p className="text-sm text-cyber-text-secondary">Keep up the momentum</p>
        </div>
        <div className="bg-cyber-neon-purple/20 rounded-full px-2 py-1 text-xs font-medium text-cyber-neon-purple">
          {currentStreak} days
        </div>
      </div>
      
      <div className="flex justify-between mb-6">
        {last7Days.map((completed, index) => {
          const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
          const today = new Date().getDay();
          const dayIndex = (today - 6 + index + 7) % 7;
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xs text-cyber-text-secondary mb-2">{dayNames[dayIndex]}</div>
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center transition-all',
                completed ? 'bg-cyber-neon-purple text-white' : 'bg-cyber-bg-dark text-cyber-text-secondary border border-cyber-text-secondary/30'
              )}>
                {completed ? '✓' : '·'}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <span className="text-cyber-text-secondary">Best streak:</span>
        <span className="font-medium text-cyber-neon-blue">{maxStreak} days</span>
      </div>
    </div>
  );
}
