import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Country<span className="text-gray-400">Explorer</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              Discover countries, cultures, capitals, population and amazing facts around the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Countries</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Asia</li>
              <li className="hover:text-white cursor-pointer">Europe</li>
              <li className="hover:text-white cursor-pointer">Africa</li>
              <li className="hover:text-white cursor-pointer">America</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Dhaka, Bangladesh</li>
              <li>📧 support@countryexplorer.com</li>
              <li>📞 +880 1234-567890</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CountryExplorer. All rights reserved.</p>

          <div className="flex gap-4 mt-3 sm:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;