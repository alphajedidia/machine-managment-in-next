import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { etat } = req.body; 
      const updatedEngin = await prisma.engin.update({
        where: { matricule: id.toString()},
        data: { etat: etat }
      });

      if (!updatedEngin) {
        return res.status(404).json({ error: 'Engin not found' });
      }

      res.status(200).json(updatedEngin);
    } catch (error) {
      console.error('Error updating engin by ID:', error);
      res.status(500).json({ error: 'Failed to update engin by ID' });
    }
  } 
 else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};