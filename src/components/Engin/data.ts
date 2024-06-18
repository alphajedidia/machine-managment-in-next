export interface CardData {
  title: string;
  category: string;
  description1: string;
  prixJournalier: string;
  imgUrl?: string;
}

export interface Cards {
  [option: string]: CardData[];
}

export const options: { value: string; label: string }[] = [
  { value: "all", label: "Tout afficher" },
  { value: "A", label: "Catégorie A" },
  { value: "B1", label: "Catégorie B1" },
  { value: "B2", label: "Catégorie B2" },
  { value: "B3", label: "Catégorie B3" },
  { value: "C1", label: "Catégorie C1" },
  { value: "C2", label: "Catégorie C2" },
  { value: "C3", label: "Catégorie C3" },
  { value: "D", label: "Catégorie D" },
  { value: "E", label: "Catégorie E" },
  { value: "F", label: "Catégorie F" },
  { value: "G", label: "Catégorie G" },
];

export const cards: Cards = {
  A: [
      {
          prixJournalier: "100,000 ariary",
          title: "Tracteur",
          category: "Catégorie A",
          description1: "1500kg * 100hp * 5L/100km * 1 place * 40km/h",
          imgUrl: "tracteur.jpg",
      },
      {
          prixJournalier: "90,000 ariary",
          title: "Tracteur Compact",
          category: "Catégorie A",
          description1: "1200kg * 80hp * 4L/100km * 1 place * 35km/h",
          imgUrl: "535.jpg",
      },
      {
          prixJournalier: "110,000 ariary",
          title: "Tracteur Agricole",
          category: "Catégorie A",
          description1: "1600kg * 110hp * 6L/100km * 1 place * 45km/h",
          imgUrl: "excavator-digging-ground-day-light.jpg",
      },
      {
          prixJournalier: "95,000 ariary",
          title: "Tracteur Industriel",
          category: "Catégorie A",
          description1: "1400kg * 90hp * 5L/100km * 1 place * 38km/h",
          imgUrl: "images.jpg",
      },
  ],
  B1: [
      {
          prixJournalier: "150,000 ariary",
          title: "Compacteur",
          category: "Catégorie B1",
          description1: "3000kg * 120hp * 8L/100km * 1 place * 30km/h",
          imgUrl: "téléchargement (1).jpg",
      },
      {
          prixJournalier: "145,000 ariary",
          title: "Compacteur Vibrant",
          category: "Catégorie B1",
          description1: "3200kg * 130hp * 9L/100km * 1 place * 32km/h",
          imgUrl: "téléchargement (2).jpg",
      },
      {
          prixJournalier: "140,000 ariary",
          title: "Compacteur Tandem",
          category: "Catégorie B1",
          description1: "3100kg * 125hp * 8L/100km * 1 place * 31km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "155,000 ariary",
          title: "Compacteur Pneumatique",
          category: "Catégorie B1",
          description1: "3500kg * 140hp * 10L/100km * 1 place * 35km/h",
          imgUrl: "tracteur.jpg",
      },
  ],
  B2: [
      {
          prixJournalier: "130,000 ariary",
          title: "Bulldozer",
          category: "Catégorie B2",
          description1: "5000kg * 200hp * 15L/100km * 1 place * 20km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "135,000 ariary",
          title: "Mini Bulldozer",
          category: "Catégorie B2",
          description1: "4500kg * 180hp * 14L/100km * 1 place * 22km/h",
          imgUrl: "téléchargement (1).jpg",
      },
      {
          prixJournalier: "140,000 ariary",
          title: "Bulldozer de Chantier",
          category: "Catégorie B2",
          description1: "5200kg * 210hp * 16L/100km * 1 place * 18km/h",
          imgUrl: "images.jpg",
      },
      {
          prixJournalier: "125,000 ariary",
          title: "Bulldozer Compact",
          category: "Catégorie B2",
          description1: "4800kg * 190hp * 15L/100km * 1 place * 19km/h",
          imgUrl: "excavator-digging-ground-day-light.jpg",
      },
  ],
  B3: [
      {
          prixJournalier: "120,000 ariary",
          title: "Pelle Hydraulique",
          category: "Catégorie B3",
          description1: "7000kg * 250hp * 20L/100km * 1 place * 15km/h",
          imgUrl: "535.jpg",
      },
      {
          prixJournalier: "125,000 ariary",
          title: "Mini Pelle",
          category: "Catégorie B3",
          description1: "6500kg * 230hp * 18L/100km * 1 place * 17km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "130,000 ariary",
          title: "Pelle de Chantier",
          category: "Catégorie B3",
          description1: "7200kg * 260hp * 21L/100km * 1 place * 14km/h",
          imgUrl: "535.jpg",
      },
      {
          prixJournalier: "115,000 ariary",
          title: "Pelle Compact",
          category: "Catégorie B3",
          description1: "6800kg * 240hp * 19L/100km * 1 place * 16km/h",
          imgUrl: "tracteur.jpg",
      },
  ],
  C1: [
      {
          prixJournalier: "160,000 ariary",
          title: "Grue Mobile",
          category: "Catégorie C1",
          description1: "10000kg * 300hp * 25L/100km * 1 place * 10km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "165,000 ariary",
          title: "Grue de Chantier",
          category: "Catégorie C1",
          description1: "10500kg * 320hp * 26L/100km * 1 place * 9km/h",
          imgUrl: "téléchargement (2).jpg",
      },
      {
          prixJournalier: "170,000 ariary",
          title: "Mini Grue",
          category: "Catégorie C1",
          description1: "9800kg * 290hp * 24L/100km * 1 place * 11km/h",
          imgUrl: "téléchargement (2).jpg",
      },
      {
          prixJournalier: "155,000 ariary",
          title: "Grue Lourde",
          category: "Catégorie C1",
          description1: "11000kg * 340hp * 27L/100km * 1 place * 8km/h",
          imgUrl: "tracteur.jpg",
      },
  ],
  C2: [
      {
          prixJournalier: "90,000 ariary",
          title: "Chariot Élévateur",
          category: "Catégorie C2",
          description1: "2000kg * 80hp * 5L/100km * 1 place * 20km/h",
          imgUrl: "tracteur.jpg",
      },
      {
          prixJournalier: "85,000 ariary",
          title: "Chariot Télescopique",
          category: "Catégorie C2",
          description1: "2100kg * 85hp * 6L/100km * 1 place * 18km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "88,000 ariary",
          title: "Chariot de Chantier",
          category: "Catégorie C2",
          description1: "2200kg * 90hp * 7L/100km * 1 place * 19km/h",
          imgUrl: "téléchargement (2).jpg",
      },
      {
          prixJournalier: "92,000 ariary",
          title: "Mini Chariot",
          category: "Catégorie C2",
          description1: "1900kg * 75hp * 5L/100km * 1 place * 21km/h",
          imgUrl: "téléchargement (1).jpg",
      },
  ],
  C3: [
      {
          prixJournalier: "100,000 ariary",
          title: "Chargeuse",
          category: "Catégorie C3",
          description1: "3000kg * 120hp * 10L/100km * 1 place * 25km/h",
          imgUrl: "images.jpg",
      },
      {
          prixJournalier: "105,000 ariary",
          title: "Mini Chargeuse",
          category: "Catégorie C3",
          description1: "2800kg * 110hp * 9L/100km * 1 place * 27km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "110,000 ariary",
          title: "Chargeuse de Chantier",
          category: "Catégorie C3",
          description1: "3200kg * 130hp * 11L/100km * 1 place * 23km/h",
          imgUrl: "téléchargement (2).jpg",
      },
      {
          prixJournalier: "95,000 ariary",
          title: "Chargeuse Compact",
          category: "Catégorie C3",
          description1: "2900kg * 115hp * 10L/100km * 1 place * 26km/h",
          imgUrl: "téléchargement (1).jpg",
      },
  ],
  D: [
      {
          prixJournalier: "140,000 ariary",
          title: "Niveleuse",
          category: "Catégorie D",
          description1: "4000kg * 150hp * 12L/100km * 1 place * 20km/h",
          imgUrl: "excavator-digging-ground-day-light.jpg",
      },
      {
          prixJournalier: "145,000 ariary",
          title: "Mini Niveleuse",
          category: "Catégorie D",
          description1: "3800kg * 140hp * 11L/100km * 1 place * 22km/h",
          imgUrl: "535.jpg",
      },
      {
          prixJournalier: "150,000 ariary",
          title: "Niveleuse de Chantier",
          category: "Catégorie D",
          description1: "4200kg * 160hp * 13L/100km * 1 place * 18km/h",
          imgUrl: "excavator-digging-ground-day-light.jpg",
      },
      {
          prixJournalier: "135,000 ariary",
          title: "Niveleuse Compact",
          category: "Catégorie D",
          description1: "3900kg * 145hp * 12L/100km * 1 place * 21km/h",
          imgUrl: "téléchargement (2).jpg",
      },
  ],
  E: [
      {
          prixJournalier: "115,000 ariary",
          title: "Tombereau",
          category: "Catégorie E",
          description1: "8000kg * 220hp * 18L/100km * 1 place * 30km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "120,000 ariary",
          title: "Mini Tombereau",
          category: "Catégorie E",
          description1: "7500kg * 200hp * 17L/100km * 1 place * 32km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "125,000 ariary",
          title: "Tombereau de Chantier",
          category: "Catégorie E",
          description1: "8200kg * 230hp * 19L/100km * 1 place * 28km/h",
          imgUrl: "téléchargement (1).jpg",
      },
      {
          prixJournalier: "110,000 ariary",
          title: "Tombereau Compact",
          category: "Catégorie E",
          description1: "7800kg * 210hp * 18L/100km * 1 place * 31km/h",
          imgUrl: "excavator-digging-ground-day-light.jpg",
      },
  ],
  F: [
      {
          prixJournalier: "130,000 ariary",
          title: "Rétrocaveuse",
          category: "Catégorie F",
          description1: "5000kg * 180hp * 14L/100km * 1 place * 25km/h",
          imgUrl: "téléchargement.jpg",
      },
      {
          prixJournalier: "135,000 ariary",
          title: "Mini Rétrocaveuse",
          category: "Catégorie F",
          description1: "4800kg * 170hp * 13L/100km * 1 place * 27km/h",
          imgUrl: "téléchargement (2).jpg",
      },
      {
          prixJournalier: "140,000 ariary",
          title: "Rétrocaveuse de Chantier",
          category: "Catégorie F",
          description1: "5200kg * 190hp * 15L/100km * 1 place * 23km/h",
          imgUrl: "excavator-digging-ground-day-light.jpg",
      },
      {
          prixJournalier: "125,000 ariary",
          title: "Rétrocaveuse Compact",
          category: "Catégorie F",
          description1: "4900kg * 175hp * 14L/100km * 1 place * 26km/h",
          imgUrl: "535.jpg",
      },
  ],
  G: [
      {
          prixJournalier: "125,000 ariary",
          title: "Compacteur à Pneus",
          category: "Catégorie G",
          description1: "3500kg * 140hp * 10L/100km * 1 place * 30km/h",
          imgUrl: "535.jpg",
      },
      {
          prixJournalier: "130,000 ariary",
          title: "Mini Compacteur à Pneus",
          category: "Catégorie G",
          description1: "3300kg * 130hp * 9L/100km * 1 place * 32km/h",
          imgUrl: "excavator-digging-ground-day-light.jpg",
      },
      {
          prixJournalier: "135,000 ariary",
          title: "Compacteur à Chantier",
          category: "Catégorie G",
          description1: "3600kg * 150hp * 11L/100km * 1 place * 28km/h",
          imgUrl: "images.jpg",
      },
      {
          prixJournalier: "120,000 ariary",
          title: "Compacteur Compact",
          category: "Catégorie G",
          description1: "3400kg * 135hp * 10L/100km * 1 place * 31km/h",
          imgUrl: "téléchargement.jpg",
      },
  ],
};
