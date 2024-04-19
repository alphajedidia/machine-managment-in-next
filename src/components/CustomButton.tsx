"use client";

import { CustomButtonProps } from '@/types'
import React from 'react'



function CustomButton({title ,iconBefore , iconAfter, containerStyles, handleClick} : CustomButtonProps) {
  return (
    <button 
        disabled = {false}
        type={"button"}
        className={` flex items-center space-x-2 ${containerStyles}`}
        onClick={handleClick}
        
    >
      {
        iconBefore&&
        <span>{iconBefore}</span>
      }
      
      {
        title &&
        <span className={`flex-1`}>
        {title}
      </span>
      }
      {
        iconAfter&&
        <span>{iconAfter}</span>
      }
      
    </button>
)
}

export default CustomButton