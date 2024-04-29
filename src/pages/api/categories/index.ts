import { categories } from './../data/dataInit';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const prisma = new PrismaClient();

    if (req.method === 'GET') {
      const categorie = await prisma.categorie.findMany();

      if (categorie.length > 0) {
        res.status(200).json(categorie);
      } else {
        res.status(404).end();
        console.log("Il n'y a pas de données dans la base de données.");
      }
    } else if (req.method === 'POST') {
      const { id_categorie, nom_categorie, detail } = req.body;

      const newData = await prisma.categorie.create({
        data: {
          id_categorie,
          nom_categorie,
          detail,
        },
      });

      await prisma.$disconnect();

      console.log("Données créées avec succès.");



      res.status(201).json(newData);
    } else {
      res.status(405).json({ error: 'Méthode non autorisée' });
    }
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors du traitement de la requête.' });
  }
};
