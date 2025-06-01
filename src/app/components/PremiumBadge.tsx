
import { Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumBadgeProps {
  className?: string;
  size?: 'sm' | 'md';
}

export default function PremiumBadge({ className, size = 'sm' }: PremiumBadgeProps) {
  return (
    <div className={cn(
      'inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30',
      size === 'sm' ? 'text-xs' : 'text-sm',
      className
    )}>
      <Crown className={cn(
        'text-yellow-400',
        size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'
      )} />
      <span className="text-yellow-300 font-medium">Premium</span>
    </div>
  );
}
