import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => (
  <nav className="fixed top-0 z-50 w-full px-4 pt-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between h-16 px-4 border shadow-2xl rounded-2xl bg-white/15 backdrop-blur-xl border-white/25 shadow-purple-950/10 sm:px-5">
        <div className="text-lg font-bold text-transparent sm:text-xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text">
          Chanuka Keerthisigha
        </div>

        <div className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/15 p-1 md:flex">
          {['home', 'about', 'projects', 'tools', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                activeSection === item
                  ? 'bg-gradient-to-r from-purple-600 to-pink-800 text-white shadow-lg shadow-purple-900/30'
                  : 'text-white/85 hover:bg-white/20 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="inline-flex items-center justify-center w-10 h-10 text-white transition-all border rounded-full md:hidden border-white/25 bg-white/15 hover:bg-white/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="max-w-6xl mx-auto mt-2 overflow-hidden border shadow-2xl md:hidden rounded-2xl bg-white/15 backdrop-blur-xl border-white/25 shadow-purple-950/10">
        <div className="p-2 space-y-1">
          {['home', 'about', 'projects', 'tools', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium capitalize transition-all ${
                activeSection === item
                  ? 'bg-gradient-to-r from-purple-600 to-pink-800 text-white'
                  : 'text-white/85 hover:bg-white/20 hover:text-white'
              }`}
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
