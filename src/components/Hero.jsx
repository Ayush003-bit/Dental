function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E3F2FD] via-white to-[#E8F5E9]/50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231E88E5\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Your Smile,{' '}
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience exceptional dental care in a calm, modern environment. 
              Our expert team is dedicated to giving you a healthier, brighter smile 
              with compassion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary hover:bg-[#1976D2] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Book Appointment
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop"
                  alt="Professional dentist with patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
