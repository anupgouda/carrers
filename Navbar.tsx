import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const careers = [
  { title: 'Creative', path: '/careers/creative' },
  { title: 'Technology', path: '/careers/technology' },
  { title: 'Operations', path: '/careers/operations' },
  { title: 'Marketing', path: '/careers/marketing' },
];

const about = [
  { title: 'Our Story', path: '/about/story' },
  { title: 'Culture', path: '/about/culture' },
  { title: 'Benefits', path: '/about/benefits' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold">CAREERS</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('careers')}
                className="flex items-center space-x-1 hover:text-blue-400"
              >
                <span>Careers</span>
                <ChevronDown size={20} />
              </button>
              {activeDropdown === 'careers' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {careers.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center space-x-1 hover:text-blue-400"
              >
                <span>About</span>
                <ChevronDown size={20} />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {about.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/contact" className="hover:text-blue-400">
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            {careers.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block px-3 py-2 hover:text-blue-400"
              >
                {item.title}
              </NavLink>
            ))}
            {about.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block px-3 py-2 hover:text-blue-400"
              >
                {item.title}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="block px-3 py-2 hover:text-blue-400"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}