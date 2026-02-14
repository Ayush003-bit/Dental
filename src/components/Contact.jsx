function Contact() {
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841336148975!2d-73.98784468428673!3d40.74844097932666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629909613654';

  return (
    <section id="contact" className="py-16 lg:py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact & <span className="text-primary">Location</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit us or get in touch. We're here to help with all your dental needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl shrink-0">📍</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Healthcare Avenue, Suite 100<br />
                  Medical District, City 12345
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl shrink-0">📞</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl shrink-0">✉️</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@smiledental.com" className="text-primary hover:underline">info@smiledental.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-section flex items-center justify-center text-primary text-xl shrink-0">🕐</div>
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

          <div className="order-1 lg:order-2 min-h-[280px] sm:min-h-[350px] lg:min-h-[400px]">
            <div className="rounded-2xl overflow-hidden shadow-lg h-full border border-gray-100">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smile Dental Clinic Location"
                className="min-h-[280px] sm:min-h-[350px] lg:min-h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
