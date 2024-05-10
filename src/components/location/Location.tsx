import { Engin } from '@prisma/client'
import React from 'react'
interface ListLocationProps{
  title :string,
  data: Engin []
}
function Location(location:ListLocationProps) {
  return (
    <div>
        <div><h1>{location.title}</h1></div>
    </div>
  )
}

export default Location