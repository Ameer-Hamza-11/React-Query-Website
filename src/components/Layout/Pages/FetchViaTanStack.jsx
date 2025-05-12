import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { deleteData, fetchData, updatedData } from '../../../Api/Api'
import Loader from '../UI/Loader'
import { NavLink } from 'react-router-dom'

export const FetchViaTanStack = () => {
    const [pageNumber, setPageNumber] = useState(0)

    //Fetch Data
    const { data, isPending, isError } = useQuery({
        queryKey: ['postList', pageNumber],
        queryFn: () => fetchData(pageNumber),
        keepPreviousData: true,
    })



    //Delete Data
    const queryClient = useQueryClient()
    const deleteMutation = useMutation({
        mutationFn: (id) => deleteData(id),
        onSuccess: (_, id) => {
            queryClient.setQueryData(['postList', pageNumber], (oldData) => {
                return oldData?.filter((post) => post.id !== id)
            })
        }
    })




    //Update Data
    const updateMutation = useMutation({
      
        mutationFn: (id) => updatedData(id),
        onSuccess: (apiData, postId) => {
            console.log(apiData,postId);
            
            queryClient.setQueryData(['postList', pageNumber], (postData) => 
                postData?.map((curTask) => 
                    curTask.id === postId ? { ...curTask, title: apiData.data.title } : curTask
                )
            )
        }
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
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen px-4 py-12 transition-all duration-500">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-12">
                Latest Posts with Pagination
            </h1>

            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {data?.map(({ id, title, body }) => (
                    <li
                        key={id}
                        className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 space-y-3 border dark:border-gray-700"
                    >
                        <NavLink to={`/fetchrq/${id}`}>
                            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span>ID:</span>
                                <span>{id}</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-blue-400">{title}</h2>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">{body}</p>
                            </div>

                        </NavLink>
                        <div>
                            <button
                                onClick={() => deleteMutation.mutate(id)}
                                className="mt-4 px-4 py-2 mx-1 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 hover:scale-105 transition-all duration-300 dark:bg-red-700 dark:hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => updateMutation.mutate(id)}
                                className="mt-4 px-4 py-2 mx-1 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 hover:scale-105 transition-all duration-300 dark:bg-green-700 dark:hover:bg-green-600"
                            >
                                Update
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-12 flex items-center justify-center gap-6">
                <button
                    onClick={() => setPageNumber((prev) => prev - 3)}
                    disabled={pageNumber === 0 ? true : false}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300"
                >
                    Prev
                </button>

                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Page {pageNumber / 3 + 1}
                </h1>

                <button
                    onClick={() => setPageNumber((prev) => prev + 3)}
                    disabled={data?.length  < 1}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300"
                >
                    Next
                </button>
            </div>

        </div>
    )
}
