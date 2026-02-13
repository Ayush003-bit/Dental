function Doctor() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-primary">Dentist</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Dr. Sarah Mitchell, DDS
            </h3>
            <p className="text-secondary font-medium mb-4">
              BDS, MDS (Oral Surgery) • 12+ Years Experience
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Dr. Sarah Mitchell brings over a decade of expertise to Smile Dental Clinic. 
              Trained at premier institutions, she specializes in advanced oral surgery 
              and restorative dentistry, combining clinical excellence with a warm, 
              patient-centered approach.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Committed to continuous learning, Dr. Mitchell stays at the forefront 
              of dental innovation to offer the best possible outcomes for every 
              patient who walks through our doors.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-light-section rounded-xl px-4 py-2">
                <span className="text-primary font-semibold">12+</span> Years Experience
              </div>
              <div className="bg-light-section rounded-xl px-4 py-2">
                <span className="text-primary font-semibold">5000+</span> Patients Treated
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop"
                  alt="Dr. Sarah Mitchell - Dentist"
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

export default Doctor;
