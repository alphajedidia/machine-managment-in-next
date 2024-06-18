import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type ClientData = {
  nom_client: string;
  email: string;
  telephone: string;
  numero_carte_bancaire: string;
  code_securite: string;
};

export const createClients = async (data: ClientData[]) => {
  try {
    const newClients = await prisma.client.createMany({
      data,
      skipDuplicates: true, // This will skip creating clients if they already exist
    });
    return newClients;
  } catch (error) {
    throw new Error('Failed to create clients');
  }
};

export const getClients = async () => {
  try {
    const clients = await prisma.client.findMany();
    return clients;
  } catch (error) {
    throw new Error('Failed to fetch clients');
  }
};

export const getClientById = async (id: string) => {
  try {
    const client = await prisma.client.findUnique({
      where: {
        id_client: id
      }
    });
    return client;
  } catch (error) {
    throw new Error(`Failed to find client with ID ${id}`);
  }
};

