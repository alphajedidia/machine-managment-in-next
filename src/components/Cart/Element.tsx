import React from 'react'
import { CardData } from '@/components/Engin/data'
import CustomButton from '../CustomButton'
import { Delete } from '../icons'

const Element = ({title, description1, prixJournalier} : CardData ) => {
  return (
    <div className='w-full bg-white border flex justify-between items-end rounded-md overflow-hidden shadow mb-6'>
        <div className=' flex'>
        <img src="G.jpeg" alt="test" className='w-48 h-28' />
        <div className=' font-black text-lg my-auto mx-6'>
            <p className=' text-xl'>{title}</p>
            <p> Moteur : <span className=' font-normal'>{description1}</span></p>
            <p> Prix Journalier : <span className=' font-normal'>{prixJournalier}</span></p>
        </div>
        </div>
        {/* <div>
          <p className=' font-bold mb-2 text-lg'>Quantité</p>
          <div className="flex mb-4 mr-2">
            <CustomButton title="-" containerStyles="h-12 w-12 bg-gray-200"/>
            <input type="number" className="w-16 border border-gray-200 outline-none text-lg px-2" />
            <CustomButton title="+" containerStyles=" w-12 bg-gray-200"/>
          </div>
        </div> */}
        <div className=' flex mb-4'>
          <CustomButton title='' iconAfter= {<Delete/>} containerStyles=' px-6 py-4 bg-red-200 mr-6 shadow font-bold rounded hover:scale-105 transition-all'/>
        </div>
    </div>
  )
}

export default Element