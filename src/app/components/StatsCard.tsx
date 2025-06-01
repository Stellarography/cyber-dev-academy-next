
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  className,
  trend
}: StatsCardProps) {
  return (
    <div className={cn('cyber-card group', className)}>
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-cyber-text-secondary text-sm">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-semibold text-cyber-text-primary">{value}</h3>
            {trend && (
              <span className={cn(
                'text-xs font-medium',
                trend.positive ? 'text-cyber-terminal-green' : 'text-cyber-neon-pink'
              )}>
                {trend.positive ? '+' : '-'}{trend.value}%
              </span>
            )}
          </div>
          {subtitle && <p className="text-xs text-cyber-text-secondary">{subtitle}</p>}
        </div>
        {icon && <div className="text-cyber-neon-purple">{icon}</div>}
      </div>
    </div>
  );
}
