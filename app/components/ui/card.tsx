'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
    return <div className={`bg-gray-800 p-6 rounded-xl shadow-lg ${className}`}>{children}</div>;
  }
  
interface CardContentProps {
  children: ReactNode;
}

export function CardContent({ children }: CardContentProps) {
    return <div>{children}</div>;
  }
