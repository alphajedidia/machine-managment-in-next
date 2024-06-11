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

    const enginsData = engins.map((engin) => ({
      matricule: engin.matricule,
      entrepot: engin.entrepot.nom_entrepot, 
      status: engin.etat ? 'Available' : 'In Use',
    }));

    return enginsData;
  } catch (error) {
    throw new Error(`Failed to fetch engins for type ${typeId}`);
  }
};

