import { useRef } from 'react';
import './App.css';

import About from './components/About';
import ContactForm from './components/Contactme';
import Intro from './components/Intro';
import Projects from './components/Projects';
import ScrollToTopButton from './components/Scroll';
import Statistics from './components/Statistics';
import Techstacks from './components/Techstacks';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Social from './components/Social';


function App() {
  const divRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = divRef.current?.scrollTop;
    console.log(scrollTop); // Scroll Y value of the div
  };

  return (
    <div className="App">
      <Nav />
      <Intro />
      <About ref={divRef} func={handleScroll} />
      <Techstacks />
      <Projects />
      <Statistics />
      <ContactForm />
      <ScrollToTopButton />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
