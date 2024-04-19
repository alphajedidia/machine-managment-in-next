
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const entrepotsData = req.body;

            if (!Array.isArray(entrepotsData)) {
                return res.status(400).json({ error: 'Le corps de la requête doit contenir un tableau d\'objets JSON' });
            }

            const createdEntrepots = await prisma.entrepot.createMany({
                data: entrepotsData
            });

            res.status(201).json(createdEntrepots);
        } catch (error) {
            console.error('Error creating entrepots:', error);
            res.status(500).json({ error: 'Failed to create entrepots' });
        }
    } else if (req.method === 'GET') {
        try {
            const entrepots = await prisma.entrepot.findMany();
            res.status(200).json(entrepots);
        } catch (error) {
            console.error('Error fetching entrepots:', error);
            res.status(500).json({ error: 'Failed to fetch entrepots' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
