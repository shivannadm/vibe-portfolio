import { NextResponse } from 'next/server';

// Portfolio context for the AI
const portfolioContext = `
You are Shivanna's AI assistant on his portfolio website. You help visitors learn about Shivanna.

ABOUT SHIVANNA:
- AI Engineer & Full-Stack Developer
- Recent graduate in Information Science and Engineering from Cambridge Institute of Technology
- CGPA: 8.8/10
- Location: Bengaluru, Karnataka
- Email: shivannadm16@gmail.com
- Phone: +91 8197753351
- GitHub: https://github.com/shivannadm
- LinkedIn: https://linkedin.com/in/shivannadm

SKILLS:
Languages: Java, Python, C, JavaScript
AI/ML: TensorFlow, Langchain, CNN, Pandas, Numpy, Scikit-learn
Web Dev: Django, Next.js, React, HTML, CSS, JavaScript
Databases: MySQL, MongoDB, Firebase, API Integration
Tools: GitHub, JIRA, VS Code, PyCharm, Eclipse, n8n Engine

PROJECTS:
1. AI Stack Showdown - Comparison platform using AI analysis for framework selection
2. AI Mood Journal - Intelligent journaling with sentiment analysis and mood insights
3. Viral Replicator - AI content generation analyzing viral patterns
4. AI Influencer Tracker - Social media tracking with engagement analytics

EXPERIENCE:
- ORANTS AI (Oct 2025 - Present) - AI Engineer Intern
- Capgemini, NASSCOM Foundation (Sep 2024 - Mar 2025) - Data Science Intern
- Samsung Innovation Campus (Aug 2023 - Feb 2024) - IoT Intern
- Varcons Technologies (Oct 2022 - Nov 2022) - Full-Stack Development Intern

CERTIFICATIONS:
- Data Science & ML - FutureSkills Prime
- Employability Skills - Wadhwani Foundation
- RDBMS & MySQL - SpringBoard
- Scrum Project Management - Atlassian

Keep responses concise, friendly, and professional. If asked to contact, provide email and phone number.
`;

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Using rule-based responses (No API key needed!)
        const aiResponse = getSimpleResponse(message.toLowerCase());
        return NextResponse.json({ response: aiResponse });

    } catch (error) {
        console.error('Chat error:', error);
        return NextResponse.json(
            { error: 'Failed to process message' },
            { status: 500 }
        );
    }
}

// Simple rule-based chatbot (No API needed)
function getSimpleResponse(message: string): string {
    // Projects
    if (message.includes('project')) {
        return "Shivanna has built impressive AI projects including:\n\n🚀 AI Stack Showdown - Framework comparison using AI\n🧠 AI Mood Journal - Sentiment analysis app\n📈 Viral Replicator - Content generation platform\n👥 AI Influencer Tracker - Social media analytics\n\nWant to know more about any specific project?";
    }

    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
        return "Shivanna's tech stack includes:\n\n💻 Languages: Python, Java, JavaScript, C\n🤖 AI/ML: TensorFlow, Langchain, Pandas, Scikit-learn\n🌐 Web: Next.js, React, Django, HTML/CSS\n🗄️ Databases: MongoDB, MySQL, Firebase\n\nHe specializes in AI Engineering and Full-Stack Development!";
    }

    // Experience
    if (message.includes('experience') || message.includes('internship') || message.includes('work')) {
        return "Shivanna has completed 4+ internships:\n\n🤖 ORANTS AI - AI Engineer (Current)\n📊 Capgemini - Data Science Intern\n🔌 Samsung Innovation Campus - IoT Intern\n💻 Varcons Technologies - Full-Stack Developer\n\nHe has hands-on experience in AI/ML, data science, and web development!";
    }

    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('college') || message.includes('university')) {
        return "Shivanna graduated with a Bachelor of Engineering in Information Science from Cambridge Institute of Technology, Bengaluru.\n\n🎓 CGPA: 8.8/10\n📚 Specialized in AI/ML, Data Structures, DBMS, and Computer Networks";
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach') || message.includes('connect') || message.includes('touch')) {
        return "You can reach Shivanna at:\n\n📧 Email: shivannadm16@gmail.com\n📱 Phone: +91 8197753351\n💼 LinkedIn: linkedin.com/in/shivannadm\n🐙 GitHub: github.com/shivannadm\n\nFeel free to connect!";
    }

    // Location
    if (message.includes('location') || message.includes('where') || message.includes('based')) {
        return "Shivanna is based in Bengaluru, Karnataka, India 🇮🇳";
    }

    // Certifications
    if (message.includes('certificate') || message.includes('certification')) {
        return "Shivanna holds certifications in:\n\n✅ Data Science & ML - FutureSkills Prime\n✅ Employability Skills - Wadhwani Foundation\n✅ RDBMS & MySQL - SpringBoard\n✅ Scrum Project Management - Atlassian";
    }

    // Hire/Available
    if (message.includes('hire') || message.includes('available') || message.includes('opportunity')) {
        return "Shivanna is currently working as an AI Engineer Intern at ORANTS AI and is open to new opportunities!\n\n📧 Contact: shivannadm16@gmail.com\n\nFeel free to reach out to discuss potential collaborations!";
    }

    // AI related
    if (message.includes('ai ') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('ml')) {
        return "Shivanna specializes in AI/ML with expertise in:\n\n🧠 TensorFlow, Langchain, CNN\n📊 Pandas, Numpy, Scikit-learn\n🤖 AI automation and intelligent applications\n\nHe has built several AI-powered projects including mood analysis, content generation, and influencer tracking systems!";
    }

    // Default response
    return "I can help you learn about Shivanna! Ask me about:\n\n• His projects and work\n• Technical skills and expertise\n• Experience and internships\n• Education and certifications\n• How to contact him\n\nWhat would you like to know? 😊";
}
