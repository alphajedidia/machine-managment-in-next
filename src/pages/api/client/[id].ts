import { NextApiRequest, NextApiResponse } from 'next';
import { getClientById } from '@/services/ClientService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const id = req.query.id as string;
      const client = await getClientById(id);

      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }

      res.status(200).json(client);
    } catch (error: any) {
      console.error('Error fetching client by ID:', error);
      res.status(500).json({ error: 'Failed to fetch client by ID' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
