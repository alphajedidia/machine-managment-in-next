// src/services/TypeEnginService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTypeEnginById = async (id: string) => {
  try {
    const typeEngin = await prisma.type_engin.findUnique({
      where: {
        id_type: id,
      },
    });

    if (!typeEngin) {
      throw new Error('Type Engin not found');
    }

    return typeEngin;
  } catch (error:any) {
    throw new Error(`Failed to fetch Type Engin by ID: ${error.message}`);
  }
};
