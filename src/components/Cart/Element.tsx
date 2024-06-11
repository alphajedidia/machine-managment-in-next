import React from 'react'
import { CardData } from '@/components/Engin/data'


const Element = ({title,imgUrl,category, description1, prixJournalier} : CardData ) => {
  return (
        <div className=' flex'>
         <img src={`../${imgUrl}`} alt="img" className="w-48 h-28" />
        <div className=' font-black text-md my-auto mx-6'>
            <p className=' text-xl'>{title}</p>
            <p> Moteur : <span className=' font-normal'>{description1.split("*")[0]}</span></p>
            <p> Prix Journalier : <span className=' font-normal'>{prixJournalier}</span></p>
        </div>
        </div>
  )
}

export default Element