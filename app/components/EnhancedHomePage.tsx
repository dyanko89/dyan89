import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowDownRight, 
  Code, 
  Eye, 
  MessageCircle, 
  Send,
  Terminal,
  ArrowRight,
  Cpu
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Terminal text component with typing animation
const TerminalText = ({ prefix, text, typingSpeed = 40, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
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

// Animated section component with fade-in effect
const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-8 sm:mb-16"
    >
      {children}
    </motion.div>
  );
};

// Enhanced contact form with animation
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputVariants = {
    focus: { borderColor: '#FFFFFF', scale: 1.01 },
    blur: { borderColor: '#6B7280', scale: 1 }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-gray-500 rounded-sm text-white focus:outline-none"
          required
          whileFocus="focus"
          initial="blur"
          animate="blur"
          variants={inputVariants}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-gray-500 rounded-sm text-white focus:outline-none"
          required
          whileFocus="focus"
          initial="blur"
          animate="blur"
          variants={inputVariants}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 bg-transparent border border-gray-500 rounded-sm text-white focus:outline-none resize-none"
          required
          whileFocus="focus"
          initial="blur"
          animate="blur"
          variants={inputVariants}
          transition={{ duration: 0.2 }}
        />
      </div>
      <motion.button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-white hover:bg-white hover:text-black text-base transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
        <Send className="w-5 h-5" strokeWidth={1} />
      </motion.button>
    </motion.form>
  );
};

// Skill Card component with hover animation
const SkillCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div 
      className="p-3 sm:p-6 border border-white hover:bg-white hover:text-black transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-6 h-6 mb-3" strokeWidth={1} />
      <h3 className="text-sm sm:text-lg font-bold mb-2 break-words">[{title}]</h3>
      <p className="text-xs sm:text-base break-words">{description}</p>
    </motion.div>
  );
};

// Enhanced HomePage component with animations and Mastra AI-inspired elements
const EnhancedHomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      icon: Code,
      title: "TECHNICAL EXCELLENCE",
      description: "Technical skills to build it right the first time"
    },
    {
      icon: Eye,
      title: "VISION AND DETAIL",
      description: "A knack for seeing the big picture while sweating the small stuff"
    },
    {
      icon: Terminal,
      title: "ELEGANT SOLUTIONS",
      description: "Transforming complex problems into simple, effective solutions"
    },
    {
      icon: Cpu,
      title: "FUTURE-PROOF TECH",
      description: "Building with scalability and emerging technologies in mind"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono tracking-wide">
      {/* Fixed header that changes opacity on scroll */}
      <motion.div 
        className="fixed top-0 left-0 w-full z-50 bg-black transition-all duration-300"
        animate={{ 
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)', 
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)'
        }}
      >
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-4 flex justify-between items-center">
          <motion.span 
            className="text-sm sm:text-base font-bold"
            whileHover={{ scale: 1.05 }}
          >
            $ cd /home
          </motion.span>
          <div className="flex gap-4">
            <motion.a 
              href="#projects" 
              className="text-xs sm:text-sm hover:text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              className="text-xs sm:text-sm hover:text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-xs sm:text-sm hover:text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-16 pt-24">
        {/* Animated Hero Section */}
        <AnimatedSection>
          <div className="min-h-[70vh] flex flex-col justify-center">
            <div className="mb-8">
              <TerminalText 
                prefix="$ echo 'welcome.txt'" 
                text="TECH SOLUTIONS THAT ACTUALLY MAKE SENSE" 
                typingSpeed={30}
              />
              <motion.p 
                className="text-base sm:text-xl mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                &gt; Because good tech should make life better, not more complicated
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-8"
            >
              <TerminalText 
                prefix="$ cat mission.txt" 
                text="Look, here's the deal: I love taking tricky technical challenges and turning them into elegant solutions. Whether it's making websites that don't just look pretty but actually convert, developing systems that make work easier, or finding creative ways to solve digital problems – I'm your person."
                typingSpeed={5}
                delay={2500}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="mt-8"
            >
              <motion.a 
                href="#projects"
                className="inline-flex items-center gap-2 text-sm border-b border-white pb-1"
                whileHover={{ x: 5 }}
              >
                Explore Projects <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2} id="skills">
          <TerminalText 
            prefix="$ ls skills/" 
            text="PROFESSIONAL CAPABILITIES" 
            typingSpeed={20}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8 mt-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Philosophy Section with animated border */}
        <AnimatedSection delay={0.4}>
          <TerminalText 
            prefix="$ cat philosophy.txt" 
            text="MY APPROACH" 
            typingSpeed={20}
          />
          <motion.div 
            className="py-4 sm:py-8 border-t border-b border-white mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-center text-xs sm:text-lg break-words px-2">
              I could fill this space with fancy jargon about "synergistic solutions" and 
              "innovative paradigms," but that's not my style. Instead, let's talk about 
              your project, the problems you're facing, and how we can solve them together.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection delay={0.6} id="contact">
          <TerminalText 
            prefix="$ ./start.sh" 
            text="READY TO BEGIN?" 
            typingSpeed={20}
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mt-6">
            <motion.a
              href="/projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-6 py-3 border border-white hover:bg-white hover:text-black text-xs sm:text-base transition-colors duration-300"
              whileHover={{ scale: 1.02, backgroundColor: "#FFFFFF", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
            >
              &gt; CHECK OUT MY WORK
              <ArrowDownRight className="w-5 h-5" strokeWidth={1} />
            </motion.a>
            <Dialog>
              <DialogTrigger asChild>
                <motion.button 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-6 py-3 border border-white hover:bg-white hover:text-black text-xs sm:text-base transition-colors duration-300"
                  whileHover={{ scale: 1.02, backgroundColor: "#FFFFFF", color: "#000000" }}
                  whileTap={{ scale: 0.98 }}
                >
                  &gt; LETS TALK
                  <MessageCircle className="w-5 h-5" strokeWidth={1} />
                </motion.button>
              </DialogTrigger>
              <DialogContent className="bg-black border border-white text-white p-6 max-w-lg mx-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold mb-2">Let's Discuss Your Project</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </AnimatedSection>

        {/* Footer Section */}
        <motion.footer 
          className="mt-8 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-xs sm:text-sm text-gray-500 break-all">$ echo "next_project.txt"</span>
          <p className="mt-2 text-xs sm:text-base break-words">
            YOUR PROJECT COULD BE THE NEXT ONE ON DECK
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default EnhancedHomePage;