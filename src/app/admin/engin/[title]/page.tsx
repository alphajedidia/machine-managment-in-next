// app/engin/[title]/page.tsx
"use client";
import React, { useState,useEffect } from "react";
import EnginForm from "./EnginForm";
import EnginTable from "./enginTable";
import TableEngin from "@/components/typeEngin/TableEngin";
import { EnginCardData } from "@/app/utils/data";
import { ConfirmationDialogue, showSuccess } from "@/utils/sweetAlertUtils";
import { Back } from "@/components/icons";
import Link from "next/link";
interface EnginListProps {
  params: {
    title: string;
  };
}
interface Engin {
  matricule: string;
  entrepot: string;
  status: string;
}


const EnginList: React.FC<EnginListProps> = ({ params }) => {
  const { title } = params;
  const [enginList, setEnginList] = useState<Engin[]>([
    { matricule: "1234", entrepot: "A1", status: "Available" },
    { matricule: "5678", entrepot: "B2", status: "In Use" },
  ]);

  const handleEdit = (index: number) => {
    // Logique de modification ici
    console.log("Edit item at index", index);
  };

  const handleDelete = (index: number) => {
    // Logique de suppression ici
    console.log("Delete item at index", index);
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
        
        showSuccess("Supprimé","Supression de l'engin avec succès!");
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de l\'engin :', error);
       
      });
  };
  return (
    <div>
 <div> <Link href={'/admin/engin'}> <Back iconStyle="w-20 h-20 " /></Link>
    </div>
    <div className=" flex flex-grow h-full w-full justify-around items-center p-5">
      <div className="h-full  p-2 w-1/2 ">
        <div className="flex flex-grow h-1/4 w-full">
          <div className="w-1/2 h-auto border">
            <img src="/G.jpeg" alt="img" />
          </div>
          <div className="w-1/2 py-5 bg-slate-200">
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            <p className="p-2">
              <span className="font-semibold">DESCRIPTION: </span>
              <span>{EnginCardData[0].description}</span>
              <br />
              <span className="font-bold">PRIX JOURNALIER : </span>
              <span>{EnginCardData[0].prixJournalier} AR</span>
              <br />
              <span className="font-bold bg-secondary-100 ">CATEGORIE : </span>
              <span>A</span>
            </p>
          </div>
        </div>

        <div className="h-[500px] border shadow-lg overflow-y-auto">
          <TableEngin
            engin={enginList}
            onEdit={handleEdit}
            onDelete={handleDeleteEngin}
          />
        </div>
      </div>
      <div className="h-2/3 w-1/4 border">
        <EnginForm />
      </div>
    </div>
    </div>
   
  );
};
export default EnginList;
