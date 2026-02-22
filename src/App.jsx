import Navbar from './components/Navbar'
// import ParticlesBackground from './components/ParticlesBackground'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import CustomCursor from './components/CustomCursor'
import { useState } from 'react'
import IntroAnimation from './components/IntroAnimation'


export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative animated-gradient text-white">
      <CustomCursor />
      <Navbar />

      {/* Intro always on top until it finishes */}
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {/* Homepage always present (masked reveal) */}
      <Home introDone={introDone} />

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
