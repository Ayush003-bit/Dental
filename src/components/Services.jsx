function Services() {
  const services = [
    {
      icon: '🦷',
      title: 'Teeth Cleaning',
      description: 'Professional cleaning to remove plaque, tartar, and stains for a fresher, healthier smile.',
    },
    {
      icon: '🔬',
      title: 'Root Canal',
      description: 'Pain-free root canal treatment to save infected teeth and restore full function.',
    },
    {
      icon: '⭐',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel like natural teeth.',
    },
    {
      icon: '😁',
      title: 'Braces',
      description: 'Modern orthodontic solutions for straightening teeth and improving bite alignment.',
    },
    {
      icon: '💎',
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers for the confidence you deserve.',
    },
    {
      icon: '👶',
      title: 'Pediatric Dentistry',
      description: 'Gentle, fun dental care tailored for children to build lifelong healthy habits.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 bg-soft-grey">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive dental care for you and your family, delivered with expertise and compassion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
