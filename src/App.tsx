import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { MathLevels } from './components/MathLevels'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { TrialForm } from './components/TrialForm'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <Stats />
        <MathLevels />
        <HowItWorks />
        <Features />
        <Testimonials />
        <TrialForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
