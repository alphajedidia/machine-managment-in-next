import React from 'react'
import { CardData } from '@/components/Engin/data'
import CustomButton from '../CustomButton'
import { Delete } from '../icons'

const Element = ({title, description1, prixJournalier} : CardData ) => {
  return (
        <div className=' flex'>
        <img src="G.jpeg" alt="test" className='w-48 h-28' />
        <div className=' font-black text-lg my-auto mx-6'>
            <p className=' text-xl'>{title}</p>
            <p> Moteur : <span className=' font-normal'>{description1}</span></p>
            <p> Prix Journalier : <span className=' font-normal'>{prixJournalier}</span></p>
        </div>
        </div>
  )
}

export default Element