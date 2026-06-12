import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <div className="ds-page">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
