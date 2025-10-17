import Header from './components/Header'
import Hero from './components/Hero'
import BrandShowcase from './components/BrandShowcase'
import FeatureGrid from './components/FeatureGrid'
import CustomerReviews from './components/CustomerReviews'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <main>
        <Hero />
        <BrandShowcase />
        <FeatureGrid />
        <CustomerReviews />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
