import { NextApiRequest, NextApiResponse } from 'next';
import { getClients, ClientData, createClients } from '@/services/ClientService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const clients: ClientData[] = req.body;
      
      if (!Array.isArray(clients)) {
        return res.status(400).json({ error: 'Invalid data format. Expected an array of clients.' });
      }

      const newClients = await createClients(clients);
      res.status(201).json(newClients);
    } catch (error: any) {
      console.error('Error creating clients:', error);
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const clients = await getClients();
      res.status(200).json(clients);
    } catch (error:any) {
      console.error('Error fetching clients:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
