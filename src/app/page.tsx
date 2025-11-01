'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Sparkles, ChevronDown, Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI Influencer Tracker",
      tagline: "Track & Analyze Social Media Influence",
      description: "An intelligent system that tracks and analyzes social media influencers, providing insights on engagement metrics, audience demographics, and content performance.",
      tech: ["Python", "AI APIs", "Data Analytics", "Web Scraping"],
      github: "https://github.com/shivannadm/AI_Influencer_Tracker",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI Stack Showdown",
      tagline: "Compare AI Frameworks & Tools",
      description: "A comprehensive comparison platform for evaluating different AI frameworks, models, and tools. Helps developers choose the right tech stack for their AI projects.",
      tech: ["Next.js", "React", "AI Models", "Comparative Analysis"],
      github: "https://github.com/shivannadm/ai-stack-showdown",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Viral Replicator",
      tagline: "AI-Powered Content Generation",
      description: "An AI content forge that analyzes viral content patterns and generates optimized posts for social media platforms using machine learning algorithms.",
      tech: ["Python", "NLP", "OpenAI API", "Content Analysis"],
      github: "https://github.com/shivannadm/viral-replicator",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "AI Mood Journal",
      tagline: "Emotion Tracking with AI Insights",
      description: "A personal journaling app that uses AI to analyze emotional patterns, provide mental health insights, and track mood trends over time.",
      tech: ["React", "AI Sentiment Analysis", "Data Visualization", "Firebase"],
      github: "https://github.com/shivannadm/ai-mood-journal",
      color: "from-green-500 to-teal-500"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript"] },
    { category: "AI/ML", items: ["LSTM", "CNN", "NLP", "OpenAI API"] },
    { category: "Web Dev", items: ["Next.js", "React", "Django", "Node.js"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
    { category: "Tools", items: ["Git", "VS Code", "JIRA", "Framer Motion"] }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            SHIVANNA.AI
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'projects', 'skills', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : ''
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-purple-500/20"
          >
            {['home', 'projects', 'skills', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-4 capitalize hover:bg-purple-500/10"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              SHIVANNA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              AI Engineer | Full-Stack Developer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Building intelligent systems that bridge creativity and technology.
              Specialized in AI/ML, web development, and data-driven solutions.
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/shivannadm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/shivannadm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:shivannadm16@gmail.com"
                className="p-3 bg-pink-500/20 rounded-full hover:bg-pink-500/30 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Explore My Work
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 animate-bounce text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">AI-powered solutions built during my internship @ ORANTS</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Code2 className="w-8 h-8 text-purple-400" />

                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors"
                    <a>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-purple-400 text-sm mb-3">{project.tagline}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            ))}
        </div>
    </div>
      </section >

    {/* Skills Section */ }
    < section id = "skills" className = "relative z-10 py-20 px-6 bg-gradient-to-b from-black via-purple-900/10 to-black" >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all"
            >
              <Brain className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-blue-400">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300 text-sm">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      </section >

    {/* About Section */ }
    < section id = "about" className = "relative z-10 py-20 px-6" >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-2xl p-8 border border-green-500/20">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a final-year Information Science Engineering student at Cambridge Institute of Technology
              with a passion for building intelligent systems. My journey spans AI/ML, full-stack development,
              and data science, with hands-on experience from internships at Capgemini and Samsung Innovation Campus.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Currently interning at ORANTS, where I've developed cutting-edge AI projects including influencer
              tracking systems, content generation tools, and sentiment analysis applications. I love exploring
              the intersection of creativity and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:shivannadm16@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      </section >

    {/* Footer */ }
    < footer className = "relative z-10 py-8 px-6 border-t border-purple-500/20" >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          Built with Next.js, Tailwind CSS & Framer Motion | © 2025 Shivanna
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Bengaluru, Karnataka | AI Engineer Intern @ ORANTS
        </p>
      </div>
      </footer >
    </div >
  );
}