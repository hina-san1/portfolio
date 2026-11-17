import Navbar from './components/layout/Navbar.tsx'
import Hero from './sections/Hero.tsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[200vh]">
        <Hero />
      </main>
    </>
  )
}

export default App
