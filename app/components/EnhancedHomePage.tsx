import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import NavBar from "./components/NavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans relative overflow-hidden">
      {/* Include Navbar Component */}
      <NavBar />

      {/* Hero Section with File Folder Shape */}
      <section className="mt-20 text-center py-28 px-6 max-w-6xl mx-auto bg-[#E06033] text-white rounded-t-xl shadow-lg relative z-10"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%)"
        }}
      >
        <motion.h1
          className="text-6xl font-extrabold mb-6 leading-tight tracking-wide uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The Future of Digital Solutions
        </motion.h1>
        <p className="text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
          AI-driven automation, innovative web experiences, and cutting-edge technology.
        </p>
        <Button className="px-8 py-4 text-lg bg-white text-[#E06033] hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-md rounded-md">
          Get Started
        </Button>
      </section>

      {/* Content Section Below */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
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