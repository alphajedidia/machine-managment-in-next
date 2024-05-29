'use client'
import React, { useState } from 'react';
import EnginModal from './enginModal';


interface MainComponentProps {
  onOpenModal: (engin: Engin | null) => void;
}
interface Engin {
  matricule: string;
  id_type: string;
  id_entrepot: string;
  etat: boolean;
}

const MainComponent: React.FC<MainComponentProps> = ({ onOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div>
      <button onClick={() => onOpenModal(null)}>Ouvrir le modal</button>
      {/* <EnginModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
};

export default MainComponent;
