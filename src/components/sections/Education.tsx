import type { Education } from '../../data/portfolio';

interface EducationProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6 mt-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:border-accent-cyan/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white font-mono">
                  {edu.institution}
                </h3>
                <span className="text-accent-cyan font-mono text-sm">
                  {edu.year}
                </span>
              </div>
              <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
              {edu.description && (
                <p className="text-gray-400">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
