import Navbar from './components/layout/Navbar.tsx'
import Hero from './sections/Hero.tsx'
import About from './sections/About.tsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
