'use client';
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Sparkles, ChevronDown, MapPin, Phone, Award, Briefcase, GraduationCap, Zap, Terminal, Rocket, Star, Download, Globe, Play } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [

    {
      title: "AI Stack Showdown",
      description: "Developed an intelligent comparison platform that evaluates and ranks different technology stacks using AI analysis, helping developers make data-driven decisions on framework selection.",
      tech: ["Next.js", "React", "AI Analysis", "Tailwind CSS", "API Integration"],
      outcomes: ["Framework comparison engine", "Performance benchmarking", "Prompt output"],
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "⚡",
      github: "https://github.com/shivannadm/ai-stack-showdown",
      live: "https://ai-stack-showdown.vercel.app/",
      highlights: ["AI-powered analysis", "Real-time response", "Developer insights"]
    },
    {
      title: "AI Mood Journal",
      description: "Created an intelligent journaling application that uses AI to analyze emotional patterns, provide mood insights, and offer personalized recommendations for mental wellness.",
      tech: ["Python", "Sentiment analysis", "Expo Go", "Next.js", "AI APIs","React native","Firebase"],
      outcomes: ["Emotion tracking", "AI mood analysis", "Personalized insights"],
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "🧠",
      github: "https://github.com/shivannadm/ai-mood-journal",
      live: "https://expo.dev/accounts/shivanna/projects/ai-mood-journal/builds/526fce69-df06-4401-acba-ba814f1b3db3",
      highlights: ["Sentiment analysis", "Pattern recognition", "Mental wellness"," AI recommendations","Track emotional trends"]
    },
    {
      title: "Viral Replicator",
      description: "Built an AI content generation platform that analyzes viral content patterns and helps creators replicate successful content strategies using machine learning algorithms.",
      tech: ["AI/ML", "Content Analysis", "Python", "Pattern Recognition", "APIs"],
      outcomes: ["Viral pattern detection", "Content optimization", "Trend prediction"],
      gradient: "from-teal-600 via-green-600 to-emerald-600",
      icon: "🚀",
      github: "https://github.com/shivannadm/viral-replicator",
      live: "https://viral-replicator.vercel.app/",
      highlights: ["ML-powered insights", "Trend analysis", "Content strategy"]
    },
    {
      title: "AI Influencer Tracker",
      description: "Built a comprehensive AI-powered system to track and analyze social media influencers, monitoring engagement metrics, content patterns, and audience demographics across multiple platforms.",
      tech: ["Python", "AI APIs", "Web Scraping", "Data Analysis", "MongoDB"],
      outcomes: ["Automated influencer discovery", "Real-time engagement analytics", "Sentiment analysis dashboard"],
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "👥",
      github: "https://github.com/shivannadm/AI_Influencer_Tracker",
      live: "https://github.com/shivannadm/AI_Influencer_Tracker/tree/main/n8n_workflow",
      highlights: ["Multi-platform tracking", "AI-driven insights", "Real-time data"]
    }
  ];

  const internships = [
    {
      company: "ORANTS AI",
      role: "AI Engineer Intern",
      period: "October 2025 - Present",
      description: "Working on cutting-edge AI projects including influencer tracking, content generation, and intelligent application development.",
      icon: "🤖"
    },
    {
      company: "Capgemini, NASSCOM Foundation",
      role: "Data Science Intern",
      period: "September 2024 - March 2025",
      description: "Applied data visualization, machine learning, and AI techniques. Gained expertise in data preprocessing, model development, and deployment.",
      icon: "📊"
    },
    {
      company: "Samsung Innovation Campus",
      role: "IoT Intern",
      period: "August 2023 - February 2024",
      description: "Hands-on experience with IoT, focusing on Raspberry Pi and Python-based automation projects.",
      icon: "🔌"
    },
    {
      company: "Varcons Technologies",
      role: "Full-Stack Development Intern",
      period: "October 2022 - November 2022",
      description: "Developed responsive web applications using HTML, CSS, JavaScript, and MongoDB. Gained practical frontend and backend experience.",
      icon: "💻"
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
    "Databases": ["MySQL", "MongoDB", "Firebase","API Integration"],
    "Tools": ["GitHub", "JIRA", "VS Code", "PyCharm", "Eclipse","n8n Engine"],
    "Skills": ["Data Science", "AI Automation", "Data Structure", "OOPs", "DBMS", "Operating System"]
  };

  const achievements = [
    { text: "CGPA: 8.8/10", icon: "🎓" },
    { text: "88.3% in PU", icon: "📚" },
    { text: "88.88% in SSLC", icon: "🏆" },
    { text: "4+ Internships", icon: "💼" },
    { text: "Multiple AI Projects", icon: "🚀" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Shivanna
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            {['home', 'projects', 'experience', 'tech', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-purple-400 transition capitalize relative group"
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
            <a
              href="mailto:shivannadm16@gmail.com"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full flex items-center gap-2 transition transform hover:scale-110 shadow-lg shadow-purple-500/50"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition" />
              <span className="font-semibold">Get In Touch</span>
            </a>
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
            {projects.map((project, idx) => (
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
                      {project.highlights.map((highlight, i) => (
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
                      {project.tech.map((tech, i) => (
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
                      {project.outcomes.map((outcome, i) => (
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-4 py-2 rounded-full text-xs font-semibold transition transform hover:scale-105 shadow-lg"
                    >
                      <Play className="w-3 h-3" />
                      Live Demo
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
                    <p className="text-gray-300 text-sm leading-relaxed">{internship.description}</p>
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
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center text-cyan-400 flex items-center justify-center gap-2">
              <Award className="w-8 h-8" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Data Science & ML - FutureSkills Prime",
                "Employability Skills - Wadhwani Foundation",
                "RDBMS & MySQL - SpringBoard",
                "Scrum Project Management - Atlassian"
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300 bg-purple-900/20 rounded-lg p-3 border border-purple-500/20">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <a
              href="mailto:shivannadm16@gmail.com"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition transform hover:scale-110 shadow-lg shadow-purple-500/50"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">shivannadm16@gmail.com</span>
            </a>
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

          <div className="border-t border-purple-500/30 pt-8 mt-12">
            <p className="text-gray-400 mb-2">
              Built with 💜 using <span className="text-purple-400">Next.js</span>, <span className="text-cyan-400">React</span>, and <span className="text-pink-400">Tailwind CSS</span>
            </p>
            <p className="text-gray-500 text-sm">
              This portofolio website built as a part of Internship task @ ORANTS AI.
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
    </div>
  );
};

export default Portfolio;