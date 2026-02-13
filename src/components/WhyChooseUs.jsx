function WhyChooseUs() {
  const features = [
    { icon: '⚙️', title: 'Advanced Equipment', desc: 'State-of-the-art technology for precise, efficient treatments.' },
    { icon: '💉', title: 'Pain-Free Procedures', desc: 'Comfort-first approach with modern anesthesia and sedation options.' },
    { icon: '🚨', title: 'Emergency Care', desc: 'We prioritize urgent dental needs with same-day appointments.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Transparent pricing and flexible payment plans for all budgets.' },
    { icon: '📱', title: 'Modern Technology', desc: 'Digital imaging, CAD/CAM, and latest diagnostic tools.' },
    { icon: '👋', title: 'Friendly Staff', desc: 'A welcoming team that makes every visit comfortable and stress-free.' },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 bg-light-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We go above and beyond to ensure your dental experience is exceptional in every way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
