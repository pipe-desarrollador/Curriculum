import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Profile from './sections/Profile'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import SoftSkills from './sections/SoftSkills'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen gradient-mesh">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Projects />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
