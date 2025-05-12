import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(`https://api.github.com/users?since=${pageParam}&per_page=10`)
  const data = await res.json()
  return data
}

export const InfiniteScroll = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['userList'],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length * 10 + 1 : undefined
    }
  })

  const { inView, ref } = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen px-6 py-12 transition-all duration-500">
      <h1 className="text-4xl font-extrabold text-center mb-14 text-gray-800 dark:text-white tracking-wide">
        Infinite Scrolling Using TanStack Query
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((user) => (
              <div
                key={user.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
              >
                <div className="flex flex-col items-center p-6">
                  <div className="w-28 h-28 mb-4">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="rounded-full object-cover w-full h-full border-4 border-blue-500 dark:border-blue-400 shadow-md"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-blue-300">
                    {user.login}
                  </h2>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      </div>
    </div>
  )
}
