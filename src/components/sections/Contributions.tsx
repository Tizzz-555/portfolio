import type { Contribution } from '../../data/portfolio';

interface ContributionsProps {
  contributions: Contribution[];
}

export default function Contributions({ contributions }: ContributionsProps) {
  return (
    <section id="contributions" className="py-20 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Open Source Contributions</h2>
        <div className="space-y-6 mt-8">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:border-accent-magenta/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-white font-mono">
                  {contribution.project}
                </h3>
                <span className="text-accent-magenta font-mono text-sm">
                  {contribution.date}
                </span>
              </div>
              <p className="text-gray-300">{contribution.description}</p>
              {contribution.link && (
                <a
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-accent-magenta hover:text-white transition-colors font-mono text-sm"
                >
                  <span>View PR</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
