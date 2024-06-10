// src/pages/api/typeEngin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getTypeEnginById } from '@/services/TypeEnginService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing id parameter' });
      }

      const typeEngin = await getTypeEnginById(id);
      res.status(200).json(typeEngin);
    } catch (error: any) {
      console.error('Error fetching TypeEngin by ID:', error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
