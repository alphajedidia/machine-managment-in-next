import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer'

const LayoutClient = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default LayoutClient