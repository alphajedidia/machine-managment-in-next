import React from 'react'
import Image from 'next/image'

type logoType = {
    logoWidth: number;
    logoHeight: number;
}

const Logo = ({logoWidth , logoHeight} : logoType) => {
  return (
    // <h1 className={`${containerStyles}`}>Henri Fraise</h1>
    <Image src="/henri-fraise-logo.jpeg" alt='logo' width={`${logoWidth}`}  height={`${logoHeight}`} />
  )
}

export default Logo