import React from 'react';
import { useNavigate } from 'react-router-dom';
import company_logo from './assets/company_logo.jpg';
import ceo_photo from './assets/lenox.jpg';

export default function Home() {
  const navigate = useNavigate();

  const handleCardClick = (serviceName) => {
    navigate(`/booking?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col font-sans scroll-smooth">
      {/* Sticky Header */}
      <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={company_logo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-blue-700">Avatrom Tech</span>
          </div>
          <div className="space-x-6 text-gray-600 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#mission" className="hover:text-blue-600">Mission</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="pt-24 flex-1 w-full">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 text-center w-full">
          <img src={company_logo} alt="Company Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to Avatrom Tech Company
          </h1>
          <p className="text-gray-700 text-lg max-w-xl mb-6">
            We specialize in web development, mobile applications, and software consultancy — turning your ideas into digital success.
          </p>
          <img src={ceo_photo} alt="CEO" className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover mb-2" />
          <h2 className="text-xl font-semibold text-gray-800">Eng. Alex Areba</h2>
          <p className="italic text-gray-600 max-w-xl">
            “Software isn't just code — it's the strategic backbone of modern business. At Avatrom Tech, we craft solutions that drive clarity, efficiency, and transformation.”
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            🚀 Start Now
          </a>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 px-6 bg-white text-center w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission & Values</h2>
          <div className="max-w-4xl mx-auto text-gray-700 space-y-4 text-lg">
            <p><strong>Innovation:</strong> We bring creative and modern solutions to every challenge.</p>
            <p><strong>Reliability:</strong> Our systems are built to perform — always.</p>
            <p><strong>Transparency:</strong> Clear communication from start to finish.</p>
            <p><strong>Client Focus:</strong> Your goals shape our solutions.</p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-blue-50 text-center w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-800">
            {[{ title: "🌐 Web Development" }, { title: "📱 Mobile Applications" }, { title: "💼 Software Consulting" }].map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition"
                onClick={() => handleCardClick(service.title)}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>Click to book this service</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6 bg-white text-center w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg italic">
            <p>
              “Avatrom Tech helped us transform our business idea into a fully working product. Highly professional and deeply technical.”
              <br /> — <strong>Jane , client</strong>
            </p>
            <p>
              “Our mobile app now runs 3x faster thanks to their optimization team. They truly deliver.”
              <br /> — <strong>Michael , Operations client</strong>
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-blue-100 text-center w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
          <p className="text-gray-700 text-lg mb-6">We’d love to hear about your project.</p>
          <div className="space-y-2 text-gray-800">
            <p>📧 Email: <a href="mailto:arebalenox@gmail.com" className="text-blue-600 hover:underline">info@avatromtech.com</a></p>
            <p>📞 Phone: +254 701 445 488</p>
            <p>📍 Location: Nairobi, Kenya</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-blue-700 text-white py-6 text-center text-sm w-full">
        <p>&copy; {new Date().getFullYear()} Avatrom Tech. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}
