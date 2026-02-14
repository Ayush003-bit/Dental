function About() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '100%', label: 'Sterilized Equipment' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Our <span className="text-primary">Clinic</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over a decade of experience, we combine cutting-edge technology with a 
              personal touch to deliver exceptional dental care. Your comfort and wellbeing 
              are our priority.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-light-section rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] max-h-[400px] lg:max-h-none">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
