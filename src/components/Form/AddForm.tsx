"use client"
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import SvgDrop from "./SvgDrop";

interface Entrepot {
  id_entrepot: string;
  nom_entrepot: string;
}

const Dropzone: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [entrepots, setEntrepots] = useState<Entrepot[]>([]);
  const [nomEngin, setNomEngin] = useState("");
  const [selectedEntrepot, setSelectedEntrepot] = useState("");
  const [prixJournalier, setPrixJournalier] = useState<number | null>(null);
  const [description, setDescription] = useState("");
  const [isGoodCondition, setIsGoodCondition] = useState<boolean>(true);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

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
    fetchEntrepots();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = {
      file,
      nomEngin,
      selectedEntrepot,
      prixJournalier,
      description,
      isGoodCondition,
    };
    console.log(formData);
  };

  return (
    <form className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h1 className="text-3xl text-center font-bold mb-6">Ajouter un engin</h1>
      
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="  relative flex flex-col items-center justify-center pt-5 pb-6">
          {preview ? (
            <img
              src={preview}
              alt="Uploaded file"
              className=" h-40 w-full object-contain"
            />
          ) : (
            <>
              <SvgDrop />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </>
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      <div className="mt-4">
        <label
          htmlFor="nom_engin"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nom Engin
        </label>
        <input
          type="text"
          id="nom_engin"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Nom Engin"
          value={nomEngin}
          onChange={(e) => setNomEngin(e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="prix_journalier"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Prix Journalier
        </label>
        <input
          type="number"
          id="prix_journalier"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Prix en Ariary"
          value={prixJournalier ?? ''}
          onChange={(e) => setPrixJournalier(parseInt(e.target.value))}
          required
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="mt-4">
        <label
          htmlFor="entrepot"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Sélectionnez un entrepôt
        </label>
        <select
          id="entrepot"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={selectedEntrepot}
          onChange={(e) => setSelectedEntrepot(e.target.value)}
        >
          <option value="">Sélectionnez un entrepôt</option>
          {entrepots.map((entrepot) => (
            <option key={entrepot.id_entrepot} value={entrepot.id_entrepot}>
              {entrepot.nom_entrepot}
            </option>
          ))}
        </select>
      </div>


      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="text-white bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default Dropzone;
