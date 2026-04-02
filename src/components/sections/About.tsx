interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="glass-effect rounded-lg p-8 mt-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            {about}
          </p>
        </div>
      </div>
    </section>
  );
}
