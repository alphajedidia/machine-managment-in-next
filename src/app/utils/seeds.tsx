// seed.js
const { PrismaClient } = require('@prisma/client')
const { entrepots, categories, typesEngins, engins, clients, locations, avoirs } = require('./data')

const prisma = new PrismaClient()

async function main() {
  // Insérer les catégories
  const createdCategories = await Promise.all(
    categories.map(categorie => prisma.categorie.create({ data: categorie }))
  )

  // Insérer les entrepôts
  const createdEntrepots = await Promise.all(
    entrepots.map(entrepot => prisma.entrepot.create({ data: entrepot }))
  )

  // Insérer les types d'engins
  const createdTypesEngins = await Promise.all(
    typesEngins.map(async typeEngin => {
      const categorie = createdCategories.find(c => c.id_categorie === typeEngin.id_categorie)
      return prisma.type_engin.create({
        data: {
          ...typeEngin,
          categorie: { connect: { id_categorie: categorie.id_categorie } }
        }
      })
    })
  )

  // Insérer les engins
  const createdEngins = await Promise.all(
    engins.map(async engin => {
      const typeEngin = createdTypesEngins.find(te => te.id_type === engin.id_type)
      const entrepot = createdEntrepots.find(e => e.id_entrepot === engin.id_entrepot)
      return prisma.engin.create({
        data: {
          ...engin,
          type_engin: { connect: { id_type: typeEngin.id_type } },
          entrepot: { connect: { id_entrepot: entrepot.id_entrepot } }
        }
      })
    })
  )

  // Insérer les clients
  const createdClients = await Promise.all(
    clients.map(client => prisma.client.create({ data: client }))
  )

  // Insérer les locations
  const createdLocations = await Promise.all(
    locations.map(async location => {
      const client = createdClients.find(c => c.id_client === location.id_client)
      return prisma.location.create({
        data: {
          ...location,
          client: { connect: { id_client: client.id_client } }
        }
      })
    })
  )

  // Insérer les avoirs
  const createdAvoirs = await Promise.all(
    avoirs.map(async avoir => {
      const engin = createdEngins.find(e => e.matricule === avoir.matricule)
      const location = createdLocations.find(l => l.id_location === avoir.id_location)
      return prisma.avoir.create({
        data: {
          ...avoir,
          engin: { connect: { matricule: engin.matricule } },
          location: { connect: { id_location: location.id_location } }
        }
      })
    })
  )
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())