function Booking() {
  const treatments = [
    'General Checkup',
    'Teeth Cleaning',
    'Root Canal',
    'Dental Implants',
    'Braces',
    'Cosmetic Dentistry',
    'Pediatric Dentistry',
    'Emergency',
  ];

  return (
    <section id="booking" className="py-16 lg:py-24 px-6 bg-gradient-to-br from-primary to-[#1976D2]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your <span className="text-secondary">Appointment</span>
          </h2>
          <p className="text-blue-100 text-lg">
            Schedule a visit today and take the first step toward a healthier smile.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="treatment" className="block text-gray-700 font-medium mb-2">Treatment</label>
              <select
                id="treatment"
                name="treatment"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              >
                <option value="">Select a treatment</option>
                {treatments.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary hover:bg-[#1976D2] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
