

const { faker } = require('@faker-js/faker')
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
]

// Catégories
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
]

// Types d'engins
const typesEngins = [
  {
    nom_engin: "Chariot élévateur",
    description: "Engin de manutention pour déplacer des charges lourdes",
    prix_journalier: 250,
    id_categorie: categories[0].id_categorie,
    image_url: "https://example.com/chariot-elevateur.jpg"
  },
  {
    nom_engin: "Pelleteuse",
    description: "Engin de terrassement pour creuser et déplacer de la terre",
    prix_journalier: 500,
    id_categorie: categories[1].id_categorie,
    image_url: "https://example.com/pelleteuse.jpg"
  },
  {
    nom_engin: "Camion benne",
    description: "Engin de transport pour transporter des matériaux en vrac",
    prix_journalier: 350,
    id_categorie: categories[2].id_categorie,
    image_url: "https://example.com/camion-benne.jpg"
  },
  {
    nom_engin: "Grue mobile",
    description: "Engin de levage pour soulever des charges très lourdes",
    prix_journalier: 800,
    id_categorie: categories[0].id_categorie,
    image_url: "https://example.com/grue-mobile.jpg"
  },
  {
    nom_engin: "Niveleuse",
    description: "Engin de terrassement pour niveler et préparer les surfaces",
    prix_journalier: 600,
    id_categorie: categories[1].id_categorie,
    image_url: "https://example.com/niveleuse.jpg"
  },
  {
    nom_engin: "Camion toupie",
    description: "Engin de transport pour transporter du béton",
    prix_journalier: 450,
    id_categorie: categories[2].id_categorie,
    image_url: "https://example.com/camion-toupie.jpg"
  }
]

// Engins
const engins = [
  {
    matricule: "ABC123",
    id_type: typesEngins[0].id_type,
    id_entrepot: entrepots[0].id_entrepot,
    etat: true
  },
  {
    matricule: "DEF456",
    id_type: typesEngins[1].id_type,
    id_entrepot: entrepots[1].id_entrepot,
    etat: false
  },
  {
    matricule: "GHI789",
    id_type: typesEngins[2].id_type,
    id_entrepot: entrepots[2].id_entrepot,
    etat: true
  },
  {
    matricule: "JKL012",
    id_type: typesEngins[3].id_type,
    id_entrepot: entrepots[0].id_entrepot,
    etat: true
  },
  {
    matricule: "MNO345",
    id_type: typesEngins[4].id_type,
    id_entrepot: entrepots[1].id_entrepot,
    etat: false
  },
  {
    matricule: "PQR678",
    id_type: typesEngins[5].id_type,
    id_entrepot: entrepots[2].id_entrepot,
    etat: true
  }
]

// Clients
const clients = Array.from({ length: 20 }, () => ({
  nom_client: faker.company.name(),
  email: faker.internet.email(),
  telephone: faker.phone.number(),
  numero_carte_bancaire: faker.finance.creditCardNumber(),
  code_securite: faker.finance.creditCardCVV()
}))

// Locations
const locations = []

for (let i = 0; i < 50; i++) {
  const client = clients[faker.datatype.number({ min: 0, max: clients.length - 1 })]
  const dateDebut = faker.date.between('2023-01-01', '2023-12-31')
  const duree = faker.datatype.number({ min: 5, max: 30 })
  const dateFin = new Date(dateDebut.getTime() + duree * 24 * 60 * 60 * 1000)

  locations.push({
    id_client: client.id_client,
    date_debut: dateDebut,
    date_fin: dateFin,
    statut_paiement: faker.helpers.arrayElement(['payé', 'en attente', 'annulé']),
    destination: faker.address.streetAddress() + ', ' + faker.address.city()
  })
}

// Avoirs
const avoirs = locations.flatMap(location => {
  const nbEngins = faker.datatype.number({ min: 1, max: 3 })
  const enginsLoues = faker.helpers.arrayElements(engins, nbEngins)

  return enginsLoues.map(engin => ({
    matricule: engin.matricule,
    id_location: location.id_location
  }))
})
module.exports = { entrepots, categories, typesEngins, engins, clients, locations, avoirs }