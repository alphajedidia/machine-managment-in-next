import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const typesWithEnginCount = await prisma.type_engin.findMany({
        select: {
          nom_engin: true,

          prix_journalier:true,
          _count: {
            select: {
              engins: true, 
            },
          },
        },
      });

      const sortedTypes = typesWithEnginCount.sort((a, b) => b._count.engins - a._count.engins);

      res.status(200).json(sortedTypes);
    } catch (error) {
      console.error('Error fetching most rented types:', error);
      res.status(500).json({ error: 'Failed to fetch most rented types' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
