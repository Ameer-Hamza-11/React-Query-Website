import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-4">About Us</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We're a passionate team sharing awesome content, tutorials, and projects.
              Follow along as we build with modern tools like React & TanStack Query.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/fetchrq" className="text-gray-300 hover:text-pink-400 transition duration-300">TanStack + Pagination</Link>
              </li>
              <li>
                <Link to="/infinite" className="text-gray-300 hover:text-pink-400 transition duration-300">Infinite Scroll</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Contact</h3>
            <p className="text-sm text-gray-400">📧 ameerhamza.bmj@gmail.com</p>
            <p className="text-sm text-gray-400">📞 +92 326 07 844 63</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TanStack Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
