import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, Brain, Eye, MessageSquare, BarChart3, Shield } from 'lucide-react';

const categories = ['All', 'NLP', 'Computer Vision', 'Machine Learning', 'Deep Learning'];

const projects = [
  {
    title: 'Arabic Sentiment Analyzer',
    description: 'A deep learning model that analyzes sentiment in Arabic text with 94% accuracy. Supports multiple Arabic dialects and uses BERT-based architecture.',
    image: null,
    category: 'NLP',
    tags: ['Python', 'TensorFlow', 'BERT', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: MessageSquare,
    color: 'from-neon-cyan to-blue-500',
  },
  {
    title: 'Medical Image Diagnosis',
    description: 'AI-powered system for detecting diseases from X-ray and MRI images. Achieved 96% accuracy on pneumonia detection using CNN architecture.',
    image: null,
    category: 'Computer Vision',
    tags: ['PyTorch', 'CNN', 'OpenCV', 'Streamlit'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: Eye,
    color: 'from-neon-purple to-pink-500',
  },
  {
    title: 'Stock Price Predictor',
    description: 'LSTM-based model for predicting stock prices with technical indicators. Includes backtesting framework and risk management tools.',
    image: null,
    category: 'Deep Learning',
    tags: ['Python', 'LSTM', 'Pandas', 'Plotly'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: BarChart3,
    color: 'from-neon-green to-emerald-500',
  },
  {
    title: 'Fraud Detection System',
    description: 'Real-time fraud detection using ensemble methods. Processes millions of transactions with sub-100ms latency and 99.5% precision.',
    image: null,
    category: 'Machine Learning',
    tags: ['Scikit-learn', 'XGBoost', 'Kafka', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Smart Chatbot Assistant',
    description: 'Conversational AI assistant powered by GPT architecture. Supports multi-turn conversations and integrates with various APIs.',
    image: null,
    category: 'NLP',
    tags: ['PyTorch', 'Transformers', 'FastAPI', 'Redis'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Object Detection API',
    description: 'YOLO-based object detection system with real-time processing capabilities. Deployed on edge devices for IoT applications.',
    image: null,
    category: 'Computer Vision',
    tags: ['YOLO', 'TensorFlow Lite', 'Flask', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: Eye,
    color: 'from-cyan-500 to-blue-500',
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-neon-purple/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-neon-green bg-neon-green/10 rounded-full border border-neon-green/20">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The <span className="text-gradient">Lab</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A collection of AI projects that showcase my expertise in building 
            intelligent, production-ready solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg'
                  : 'glass text-gray-400 hover:text-white hover:border-neon-cyan/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image/Icon Area */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-space transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-space transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-neon-cyan bg-neon-cyan/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-white hover:border-neon-cyan/50 transition-all group"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <Sparkles className="w-4 h-4 text-neon-cyan group-hover:animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
}
