import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const prisma = new PrismaClient();

    if (req.method === 'GET') {
      const typesEngin = await prisma.type_engin.findMany({
        include: {
          _count: {
            select: { Engin: true }
          }
        }
      });

      if (typesEngin.length) {
        res.status(200).json(typesEngin);
      } else {
        res.status(404).end();
      }
    } 
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    res.status(500).end();
  }
};
