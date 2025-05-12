import React from 'react'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-500 animate-pulse drop-shadow-lg">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <NavLink
          to="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-lg hover:shadow-red-500/50"
        >
          Go to Home
        </NavLink>
      </div>
    </div>
  )
}
