
import React from 'react';
import { cn } from '@/lib/utils';
import { Module } from '@/types';
import PremiumBadge from './PremiumBadge';
import { Clock, BookOpen, Lock } from 'lucide-react';

interface ModuleCardProps extends Module {
  imageSrc?: string;
  className?: string;
  isLocked?: boolean;
}

export default function ModuleCard({
  title,
  description,
  progress,
  difficulty,
  skillLevel,
  isPremium,
  lessons,
  estimatedTime,
  imageSrc,
  className,
  isLocked = false,
}: ModuleCardProps) {
  return (
    <div className={cn(
      'cyber-card group cursor-pointer hover:translate-y-[-5px] transition-all duration-300 relative',
      isLocked && 'opacity-75',
      className
    )}>
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-3 right-3 z-10">
          <PremiumBadge />
        </div>
      )}
      
      {/* Lock Overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-cyber-bg/80 rounded-lg flex items-center justify-center z-20">
          <div className="text-center">
            <Lock className="w-8 h-8 text-cyber-text-secondary mx-auto mb-2" />
            <p className="text-sm text-cyber-text-secondary">Premium Required</p>
          </div>
        </div>
      )}

      <div className="h-32 mb-3 rounded-md bg-gradient-to-br from-cyber-neon-purple/30 to-cyber-neon-blue/20 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-4xl font-cyber glow-text-blue">{title.split(' ')[0]}</div>
        )}
      </div>
      
      <h3 className="font-medium text-lg mb-1 group-hover:text-cyber-neon-blue transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-cyber-text-secondary mb-3 line-clamp-2">
        {description}
      </p>

      {/* Module Stats */}
      <div className="flex items-center gap-4 mb-3 text-xs text-cyber-text-secondary">
        <div className="flex items-center gap-1">
          <BookOpen className="w-3 h-3" />
          <span>{lessons} lessons</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{estimatedTime}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-cyber-text-secondary">Progress</span>
        <span className="text-xs font-medium text-cyber-neon-blue">{progress}%</span>
      </div>
      
      <div className="w-full h-1.5 bg-cyber-bg-dark rounded-full overflow-hidden mb-3">
        <div 
          className="h-full bg-gradient-purple-blue rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center">
        <span 
          className={cn(
            'text-xs px-2 py-1 rounded-full',
            difficulty === 'Beginner' && 'bg-green-500/20 text-green-400',
            difficulty === 'Intermediate' && 'bg-yellow-500/20 text-yellow-400',
            difficulty === 'Advanced' && 'bg-red-500/20 text-red-400',
          )}
        >
          {difficulty}
        </span>
        <span className="text-xs text-cyber-text-secondary">
          {progress < 100 ? `${Math.ceil((100 - progress) / 10)} lessons left` : 'Completed'}
        </span>
      </div>
    </div>
  );
}
