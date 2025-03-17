'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
    return (
      <button className={`px-6 py-3 bg-[#E06033] text-white rounded-md hover:bg-[#c04e2a] transition ${className}`}>
        {children}
      </button>
    );
  }
