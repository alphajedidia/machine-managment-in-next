
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const status = req.body;
      const locationStatus= await prisma.location.update({
            where: { id_location: id},
            data: { statut_paiement: status }
          });

      if (!locationStatus) {
        return res.status(404).json({ error: 'location not found' });
      }

      res.status(200).json(locationStatus);
    } catch (error) {
      console.error('Error update location status by ID:', error);
      res.status(500).json({ error: 'Failed to update location by ID' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
