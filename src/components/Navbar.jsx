function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">Smile Dental</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#booking" className="text-gray-600 hover:text-primary transition-colors">Book</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <a href="#booking" className="px-6 py-2 rounded-xl bg-primary text-white font-medium hover:bg-[#1976D2] transition-colors">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
