import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Solutions from './components/Solutions';
import MissionVision from './components/MissionVision';
import Values from './components/Values';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-white selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Solutions />
        <MissionVision />
        <Values />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
