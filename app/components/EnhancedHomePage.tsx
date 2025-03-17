'use client';

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import FolderTabHero from "./FolderTabHero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans relative overflow-hidden">

      {/* Hero Section */}
      <FolderTabHero />

      {/* Content Section Below */}
      <section className="py-24 container-padding max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {["AI Workflow", "Cybersecurity Systems", "Next-Gen Web Tools"].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all border border-[#E06033] text-center"
            >
              <CardContent>
                <h3 className="text-2xl font-semibold mb-3 text-[#E06033] uppercase">{project}</h3>
                <p className="text-gray-400">Revolutionizing industries through cutting-edge technology.</p>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
