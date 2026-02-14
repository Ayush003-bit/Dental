import { useState, useEffect } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&h=1080&fit=crop',
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Image slider */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={src}
              alt={`Dental care ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]" />
      </div>
      
      {/* Content - centered */}
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Your Smile,{' '}
              <span className="text-secondary">Our Priority</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Experience exceptional dental care in a calm, modern environment. 
              Our expert team is dedicated to giving you a healthier, brighter smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary hover:bg-[#1976D2] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ring-2 ring-white/20"
              >
                Book Appointment
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-secondary w-8' : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
