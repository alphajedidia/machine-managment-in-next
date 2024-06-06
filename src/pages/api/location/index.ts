import { createLocation, getLocations } from '@/services/LocationService';
import { NextApiRequest, NextApiResponse } from 'next';
export default async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const response = await createLocation(req.body);
      res.status(201).json(response);
    } catch (error:any) {
      console.error('Error creating location:', error);
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const locations = await getLocations();
      res.status(200).json(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ error: 'Failed to fetch locations' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
