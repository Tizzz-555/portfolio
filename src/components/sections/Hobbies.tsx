interface HobbiesProps {
  hobbies: string[];
}

export default function Hobbies({ hobbies }: HobbiesProps) {
  return (
    <section id="hobbies" className="py-20 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Hobbies & Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 text-center hover:border-accent-cyan/50 hover:scale-105 transition-all cursor-default"
            >
              <div className="text-3xl mb-2">
                {index % 5 === 0 && '🎮'}
                {index % 5 === 1 && '📚'}
                {index % 5 === 2 && '🎨'}
                {index % 5 === 3 && '🎵'}
                {index % 5 === 4 && '⚡'}
              </div>
              <p className="text-gray-300 font-mono text-sm">{hobby}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
