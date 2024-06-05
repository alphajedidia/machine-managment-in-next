'use client'

import React, { useEffect, useState } from "react";


interface Client{
  id_client: string;
  nom_client: string;
}
interface Location {
  id_location: string;
  id_client: string;
  nom_client: string;
  date_debut: Date;
  date_fin: Date;
  destination: string;
  statut_paiement: string;
  total: number;
}
export default function Engin() {
  const [clients, setClients] = useState<Client[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("/api/location");
        if (!response.ok) {
          throw new Error('problème de connexion');
        }
        const locationdata = await response.json();
        setLocations(locationdata);
      } catch (error) {
        console.error('problème de fetch operation:', error);
      }
    };
   
  
    const fetchClient = async () => {
      try {
        const response = await fetch("/api/client");
        if (!response.ok) {
          throw new Error('problème de connexion');
        }
        const clienData = await response.json();
        setClients(clienData);
      } catch (error) {
        console.error('problème de fetch operation:', error);
      }
    };

    const intervalId = setInterval(() => {
      fetchLocation();
      
      fetchClient();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getNomClient = (id_client: string): string =>{
    const client = clients.find((client) => client.id_client === id_client);
    return client ? client.nom_client : "Inconnu";
  }
  return (


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16 mx-auto max-w-6xl bg-primary-500">
    <h1 className="text-2xl font-bold mb-4 ml-4">Liste des Entrepots</h1>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nom du client 
          </th>
          <th scope="col" className="px-6 py-3">
            Date debut du location 
          </th>
          <th scope="col" className="px-6 py-3">
            Date fin du location 
          </th>
          <th scope="col" className="px-6 py-3">
            Déstination
          </th>
          <th scope="col" className="px-6 py-3">
           Statut de paiement 
          </th>
          <th scope="col" className="px-6 py-3">
            Total
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
       {locations.map((location)=>(
          <tr key={location.id_location} className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{getNomClient(location.id_client)}</td>
            <td className="px-6 py-4">{new Date(location.date_debut).toLocaleDateString()}</td>
            <td className="px-6 py-4">{new Date(location.date_fin).toLocaleDateString()}</td>
            <td className="px-6 py-4">{location.destination}</td>
            <td className="px-6 py-4">{location.statut_paiement}</td>
            <td className="px-6 py-4">{location.total}</td>
            <td className="px-6 py-4">
              <button >Modifier</button>
            </td>
          </tr>
       )) }
      </tbody>
    </table>
  </div>







//     <div className="flex items-center">
//                         <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline

//     <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
// </div>
  );
}
