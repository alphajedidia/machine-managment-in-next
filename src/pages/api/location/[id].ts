// pages/api/type-engin/[id].ts
import { getTypeEnginById } from '@/services/TypeEnginService';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  try {
    const typeEngin = await getTypeEnginById(id as string);
    res.status(200).json(typeEngin);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
