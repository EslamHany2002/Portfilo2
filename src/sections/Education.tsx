import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Computer & Artificial Intelligence',
    institution: 'MTI University',
    location: 'Cairo, Egypt',
    period: '2020 - 2024',
    description: 'Foundation in computer science with focus on algorithms, data structures, and software engineering.',
    achievements: [
      'GPA: 3.2/4.0',
      'Led final project on Brain Tumor Detection',
      'Final project graded A+ with distinction',
    ],
    color: 'neon-purple',
  },
];

// const certifications = [
//   { name: 'AWS Machine Learning Specialty', issuer: 'Amazon Web Services', year: '2023' },
//   { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2022' },
//   { name: 'Professional Data Engineer', issuer: 'Google Cloud', year: '2021' },
//   { name: 'Deep Learning Specialization', issuer: 'Coursera / deeplearning.ai', year: '2020' },
// ];

export function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-neon-purple bg-neon-purple/10 rounded-full border border-neon-purple/20">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education & <span className="text-gradient-purple">Certifications</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            My academic journey and professional certifications.
          </p>
        </div>

        {/* Education Card - بدون Timeline */}
        <div className={`max-w-3xl mx-auto mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 card-hover border-t-4 border-neon-purple"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-${edu.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap className={`w-7 h-7 text-${edu.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-neon-purple font-medium text-lg">{edu.institution}</p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">{edu.description}</p>

              {/* Achievements */}
              <ul className="space-y-3">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Professional <span className="text-gradient-purple">Certifications</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass rounded-xl p-5 text-center card-hover group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-neon-purple" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-sm">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-neon-purple mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}