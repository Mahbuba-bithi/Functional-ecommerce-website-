import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Mahbuba
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            <li>
              <NavLink
                to="/"
                className="px-4 py-2 rounded-full hover:bg-cyan-500 transition"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="px-4 py-2 rounded-full hover:bg-cyan-500 transition"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/country"
                className="px-4 py-2 rounded-full hover:bg-cyan-500 transition"
              >
                Country
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="px-4 py-2 rounded-full hover:bg-cyan-500 transition"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-3 mt-4 bg-slate-800 p-4 rounded-lg">
            <li>
              <NavLink
                to="/"
                className="block px-4 py-2 rounded hover:bg-cyan-500"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="block px-4 py-2 rounded hover:bg-cyan-500"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/country"
                className="block px-4 py-2 rounded hover:bg-cyan-500"
              >
                Country
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 rounded hover:bg-cyan-500"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;