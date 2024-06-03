import React from "react";
import ChartDonut from "@/components/charts/Chart.Donut";

type Slide = {
  StatChart: React.ReactNode;
  StatChartTitle: string;
};

const entrepots = [
  {
    nom_entrepot: "Entrepôt Central",
    localisation: "Paris, France",
    capacite: 500
  },
  {
    nom_entrepot: "Entrepôt Nord",
    localisation: "Lille, France",
    capacite: 300
  },
  {
    nom_entrepot: "Entrepôt Sud",
    localisation: "Marseille, France",
    capacite: 400
  }
];

const categories = [
  {
    nom_categorie: "Levage",
    detail: "Engins de levage et de manutention de charges lourdes"
  },
  {
    nom_categorie: "Terrassement",
    detail: "Engins de travaux publics et de terrassement"
  },
  {
    nom_categorie: "Transport",
    detail: "Engins de transport de matériaux et de personnes"
  }
];

const typesEngins = [
  {
    nom_engin: "Chariot élévateur",
    description: "Engin de manutention pour déplacer des charges lourdes",
    prix_journalier: 250,
    id_categorie: categories[0].nom_categorie,
    image_url: "https://example.com/chariot-elevateur.jpg"
  },
  {
    nom_engin: "Pelleteuse",
    description: "Engin de terrassement pour creuser et déplacer de la terre",
    prix_journalier: 500,
    id_categorie: categories[1].nom_categorie,
    image_url: "https://example.com/pelleteuse.jpg"
  },
  {
    nom_engin: "Camion benne",
    description: "Engin de transport pour transporter des matériaux en vrac",
    prix_journalier: 350,
    id_categorie: categories[2].nom_categorie,
    image_url: "https://example.com/camion-benne.jpg"
  },
  {
    nom_engin: "Grue mobile",
    description: "Engin de levage pour soulever des charges très lourdes",
    prix_journalier: 800,
    id_categorie: categories[0].nom_categorie,
    image_url: "https://example.com/grue-mobile.jpg"
  },
  {
    nom_engin: "Niveleuse",
    description: "Engin de terrassement pour niveler et préparer les surfaces",
    prix_journalier: 600,
    id_categorie: categories[1].nom_categorie,
    image_url: "https://example.com/niveleuse.jpg"
  },
  {
    nom_engin: "Camion toupie",
    description: "Engin de transport pour transporter du béton",
    prix_journalier: 450,
    id_categorie: categories[2].nom_categorie,
    image_url: "https://example.com/camion-toupie.jpg"
  }
];

const engins = [
  {
    matricule: "ABC123",
    id_type: typesEngins[0].nom_engin,
    id_entrepot: entrepots[0].nom_entrepot,
    etat: true
  },
  {
    matricule: "DEF456",
    id_type: typesEngins[1].nom_engin,
    id_entrepot: entrepots[1].nom_entrepot,
    etat: false
  },
  {
    matricule: "GHI789",
    id_type: typesEngins[2].nom_engin,
    id_entrepot: entrepots[2].nom_entrepot,
    etat: true
  },
  {
    matricule: "JKL012",
    id_type: typesEngins[3].nom_engin,
    id_entrepot: entrepots[0].nom_entrepot,
    etat: true
  },
  {
    matricule: "MNO345",
    id_type: typesEngins[4].nom_engin,
    id_entrepot: entrepots[1].nom_entrepot,
    etat: false
  },
  {
    matricule: "PQR678",
    id_type: typesEngins[5].nom_engin,
    id_entrepot: entrepots[2].nom_entrepot,
    etat: true
  }
];

const locationData = [
  {
    name: "Client A",
    engin: "Engine Model 1",
    dateInitial: "2024-05-01",
    dateFinal: "2024-05-31",
  },
  {
    name: "Client B",
    engin: "Engine Model 2",
    dateInitial: "2024-01-15",
    dateFinal: "2024-02-20",
  },
  {
    name: "Client C",
    engin: "Engine Model 1",
    dateInitial: "2024-05-01",
    dateFinal: "2024-05-31",
  },
  {
    name: "Client D",
    engin: "Engine Model 2",
    dateInitial: "2024-04-15",
    dateFinal: "2024-05-20",
  },
  {
    name: "Client E",
    engin: "Engine Model 1",
    dateInitial: "2024-05-01",
    dateFinal: "2024-05-31",
  },
  {
    name: "Client F",
    engin: "Engine Model 2",
    dateInitial: "2024-04-15",
    dateFinal: "2024-05-20",
  },
  {
    name: "Client G",
    engin: "Engine Model 1",
    dateInitial: "2024-05-01",
    dateFinal: "2024-05-31",
  },
  {
    name: "Client H",
    engin: "Engine Model 2",
    dateInitial: "2024-04-15",
    dateFinal: "2024-05-20",
  },
  {
    name: "Client I",
    engin: "Engine Model 1",
    dateInitial: "2024-05-01",
    dateFinal: "2024-06-31",
  },
  {
    name: "Client J",
    engin: "Engine Model 2",
    dateInitial: "2024-04-15",
    dateFinal: "2024-06-20",
  },
  {
    name: "Client K",
    engin: "Engine Model 1",
    dateInitial: "2024-05-01",
    dateFinal: "2024-06-31",
  },
  {
    name: "Client L",
    engin: "Engine Model 2",
    dateInitial: "2024-04-15",
    dateFinal: "2024-06-20",
  },
];

const series = [{
  name: 'ENGINS',
  data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 140, 155, 160]
}];
const locationInfo = [
 {
  label:'Location En cours',
  total:10
 }, {
  label:'Nombre de location',
  total:56
 }, {
  label:'Location Payer',
  total:10
 } ,{
  label:'Location En Attente',
  total:10
 }
]

const TopEngin = [
  {
    enginNom: "Excavator",
    prix: 500,
    nombre_location: 10,
  },
  {
    enginNom: "Bulldozer",
    prix: 700,
    nombre_location: 7,
  },
  {
    enginNom: "Crane",
    prix: 1500,
    nombre_location: 3,
  },
  {
    enginNom: "Loader",
    prix: 400,
    nombre_location: 15,
  },
];
const client=[
  {
    "nom_client": "Jean Dupont",
    "email": "jean.dupont@example.com",
    "telephone": "123-456-7890",
    "numero_carte_bancaire": "1111-2222-3333-4444"
  },
  {
    "nom_client": "Marie Curie",
    "email": "marie.curie@example.com",
    "telephone": "987-654-3210",
    "numero_carte_bancaire": "5555-6666-7777-8888"
  }, {
    "nom_client": "Marie Curie",
    "email": "marie.curie@example.com",
    "telephone": "987-654-3210",
    "numero_carte_bancaire": "5555-6666-7777-8888"
  }, {
    "nom_client": "Marie Curie",
    "email": "marie.curie@example.com",
    "telephone": "987-654-3210",
    "numero_carte_bancaire": "5555-6666-7777-8888"
  }, {
    "nom_client": "Marie Curie",
    "email": "marie.curie@example.com",
    "telephone": "987-654-3210",
    "numero_carte_bancaire": "5555-6666-7777-8888"
  }, {
    "nom_client": "Marie Curie",
    "email": "marie.curie@example.com",
    "telephone": "987-654-3210",
    "numero_carte_bancaire": "5555-6666-7777-8888"
  }, {
    "nom_client": "Marie Curie",
    "email": "marie.curie@example.com",
    "telephone": "987-654-3210",
    "numero_carte_bancaire": "5555-6666-7777-8888"
  }
]




export { entrepots, categories, typesEngins, engins, locationData, series, TopEngin,client,locationInfo };
