import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import axios from 'axios';

function Chatbot() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const chatWindowRef = useRef(null);
  const chatbotContainerRef = useRef(null);

  const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Auto-scroll to bottom when chat updates
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chat]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showChat && 
          chatbotContainerRef.current && 
          !chatbotContainerRef.current.contains(event.target) && 
          !event.target.closest('.chatbot-toggle')) {
        setScrollPosition(chatWindowRef.current?.scrollTop || 0);
        setShowChat(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showChat]);

  // Hide quick actions after first interaction
  useEffect(() => {
    if (chat.length > 0) {
      setShowQuickActions(false);
    }
  }, [chat]);

  // Restore scroll position when reopening chat
  useEffect(() => {
    if (showChat && chatWindowRef.current) {
      chatWindowRef.current.scrollTop = scrollPosition;
    }
  }, [showChat]);

  const quickActions = [
    { text: '📄 Resume', prompt: 'Show your resume' },
    { text: '💬 About Me', prompt: 'Tell me about yourself' },
    { text: '🛠️ Skills', prompt: 'What are your skills?' },
    { text: '📞 Contact', prompt: 'How can I contact you?' },
    { text: '🗂️ App Project', prompt: 'Tell me about attendance system' },
    { text: '💼 Projects', prompt: 'Show your projects' }
  ];

  const sendMessage = async (customInput = null) => {
    const message = customInput || input;
    if (!message.trim()) return;

    const userMsg = { type: 'user', text: message };
    setChat((prev) => [...prev, userMsg]);
    setIsLoading(true);

    const lowerInput = message.toLowerCase();

    // Smart Prompts
    if (
      lowerInput.includes('resume') || lowerInput.includes('cv') ||
      lowerInput.includes('சுயவிவரம்') || lowerInput.includes('ரெசூமே')
    ) {
      setChat((prev) => [
        ...prev,
        {
          type: 'bot',
          text: <>
                📄 Here is my resume:<br />
                    <a
                      href="/career"  
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chatbot-button"
                    >
                      📎 Resume
                    </a>
                </> 
        },
      ]);
      setIsLoading(false);
      setInput('');
      return;
    }

    if (
      lowerInput.includes('about me') ||
      lowerInput.includes('about you') ||
      lowerInput.includes('உன்னைப் பற்றி')
    ) {
      setChat((prev) => [
        ...prev,
        {
          type: 'bot',
          text:(
            <>
              👋 Hi, I'm Yuthishthira Senthil M<br />
                💻 A passionate Web Developer & 🎨 Creative Designer from Tamil Nadu, India.<br/><br />

                🧠 I love building responsive websites using HTML, CSS, JavaScript, React, and Vite.js<br />
                🛠️ Tools I use: VS Code, Figma, Firebase, Canva, CapCut, KineMaster<br/><br />

                🔧 I’ve worked on:<br/>
                • 📸 Dora Photography – Frontend Designer<br/>
                • 🌐 Kayarepe Technology – Website Developer<br/>
                • 💼 My Portfolio – yuthish-3117.netlify.app<br/><br />

                🚀 I'm always learning and love turning ideas into real digital experiences.<br />
                🤝 Open to new opportunities and collaborations!<br />
            </>
          )},
      ]);
      setIsLoading(false);
      setInput('');
      return;
    }

    if (
      lowerInput.includes('attendance') ||
      lowerInput.includes('அட்டென்டன்ஸ்') ||
      lowerInput.includes('absent') ||
      lowerInput.includes('present')
    ) {
      setChat((prev) => [
        ...prev,
        { type: 'bot', 
          text: <>
                📱 Smart Attendance System Overview<br />  
                    A sleek and efficient mobile app to automate student attendance.<br />  
                    ✅ One-tap Present/Absent marking  <br />
                    📊 Real-time data & admin dashboard  <br />
                    🔗 Firebase-powered backend  <br />
                    🖥️ Built using Android Studio (Java) <br />

                    🎯 Goal: Simplify and digitize attendance tracking for educational institutions.<br /><br />
                    <a
                      href="/attendance_app"  
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chatbot-button"
                    >
                      📎 View Project
                    </a>
                </> 
        },
      ]);
      setIsLoading(false);
      setInput('');
      return;
    }

    if (
      lowerInput.includes('skills') ||
      lowerInput.includes('திறன்கள்')
    ) {
      setChat((prev) => [
        ...prev,
        {
          type: 'bot',
          text: <>
                🧠 My Core Skills:<br />
                  💻 HTML, CSS, JavaScript <br /> 
                  ⚛️ React.js & Firebase  <br />
                  🐘 PHP (Server-side logic)  <br />
                  📦 API Integration & UI Design
                </>,
        },
      ]);
      setIsLoading(false);
      setInput('');
      return;
    }

    if (
      lowerInput.includes('project') ||
      lowerInput.includes('developed') ||
      lowerInput.includes('உருவாக்கப்பட்டது')
    ) {
      setChat((prev) => [
        ...prev,
        {
          type: 'bot',
          text:(
            <>
              🚀 I've built several projects that showcase my skills in full-stack development.<br /><br />
              1️⃣ Attendance Management System – A smart mobile app built with Android Studio and Firebase. It simplifies student attendance using Present/Absent buttons, real-time updates, and an intuitive UI.<br /><br />
              2️⃣ Portfolio Website – A React-based interactive portfolio with animations, smart chatbot, contact form (EmailJS), and multi-language support.<br /><br />
              3️⃣ Hall Allotment Web App – A responsive web app designed to manage student hall allocations effectively.<br /><br />
              🎯 My projects reflect creativity, clean UI/UX, and real-world problem-solving.<br />
               Want to explore? Click the <a
                      href="/creations"  
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chatbot-button"
                    >
                      📎 View Project
                    </a> button to see more!
            </>
          )},
      ]);
      setIsLoading(false);
      setInput('');
      return;
    }

    if (
      lowerInput.includes('contact') ||
      lowerInput.includes('contact info') ||
      lowerInput.includes('தொடர்பு')
    ) {
      setChat((prev) => [
        ...prev,
        {
          type: 'bot',
          text:(
            <>
              📞 Contact me:<br />
              +91 9360334471<br />
              LinkedIn: linkedin.com/in/yuthishthira-senthil-m-3532b526a<br />
              Email: yuthish2222k0156@gmail.com
            </>
          )},
      ]);
      setIsLoading(false);
      setInput('');
      return;
    }

    // Default AI
    try {
      const res = await axios.post(`${backendUrl}/chat`, { message });
      const botMsg = { type: 'bot', text: res.data.reply };
      setChat((prev) => [...prev, botMsg]);
    } catch {
      setChat((prev) => [
        ...prev,
        { type: 'bot', text: 'The AI service is temporarily unavailable.' },
      ]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="chatbot-toggle" onClick={() => {
        setShowChat(!showChat);
        if (!showChat && chat.length === 0) {
          setShowQuickActions(true);
        }
      }}></div>

      {showChat && (
        <div className="chatbot-container" ref={chatbotContainerRef}>
          <div className="chatbot-content">
            <div className="chat-window" ref={chatWindowRef}>
              {/* Quick Actions Buttons */}
              {showQuickActions && (
                <div className="quick-actions">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="quick-action-btn"
                      onClick={() => sendMessage(action.prompt)}
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              )}

              {chat.map((msg, idx) => (
                <div key={idx} className={`msg ${msg.type}`}>
                  <span className="icon">{msg.type === 'user' ? '' : ''}</span>
                  <span>
                    {msg.text}
                    {msg.link && (
                      <>
                        <br />
                        <a href={msg.link} target="_blank" rel="noreferrer" className="chatbot-button">
                          📥 Download
                        </a>
                      </>
                    )}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="msg bot">
                  <span className="icon"></span>
                  <span className="typing-indicator"><span></span></span>
                </div>
              )}
            </div>

            <div className="input-area">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..."
                disabled={isLoading}
              />
              <button onClick={() => sendMessage()} disabled={isLoading || !input.trim()}>
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;