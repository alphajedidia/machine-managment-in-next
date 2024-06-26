'use client'
import { ConfirmationDialogue, showSuccess } from "@/utils/sweetAlertUtils";

import React, { useEffect, useState } from "react";

import EnginModal from "./enginModal";
import { DeleteIcon, UpdateIcon } from "@/components/icons";

interface Engin {
  matricule: string;
  id_type: string;
  id_entrepot: string;
  etat: boolean;
}
interface Entrepot {
  id_entrepot: string;
  nom_entrepot: string;
}
interface TypeEngin {
  id_type: string;
  nom_engin: string;
}


export default function EnginTable() {

  const [engins, setEngin] = useState<Engin[]>([]);
  const [entrepots, setEntrepots] = useState<Entrepot[]>([]);
  const [typeEngins, setTypesEngins] = useState<TypeEngin[]>([]);
  const [selectedEngin, setSelectedEngin] = useState<Engin | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEngins = async () => {
      try {
        const response = await fetch("/api/engin");
        if (!response.ok) {
          throw new Error('problème de connexion');
        }
        const enginsdata = await response.json();
        setEngin(enginsdata);
      } catch (error) {
        console.error('problème de fetch operation:', error);
      }
    };
    const fetchEntrepots = async () => {
      try {
        const response = await fetch("/api/entrepot");
        if (!response.ok) {
          throw new Error('problème de connexion');
        }
        const entrepotsData = await response.json();
        setEntrepots(entrepotsData);
      } catch (error) {
        console.error('problème de fetch operation:', error);
      }
    };

    const fetchTypesEngins = async () => {
      try {
        const response = await fetch("/api/typeEngin");
        if (!response.ok) {
          throw new Error('problème de connexion');
        }
        const typeEnginData = await response.json();
        setTypesEngins(typeEnginData);
      } catch (error) {
        console.error('problème de fetch operation:', error);
      }
    };

    const intervalId = setInterval(() => {
      fetchEngins();
      fetchEntrepots();
      fetchTypesEngins();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  const getNomEntrepot = (id_entrepot: string): string => {
    const entrepot = entrepots.find((entrepot) => entrepot.id_entrepot === id_entrepot);
    return entrepot ? entrepot.nom_entrepot : "Inconnu";
  };
  const getNomEngin = (id_type: string): string => {
    const typeEngin = typeEngins.find((typeEngin) => typeEngin.id_type === id_type);
    return typeEngin ? typeEngin.nom_engin : "Inconnu";
  };
  const handleDeleteEngin = (matricule: string) => {
    ConfirmationDialogue('Confirmation', 'Êtes-vous sûr de vouloir supprimer cet engin ?')
      .then((result) => {
        if (result.isConfirmed) {
          return fetch(`/api/engin?id=${matricule}`, {
            method: 'DELETE',
          });
        } else {
          throw new Error('Suppression annulée');
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete engin');
        }

        showSuccess('Supprimé', "Engin a été supprimé avec succés !");
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de l\'engin :', error);

      });
  };
  const handleOpenModal = (engin: Engin | null) => {
    setSelectedEngin(engin);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEngin(null);
    setIsModalOpen(false);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16 mx-auto max-w-6xl bg-primary-500">
      <h1 className="text-2xl font-bold mb-4 ml-4">Liste des Entrepots</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Numero Matricule
            </th>
            <th scope="col" className="px-6 py-3">
              Nom de l'engin
            </th>
            <th scope="col" className="px-6 py-3">
              Entrepôt
            </th>
            <th scope="col" className="px-6 py-3">
              Etat
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>

          </tr>
        </thead>
        <tbody>
          {engins.map((engin) => (
            <tr key={engin.matricule} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{engin.matricule}</td>
              <td className="px-6 py-4">{getNomEngin(engin.id_type)}</td>
              <td className="px-6 py-4">{getNomEntrepot(engin.id_entrepot)}</td>
              <td className="px-6 py-4">{engin.etat ? "disponible " : "Indisponible"}</td>
              <td className="px-6 py-4">
              <button onClick={() => handleOpenModal(engin)}
                  className="text-white bg-primary-500 hover:bg-primary-300 focus:ring-4 focus:primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-[1mm]"> <UpdateIcon></UpdateIcon></button>
                <EnginModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  engin={selectedEngin}
                  entrepots={entrepots}
                  typeEngins={typeEngins}
                />
                <button onClick={() => handleDeleteEngin(engin.matricule)}
                  className="text-white bg-error-500 hover:bg-error-300 focus:ring-4 focus:primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-[1mm]">
                  <DeleteIcon></DeleteIcon>
                </button>               
              </td>

            </tr>
          ))}


        </tbody>
      </table>

    </div>
  );
}
