import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecretRecipe from './components/SecretRecipe'
import Menu from './components/Menu'
import ChiSiamo from './components/ChiSiamo'
import Gallery from './components/Gallery'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative bg-[var(--color-cream)]">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <SecretRecipe />
        <Menu />
        <ChiSiamo />
        <Gallery />
        <Contatti />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
