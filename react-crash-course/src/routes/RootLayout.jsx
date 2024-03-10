import React from 'react'
import MainHeader from '../components/MainHeader'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
      <MainHeader/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
