import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white flex items-center justify-center px-4">
      <section className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight  bg-clip-text drop-shadow-lg">
          React Query Project Hub 🚀
        </h1>

        <p className="text-lg text-gray-300 font-light leading-relaxed tracking-wide">
          Explore powerful API integrations, infinite scroll, and blazing fast data fetching — all built with <span className="text-pink-400 font-semibold">React Query</span> and styled beautifully using <span className="text-indigo-400 font-semibold">Tailwind CSS</span>.
        </p>

        <button
          onClick={() => navigate('/fetchrq')}
          className="mt-4 cursor-pointer bg-gradient-to-r from-indigo-600 to-pink-600 px-6 py-3 rounded-full text-lg font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-pink-700"
        >
          🚀 Get Started
        </button>
      </section>
    </div>
  )
}
