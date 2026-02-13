import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Doctor from './components/Doctor'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <Doctor />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Booking />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
