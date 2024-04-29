import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer'

const LayoutLogin = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default LayoutLogin