import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm HelCon AI Assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const predefinedQuestions = [
    {
      question: "What is HelCon?",
      answer: "HelCon is a revolutionary decentralized healthcare platform built on the Internet Computer Protocol (ICP). We provide secure, blockchain-powered healthcare services including telemedicine consultations, smart appointment booking, and patient-controlled health records. Our platform connects patients with certified healthcare providers globally while ensuring complete data privacy and security."
    },
    {
      question: "How can I create an account?",
      answer: "Creating an account on HelCon is simple and secure! Click the 'Get Started' button on our homepage, and you'll be prompted to authenticate using NFID (NFT Identity). This provides you with a secure, decentralized identity. After authentication, you'll be guided through a quick setup process to complete your profile."
    },
    {
      question: "How do I book an appointment?",
      answer: "Booking an appointment is easy! After logging in, go to your dashboard and click 'Find Specialists'. You can search by specialty, location, or availability. Once you find a suitable doctor, click on their profile to see available time slots and book directly. You'll receive confirmation and reminders automatically."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely! Your health data is secured using blockchain technology on the Internet Computer Protocol. All data is encrypted and you have complete control over who can access it. Healthcare providers can only access your records with your explicit permission, and all access is logged transparently on the blockchain."
    },
    {
      question: "What payment methods do you accept?",
      answer: "HelCon uses a secure escrow system for payments. We accept cryptocurrency payments through our integrated wallet system. Payments are held in escrow until you confirm receipt of services, ensuring both patient and provider protection. Traditional payment methods are also supported through our secure payment gateway."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes! Our escrow system protects both patients and providers. If you're not satisfied with a consultation or if a provider doesn't deliver the promised service, you can dispute the payment. Our smart contract system will review the case and process refunds automatically when appropriate."
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for predefined questions
    const matchedQuestion = predefinedQuestions.find(q => 
      lowerMessage.includes(q.question.toLowerCase().split(' ').slice(0, 3).join(' '))
    );
    
    if (matchedQuestion) {
      return matchedQuestion.answer;
    }

    // General responses based on keywords
    if (lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
      return "To book an appointment, log in to your dashboard and click 'Find Specialists'. You can search by specialty and book available time slots directly. Would you like me to guide you through the process?";
    }
    
    if (lowerMessage.includes('payment') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return "HelCon uses a secure escrow payment system. Consultation fees vary by specialist and service type, typically ranging from $50-100. Payments are held securely until you confirm receipt of services. Would you like to know more about our pricing structure?";
    }
    
    if (lowerMessage.includes('doctor') || lowerMessage.includes('specialist')) {
      return "We have over 500 certified healthcare providers across 50+ countries. You can find specialists in cardiology, dermatology, psychiatry, general medicine, and many other fields. Would you like help finding a specific type of specialist?";
    }
    
    if (lowerMessage.includes('security') || lowerMessage.includes('privacy')) {
      return "Your privacy and security are our top priorities. All data is encrypted and stored on the blockchain, giving you complete control. Healthcare providers can only access your records with your explicit permission. Is there a specific security concern I can address?";
    }

    // Default response
    return "I'm here to help you with any questions about HelCon! You can ask me about our services, how to create an account, booking appointments, security, payments, or anything else related to our platform. What would you like to know?";
  };

  const handleQuestionClick = (question) => {
    handleSendMessage(question.question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 flex items-center justify-center"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaRobot className="text-2xl" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold">Helcon AI Assistant</h3>
                <p className="text-sm opacity-90">Online now</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
              <div className="space-y-2">
                {predefinedQuestions.slice(0, 3).map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-left text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 p-2 rounded-lg transition-colors"
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {message.isBot ? <FaRobot /> : <FaUser />}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                    <FaRobot />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

