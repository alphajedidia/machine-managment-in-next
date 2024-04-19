import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const prisma = new PrismaClient();

        if (req.method === 'GET') {
            const typesEngin = await prisma.type_engin.findMany();
            if (typesEngin.length > 0) {
                res.status(200).json(typesEngin);
            } else {
                res.status(404).end();
                console.log("Il n'y a pas de données dans la base de données.");
            }
        } else if (req.method === 'POST') {
            const { id_type,
                id_categorie,
                image_url,
                nom_engin,
                description,
                prix_journalier } = req.body;

            const newData = await prisma.type_engin.create({
                data: {
                    id_type,
                    id_categorie,
                    image_url,
                    nom_engin,
                    description,
                    prix_journalier
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
