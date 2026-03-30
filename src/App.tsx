import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreProjects from './components/CoreProjects';
import Expertise from './components/Expertise';
import Solutions from './components/Solutions';
import MissionVision from './components/MissionVision';
import Values from './components/Values';
import NewsUpdates from './components/NewsUpdates';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const Home: React.FC = () => (
  <main>
    <Hero />
    <About />
    <CoreProjects />
    <Expertise />
    <Solutions />
    <MissionVision />
    <NewsUpdates />
    <Testimonials />
    <Values />
    <ContactForm />
  </main>
);

function App() {
  const [view, setView] = React.useState('home');
  const [activeCategory, setActiveCategory] = React.useState('accounting');

  const onNavigate = (newView: string, category?: string, section?: string) => {
    if (newView === 'home') {
      setView('home');
      if (section) {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      setView('solutions');
      if (category) setActiveCategory(category);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-white selection:text-primary">
      <Navbar onNavigate={onNavigate} />
      {view === 'home' ? (
        <Home />
      ) : (
        <Solutions initialCategory={activeCategory} isFullPage={true} onNavigate={onNavigate} />
      )}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default App;
