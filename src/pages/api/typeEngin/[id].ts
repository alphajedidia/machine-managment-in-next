
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
        console.log(id)
      const typeEngin = await prisma.type_engin.findUnique({
        where: {
          id_type: id.toString(),
        },
      });
      

      if (!typeEngin) {
        return res.status(404).json({ error: 'Type Engin not font' });
      }

      res.status(200).json(typeEngin);
    } catch (error) {
      console.error('Error fetching TypeEngin by ID:', error);
      res.status(500).json({ error: 'Failed to fetch TypeEngin by ID' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
