
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { QuizQuestionData } from '@/types';
import PremiumBadge from './PremiumBadge';

interface QuizQuestionProps extends QuizQuestionData {
  // No additional props needed for now, but extending allows for future additions
}

export default function QuizQuestion({
  id,
  question,
  code,
  options,
  correctAnswerIndex,
  explanation,
  isPremium,
  skillLevel
}: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  
  const handleSubmit = () => {
    if (selectedOption !== null) {
      setShowExplanation(true);
    }
  };
  
  const isCorrect = selectedOption === correctAnswerIndex;
  
  return (
    <div className="cyber-card space-y-6">
      {/* Question Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">{question}</h3>
            {isPremium && <PremiumBadge size="sm" />}
          </div>
          <div className="flex items-center gap-2">
            <span className={cn(
              'text-xs px-2 py-1 rounded-full',
              skillLevel === 'beginner' && 'bg-green-500/20 text-green-400',
              skillLevel === 'intermediate' && 'bg-yellow-500/20 text-yellow-400',
              skillLevel === 'advanced' && 'bg-red-500/20 text-red-400',
            )}>
              {skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Code Block */}
      {code && (
        <pre className="cyber-code text-sm overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
          <code>{code}</code>
        </pre>
      )}
      
      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className={cn(
              'relative p-4 rounded-md border transition-all cursor-pointer',
              selectedOption === index 
                ? 'border-cyber-neon-purple bg-cyber-neon-purple/10' 
                : 'border-cyber-neon-purple/20 hover:border-cyber-neon-purple/40 hover:bg-cyber-bg-dark/50',
              showExplanation && index === correctAnswerIndex && 'border-cyber-terminal-green bg-cyber-terminal-green/10',
              showExplanation && selectedOption === index && index !== correctAnswerIndex && 'border-cyber-neon-pink bg-cyber-neon-pink/10'
            )}
            onClick={() => !showExplanation && setSelectedOption(index)}
            onMouseEnter={() => setShowTooltip(index)}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                'h-5 w-5 rounded-full border flex items-center justify-center flex-shrink-0',
                selectedOption === index 
                  ? 'border-cyber-neon-purple text-cyber-neon-purple' 
                  : 'border-cyber-text-secondary text-cyber-text-secondary',
                showExplanation && index === correctAnswerIndex && 'border-cyber-terminal-green text-cyber-terminal-green',
                showExplanation && selectedOption === index && index !== correctAnswerIndex && 'border-cyber-neon-pink text-cyber-neon-pink'
              )}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-sm">{option}</span>
            </div>
            
            {showTooltip === index && !showExplanation && (
              <div className="cyber-tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                Click to select this answer
              </div>
            )}
            
            {showExplanation && index === correctAnswerIndex && (
              <div className="mt-2 text-sm text-cyber-terminal-green flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 13L10 16L17 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-check-animation"
                    style={{ strokeDasharray: 60, strokeDashoffset: 60 }}
                  />
                </svg>
                <span>Correct answer</span>
              </div>
            )}
            
            {showExplanation && selectedOption === index && index !== correctAnswerIndex && (
              <div className="mt-2 text-sm text-cyber-neon-pink flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Incorrect answer</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Submit Button or Explanation */}
      {!showExplanation ? (
        <button 
          onClick={handleSubmit}
          className={cn(
            'cyber-btn w-full',
            selectedOption === null && 'opacity-50 cursor-not-allowed'
          )}
          disabled={selectedOption === null}
        >
          Submit Answer
        </button>
      ) : (
        <div className="p-4 border border-cyber-neon-purple/30 rounded-md bg-cyber-bg-dark/80 animate-slide-in">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            Explanation
            {isCorrect && <span className="text-cyber-terminal-green text-sm">✓ Correct!</span>}
            {!isCorrect && <span className="text-cyber-neon-pink text-sm">✗ Incorrect</span>}
          </h4>
          <p className="text-sm text-cyber-text-secondary">{explanation}</p>
        </div>
      )}
    </div>
  );
}
