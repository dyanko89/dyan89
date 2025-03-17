import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Github, 
  Globe, 
  Terminal,
  Search,
  Filter,
  Cpu,
  Code,
  Server
} from 'lucide-react';

// Terminal typing component
const TerminalText = ({ prefix, text, typingSpeed = 40, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, typingSpeed]);

  React.useEffect(() => {
    // Reset the typing when text changes
    if (text) {
      setDisplayedText('');
      setCurrentIndex(0);
      
      const startTimeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      
      return () => clearTimeout(startTimeout);
    }
  }, [text, delay]);

  return (
    <div className="font-mono">
      <span className="text-xs sm:text-sm text-gray-500 break-all">{prefix}</span>
      <div className="mt-2 relative">
        <span className="break-words">{displayedText}</span>
        {isTyping && (
          <span className="inline-block w-2 h-4 bg-white ml-1 animate-blink" />
        )}
      </div>
    </div>
  );
};

// Enhanced ProjectCard with animations
const ProjectCard = ({ title, overview, role, outcome, techStack, liveUrl, githubUrl, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="border border-white p-4 space-y-4 hover:bg-white hover:text-black transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-lg font-bold break-words">[{title}]</h3>
      
      <div className="space-y-2">
        <div>
          <span className="text-sm text-gray-500">$ cat overview.txt</span>
          <motion.p 
            className="text-sm break-words pl-4 border-l border-current mt-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
          >
            {overview}
          </motion.p>
        </div>
        
        <div>
          <span className="text-sm text-gray-500">$ whoami</span>
          <motion.p 
            className="text-sm break-words pl-4 border-l border-current mt-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.3 }}
          >
            {role}
          </motion.p>
        </div>
        
        <div>
          <span className="text-sm text-gray-500">$ cat results.txt</span>
          <motion.p 
            className="text-sm break-words pl-4 border-l border-current mt-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.4 }}
          >
            {outcome}
          </motion.p>
        </div>
        
        <div>
          <span className="text-sm text-gray-500">$ ls tech/</span>
          <motion.div 
            className="flex flex-wrap gap-2 mt-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.5 }}
          >
            {techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="text-xs border border-current px-2 py-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: delay + 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="flex gap-4 pt-2">
        {liveUrl && (
          <motion.a
            href={liveUrl}
            className="flex items-center gap-2 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Globe className="w-4 h-4" strokeWidth={1} />
            View Live
          </motion.a>
        )}
        {githubUrl && (
          <motion.a
            href={githubUrl}
            className="flex items-center gap-2 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Github className="w-4 h-4" strokeWidth={1} />
            Source Code
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

// Filter component for projects
const ProjectFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <motion.div 
      className="mb-8 overflow-x-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-2 min-w-max">
        <motion.button
          className={`px-3 py-1 border ${activeCategory === 'all' ? 'bg-white text-black' : 'border-white text-white'}`}
          onClick={() => setActiveCategory('all')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-3 py-1 border ${activeCategory === category ? 'bg-white text-black' : 'border-white text-white'}`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

// Search component
const ProjectSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <motion.div 
      className="mb-8 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" strokeWidth={1} />
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-transparent border border-white text-white pl-10 pr-4 py-2 focus:outline-none"
      />
    </motion.div>
  );
};

// Enhanced ProjectsPage component
const EnhancedProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample project data with categories
  const projects = [
    {
      title: "E-COMMERCE PERFORMANCE BOOST",
      overview: "Rebuilt a sluggish e-commerce platform that was bleeding customers. Trimmed load times from 6s to 1.2s and fixed a shopping cart that randomly emptied itself.",
      role: "Led full rebuild while keeping the existing store running. Handled everything from database optimization to frontend performance.",
      outcome: "Conversion rate jumped 43%. Cart abandonment dropped 28%. Client stopped losing hair from stress.",
      techStack: ["NEXT.JS", "POSTGRESQL", "REDIS", "AWS"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AUTOMATED INVOICE NIGHTMARE",
      overview: "Client was drowning in manual invoice processing. 400+ hours/month spent copy-pasting between systems.",
      role: "Architected and built custom automation system integrated with existing tools.",
      outcome: "Reduced processing time to 5 hours/month. Saved client $15k/month in labor. Zero errors since deployment.",
      techStack: ["PYTHON", "TENSORFLOW", "REST API", "DOCKER"],
      category: "Automation",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "HEALTHCARE DATA PLATFORM",
      overview: "Built a HIPAA-compliant data integration platform for healthcare providers to securely share and analyze patient data.",
      role: "Led architecture and security implementation, ensuring data privacy and compliance with regulations.",
      outcome: "Platform adopted by 3 major healthcare networks. Reduced data sharing time from days to minutes.",
      techStack: ["REACT", "NODE.JS", "MONGODB", "AZURE"],
      category: "Data Engineering",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "REAL-TIME ANALYTICS DASHBOARD",
      overview: "Developed a real-time analytics dashboard for a marketing team tracking campaign performance across multiple channels.",
      role: "Full-stack development with focus on data visualization and real-time updates.",
      outcome: "Enabled team to make data-driven decisions 5x faster. Identified $50k in wasted ad spend within first month.",
      techStack: ["VUE.JS", "GRAPHQL", "SOCKET.IO", "D3.JS"],
      category: "Data Visualization",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  // Extract unique categories
  const categories = [...new Set(projects.map(project => project.category))];

  // Filter projects based on active category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-black text-white font-mono tracking-wide min-h-screen">
      <div className="w-full max-w-4xl mx-auto container-padding py-6 pt-16">
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TerminalText 
            prefix="$ ls projects/" 
            text="REAL SOLUTIONS, REAL RESULTS" 
            typingSpeed={30}
          />
          <motion.p 
            className="text-xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            &gt; No fluff. Just work that made a difference.
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-12"
        >
          <TerminalText 
            prefix="$ cat about_projects.txt" 
            text="Skip the buzzwords. Here are real projects where I solved real problems. Each one started with a challenge and ended with measurable results." 
            typingSpeed={10}
            delay={1000}
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="md:w-2/3">
            <ProjectSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div className="md:w-1/3">
            <ProjectFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                delay={index * 0.1}
              />
            ))}
            
            {filteredProjects.length === 0 && (
              <motion.div 
                className="text-center py-12 border border-dashed border-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400">No projects match your criteria.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.footer 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Terminal className="w-5 h-5" strokeWidth={1} />
            <span>LET'S DISCUSS YOUR PROJECT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1} />
          </motion.a>
        </motion.footer>
      </div>
    </div>
  );
};

export default EnhancedProjectsPage;
