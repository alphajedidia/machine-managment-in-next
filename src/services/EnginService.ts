// src/services/EnginService.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getEnginsByType = async (typeId: string) => {
  try {
    const engins = await prisma.engin.findMany({
      where: {
        id_type: typeId,
      },
      include: {
        type_engin: true,
        entrepot: true,
      },
    });
    return engins;
  } catch (error) {
    throw new Error(`Failed to fetch engins for type ${typeId}`);
  }
};
