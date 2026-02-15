import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const quickQuestions = [
  'Who is Taalab?',
  'What skills do you have?',
  'Show me your projects',
  'How can I contact you?',
];

const responses: Record<string, string> = {
  'who is taalab': `I'm Taalab, an AI Developer with 5+ years of experience building intelligent systems. I specialize in Machine Learning, Deep Learning, and Natural Language Processing.`,
  'what skills do you have': `I have expertise in:\n• Python, TensorFlow, PyTorch\n• Machine Learning & Deep Learning\n• NLP & Computer Vision\n• MLOps & Cloud Platforms\n• Data Engineering & Visualization`,
  'show me your projects': `I've worked on various projects including:\n• Arabic Sentiment Analyzer (94% accuracy)\n• Medical Image Diagnosis System\n• Stock Price Predictor with LSTM\n• Real-time Fraud Detection\n• Smart Chatbot Assistant\n\nCheck out the Projects section for more details!`,
  'how can i contact you': `You can reach me through:\n• Email: taalab@example.com\n• LinkedIn: linkedin.com/in/taalab\n• GitHub: github.com/taalab\n\nOr fill out the contact form in the Contact section!`,
  'default': `I'm not sure I understand. You can ask me about:\n• Who Taalab is\n• His skills and expertise\n• His projects\n• How to contact him\n\nOr select a quick question below!`,
};

function findResponse(input: string): string {
  const lowerInput = input.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(responses)) {
    if (key !== 'default' && lowerInput.includes(key)) {
      return value;
    }
  }
  
  return responses.default;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hello! I\'m Taalab\'s AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = findResponse(text);
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-widget">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chat-button group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green rounded-full animate-pulse" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-space-light text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Ask me anything!
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 w-80 sm:w-96 glass-strong rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">AI Assistant</h4>
                <p className="text-xs text-neon-green">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-neon-cyan/20'
                      : 'bg-gradient-to-br from-neon-cyan to-neon-purple'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-neon-cyan" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                    message.role === 'user'
                      ? 'bg-neon-cyan/20 text-white rounded-br-md'
                      : 'glass text-gray-200 rounded-bl-md'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="glass px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-4 py-2 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question)}
                  className="px-3 py-1.5 text-xs text-neon-cyan bg-neon-cyan/10 rounded-full hover:bg-neon-cyan/20 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-neon transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
