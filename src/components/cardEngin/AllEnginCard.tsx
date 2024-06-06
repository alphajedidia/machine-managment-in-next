'use client'
import { EnginCardData } from '@/app/utils/data'
import React ,{useEffect, useState}from 'react'
import CardEngin from './CardEngin'
import typeEngin from '@/pages/api/typeEngin';

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


  const fetchTypesEngin = async () => {
    try {
      const response = await fetch("/api/typeEngin");
      if (!response.ok) {
        throw new Error("La requête pour récupérer les types d'engin a échoué");
      }
      const data = await response.json();
      setTypesEngin(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des types d'engin:", error);
    }
  };
  fetchTypesEngin();
 

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
