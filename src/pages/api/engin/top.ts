// api/engin/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
          const avoir = await prisma.engin.findMany();
          res.status(200).json(engins);
        } catch (error) {
          console.error('Error fetching engins:', error);
          res.status(500).json({ error: 'Failed to fetch engins' });
        }
      } else {
        res.status(405).json({ error: 'Method not allowed' });
      }
};
