
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import calculerPrixTotal from '@/app/utils/locationTotal';
const prisma = new PrismaClient();



export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { id_client, date_debut, date_fin, statut_paiement, destination, engins } = req.body;

            const total = engins.reduce((acc, engin) => {
                return acc + calculerPrixTotal(date_debut, date_fin, engin.prix_journalier, engin.quantite);
            }, 0);

            const newLocation = await prisma.location.create({
                data: {
                    id_client,
                    date_debut,
                    date_fin,
                    statut_paiement,
                    destination,
                    total,
                    avoirs: {
                        createMany: {
                            data: engins.map(engin => ({
                                matricule: engin.matricule
                            }))
                        }
                    }
                },
                include: {
                    avoirs: {
                        include: {
                            engin: true
                        }
                    }
                }
            });

            const client = await prisma.client.findUnique({
                where: { id_client }
            });

            const {nom_client, email } = client;

            const enginsLocation = newLocation.avoirs.map(avoir => ({
                nom_engin: avoir.engin.nom_engin,
                quantite: avoir.engin.quantite
            }));

            const response = {
                nom_client,
                email,
                engins: enginsLocation,
                total
            };

            res.status(201).json(response);
        } catch (error) {
            console.error('Error creating location:', error);
            res.status(500).json({ error: 'Failed to create location' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
