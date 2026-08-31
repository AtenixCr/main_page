import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
