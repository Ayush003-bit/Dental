function WhyChooseUs() {
  const features = [
    { 
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop', 
      title: 'Advanced Equipment', 
      desc: 'State-of-the-art technology for precise, efficient treatments.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop', 
      title: 'Pain-Free Procedures', 
      desc: 'Comfort-first approach with modern anesthesia and sedation options.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop', 
      title: 'Emergency Care', 
      desc: 'We prioritize urgent dental needs with same-day appointments.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop', 
      title: 'Affordable Pricing', 
      desc: 'Transparent pricing and flexible payment plans for all budgets.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop', 
      title: 'Modern Technology', 
      desc: 'Digital imaging, CAD/CAM, and latest diagnostic tools.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop', 
      title: 'Friendly Staff', 
      desc: 'A welcoming team that makes every visit comfortable and stress-free.' 
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 bg-light-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 lg:mb-16">
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
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
