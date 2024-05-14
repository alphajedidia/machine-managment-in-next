'use client'
import React from 'react';
import Modal from 'react-modal';


  
interface EnginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode; // Ajoutez la propriété children ici
}

const customStyles: Modal.Styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40rem', // Définir une largeur spécifique
        maxWidth: '40rem', // Utiliser maxWidth pour limiter la largeur maximale
        padding: '2rem', // Ajoutez un remplissage au contenu du modal selon vos besoins
        border: '1px solid #e2e8f0', // Ajoutez une bordure au modal selon vos besoins
        borderRadius: '0.5rem', // Ajoutez une bordure arrondie au modal selon vos besoins
    },
    
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajoutez une couleur de superposition semi-transparente au modal selon vos besoins
  },
};

const EnginModal: React.FC<EnginModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
      ariaHideApp={false} 
    >
      {children}
    </Modal>
  );
};

export default EnginModal;
