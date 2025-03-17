// components/TerminalText.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalTextProps {
  prefix: string;
  text: string;
  typingSpeed?: number;
  delay?: number;
  showCursor?: boolean;
  className?: string;
  prefixClassName?: string;
  textClassName?: string;
  cursorClassName?: string;
  onTypingComplete?: () => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({
  prefix,
  text,
  typingSpeed = 40,
  delay = 0,
  showCursor = true,
  className = '',
  prefixClassName = 'text-xs sm:text-sm text-gray-500 break-all',
  textClassName = 'break-words',
  cursorClassName = 'inline-block w-2 h-4 bg-white ml-1 animate-blink',
  onTypingComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Handle typing animation
  useEffect(() => {
    if (!hasStarted) return;
    
    if (currentIndex < text.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      if (onTypingComplete) onTypingComplete();
    }
  }, [currentIndex, text, typingSpeed, hasStarted, onTypingComplete]);

  // Start animation after delay
  useEffect(() => {
    // Reset the typing when text changes
    if (text) {
      setDisplayedText('');
      setCurrentIndex(0);
      setHasStarted(false);
      
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, delay);
      
      return () => clearTimeout(startTimeout);
    }
  }, [text, delay]);

  return (
    <div className={`font-mono ${className}`}>
      <span className={prefixClassName}>{prefix}</span>
      <div className="mt-2 relative">
        <span className={textClassName}>{displayedText}</span>
        {isTyping && showCursor && (
          <span className={cursorClassName} />
        )}
      </div>
    </div>
  );
};

export default TerminalText;