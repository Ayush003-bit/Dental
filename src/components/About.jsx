function About() {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: '📅' },
    { number: '5000+', label: 'Happy Patients', icon: '😊' },
    { number: '100%', label: 'Sterilized Equipment', icon: '✨' },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Our <span className="text-primary">Clinic</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Smile Dental Clinic, we believe that everyone deserves access to 
              exceptional dental care. With over a decade of experience, our dedicated 
              team combines cutting-edge technology with a personal touch to deliver 
              treatments that exceed expectations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We prioritize your comfort and wellbeing, creating a calm, hygienic 
              environment where you can feel confident in the care you receive. 
              From routine checkups to advanced procedures, we're committed to 
              helping you achieve and maintain optimal oral health.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-light-section rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="text-4xl mb-3 block">{stat.icon}</span>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
