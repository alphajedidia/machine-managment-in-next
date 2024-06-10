import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const mostLoutedTypes = await prisma.type_engin.findMany({
        select: {
          nom_engin: true,
          prix_journalier:true,
          _count: {
            select: {
              engins: {
                where: {
                  avoirs: {
                    some: {} 
                  }
                }
              }
            }
          }
        },
        orderBy: { engins: { _count: 'desc' } }, 
      });

      res.status(200).json(mostLoutedTypes);
    } catch (error) {
      console.error('Error fetching most louted types:', error);
      res.status(500).json({ error: 'Failed to fetch most louted types' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
