// pages/index.tsx
'use client'
import React, { useState } from 'react';
import ErrorDialog from '../../../components/ErrorDialog';
const Home: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const openErrorDialog = (message: string) => {
    setErrorMessage(message);
  };

  const closeErrorDialog = () => {
    setErrorMessage(null);
  };

  return (
    <div>
     
      <button onClick={() => openErrorDialog('Une erreur s\'est produite.')}>Afficher Erreur</button>
      {errorMessage && <ErrorDialog message={errorMessage} onClose={closeErrorDialog} />}
    </div>
  );
};

export default Home;
