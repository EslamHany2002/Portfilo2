import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Users, BookOpen, GraduationCap, HelpCircle } from 'lucide-react';

const workExperiences = [
  {
    title: 'Tech Support - DEPI Program',
    company: 'AMIT Learning (DEPI)',
    location: 'Cairo, Egypt',
    period: 'Nov 2025 - Present',
    type: 'B2B',
    description: 'Providing technical support and educational assistance for the DEPI (Digital Egypt Pioneers Initiative) program.',
    responsibilities: [
      'Responsible for 31 student groups',
      'Assist instructors with content delivery and preparation',
      'Help students with studying and understanding course materials',
      'Troubleshoot technical issues with students',
      'Support students with their graduation projects',
    ],
    icon: GraduationCap,
    color: 'neon-cyan',
    current: true,
  },
  {
    title: 'Senior Tech Support',
    company: 'AMIT Learning',
    location: 'Cairo, Egypt',
    period: 'Jan 2025 - Present',
    type: 'B2C',
    description: 'Leading technical support operations at AMIT with focus on AI infrastructure and system optimization. Mentoring junior support staff and driving technical strategy for digital transformation initiatives.',
    responsibilities: [
      'Promoted to lead tech support team of 2+ members',
    ],
    icon: Briefcase,
    color: 'neon-blue',
    current: true,
  },
  {
    title: 'AI Tech Support',
    company: 'AMIT Learning',
    location: 'Cairo, Egypt',
    period: 'Jun 2025 - Dec 2025',
    type: 'B2C',
    description: 'Provided technical support for AI-powered platforms and tools at AMIT. Assisted in implementing AI solutions, troubleshooting technical issues, and training team members on new technologies.',
    responsibilities: [
      'Supported deployment of AI-driven customer engagement platform',
      'Trained 25+ staff members on AI tools and workflows',
    ],
    icon: Briefcase,
    color: 'neon-purple',
    current: false,
  },
];

export function WorkExperience() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-neon-cyan bg-neon-cyan/10 rounded-full border border-neon-cyan/20">
            Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            My professional career in technical support, education, and AI infrastructure at AMIT Learning.
          </p>
        </div>

        {/* Timeline */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple" />

          {/* Experience Items */}
          <div className="space-y-12">
            {workExperiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot - مضيء للوظايف الحالية */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-2 shadow-neon z-10 ${
                    exp.current 
                      ? 'bg-neon-cyan border-white animate-pulse' 
                      : 'bg-space border-neon-cyan'
                  }`} />

                  {/* Content */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                  }`}>
                    <div className={`glass rounded-2xl p-6 card-hover ${
                      exp.current ? 'border-2 border-neon-cyan/50 bg-neon-cyan/5' : ''
                    }`}>
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.current && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-neon-cyan bg-neon-cyan/20 rounded-full border border-neon-cyan/30">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                            Current Position
                          </div>
                        )}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full border ${
                          exp.type === 'B2B' 
                            ? 'text-neon-purple bg-neon-purple/20 border-neon-purple/30' 
                            : 'text-neon-blue bg-neon-blue/20 border-neon-blue/30'
                        }`}>
                          {exp.type}
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-${exp.color}/20 flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 text-${exp.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <p className={`font-medium ${exp.current ? 'text-neon-cyan' : `text-${exp.color}`}`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      {/* Responsibilities with Icons */}
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            {i === 0 && exp.title.includes('DEPI') && <Users className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />}
                            {i === 1 && exp.title.includes('DEPI') && <BookOpen className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />}
                            {i === 2 && exp.title.includes('DEPI') && <GraduationCap className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />}
                            {i === 3 && exp.title.includes('DEPI') && <HelpCircle className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />}
                            {i === 4 && exp.title.includes('DEPI') && <Briefcase className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />}
                            {(!exp.title.includes('DEPI') || i > 4) && <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />}
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}