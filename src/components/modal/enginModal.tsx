'use client'
import React from 'react';
import Modal from 'react-modal';
import Close from '../icons/Close';


  
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
        width: '40rem', 
        maxWidth: '40rem', 
        padding: '1rem', 
        border: '1px solid #e2e8f0', 
        borderRadius: '0.5rem', 
        
    },
    
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const ModalForm: React.FC<EnginModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
      ariaHideApp={false} 
    >
      <button
              className="absolute top-0 right-0 m-4 hover:scale-150 transition font-extrabold text-secondary-500 text-2xl"
              onClick={onRequestClose}
            >
               <Close/>
            </button>
      {children}
    </Modal>
  );
};

export default ModalForm;
