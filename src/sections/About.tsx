import { useEffect, useRef, useState } from 'react';
import { Brain, Code, Database, LineChart, Cpu, Network } from 'lucide-react';

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'AI Models Built' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building intelligent systems that learn from data and make predictions.',
  },
  {
    icon: Network,
    title: 'Deep Learning',
    description: 'Creating neural networks for complex pattern recognition tasks.',
  },
  {
    icon: Code,
    title: 'NLP Solutions',
    description: 'Developing language models for text analysis and generation.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing robust data pipelines and processing systems.',
  },
  {
    icon: LineChart,
    title: 'MLOps',
    description: 'Deploying and monitoring ML models in production environments.',
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Building systems that understand and interpret visual data.',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-neon-cyan bg-neon-cyan/10 rounded-full border border-neon-cyan/20">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The <span className="text-gradient">Architect</span> Behind The Code
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Passionate AI Developer with a mission to create intelligent solutions 
            that make a real difference in the world.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bio & Image */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-3xl blur-2xl opacity-30" />
              
              {/* Frame */}
              <div className="relative glass-strong rounded-3xl p-2 overflow-hidden">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-space-light to-space overflow-hidden">
                  {/* Profile Image */}
                  <img
                    src="./profile.png"
                    alt="Eslam - AI Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 glass rounded-xl px-4 py-3 border-glow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">Available for Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Transforming Ideas Into{' '}
              <span className="text-gradient">Intelligent Solutions</span>
            </h3>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm Eslam, an AI Developer with a deep passion for creating 
                intelligent systems that push the boundaries of what's possible. My journey 
                in the world of artificial intelligence began over 5 years ago, and since 
                then, I've been obsessed with turning complex data into actionable insights.
              </p>
              <p>
                I specialize in building end-to-end AI solutions, from data collection and 
                preprocessing to model deployment and monitoring. Whether it's developing 
                cutting-edge NLP models, creating computer vision systems, or designing 
                recommendation engines, I bring a problem-solving mindset to every project.
              </p>
              <p>
                When I'm not training models or debugging code, you'll find me exploring 
                the latest research papers, contributing to open-source projects, or 
                mentoring aspiring data scientists.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-neon-cyan bg-neon-cyan/10 rounded-lg border border-neon-cyan/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            What I <span className="text-gradient">Do</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
