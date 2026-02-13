function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-section background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
          alt="Professional dental care"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
      </div>
      
      {/* Content over the image */}
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="max-w-2xl">
          <div className="text-center lg:text-left opacity-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-sm">
              Your Smile,{' '}
              <span className="text-secondary">Our Priority</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Experience exceptional dental care in a calm, modern environment. 
              Our expert team is dedicated to giving you a healthier, brighter smile 
              with compassion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
    </section>
  );
}

export default Hero;
