import React from 'react'
import { Add } from '../icons'

const ButtonAdd = ({setIsOpen}:{setIsOpen : ()=>void}) => {
  return (
    <div>
       <button className=" flex border h-fit text-xl px-2 py-1 font-semibold rounded-full hover:border-secondary-400" onClick={setIsOpen}>
          <Add iconStyle="h-8 w-8 text-success-400 mr-1 " /> <span>Nouveau Engin</span>
        </button>
    </div>
  )
}

export default ButtonAdd
