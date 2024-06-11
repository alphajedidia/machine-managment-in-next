import { createLocation, getLocationData } from "@/services/LocationService";
import { NextApiRequest, NextApiResponse } from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await createLocation(req.body);
      res.status(201).json(response);
    } catch (error: any) {
      console.error("Error creating location:", error);
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const locations = await getLocationData();

      const formattedLocations = locations.map((location) => {
        const enginTypes = location.avoirs
          .map((avoir) => avoir.engin?.type_engin.nom_engin)
          .filter(Boolean);

        return {
          nom_client: location.client.nom_client,
          nom_engins: enginTypes,
          date_debut: location.date_debut,
          date_fin: location.date_fin,
        };
      });

      res.status(200).json(formattedLocations);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error:
            "Une erreur s'est produite lors de la récupération des données des locations",
        });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
