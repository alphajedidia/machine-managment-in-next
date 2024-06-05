import React from "react";
import dynamic from 'next/dynamic';

// Chargement dynamique du composant Map avec désactivation du SSR
const Map = dynamic(() => import("@/components/map/Map")
, {
  ssr: false
});
const page = () => {
  return (
    <div>
      <h1>localisation</h1>

      <Map />
    </div>
  );
};

export default page;
