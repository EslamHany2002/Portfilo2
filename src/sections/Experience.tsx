import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, HeartHandshake, Users } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior AI Engineer',
    company: 'AMIT Learning',
    location: 'Cairo, Egypt',
    period: 'Jan 2025 - Present',
    description: 'Leading technical support operations at AMIT with focus on AI infrastructure and system optimization. Mentoring junior support staff and driving technical strategy for digital transformation initiatives.',
    achievements: [
      'Promoted to lead tech support team of 2+ members',
      // 'Built and deployed 15+ production ML models',
      // 'Mentored junior engineers and established best practices',
    ],
    icon: Briefcase,
    color: 'neon-cyan',
  },
  {
    type: 'work',
    title: 'AI Tech Support',
    company: 'AMIT Learning',
    location: 'Cairo, Egypt',
    period: 'Jun 2025 - Dec 2025',
    description: 'Provided technical support for AI-powered platforms and tools at AMIT. Assisted in implementing AI solutions, troubleshooting technical issues, and training team members on new technologies.',
    achievements: [
      'Supported deployment of AI-driven customer engagement platform',
      'Trained 25+ staff members on AI tools and workflows',
      // 'Implemented MLOps practices reducing deployment time by 70%',
    ],
    icon: Briefcase,
    color: 'neon-purple',
  },
  {
    type: 'volunteer',
    title: 'Operation Head',
    company: 'YLY (Ministry of Youth and Sports)',
    location: 'Cairo, Egypt',
    period: '2023 - 2024',
    description: 'Led the operations department at YLY, overseeing all operational aspects of youth programs and events. Managed teams, budgets, and strategic planning for large-scale initiatives under the Ministry of Youth and Sports.',
    achievements: [
      'Led a team of 50+ volunteers and staff members',
      'Managed operations for 15+ major youth events',
      'Coordinated with government officials and external stakeholders',
    ],
    icon: Users,
    color: 'neon-green',
  },
  {
    type: 'education',
    title: 'Operation Member - Coordination Team',
    company: 'YLY (Ministry of Youth and Sports)',
    location: 'Cairo, Egypt',
    period: '2022 - 2023',
    description: 'Volunteered as a coordination team member within the operations department at YLY, a youth initiative affiliated with the Ministry of Youth and Sports. Assisted in organizing youth programs and managing event logistics.',
    achievements: [
      'Coordinated logistics for 50+ youth events',
      'Collaborated with cross-functional teams to ensure smooth operations',
      'Supported event planning and execution for 1000+ participants',
    ],
    icon: HeartHandshake,
    color: 'neon-cyan',
  },
  {
    type: 'education',
    title: 'Computer & Artificial Intelligence',
    company: 'MTI University',
    location: 'Cairo, Egypt',
    period: '2020 - 2024',
    description: 'Foundation in computer science with focus on algorithms, data structures, and software engineering.',
    achievements: [
      'GPA: 3.2/4.0',
      // 'Dean\'s List all semesters',
      'Led final project on Brain Tumor Detection',
      'Final project graded A+ with distinction',
    ],
    icon: GraduationCap,
    color: 'neon-purple',
  },
];

const certifications = [
  { name: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2022' },
  { name: 'Professional Data Engineer', issuer: 'Google Cloud', year: '2021' },
  { name: 'Deep Learning Specialization', issuer: 'Coursera / deeplearning.ai', year: '2020' },
];

export function Experience() {
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
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A timeline of my professional growth and academic achievements in the field of AI.
          </p>
        </div>

        {/* Timeline */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-green" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-space border-2 border-neon-cyan shadow-neon z-10" />

                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="glass rounded-2xl p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-${exp.color}/20 flex items-center justify-center flex-shrink-0`}>
                        <exp.icon className={`w-6 h-6 text-${exp.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-neon-cyan font-medium">{exp.company}</p>
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

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`mt-20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            <span className="text-gradient">Certifications</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass rounded-xl p-5 text-center card-hover group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-neon-cyan" />
                </div>
                <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-neon-cyan mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
