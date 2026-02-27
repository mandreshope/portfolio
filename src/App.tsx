import './index.css'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-[#0d0f18] text-slate-800 dark:text-slate-200 transition-colors duration-300">
        <Navbar theme={theme} onToggle={toggle} />
        <main>
          <Hero />
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
