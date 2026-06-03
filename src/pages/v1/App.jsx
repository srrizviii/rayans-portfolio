import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import './v1.css'

function App() {
  return (
    <div className='v1'>
      <div className="underlay"></div>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App