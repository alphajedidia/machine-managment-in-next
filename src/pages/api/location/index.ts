
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import calculerPrixTotal from '@/app/utils/locationTotal';
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { id_client, date_debut, date_fin, statut_paiement, destination, engins } = req.body;
      const totalprix = engins.reduce((acc, engin) => {
 calculerPrixTotal(date_debut, date_fin, engin.prix_journalier, engin.quantite);
      }, 0);

      const newLocation = await prisma.location.create({
        data: {
          id_client,
          date_debut,
          date_fin,
          statut_paiement,
          destination,
          total: totalprix
        }
      });

      for (const enginInfo of engins) {
        const { id_type, quantite } = enginInfo;

        const enginsDisponibles = await prisma.engin.findMany({
          where: { id_type, etat: true },
          take: quantite
        });

        if (enginsDisponibles.length < quantite) {
          throw new Error(`Il n'y a pas assez d'engins disponibles du type ${id_type}`);
        }

        for (const engin of enginsDisponibles) {
          await prisma.entrepot.update({
            where: { id_entrepot: engin.id_entrepot },
            data: { capacite: { decrement: 1 } }
          });

          await prisma.engin.update({
            where: { matricule: engin.matricule },
            data: { etat: false }
          });

          await prisma.avoir.create({
            data: {
              matricule: engin.matricule, id_location: newLocation.id_location
            }
          });
        }
      }
      const client = await prisma.client.findUnique({
        where: { id_client }
      });

      const response = {
        nom_client: client?.nom_client,
        email: client.email,
        engins: engins.map(engin => ({
          nom_engin: engin.nom_engin,
          quantite: engin.quantite
        })),
        total: newLocation.total
      };
      res.status(201).json(response);
    } catch (error) {
      console.error('Error creating location:', error);
      res.status(500).json({ error: 'Failed to create location' });
    }
  }  else if (req.method === 'GET') {
    try {
      const locations = await prisma.location.findMany();
      res.status(200).json(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ error: 'Failed to fetch locations' });
    }
}
else {
  res.status(405).json({ error: 'Method not allowed' });
}
}
