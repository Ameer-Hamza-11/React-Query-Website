import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinkClass = (path) =>
    `block px-4 py-2 rounded-md font-medium transition-all duration-300 ${
      location.pathname === path
        ? 'bg-pink-600 text-white shadow-md'
        : 'text-white hover:bg-pink-500 hover:text-white'
    }`

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          TanStack Website
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/fetchrq" className={navLinkClass('/fetchrq')}>Pagination</Link>
          <Link to="/infinite" className={navLinkClass('/infinite')}>Infinite Scroll</Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-6 pb-4 rounded-b-lg space-y-2">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/fetchrq" className={navLinkClass('/fetchrq')}>Pagination</Link>
          <Link to="/infinite" className={navLinkClass('/infinite')}>Infinite Scroll</Link>
        </nav>
      )}
    </header>
  )
}
