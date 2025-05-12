import React from 'react'
import { Header } from './UI/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './UI/Footer'

export const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

