'use client'

import React, { useEffect, useState } from "react";

// Définition de l'interface Client
interface Categorie {
  id_categorie: string;
  nom_categorie: string;
  detail: string;
  
}

export default function Categories() {
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error('problème de connexion');
        }
        return response.json() as Promise<Categorie[]>; // Utilisez l'interface Client pour annoter le type de données
      })
      .then((data) => {
       
        setCategories(data);
      })
      .catch((error) => {
        console.error('problème de fetch', error);
      });
      const intervalId = setInterval(fetch, 1000); 
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16 mx-auto max-w-6xl bg-primary-500">
      <h1 className="text-2xl font-bold mb-4 ml-4">Liste des Categories</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id Catégorie
            </th>
            <th scope="col" className="px-6 py-3">
              nom du catégorie
            </th>
            <th scope="col" className="px-6 py-3">
              Details
            </th>
           
          </tr>
        </thead>
        <tbody>
          {categories.map((categorie, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white border-b" : "bg-gray-100 border-b"}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {categorie.id_categorie}
              </th>
              <td className="px-6 py-4">{categorie.nom_categorie}</td>
              <td className="px-6 py-4">{categorie.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
