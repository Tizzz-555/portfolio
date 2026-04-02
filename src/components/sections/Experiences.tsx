import type { Experience } from '../../data/portfolio';

interface ExperiencesProps {
  experiences: Experience[];
}

export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section id="experiences" className="py-20 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6 mt-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:border-accent-cyan/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">
                    {exp.role}
                  </h3>
                  <p className="text-accent-cyan">{exp.company}</p>
                </div>
                <span className="text-gray-400 font-mono text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-dark-700 text-accent-magenta rounded-full border border-accent-magenta/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
