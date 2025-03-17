// components/NavBar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';

// Define menu items
const MENU_ITEMS = [
  { path: '/', label: 'Home', command: 'cd ~/' },
  { path: '/projects', label: 'Projects', command: 'cd ~/projects' },
  { path: '/about', label: 'About', command: 'cd ~/about' },
  { path: '/contact', label: 'Contact', command: 'cd ~/contact' }
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Get current location for terminal display
  const getCurrentLocation = () => {
    const currentItem = MENU_ITEMS.find(item => item.path === pathname);
    return currentItem?.command || 'cd ~/';
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 w-full z-50 font-mono"
      animate={{ 
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)', 
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Terminal-style location indicator */}
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Terminal className="w-4 h-4" />
          <Link href="/" className="text-sm sm:text-base font-bold">
            <span className="text-terminal-green">user</span>
            <span className="text-white">@</span>
            <span className="text-terminal-cyan">techsolutions</span>
            <span className="text-white">:</span>
            <span className="text-terminal-yellow">{getCurrentLocation()}</span>
            <span className="text-white ml-1 animate-blink">_</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {MENU_ITEMS.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.div
                className={`text-sm hover:text-white ${pathname === item.path ? 'text-white' : 'text-gray-400'}`}
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-terminal-green">$</span> {item.label}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-black border-t border-gray-800 absolute w-full top-full left-0"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link href={item.path}>
                    <div className={`flex items-center gap-2 py-2 text-sm ${pathname === item.path ? 'text-white' : 'text-gray-400'}`}>
                      <ChevronRight size={16} className={pathname === item.path ? 'text-terminal-green' : 'text-gray-500'} />
                      <span>{item.command}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;