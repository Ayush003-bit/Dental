function Testimonials() {
  const testimonials = [
    {
      name: 'Emily Johnson',
      role: 'General Checkup',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The best dental experience I have ever had! Dr. Mitchell and her team made me feel comfortable from the moment I walked in. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      role: 'Dental Implants',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Professional, pain-free, and the results exceeded my expectations. The entire staff was wonderful and the clinic is spotlessly clean.',
    },
    {
      name: 'Sophie Williams',
      role: 'Cosmetic Dentistry',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'I was nervous about getting veneers, but they made the process so easy. My smile has never looked better. Thank you Smile Dental!',
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 bg-soft-grey">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Patient <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear what our patients have to say about their experience at Smile Dental Clinic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
