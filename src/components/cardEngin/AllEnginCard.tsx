'use client'
import { EnginCardData } from '@/app/utils/data'
import React ,{useEffect, useState}from 'react'
import CardEngin from './CardEngin'
import typeEngin from '@/pages/api/typeEngin';
import { fetchData } from '@/app/utils/api';
fetchData
interface TypesEngin{
  id_type:string;
  id_categorie:string;
  image_url:string;
  nom_engin:string;
  prix_journalier:number;
  description:string;

}

const AllEnginCard = () => {
  const [typesEngin, setTypesEngin] = useState<TypesEngin[]>([]);
  
useEffect(() => {
fetchData(
  {
    url: "/typeEngin",
    setter: setTypesEngin,
    message: "Failed to fetch typeEngin list",
  }

)
 
},[]);
  return (
    <>
      {typesEngin.map((item, index) => (
            <CardEngin
              key={index} 
              id_type={item.id_type}
              title={item.nom_engin}
              description={item.description}
              prixJournalier={item.prix_journalier}
            />
          ))}
    </>
  )
}

export default AllEnginCard
