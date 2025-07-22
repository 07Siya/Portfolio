
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Education from './components/Education'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Education />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
