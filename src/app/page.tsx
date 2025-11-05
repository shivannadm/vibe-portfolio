'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, ExternalLink, Code2, Sparkles, ChevronDown, MapPin, Phone, Award, Briefcase, GraduationCap, Zap, Terminal, Rocket, Star, Download, Globe, Play, MessageCircle, Send, X, Minimize2, Bot, User, FileText } from 'lucide-react';


const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Shivanna's AI assistant. I can tell you about his skills, projects, experience, and more. What would you like to know?"
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const projects = [
    {
      title: "AI Stack Showdown",
      description: "Developed an intelligent GPT from the react native stack and ranks different technology stacks using AI analysis, helping developers make data-driven decisions on framework selection.",
      tech: ["Next.js", "React", "AI Analysis", "Tailwind CSS", "API Integration"],
      outcomes: ["Framework comparison engine", "Performance benchmarking", "Prompt output"],
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "⚡",
      github: "https://github.com/shivannadm/ai-stack-showdown",
      live: "https://ai-stack-showdown.vercel.app/",
      report: "/assets/reports/ai-stack-showdown.pdf",
      highlights: ["AI-powered analysis", "Real-time response", "Developer insights"]
    },
    {
      title: "AI Mood Journal",
      description: "Created an intelligent journaling application that uses AI to analyze emotional patterns, provide mood insights, and offer personalized recommendations for mental wellness.",
      tech: ["Python", "Expo Go", "Next.js", "AI APIs", "React native", "Firebase"],
      outcomes: ["Emotion tracking", "AI mood analysis", "Personalized insights"],
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "🧠",
      github: "https://github.com/shivannadm/ai-mood-journal",
      live: "https://expo.dev/accounts/shivanna/projects/ai-mood-journal/builds/526fce69-df06-4401-acba-ba814f1b3db3",
      report: "/assets/reports/ai-mood-journal.pdf",
      highlights: ["Sentiment analysis", "Pattern recognition", "Mental wellness", " AI recommendations", "Track emotional trends"]
    },
    {
      title: "Viral Replicator",
      description: "Built an AI content generation platform that analyzes viral content patterns and helps creators replicate successful content strategies using machine learning algorithms.",
      tech: ["AI/ML", "Content Analysis", "Python", "Pattern Recognition", "APIs", "Next.js", "React", " Tailwind CSS"],
      outcomes: ["Viral pattern detection", "Content optimization", "Trend prediction"],
      gradient: "from-teal-600 via-green-600 to-emerald-600",
      icon: "🚀",
      github: "https://github.com/shivannadm/viral-replicator",
      live: "https://viral-replicator.vercel.app/",
      report: "/assets/reports/viral-replicator.pdf",
      highlights: ["ML-powered insights", "Trend analysis", "Content strategy"]
    },
    {
      title: "AI Influencer Tracker",
      description: "Built a comprehensive AI-powered automated n8n workflow to track and analyze social media influencers, monitoring engagement metrics, content patterns, and audience demographics across multiple platforms.",
      tech: ["API Nodes", "Web Scraping", "Data Analysis", "Google sheets", "n8n Engine"],
      outcomes: ["Automated influencer discovery", "Real-time engagement analytics", "Engagment rate analysis"],
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "👥",
      github: "https://github.com/shivannadm/AI_Influencer_Tracker",
      live: "https://github.com/shivannadm/AI_Influencer_Tracker/tree/main/n8n_workflow",
      report: "/assets/reports/ai-influencer-tracker.pdf",
      highlights: ["Multi-platform tracking", "AI-driven insights", "Real-time data", "AI Automation"]
    },
    {
      title: "AI Forecast for Investor Decision",
      description: "Developed an AI-driven stock price prediction model using LSTM for long-term trend forecasting and CNN for short-term pattern recognition. Implemented a Django-based web application to deliver real-time stock trend predictions.",
      tech: ["Python", "Django", "LSTM", "CNN", "Machine Learning", "MySQL"],
      outcomes: ["Long-term trend forecasting", "Short-term pattern recognition", "Real-time predictions"],
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      icon: "📈",
      github: "https://github.com/shivannadm/AI_Stocker",
      live: null,
      report: "/assets/reports/ai-forecast-investor.pdf",
      highlights: ["LSTM forecasting", "CNN pattern detection", "Django web app"]
    },
    {
      title: "E-Commerce Website",
      description: "Developed a full-stack e-commerce web application using Django's MVT architecture. Utilized MySQL for database management and enhanced UI/UX using HTML, CSS, and JavaScript with GitHub for version control.",
      tech: ["Django", "MySQL", "HTML", "CSS", "JavaScript", "GitHub"],
      outcomes: ["Structured MVT architecture", "Database management", "Enhanced UI/UX"],
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🛒",
      github: "https://github.com/shivannadm/Ecommerce-web",
      live: null,
      report: "assets/reports/e-commerce.pdf",
      highlights: ["Full-stack development", "MySQL database", "Responsive design"]
    }
  ];

  const internships = [
    {
      company: "ORANTS AI",
      role: "AI Engineer Intern",
      period: "October 2025 - Present",
      description: "Working on cutting-edge AI projects including influencer tracking, content generation, and intelligent application development.",
      icon: "🤖",
      highlights: ["AI Development", "Content Generation", "AI Automation", "Data Science", "Vibe coding", "n8n Engine", "Prompt Engineering", "Problem Solving"]
    },
    {
      company: "Capgemini, NASSCOM Foundation",
      role: "Data Science Intern",
      period: "September 2024 - March 2025",
      description: "Applied data visualization, machine learning, and AI techniques. Gained expertise in data preprocessing, model development, and deployment.",
      icon: "📊",
      highlights: ["Machine Learning", , "Data Science", "Problem Solving", "Model Deployment", "Data Preprocessing", "Communication"]
    },
    {
      company: "Samsung Innovation Campus",
      role: "IoT Intern",
      period: "August 2023 - February 2024",
      description: "Hands-on experience with IoT, focusing on Raspberry Pi and Python-based automation projects.",
      icon: "🔌",
      highlights: ["IoT Development", "Raspberry Pi", "Python Automation", "Hardware Integration", "Operating Systems"]
    },
    {
      company: "Varcons Technologies",
      role: "Full-Stack Development Intern",
      period: "October 2022 - November 2022",
      description: "Developed responsive web applications using HTML, CSS, JavaScript, and MongoDB. Gained practical frontend and backend experience.",
      icon: "💻",
      highlights: ["Full-Stack Development", "Web Applications", "MongoDB", "Figma", "Responsive Design"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Information Science and Engineering",
      institution: "Cambridge Institute of Technology, Bengaluru",
      board: "Visvesvaraya Technological University",
      period: "2021 - 2025",
      score: "CGPA: 8.8/10",
      icon: "🎓",
      details: "Computer Networks, Operating Systems, DBMS, Data Structures, OOPs, Statistics, AI/ML"
    },
    {
      degree: "Pre-University",
      field: "Computer Science",
      institution: "MDR PU College of Science Deodurga, Raichur",
      board: "Karnataka Residential Educational Institutions Society",
      period: "2019 - 2021",
      score: "Percentage: 88.3%",
      icon: "📚",
      details: "Computer Science, Mathematics, Physics, Chemistry"
    },
    {
      degree: "SSLC",
      field: "Secondary Education",
      institution: "GBH School Jalahalli, Raichur",
      board: "Karnataka Secondary Education Board",
      period: "2018 - 2019",
      score: "Percentage: 88.88%",
      icon: "🏫",
      details: "Science, Mathematics, Social Studies, English"
    }
  ];

  const techStack = {
    "Languages": ["Java", "Python", "C", "JavaScript"],
    "AI/ML": ["TensorFlow", "Langchain", "CNN", "Pandas", "Numpy", "Scikit-learn"],
    "Web Dev": ["Django", "Next.js", "React", "HTML", "CSS", "JavaScript"],
    "Databases": ["MySQL", "MongoDB", "Firebase", "API Integration"],
    "Tools": ["GitHub", "JIRA", "VS Code", "PyCharm", "Eclipse", "n8n Engine"],
    "Skills": ["Data Science", "AI Automation", "Data Structure", "OOPs", "DBMS", "Operating System"]
  };

  const achievements = [
    { text: "CGPA: 8.8/10", icon: "🎓" },
    { text: "88.3% in PU", icon: "📚" },
    { text: "88.88% in SSLC", icon: "🏆" },
    { text: "4+ Internships", icon: "💼" },
    { text: "Multiple AI Projects", icon: "🚀" }
  ];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        'service_csbms5t',        // Get from EmailJS dashboard
        'template_302jxpf',       // Get from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'shivannadm16@gmail.com'
        },
        'nK5vv6DjpyrTqMqWn'         // Get from EmailJS dashboard
      );

      console.log('SUCCESS!', result.text);
      alert('Message sent successfully! I will get back to you soon.');
      setShowContactForm(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again or email me directly at shivannadm16@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChatSubmit = async (e: any) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setChatInput('');

    // Add user message
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      // Send to your AI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();

      // Add AI response
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response || "I'm having trouble connecting right now. Please try again or contact Shivanna directly at shivannadm16@gmail.com"
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I'm experiencing technical difficulties. Please email Shivanna at shivannadm16@gmail.com"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Quick action suggestions
  const quickActions = [
    "Tell me about your projects",
    "What are your skills?",
    "Your experience?",
    "How to contact you?"
  ];

  const handleQuickAction = (action: any) => {
    setChatInput(action);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden cursor-default">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        {isMounted && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500 rounded-full blur-xl opacity-20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Shivanna
              </span>
            </button>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            {['home', 'projects', 'experience', 'tech', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-purple-400 transition capitalize relative group cursor-pointer"
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all" />
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href="https://shivanna-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition transform hover:scale-110"
              title="Main Portfolio"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://github.com/shivannadm" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition transform hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/shivannadm" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition transform hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 text-center max-w-5xl">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative inline-block">
              {/* Photo with Smooth Wave Bottom */}
              <div className="relative z-10">
                <svg className="w-56" viewBox="0 -10 224 280" style={{ display: 'block' }}>
                  <defs>
                    <clipPath id="wave-bottom">
                      <path d="M 0,0 L 350,0 L 245,300 Q 160,170 110,236 Q 137,210 105,241 Q 80,265 50,230 Q 20,180 0,210 Z" />
                    </clipPath>


                    {/* Alternative: Multi-color gradient */}
                    <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="70%" stopColor="transparent" />
                      <stop offset="85%" stopColor="rgba(168, 85, 247, 0.4)" /> {/* purple */}
                      <stop offset="92%" stopColor="rgba(236, 72, 153, 0.4)" /> {/* pink */}
                      <stop offset="100%" stopColor="rgba(34, 211, 238, 0.5)" /> {/* cyan */}
                    </linearGradient>

                  </defs>
                  <image
                    href="/assets/about-pic2.png"
                    width="230"
                    height="280"
                    clipPath="url(#wave-bottom)"
                    preserveAspectRatio="xMidYMin slice"
                  />
                  {/* Gradient overlay at bottom */}
                  <rect
                    width="224"
                    height="280"
                    fill="url(#bottom-gradient)"
                    clipPath="url(#wave-bottom)"
                  />
                </svg>
              </div>

              {/* Gradient Glow Behind Bottom Only */}
              <div className="absolute bottom-0 left-0 right-0 h-70 bg-gradient-to-t from-purple-500 via-pink-500 to-transparent blur-2xl opacity-60 -z-10" />
            </div>
          </div>

          <div className="mb-6 flex justify-center gap-3 flex-wrap">
            {achievements.slice(0, 3).map((achievement, idx) => (
              <div key={idx} className="bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm backdrop-blur-sm flex items-center gap-2">
                <span>{achievement.icon}</span>
                <span>{achievement.text}</span>
              </div>
            ))}
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            SHIVANNA
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <Terminal className="w-6 h-6 text-purple-400 animate-pulse" />
            <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
              AI Engineer & Software Developer
            </p>
            <Rocket className="w-6 h-6 text-cyan-400 animate-bounce" />
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent solutions at the intersection of <span className="text-purple-400 font-semibold">AI</span> and modern <span className="text-cyan-400 font-semibold">web development</span>.
            Building the future, one line of code at a time.
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 flex-wrap">
            <MapPin className="w-4 h-4" />
            <span>Bengaluru, Karnataka</span>
            <span className="mx-2">•</span>
            <Phone className="w-4 h-4" />
            <span>+91 8197753351</span>
          </div>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button
              onClick={() => setShowContactForm(true)}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full flex items-center gap-2 transition transform hover:scale-110 shadow-lg shadow-purple-500/50 cursor-pointer"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition" />
              <span className="font-semibold">Get In Touch</span>
            </button>
            <a
              href="https://github.com/shivannadm"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-cyan-500 hover:bg-cyan-500/20 px-8 py-4 rounded-full flex items-center gap-2 transition transform hover:scale-110"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition" />
              <span className="font-semibold">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shivannadm"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-blue-500 hover:bg-blue-500/20 px-8 py-4 rounded-full flex items-center gap-2 transition transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-green-500 hover:bg-green-500/20 px-8 py-4 rounded-full flex items-center gap-2 transition transform hover:scale-110"
            >
              <Download className="w-5 h-5 group-hover:rotate-12 transition" />
              <span className="font-semibold">Resume</span>
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="animate-bounce text-purple-400 hover:text-purple-300 transition"
          >
            <ChevronDown className="w-10 h-10 mx-auto" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-2 mb-4">
              <span className="text-purple-400 font-semibold">🚀 MY WORK</span>
            </div>
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              AI-powered solutions built with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project: any, idx: any) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveProject(idx)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-3xl p-6 hover:border-purple-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{project.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-300 group-hover:text-purple-200 transition">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <Star className={`w-6 h-6 transition-all duration-300 ${activeProject === idx ? 'text-yellow-400 rotate-180 scale-125' : 'text-gray-600'}`} />
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.highlights.map((highlight: any, i: any) => (
                        <span key={i} className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full text-xs border border-cyan-500/30 flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-purple-400 font-semibold mb-2 flex items-center gap-2">
                      <Code2 className="w-3 h-3" />
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: any, i: any) => (
                        <span key={i} className="bg-purple-900/40 text-purple-200 px-3 py-1 rounded-lg text-xs border border-purple-500/30 hover:border-purple-500/60 transition">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-3 h-3" />
                      Key Outcomes:
                    </p>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome: any, i: any) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400 text-xs">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-4 py-2 rounded-full text-xs font-semibold transition transform hover:scale-105 shadow-lg"
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-4 py-2 rounded-full text-xs font-semibold transition transform hover:scale-105 shadow-lg"
                      >
                        <Play className="w-3 h-3" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 px-4 py-2 rounded-full text-xs font-semibold transition transform hover:scale-105 shadow-lg"
                    >
                      <FileText className="w-3 h-3" />
                      Report PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-cyan-900/30 border border-cyan-500/30 rounded-full px-6 py-2 mb-4">
              <span className="text-cyan-400 font-semibold">💼 CAREER PATH</span>
            </div>
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-gray-400 text-xl">Building expertise through diverse internships</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {internships.map((internship, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/60 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition">{internship.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-300 mb-1">{internship.company}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{internship.role}</p>
                    <p className="text-gray-500 text-sm mb-3">{internship.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{internship.description}</p>

                    {/* NEW: Featured Areas/Highlights */}
                    <div>
                      <p className="text-xs text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-3 h-3" />
                        Key Focus Areas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {internship.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full text-xs border border-cyan-500/30"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education Journey
            </h3>
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500" />

              {education.map((edu, idx) => (
                <div key={idx} className="relative mb-12 last:mb-0">
                  <div className="absolute left-8 top-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full -ml-2 border-4 border-black z-10" />

                  <div className="ml-20 bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all hover:shadow-xl hover:shadow-purple-500/20">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-purple-300 mb-1">{edu.degree}</h4>
                        <p className="text-cyan-400 font-semibold mb-2">{edu.field}</p>
                        <p className="text-gray-300 text-sm mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-2">{edu.board}</p>
                        <div className="flex items-center gap-4 mb-2">
                          <p className="text-gray-500 text-sm">{edu.period}</p>
                          <p className="text-lg font-semibold text-purple-400">{edu.score}</p>
                        </div>
                        {edu.details && (
                          <p className="text-gray-400 text-sm mt-2 pt-2 border-t border-purple-500/20">{edu.details}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-2 mb-4">
              <span className="text-purple-400 font-semibold">⚡ SKILLS</span>
            </div>
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Arsenal
            </h2>
            <p className="text-gray-400 text-xl">Tools and technologies I have mastered</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items], idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 group-hover:text-yellow-400 transition" />
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:scale-150 transition" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-8 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center text-cyan-400 flex items-center justify-center gap-2">
              <Award className="w-8 h-8" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Data Science & ML - NASSCOM FutureSkills Prime", pdf: "/assets/certificates/NASSCOM_Shivanna.pdf" },
                { name: "Employability Skills - Wadhwani Foundation", pdf: "/assets/certificates/Wadhwani Foundation Certificate.pdf" },
                { name: "Agile Project Management - Atlassian", pdf: "/assets/certificates/Agile Project Management.pdf" },
                { name: "Database Management System - SpringBoard", pdf: "/assets/certificates/Infosysy-dbms-Sql.pdf" },
                { name: "Python (Basic) - HackerRank", pdf: "/assets/certificates/HackerRank-Python.pdf" },
                { name: "Young Python Professional - Infosys", pdf: "/assets/certificates/Infosysy-Python.pdf" },
                { name: "Data Science with GenAI - Udemy", pdf: "/assets/certificates/Udemy-GenAI.pdf" },
                { name: "AI Application Development - Udemy", pdf: "/assets/certificates/Udemy-Google-AI.pdf" },
                { name: "Digital 101 Journey - FutureSkills Prime", pdf: "/assets/certificates/Digital-python.pdf" },
                { name: "Skillsda Internship Certificate", pdf: "/assets/certificates/Skillsda-intern.pdf" },
                { name: "Zidio Training Certificate", pdf: "/assets/certificates/Zidio Training.pdf" },
                { name: "Zidio Internship Certificate", pdf: "/assets/certificates/Zidio-Intern.pdf" }
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3 text-gray-300 bg-purple-900/20 rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/60 transition group">
                  <div className="flex items-center gap-3 flex-1">
                    <Award className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm">{cert.name}</span>
                  </div>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition transform hover:scale-110 flex-shrink-0"
                    title="View Certificate"
                  >
                    <ExternalLink className="w-6 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* AI Chatbot */}
      {
        showChatbot && (
          <div className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] animate-slideUp">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/50 rounded-2xl shadow-2xl shadow-purple-500/50 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">AI Assistant</h3>
                    <p className="text-xs text-white/80">Ask me anything about my chief</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="text-white/80 hover:text-white transition hover:rotate-90 transform cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-3 bg-black/40">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 ${msg.role === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-800 text-gray-200 border border-purple-500/30'
                        }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2 justify-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-gray-800 rounded-2xl px-4 py-3 border border-purple-500/30">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              {chatMessages.length === 1 && (
                <div className="px-4 py-2 bg-black/20 border-t border-purple-500/20">
                  <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(action)}
                        className="text-xs bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/30 transition cursor-pointer"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit} className="p-4 bg-black/40 border-t border-purple-500/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-gray-900/50 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={isTyping || !chatInput.trim()}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition transform hover:scale-110 shadow-lg disabled:scale-100 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      }

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-8 right-24 z-50 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 transition transform hover:scale-110 group cursor-pointer"
        title="AI Assistant"
      >
        {showChatbot ? (
          <Minimize2 className="w-6 h-6 group-hover:rotate-180 transition-transform" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />
      </button>

      {/* About Section */}
      <section id="about" className="relative min-h-screen py-20 px-6 flex items-center bg-gradient-to-b from-purple-900/10 to-black">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 font-semibold">👋 GET TO KNOW ME</span>
          </div>

          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            I am <span className="text-purple-400 font-bold">Shivanna</span>, an AI Engineer and Full-Stack Developer passionate about leveraging cutting-edge technologies to build innovative solutions.
          </p>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            I'm a recent graduate in Information Science and Engineering at Cambridge Institute of Technology with a CGPA of 8.8.
            Through multiple internships at <span className="text-cyan-400">ORANTS AI, Capgemini, Samsung Innovation Campus, and Varcons Technologies</span>,
            I have gained hands-on experience in AI/ML, data science, and full-stack development.
          </p>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            I thrive at the intersection of <span className="text-purple-400 font-semibold">artificial intelligence</span> and <span className="text-cyan-400 font-semibold">modern web development</span>,
            constantly pushing boundaries to create impactful digital experiences that solve real-world problems.
          </p>

          <div className="flex gap-6 justify-center mb-12 flex-wrap">
            <button
              onClick={() => setShowContactForm(true)}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition transform hover:scale-110 shadow-lg shadow-purple-500/50 cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Get In Touch</span>
            </button>
            <a
              href="https://linkedin.com/in/shivannadm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-cyan-500 hover:bg-cyan-500/20 px-8 py-4 rounded-full transition transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://github.com/shivannadm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full transition transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/60 transition hover:transform hover:scale-110">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-sm text-gray-300 font-semibold">{achievement.text}</div>
              </div>
            ))}
          </div>
          {/* Contact Form Modal */}
          {showContactForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
              <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/50 rounded-2xl p-8 shadow-2xl shadow-purple-500/50 animate-slideUp">
                {/* Close Button */}
                <button
                  onClick={() => setShowContactForm(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white transition transform hover:scale-110 hover:rotate-90 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Form Header */}
                <div className="text-center mb-5">
                  <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-1.5 mb-3">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 font-semibold text-sm">GET IN TOUCH</span>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Let's Connect
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Send me a message and I'll get back to you soon</p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name and Email Fields - Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-purple-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition"
                        placeholder="Shivanna DM"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-purple-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition"
                        placeholder="shivannadm16@gmail.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-purple-400 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition"
                      placeholder="Enquiry"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-purple-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition resize-none"
                      placeholder="Feel free to reach out should you require any further information or clarification..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 px-6 py-2.5 rounded-full font-semibold text-sm transition transform hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
          <div className="border-t border-purple-500/30 pt-8 mt-12">
            <p className="text-gray-400 mb-2">
              Built with 💜 using <span className="text-purple-400">Next.js</span>, <span className="text-cyan-400">React</span>, and <span className="text-pink-400">Tailwind CSS</span> | <a href="/assets/portfolio-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition"
              >
                Portfolio Analysed Report
              </a>.
            </p>
            <p className="text-gray-500 text-sm">
              This portfolio website built as a part of Internship task @ <a
                href="https://orants.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition"
              >
                ORANTS.AI
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 transition transform hover:scale-110 group"
      >
        <ChevronDown className="w-6 h-6 rotate-180 group-hover:animate-bounce" />
      </button>

      <style jsx>{`

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
      `}</style>
    </div >
  );
};

export default Portfolio;