// components/ErrorDialog.tsx
import React from 'react';

interface ErrorDialogProps {
  message: string;
  onClose: () => void;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
      <div className="bg-white p-8 rounded-lg">       
       <img src="/images/cancel.png" alt="error pictures" />
        <div className="text-lg text-black font-semibold mb-4">{message}</div>
        <div className="absolute bottom-0 right-0 mb-4 mr-4 md:mb-2 md:mr-2 lg:mb-1 lg:mr-2">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-8 rounded" onClick={onClose}>Fermer</button>
            </div>
      </div>
    </div>
  );
};

export default ErrorDialog;
