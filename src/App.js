import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
