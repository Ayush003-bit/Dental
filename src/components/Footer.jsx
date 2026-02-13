function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];
  const services = [
    'Teeth Cleaning',
    'Root Canal',
    'Dental Implants',
    'Braces',
    'Cosmetic Dentistry',
  ];
  const socials = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Smile Dental Clinic</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for exceptional dental care. We're committed to your smile and wellbeing.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-secondary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i} className="text-gray-400">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-lg"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Smile Dental Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
