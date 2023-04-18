import React, { createContext } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  const updatecart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    alert("passing function worked")
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
