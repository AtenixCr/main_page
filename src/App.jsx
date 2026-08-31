import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
