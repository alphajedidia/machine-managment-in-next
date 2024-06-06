// types/location.ts
export interface EnginInfo {
    id_type: string;
    quantite: number;
  }
  
  export interface CreateLocationData {
    id_client: string;
    date_debut: string; // ISO-8601 format
    date_fin: string; // ISO-8601 format
    statut_paiement: string;
    destination: string;
    engins: EnginInfo[];
  }
  
  export interface CreateLocationResponse {
    nom_client: string;
    email: string;
    engins: { nom_engin: string; quantite: number }[];
    total: number;
  }
  
  export interface Location {
    id_location: string;
    id_client: string;
    date_debut: string;
    date_fin: string;
    statut_paiement: string;
    destination: string;
    total: number;
  }
  