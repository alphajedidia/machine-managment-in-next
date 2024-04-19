
export const categories = [
  { id_categorie: "A", nom_categorie: "Engins de chantier", detail: "Pelleteuses, bulldozers, etc." },
  { id_categorie: "B", nom_categorie: "Engins de manutention", detail: "Chariots élévateurs, transpalettes, etc." },
  { id_categorie: "C", nom_categorie: "Engins agricoles", detail: "Tracteurs, moissonneuses-batteuses, etc." },
];

export const typeEngins = [
  {
    nom_engin: "Pelleteuse",
    description: "Engin de chantier utilisé pour creuser et déplacer de la terre",
    prix_journalier: 800,
    categorie: { connect: { nom_categorie: "Engins de chantier" } },
  },
  {
    nom_engin: "Chariot élévateur",
    description: "Engin de manutention utilisé pour lever et déplacer des charges lourdes",
    prix_journalier: 500,
    categorie: { connect: { nom_categorie: "Engins de manutention" } },
  },
  {
    nom_engin: "Tracteur",
    description: "Engin agricole utilisé pour labourer la terre et remorquer des machines",
    prix_journalier: 300,
    categorie: { connect: { nom_categorie: "Engins agricoles" } },
  },
];

export const entrepots = [
  { nom_entrepot: "Entrepôt principal", localisation: "Paris", capacite: 100 },
  { nom_entrepot: "Entrepôt secondaire", localisation: "Lyon", capacite: 50 },
];

export const engins = [
  {
    matricule: "ENG001",
    etat: true,
    type_engin: { connect: { nom_engin: "Pelleteuse" } },
    entrepot: { connect: { nom_entrepot: "Entrepôt principal" } },
  },
  {
    matricule: "ENG002",
    etat: false,
    type_engin: { connect: { nom_engin: "Chariot élévateur" } },
    entrepot: { connect: { nom_entrepot: "Entrepôt principal" } },
  },
  {
    matricule: "ENG003",
    etat: true,
    type_engin: { connect: { nom_engin: "Tracteur" } },
    entrepot: { connect: { nom_entrepot: "Entrepôt secondaire" } },
  },
];