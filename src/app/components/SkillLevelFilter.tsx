
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillLevelFilterProps {
  onSkillLevelChange: (skillLevel: string | null) => void;
  className?: string;
}

export default function SkillLevelFilter({ onSkillLevelChange, className }: SkillLevelFilterProps) {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const skillLevels = [
    { id: 'all', label: 'All Levels', value: null },
    { id: 'beginner', label: 'Beginner', value: 'beginner' },
    { id: 'intermediate', label: 'Intermediate', value: 'intermediate' },
    { id: 'advanced', label: 'Advanced', value: 'advanced' },
  ];

  const handleLevelChange = (value: string | null) => {
    setActiveLevel(value);
    onSkillLevelChange(value);
  };

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {skillLevels.map((level) => (
        <button
          key={level.id}
          onClick={() => handleLevelChange(level.value)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            activeLevel === level.value
              ? 'bg-cyber-neon-purple text-white'
              : 'bg-cyber-bg-light text-cyber-text-secondary hover:bg-cyber-neon-purple/20 hover:text-cyber-neon-purple'
          )}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
}
