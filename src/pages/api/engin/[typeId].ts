// src/pages/api/engins/[typeId].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getEnginsByType } from '@/services/EnginService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { typeId } = req.query;

  if (typeof typeId !== 'string') {
    return res.status(400).json({ error: 'Invalid type ID' });
  }

  try {
    const engins = await getEnginsByType(typeId);
    res.status(200).json(engins);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
