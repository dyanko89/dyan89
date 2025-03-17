// app/layout.tsx - Server Component version (recommended)
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import AnimatedLayout from './components/AnimatedLayout';
import NavBar from "./components/NavBar";

// Load fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  title: 'Tech Solutions | Modern Web Development',
  description: 'Custom web development solutions that make sense for your business',
};

// RootLayout Component with Global Styles and Navigation
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Navbar Component */}
        <NavBar />
        
        {/* Main Content Wrapped in Animated Layout */}
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}