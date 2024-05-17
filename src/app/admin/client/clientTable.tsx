'use client'
import React, { useEffect, useState } from "react";

// Définition de l'interface Client
interface Client {
  nom_client: string;
  email: string;
  telephone: string;
  numero_carte_bancaire: string;
}

export default function ClientTable() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetch("/api/client")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json() as Promise<Client[]>; // Utilisez l'interface Client pour annoter le type de données
      })
      .then((data) => {
        // Traitez les données récupérées ici
        setClients(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  console.log(clients)
if (clients.length!=0)
  return (
<div className="relative overflow-x-auto  shadow-md sm:rounded-lg mt-16 mx-auto max-w-6xl bg-primary-500">
      <h1 className="text-2xl font-bold mb-4 ml-4">Liste des Clients</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nom du Client
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Telephone
            </th>
            <th scope="col" className="px-6 py-3">
              Numero carte Bancaire
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white border-b" : "bg-gray-100 border-b"}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {client.nom_client}
              </th>
              <td className="px-6 py-4">{client.email}</td>
              <td className="px-6 py-4">{client.telephone}</td>
              <td className="px-6 py-4">{client.numero_carte_bancaire}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>);
else 
  return (<div className="h-full w-full">
        <h1 className="text-3xl text-center">IL n'y a aucune Client</h1>
  </div>)
}
