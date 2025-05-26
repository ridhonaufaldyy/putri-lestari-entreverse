import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-700">
              Putri Lestari
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>          {/* Desktop menu */}          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/profil" className="text-gray-700 hover:text-blue-700">
              Profile Saya
            </Link>
            <Link to="/perjalanan-kuliah" className="text-gray-700 hover:text-blue-700">
              Perjalanan Kuliah
            </Link>
            <Link to="/bisnis-journey" className="text-gray-700 hover:text-blue-700">
              Bisnis Journey
            </Link>
            <Link to="/teknologi" className="text-gray-700 hover:text-blue-700">
              Teknologi
            </Link>
          </div>
        </div>
      </div>      {/* Mobile menu */}      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">          <Link
            to="/profil"
            className="block px-3 py-2 text-gray-700 hover:text-blue-700"
          >
            Profile Saya
          </Link>
          <Link
            to="/perjalanan-kuliah"
            className="block px-3 py-2 text-gray-700 hover:text-blue-700"
          >
            Perjalanan Kuliah
          </Link>
          <Link
            to="/bisnis-journey"
            className="block px-3 py-2 text-gray-700 hover:text-blue-700"
          >
            Bisnis Journey
          </Link>
          <Link
            to="/teknologi"
            className="block px-3 py-2 text-gray-700 hover:text-blue-700"
          >
            Teknologi
          </Link>
        </div>
      </div>
    </nav>
  );
}
