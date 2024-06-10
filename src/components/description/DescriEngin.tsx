"use client"
import React, { useEffect, useState } from 'react'
import TableEngin from '../typeEngin/TableEngin'
import { deleteData, fetchData } from '@/app/utils/api';
import {
  ConfirmationDialogue,
} from "@/utils/sweetAlertUtils";
import { EnginCardData } from '@/app/utils/data';
import ModalForm from '../modal/enginModal';
import EnginForm from '../Form/EnginForm';
const DescriEngin = ({title}:{title:string}) => {
  interface Engin {
    matricule: string;
    entrepot: string;
    status: string;
  }
  const [open,setOpen]=useState(false);
  const onRequestClose= ()=>{setOpen(false)};
  const [engines, setEngines] = useState<Engin[]>([]);
   useEffect(() => {
    fetchData<Engin[]>({
      url: "/engin/" + title,
      setter: setEngines,
      message: "Failed to fetch engine data",
    });
  }, []);

  const handleEdit = (index: number) => {
    console.log("Edit item at index", index);
  };


  const handleDeleteEngin = (matricule: string) => {
    ConfirmationDialogue(
      "Confirmation",
      "Êtes-vous sûr de vouloir supprimer cet engin ?"
    )
      .then((result) => {
        if (result.isConfirmed) {
          return deleteData({
            url: `/engin/?id=${matricule}`,
            successMessage: "Engin deleted successfully!",
            errorMessage: "Failed to delete engin",
          });
        } else {
          throw new Error("Suppression annulée");
        }
      })
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'engin :", error);
        alert("Cette Engin est louer en ce moment")
      });
  };


  return (
    <div>
      <div className="h-full  p-2 ">
    <div className="flex flex-grow h-1/4 w-full">
      <div className="w-1/2 h-auto border">
        <img src="/G.jpeg" alt="img" />
      </div>
      <div className=" flex flex-col justify-around w-1/2 py-4 bg-slate-200">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="p-2">
          <span className="font-semibold">DESCRIPTION: </span>
          <span>{EnginCardData[0].description}</span>
          <br />
          <span className="font-bold">PRIX JOURNALIER : </span>
          <span>{EnginCardData[0].prixJournalier} AR</span>
          <br />
          <span className="font-bold bg-secondary-100 ">
            CATEGORIE :{" "}
          </span>
          <span>A</span>
        </p>
        <div className='flex justify-end items-center text-xl px-4 hover:cursor-pointer ' onClick={()=>{setOpen(true)}}>
          <button className='border bg-primary-400  px-4 py-2 rounded-lg'>Ajouter</button>
        </div>z

      </div>
    </div>

    <div className="h-[500px] border shadow-lg overflow-y-auto">
      <TableEngin 
        engin={engines}
        onEdit={handleEdit}
        onDelete={handleDeleteEngin}
      />
    </div>
  </div>
  <ModalForm isOpen={open} children= {<EnginForm id_type={title}/>} onRequestClose={onRequestClose}/>
    </div>
  )
}

export default DescriEngin
