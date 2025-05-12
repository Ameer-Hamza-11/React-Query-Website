import React from 'react'
import { detailedData } from '../../../Api/Api'
import { NavLink, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loader from '../UI/Loader'

export const DetailedTanStack = () => {
  const { id } = useParams()
  const { data, isPending, isError } = useQuery({
    queryKey: ['detailedPostList', id],
    queryFn: () => detailedData(id),
  })

  if (isPending) return <Loader />

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100 dark:bg-red-950 px-4">
        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 max-w-md text-center text-red-700 dark:text-red-300 transition-all duration-500">
          <h2 className="text-3xl font-bold mb-4">Error Fetching Data</h2>
          <p className="text-sm mb-6">Something went wrong while fetching data. Please try again.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4 py-10 transition-all duration-500">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl max-w-xl w-full p-8 space-y-6 border dark:border-gray-700 transition-all duration-500">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>ID:</span>
          <span>{data.id}</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-blue-400 mb-2">{data.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.body}
          </p>
        </div>
        <div className="text-right">
            <NavLink to='/fetchrq'>
          <button
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Go Back
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
