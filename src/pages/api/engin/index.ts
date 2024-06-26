// api/engin/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { matricule, id_type, id_entrepot, etat } = req.body;

      const entrepot = await prisma.entrepot.findUnique({
        where: {
          id_entrepot: id_entrepot
        }
      });

      if (!entrepot || entrepot.capacite === 0) {
        return res.status(400).json({ error: 'La capacité de l\'entrepôt est insuffisante' });
      }

      const newEngin = await prisma.engin.create({
        data: {
          matricule,
          id_type,
          id_entrepot,
          etat
        }
      });

      await prisma.entrepot.update({
        where: {
          id_entrepot: id_entrepot
        },
        data: {
          capacite: {
            decrement: 1
          }
        }
      });

      res.status(201).json(newEngin);
    } catch (error) {
      console.error('Error creating engin:', error);
      res.status(500).json({ error: 'Failed to create engin' });
    }
  } else if (req.method === 'GET') {
    try {
      const engins = await prisma.engin.findMany();
      res.status(200).json(engins);
    } catch (error) {
      console.error('Error fetching engins:', error);
      res.status(500).json({ error: 'Failed to fetch engins' });
    }
  } else if  (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (typeof id !== 'string') {
        throw new Error('ID must be a string');
      }

      const deletedEngin = await prisma.engin.delete({
        where: {
          matricule: id, 
        },
      });

      res.status(200).json(deletedEngin);
    } catch (error) {
      console.error('Error deleting engin:', error);
      res.status(500).json({ error: 'Failed to delete engin' });
    }
  }  else if (req.method === 'PATCH') {
    try {
      const { id, etat, id_entrepot, id_type} = req.body;
  

      const existingEngin = await prisma.engin.findUnique({
        where: {
          matricule: id
        }
      });
  

      if (!existingEngin) {
        return res.status(404).json({ error: 'L\'engin spécifié n\'existe pas' });
      }
  
     
      const updatedEngin = await prisma.engin.update({
        where: {
          matricule: id
        },
        data: {
          etat: etat,
          id_entrepot: id_entrepot,
          id_type:id_type
          
        }
      });
  
      res.status(200).json(updatedEngin);
    } catch (error) {
      console.error('Error updating engin:', error);
      res.status(500).json({ error: 'Failed to update engin' });
    }
  }else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

