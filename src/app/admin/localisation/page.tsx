import React from "react";
import dynamic from 'next/dynamic';

// Chargement dynamique du composant Map avec désactivation du SSR
const page = () => {
  return (
    <div>
      <h1>localisation</h1>

    </div>
  );
};

export default page;
