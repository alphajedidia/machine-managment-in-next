import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const currentYear = new Date().getFullYear();

    const revenueParMois = await prisma.$queryRaw`
      SELECT DATE_TRUNC('month', date_debut) AS month,
      SUM(total) AS total_revenue,
      COUNT(id_location) AS location_count
      FROM location
      WHERE date_debut >= ${new Date(currentYear, 0, 1)}
      AND date_debut < ${new Date(currentYear + 1, 0, 1)}
      GROUP BY DATE_TRUNC('month', date_debut)
    `;

    res.status(200).json(revenueParMois);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue' });
  } finally {
    await prisma.$disconnect();
  }
}
