import { EnginCardData } from '@/app/utils/data'
import React from 'react'
import CardEngin from './CardEngin'

const AllEnginCard = () => {
  return (
    <>
      {EnginCardData.map((item, index) => (
            <CardEngin
              key={index}
              title={item.title}
              description={item.description}
              prixJournalier={item.prixJournalier}
            />
          ))}
    </>
  )
}

export default AllEnginCard
