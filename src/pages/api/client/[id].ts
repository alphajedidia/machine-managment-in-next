// Dans getClientById.js

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const client = await prisma.client.findUnique({
        where: {
          id_client: id&&id.toString(),
        },
      });

      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }

      res.status(200).json(client);
    } catch (error) {
      console.error('Error fetching client by ID:', error);
      res.status(500).json({ error: 'Failed to fetch client by ID' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
