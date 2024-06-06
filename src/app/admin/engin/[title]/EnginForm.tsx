
'use client'
import {showSuccess,showErrorAddEntrepot } from "@/utils/sweetAlertUtils";
import React, { useState, useEffect } from "react";

interface Entrepot {
  id_entrepot: string;
  nom_entrepot: string;
}

interface TypeEngin {
  id_type: string;
  nom_engin: string;
}

export default function EnginForm() {
  const [entrepots, setEntrepots] = useState<Entrepot[]>([]);
  const [typesEngin, setTypesEngin] = useState<TypeEngin[]>([]);
  const [matricule, setMatricule] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedEntrepot, setSelectedEntrepot] = useState("");
  const [isGoodCondition, setIsGoodCondition] = useState<boolean>(true);

  useEffect(() => {
    const fetchEntrepots = async () => {
      try {
        const response = await fetch("/api/entrepot");
        if (!response.ok) {
          throw new Error("La requête pour récupérer les entrepôts a échoué");
        }
        const data = await response.json();
        setEntrepots(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des entrepôts:", error);
      }
    };

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

    fetchEntrepots();
    fetchTypesEngin();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      console.log("Données JSON à envoyer :", {
        matricule,
        id_type: selectedType,
        id_entrepot: selectedEntrepot,
        etat: isGoodCondition,
      });
      const response = await fetch("/api/engin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matricule,
          id_type: selectedType,
          id_entrepot: selectedEntrepot,
          etat: isGoodCondition,
        }),
      });

      if (!response.ok) {
        showErrorAddEntrepot();
      }
      showSuccess("Ajouté","L'ajout engin est ajouté avec succès");

      setMatricule("");
      setSelectedType("");
      setSelectedEntrepot("");
      setIsGoodCondition(true);

    } catch (error) {
      console.error("Erreur lors de l'ajout de l'engin:", error);
      showErrorAddEntrepot();
    }
  };

  return (
    <form className=" border border-gray-300 p-6 rounded-lg" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-extrabold">Ajouter un engin</h1> <br />
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Numéro Matricule
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-400">
          Type d'engin
        </label>
        <select
          id="countries"
          value={selectedType}
          required
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">selectionner le type d'engin</option>
          {typesEngin.map((type) => (
            <option key={type.id_type} value={type.id_type}>
              {type.nom_engin}
            </option>
          ))}
        </select>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="entrepot" className="block mb-2 text-sm font-medium text-gray-400">
          Entrepot
        </label>
        <select
          id="entrepot"
          value={selectedEntrepot}
          onChange={(e) => setSelectedEntrepot(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
       required >  <option value="">selectionner l'entrepôt</option>
          {entrepots.map((entrepot) => (
            <option key={entrepot.id_entrepot} value={entrepot.id_entrepot}>
              {entrepot.nom_entrepot}
            </option>
          ))}
        </select>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-400">
          Etat
        </label>
        <select
          id="countries"
          value={isGoodCondition ? "Très Bonne Etat" : "Mauvaise Etat"}
          required
          onChange={(e) => setIsGoodCondition(e.target.value === "Très Bonne Etat")}
          className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Très Bonne Etat">Très Bonne Etat</option>
          <option value="Mauvaise Etat">Mauvaise Etat</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="text-tertiai bg-primary-500 hover:bg-primary-300 focus:ring-4 focus:primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
}
