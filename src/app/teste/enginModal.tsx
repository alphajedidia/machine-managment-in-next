'use client'
import React, { useState, useEffect } from 'react';
import { showSuccess } from '@/utils/sweetAlertUtils';
import { CustomButton } from '@/components';

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

interface FormData {
  matricule: string;
  typeEngin: string;
  entrepot: string;
  etat: string;
}

interface EnginModalProps {
  isOpen: boolean;
  onClose: () => void;
  engin: Engin | null;
  entrepots: Entrepot[];
  typeEngins: TypeEngin[];
}

const EnginModal: React.FC<EnginModalProps> = ({ isOpen, onClose, engin, entrepots, typeEngins }) => {
  const [formData, setFormData] = useState<FormData>({
    matricule: '',
    typeEngin: '',
    entrepot: '',
    etat: ''
  });

  useEffect(() => {
    if (engin) {
      setFormData({
        matricule: engin.matricule,
        typeEngin: engin.id_type,
        entrepot: engin.id_entrepot,
        etat: engin.etat.toString()
      });
    }
  }, [engin]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/engin', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: formData.matricule,
          id_type: formData.typeEngin,
          id_entrepot: formData.entrepot,
          etat: formData.etat === 'true'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update engin');
      }
      
      showSuccess('Modifié',"L'engin a été modifié !");

      const updatedEngin = await response.json();
      console.log('Engin updated successfully:', updatedEngin);
      
      onClose();
    } catch (error) {
      console.error('Error updating engin:', error);
     
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <form className="bg-white" onSubmit={handleSubmit}>
              <h1 className="text-2xl font-extrabold mb-4">Modifier un engin</h1>
              <div className="mb-4">
                <label htmlFor="matricule" className="block mb-1">Numéro de Matricule</label>
                <input
                  type="text"
                  name="matricule"
                  value={formData.matricule}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded-md"
                  required
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label htmlFor="typeEngin" className="block mb-1">Type d'engin</label>
                <select
                  name="typeEngin"
                  value={formData.typeEngin}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded-md"
                  required
                >
                  {typeEngins.map((type) => (
                    <option key={type.id_type} value={type.id_type}>{type.nom_engin}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="entrepot" className="block mb-1">Entrepôt</label>
                <select
                  name="entrepot"
                  value={formData.entrepot}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded-md"
                  required
                >
                  {entrepots.map((entrepot) => (
                    <option key={entrepot.id_entrepot} value={entrepot.id_entrepot}>{entrepot.nom_entrepot}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="etat" className="block mb-1">État</label>
                <select
                  name="etat"
                  value={formData.etat}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Sélectionner l'état</option>
                  <option value="true">Disponible</option>
                  <option value="false">Indisponible</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  className="text-white bg-error-500 hover:bg-error-600 focus:ring-4 focus:primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-[2mm] border-gray-300"
                  onClick={onClose}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-[2mm]"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnginModal;
