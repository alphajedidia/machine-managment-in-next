'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";
import {showSuccessAddEntrepot,showErrorAddEntrepot } from "@/utils/sweetAlertUtils";

interface FormData {
    id_entrepot: string;
    nom_entrepot: string;
    localisation: string;
    capacite: number;
}

export default function EntrepotForm() {

    const defaultFormData: FormData = {
        id_entrepot: "",
        nom_entrepot: "",
        localisation: "",
        capacite: 0
    };

    const [formData, setFormData] = useState

        ({
            id_entrepot: "",
            nom_entrepot: "",
            localisation: "",
            capacite: 0
        });
        const [successMessage, setSuccessMessage] = useState<string | null>(null);
        const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const capacityNumber = typeof formData.capacite === "string" ? parseInt(formData.capacite, 10) : 0;



            if (isNaN(capacityNumber) || !Number.isInteger(capacityNumber)) {
                throw new Error("Capacite doit être un nombre");
            }

            const updatedFormData = { ...formData, capacite: capacityNumber };

            const response = await fetch("/api/entrepot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([updatedFormData]),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }
         
        setFormData(defaultFormData);
       
        showSuccessAddEntrepot();
        } catch (error) {
            console.error("Error submitting form:", error);
            showErrorAddEntrepot();
            setSuccessMessage(null);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
         setErrorMessage(null);
         setSuccessMessage(null);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        
        <form className="max-w-md mx-auto mt-16 border border-gray-300 p-6 rounded-lg"  onSubmit={handleSubmit}>
            <h1 className="text-2xl  font-extrabold ">Creer un Entrepôt</h1>
        
            <br />
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="id_entrepot" value={formData.id_entrepot} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identifiant de l'entrepot</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">

                <input type="text" name="nom_entrepot" value={formData.nom_entrepot} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom de l'entrepot</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">

                <input type="text" name="localisation" value={formData.localisation} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Localisation</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">

                <input type="number" name="capacite" value={formData.capacite} onChange={handleChange} min={0} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="capacite" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Capacité</label>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="text-white bg-primary-500 hover:bg-primary-300 focus:ring-4  focus:primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                    Créer
                </button>
            </div>
        </form>
    );
}
