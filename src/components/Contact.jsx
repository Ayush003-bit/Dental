function Contact() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact & <span className="text-primary">Location</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit us or get in touch. We're here to help with all your dental needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl">📍</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Healthcare Avenue, Suite 100<br />
                  Medical District, City 12345
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl">📞</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl">✉️</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@smiledental.com" className="text-primary hover:underline">info@smiledental.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl">🕐</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                <p className="text-gray-600">
                  Mon - Fri: 9:00 AM - 7:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM<br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-96 bg-soft-grey">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-light-section to-gray-200">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 font-medium">Google Map Placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Embed your clinic location here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
