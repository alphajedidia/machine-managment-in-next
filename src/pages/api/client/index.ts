// api/client/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { nom_client, email, telephone, numero_carte_bancaire, code_securite } = req.body;

      const newClient = await prisma.client.create({
        data: {
          nom_client,
          email,
          telephone,
          numero_carte_bancaire,
          code_securite
        }
      });
      
      res.status(201).json(newClient);
    } catch (error) {
      console.error('Error creating client:', error);
      res.status(500).json({ error: 'Failed to create client' });
    }
  } else if (req.method === 'GET') {
    try {
      const clients = await prisma.client.findMany();
      res.status(200).json(clients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      res.status(500).json({ error: 'Failed to fetch clients' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
