import './index.css'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-[#080c18] text-[#0f1629] dark:text-[#e8eaf0] transition-colors duration-300">
        <Navbar theme={theme} onToggle={toggle} />
        <main>
          <Home />
          <Projects />
          <Skills />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
