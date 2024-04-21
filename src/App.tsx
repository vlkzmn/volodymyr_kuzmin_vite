import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

const App = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
