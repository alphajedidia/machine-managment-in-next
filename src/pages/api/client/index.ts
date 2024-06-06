import { NextApiRequest, NextApiResponse } from 'next';
import { createClient, getClients, ClientData } from '@/services/ClientService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { nom_client, email, telephone, numero_carte_bancaire, code_securite } = req.body;
      const clientData: ClientData = { nom_client, email, telephone, numero_carte_bancaire, code_securite };

      const newClient = await createClient(clientData);
      res.status(201).json(newClient);
    } catch (error:any) {
      console.error('Error creating client:', error);
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
