'use client'
import React, { useState, useEffect } from "react";

export default function TypeEngin() {
  const [formData, setFormData] = useState({
    id_type: "",
    id_categorie: "",
    image_url: "",
    nom_engin: "",
    description: "",
    prix_journalier: ""
  });
  const [categories, setCategories] = useState<{ id_categorie: string; nom_categorie: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/typeEngin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Network 1 response was not ok");
      }
      setFormData({
        id_type: "",
        id_categorie: "",
        image_url: "",
        nom_engin: "",
        description: "",
        prix_journalier: ""
      });
      console.log("Type d'engin ajouté avec succès !");
    } catch (error) {
      console.error("There was a problem with the add operation:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      if (!response.ok) {
        throw new Error("Network categories was not ok");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error("Data retrieved from API is not an array:", data);
      }
    } catch (error) {
      console.error("There was a problem fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 border border-gray-300 p-6 rounded-lg">
      <h1 className="text-2xl font-extrabold">Ajouter un Type d'engin</h1><br />
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="id_type"
          value={formData.id_type}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="id_type"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Identifiant du Type d'engin
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="id_categorie" className="block mb-2 text-sm font-medium text-gray-400">
          Catégorie
        </label>
        <select
          name="id_categorie"
          value={formData.id_categorie}
          onChange={handleChange}
          id="id_categorie"
          className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
         
          {categories.map((categorie) => (
            <option key={categorie.id_categorie} value={categorie.id_categorie}>
              {categorie.nom_categorie}
            </option>
          ))}
        </select>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-gray-400">
          Image
        </label>
        <input
  type="file"
  name="image_url"
  id="image_url"
  value={formData.image_url}
  onChange={handleChange}
  className="block py-2.5 px-0 w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
  placeholder="URL de l'image"
  aria-describedby="user_avatar_help"
/>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="nom_engin"
          value={formData.nom_engin}
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="nom_engin"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nom de l'engin
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-400">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          id="description"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Description de l'engin..."
        ></textarea>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="prix_journalier"
          value={formData.prix_journalier}
          onChange={handleChange}
          min={0}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="prix_journalier"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Prix Journalier
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="text-white bg-primary-500 hover:bg-primary-300 focus:ring-4 focus:primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
}
