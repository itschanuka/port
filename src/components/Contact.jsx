import React from 'react';
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = ({ formRef, sendEmail }) => (
  <section id="contact" className="px-4 py-16 md:py-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center text-transparent sm:text-4xl md:mb-16 md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
        Let's Connect
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col h-full p-5 border shadow-lg sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border-white/10">
          <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">Get in Touch</h3>
          <p className="mb-8 text-white/70">Feel free to reach out via email, phone, or the contact form.</p>

          <div className="mb-8 space-y-6">
            <div className="flex items-center min-w-0 gap-4">
              <Mail className="text-purple-600" size={24} />
              <div className="min-w-0">
                <h4 className="font-semibold text-white">Email</h4>
                <p className="break-words text-white/60">itschanuka@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-purple-600" size={24} />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-white/60">+(94) 714104425</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-purple-600" size={24} />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-white/60">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-auto">
            <a href="https://github.com/itschanuka" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-purple-600" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chanuka-keerthisingha/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-purple-600" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a
              href="https://web.facebook.com/" // TODO: replace with real Facebook profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-600"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/itschanuka/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-purple-600" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="p-5 border shadow-lg sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border-white/10">
          <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">Send a Message</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 text-white border sm:p-4 bg-black/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 text-white border sm:p-4 bg-black/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 text-white border sm:p-4 bg-black/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg sm:w-auto bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
