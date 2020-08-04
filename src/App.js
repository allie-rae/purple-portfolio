import React, { createRef } from 'react';
import Navbar from './components/nav/Nav';
import Img from './components/image/Img';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  const aboutRef = React.createRef()
  const projectsRef = React.createRef()
  const contactRef = React.createRef()

  return (
    <div>
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Img aboutRef={aboutRef} />
      <Skills />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
