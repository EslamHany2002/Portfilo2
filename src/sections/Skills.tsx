import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Layers, 
  GitBranch, 
  // Cloud,
  BarChart3,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'HTML , CSS', level: 80 },
      { name: 'SQL', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'Dart', level: 80 },
    ],
  },
  {
    name: 'Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Scikit-learn', level: 95 },
      { name: 'XGBoost/LightGBM', level: 90 },
      { name: 'Random Forest', level: 92 },
      { name: 'SVM', level: 85 },
      { name: 'Ensemble Methods', level: 88 },
    ],
  },
  {
    name: 'Deep Learning',
    icon: Cpu,
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 88 },
      { name: 'Keras', level: 92 },
      { name: 'CNN/RNN/LSTM', level: 85 },
      { name: 'Transformers', level: 82 },
    ],
  },
  {
    name: 'NLP & CV',
    icon: Layers,
    skills: [
      { name: 'YOLO', level: 90 },
      { name: 'Hugging Face', level: 85 },
      { name: 'OpenCV', level: 88 },
      { name: 'BERT/GPT', level: 80 },
      // { name: 'OCR', level: 75 },
    ],
  },
  {
    name: 'Data & Visualization',
    icon: BarChart3,
    skills: [
      { name: 'Pandas/NumPy', level: 95 },
      { name: 'Matplotlib/Seaborn', level: 90 },
      { name: 'Plotly/Dash', level: 85 },
      // { name: 'Tableau', level: 80 },
      // { name: 'Power BI', level: 75 },
    ],
  },
  // {
  //   name: 'Big Data & Cloud',
  //   icon: Cloud,
  //   skills: [
  //     { name: 'Apache Spark', level: 82 },
  //     { name: 'Hadoop', level: 75 },
  //     { name: 'AWS/GCP/Azure', level: 85 },
  //     { name: 'Databricks', level: 78 },
  //     { name: 'Kafka', level: 70 },
  //   ],
  // },
  {
    name: 'MLOps & Tools',
    icon: GitBranch,
    skills: [
      // { name: 'Docker/Kubernetes', level: 85 },
      { name: 'MLflow', level: 88 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'CI/CD', level: 80 },
      { name: 'Monitoring', level: 78 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 85 },
      // { name: 'Elasticsearch', level: 75 },
      { name: 'Vector DBs', level: 82 },
    ],
  },
];

const tools = [
  'Jupyter', 'VS Code', 'PyCharm', 'Anaconda', 'Docker', 'Kubernetes',
  'Git', 'GitHub Actions', 'Terraform', 'Airflow', 'Prefect', 'Weights & Biases'
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-neon-cyan">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

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
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-neon-purple bg-neon-purple/10 rounded-full border border-neon-purple/20">
            My Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A comprehensive toolkit of technologies and frameworks I use to build 
            intelligent, scalable solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Category Selector - Mobile */}
          <div className="lg:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(Number(e.target.value))}
              className="w-full px-4 py-3 glass rounded-xl text-white border border-neon-cyan/20 focus:border-neon-cyan focus:outline-none"
            >
              {skillCategories.map((cat, idx) => (
                <option key={idx} value={idx} className="bg-space">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category List - Desktop */}
          <div className="hidden lg:block space-y-2">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                  activeCategory === index
                    ? 'glass border-neon-cyan/30 bg-neon-cyan/5'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  activeCategory === index
                    ? 'bg-neon-cyan/20 text-neon-cyan'
                    : 'bg-white/5 text-gray-400'
                }`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <span className={`font-medium ${
                  activeCategory === index ? 'text-white' : 'text-gray-400'
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-8">
                {(() => {
                  const Icon = skillCategories[activeCategory].icon;
                  return (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                  );
                })()}
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {skillCategories[activeCategory].name}
                </h3>
              </div>

              <div className="space-y-5">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
            Tools & <span className="text-gradient">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm font-medium text-gray-300 glass rounded-lg border border-white/10 hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
