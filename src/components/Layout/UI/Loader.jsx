import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="border-t-4 border-b-4 border-gray-200 w-16 h-16 rounded-full animate-spin border-t-transparent"></div>
    </div>
  )
}

export default Loader
