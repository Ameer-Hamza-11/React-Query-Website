import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { ErrorPage } from './components/Layout/Pages/ErrorPage'
import { Home } from './components/Layout/Pages/Home'
import { FetchViaTanStack } from './components/Layout/Pages/FetchViaTanStack'
import { InfiniteScroll } from './components/Layout/Pages/InfiniteScroll'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DetailedTanStack } from './components/Layout/Pages/DetailedTanStack'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: '/fetchrq',
        element: <FetchViaTanStack />,
        errorElement: <ErrorPage />
      },
      {
        path: '/fetchrq/:id',
        element: <DetailedTanStack />,
        errorElement: <ErrorPage />
      },
      {
        path: '/infinite',
        element: <InfiniteScroll />,
        errorElement: <ErrorPage />
      },
    ]
  }
])
const queryClient = new QueryClient()
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
