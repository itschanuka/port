import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => (
  <nav className="fixed top-0 z-50 w-full border-b bg-black/20 backdrop-blur-md border-white/10">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text">
          Chanuka Keerthisigha
        </div>

        <div className="hidden space-x-8 md:flex">
          {['home', 'about', 'projects', 'tools', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-all duration-300 hover:text-purple-600 ${
                activeSection === item ? 'text-purple-600 border-b-2 border-purple-600' : 'text-white/80'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="border-t md:hidden bg-black/40 backdrop-blur-md border-white/10">
        <div className="px-4 pt-2 pb-3 space-y-1">
          {['home', 'about', 'projects', 'tools', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full px-3 py-2 text-left capitalize transition-colors text-white/80 hover:text-purple-600"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default Navbar;
