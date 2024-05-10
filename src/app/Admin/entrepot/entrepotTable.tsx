'use client'
import { ConfirmationDialogue,showSuccessDeleteEntrepot  } from "@/utils/sweetAlertUtils";
import React, { useEffect, useState } from "react";



interface Entrepot {
  id_entrepot: string; 
  nom_entrepot: string;
  localisation: string;
  capacite: string;
}

export default function EntrepotTable() {
  const [entrepots, setEntrepots] = useState<Entrepot[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/entrepot");
        if (!response.ok) {
          throw new Error('problème de connexion');
        }
        const data = await response.json();
        setEntrepots(data);
      } catch (error) {
        console.error('problème de fetch operation:', error);
      }
    };
  
    const intervalId = setInterval(fetchData, 1000); 
  
    return () => clearInterval(intervalId);
  }, []);
  

 
    const handleDelete = (ids: string[]) => {
      ConfirmationDialogue('Êtes-vous sûr ?', 'Êtes-vous sûr de vouloir supprimer cet entrepôt ?')
        .then((result) => {
          if (result.isConfirmed)  {
        fetch(`/api/entrepot`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ids: ids })
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
         
          setEntrepots(entrepots.filter((entrepot) => !ids.includes(entrepot.id_entrepot)));
         
          showSuccessDeleteEntrepot();
        })
        .catch((error) => {
          console.error('There was a problem with the delete operation:', error);
        });
      }
    });
  };
  
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16 mx-auto max-w-6xl bg-primary-500">
      <h1 className="text-2xl font-bold mb-4 ml-4">Liste des Entrepots</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nom de l'entrepot
            </th>
            <th scope="col" className="px-6 py-3">
              Localisation
            </th>
            <th scope="col" className="px-6 py-3">
              Capacité
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {entrepots.map((entrepot) => (
            <tr key={entrepot.id_entrepot} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{entrepot.nom_entrepot}</td>
              <td className="px-6 py-4">{entrepot.localisation}</td>
              <td className="px-6 py-4">{entrepot.capacite}</td>
              <td className="px-6 py-4">
                <button onClick={() => handleDelete([entrepot.id_entrepot])}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
