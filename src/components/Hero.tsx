import ASCIIText from './ASCIIText';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
}

export default function Hero({ name, title, tagline }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/90 to-dark-900 z-0" />
      
      <div className="absolute inset-0 z-20">
        <ASCIIText 
          text={name}
          asciiFontSize={10}
          textFontSize={180}
          textColor="#fdf9f3"
          planeBaseHeight={10}
          enableWaves={true}
        />
      </div>

      <div className="absolute z-10 bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 text-center px-4 w-full">
        <h1 className="text-2xl md:text-4xl font-mono font-bold mb-4 text-white">
          <span className="text-accent-cyan">&gt;</span> {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {tagline}
        </p>
        
        <div className="mt-12 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-accent-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
