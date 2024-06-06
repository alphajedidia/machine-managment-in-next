import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type ClientData = {
  nom_client: string;
  email: string;
  telephone: string;
  numero_carte_bancaire: string;
  code_securite: string;
};

export const createClient = async (data: ClientData) => {
  try {
    const newClient = await prisma.client.create({
      data
    });
    return newClient;
  } catch (error) {
    throw new Error('Failed to create client');
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

