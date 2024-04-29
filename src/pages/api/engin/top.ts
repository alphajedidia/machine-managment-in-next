
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
          const topTypesEngins = await prisma.avoir.groupBy({
            by: {
              engin: {
                type_engin: {
                  select: {
                    nom_engin: true
                  }
                }
              }
            },
            _count: {
              id: true
            },
            orderBy: {
              _count: {
                id: 'desc'
              }
            },
            take: 10
          });
        
          return topTypesEngins;
        }
        catch (error) {
          console.error('Error fetching engins:', error);
          res.status(500).json({ error: 'Failed to fetch engins' });
        }
      } else {
        res.status(405).json({ error: 'Method not allowed' });
      }
};
