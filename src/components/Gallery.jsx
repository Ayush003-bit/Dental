function Gallery() {
  const galleryItems = [
    {
      before: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
      title: 'Smile Makeover',
    },
    {
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
      title: 'Teeth Whitening',
    },
    {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      title: 'Dental Implants',
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Before & <span className="text-primary">After</span> Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real results from our satisfied patients. See the transformation we can achieve together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-soft-grey rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.before}
                      alt={`Before - ${item.title}`}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</span>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.after}
                      alt={`After - ${item.title}`}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 bg-secondary/90 text-white text-xs px-2 py-1 rounded">After</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
