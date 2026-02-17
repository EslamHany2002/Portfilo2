import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'AI Developer';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border-glow animate-fade-in">
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm text-gray-300">Welcome to my digital universe</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-white">I'm </span>
          <span className="text-gradient">Eslam</span>
        </h1>

        {/* Typing Effect */}
        <div className="h-16 sm:h-20 flex items-center justify-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300">
            <span className="text-neon-cyan">&lt;</span>
            <span className="font-mono">
              {displayText}
              <span
                className={`inline-block w-0.5 h-8 bg-neon-cyan ml-1 ${
                  isTypingComplete ? 'animate-caret-blink' : ''
                }`}
              />
            </span>
            <span className="text-neon-cyan">/&gt;</span>
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Building intelligent systems that learn, adapt, and transform the future. 
          Specializing in Machine Learning, Deep Learning, and Natural Language Processing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('#projects')}
            className="btn-primary flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/EslamHany2002"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl glass text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/eslam-hany"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl glass text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:eslamhanyriad@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-xl glass text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-neon-cyan transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 right-10 w-20 h-20 border border-neon-cyan/30 rounded-lg animate-float opacity-50" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/3 left-10 w-16 h-16 border border-neon-purple/30 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-neon-green/30 rounded-lg rotate-45 animate-float opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
}
