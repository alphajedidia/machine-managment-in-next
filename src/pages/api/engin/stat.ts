import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const enginsEnLocationCount = await prisma.avoir.count({
        where: {
          engin: {
            etat: true
          }
        }
      });

      const enginsDisponiblesCount = await prisma.avoir.count({
        where: {
          engin: {
            etat: false
          }
        }
      });

      res.status(200).json({ enginsEnLocationCount, enginsDisponiblesCount });
    } catch (error) {
      console.error('Error fetching engins info:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
