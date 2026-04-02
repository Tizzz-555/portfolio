import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/sections/About';
import EducationSection from './components/sections/Education';
import Experiences from './components/sections/Experiences';
import Hobbies from './components/sections/Hobbies';
import Projects from './components/sections/Projects';
import Contributions from './components/sections/Contributions';
import ContactSection from './components/sections/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <Hero 
          name={portfolioData.name}
          title={portfolioData.title}
          tagline={portfolioData.tagline}
        />
        <About about={portfolioData.about} />
        <EducationSection education={portfolioData.education} />
        <Experiences experiences={portfolioData.experiences} />
        <Hobbies hobbies={portfolioData.hobbies} />
        <Projects projects={portfolioData.projects} />
        <Contributions contributions={portfolioData.contributions} />
        <ContactSection contact={portfolioData.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
