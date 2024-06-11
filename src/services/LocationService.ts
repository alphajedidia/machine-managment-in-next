import { PrismaClient } from "@prisma/client";
import calculerPrixTotal from "../app/utils/locationTotal";
import SendEmail from "../app/utils/mailer/mailer.service";

const prisma = new PrismaClient();

type EnginInfo = {
  id_type: string;
  quantite: number;
  nom_engin: string;
};
type LocationData = {
  id_client: string;
  date_debut: string;
  date_fin: string;
  statut_paiement: string;
  destination: string;
  engins: EnginInfo[];
};

export const createLocation = async (data: LocationData) => {
  const {
    id_client,
    date_debut,
    date_fin,
    statut_paiement,
    destination,
    engins,
  } = data;
  let totalprix = 0;

  for (const enginInfo of engins) {
    const { id_type, quantite } = enginInfo;
    const typeEngin = await prisma.type_engin.findUnique({
      where: { id_type },
      select: { prix_journalier: true },
    });
    if (typeEngin && typeEngin.prix_journalier) {
      totalprix += calculerPrixTotal(
        date_debut,
        date_fin,
        typeEngin.prix_journalier,
        quantite
      );
    } else {
      throw new Error(`Type d'engin avec id ${id_type} introuvable`);
    }
  }

  let enoughEngins = true;
  for (const enginInfo of engins) {
    const { id_type, quantite } = enginInfo;
    const enginsDisponibles = await prisma.engin.count({
      where: { id_type, etat: true },
    });
    if (enginsDisponibles < quantite) {
      enoughEngins = false;
      break;
    }
  }

  if (!enoughEngins) {
    throw new Error(
      `Il n'y a pas assez d'engins disponibles pour cette location`
    );
  }

  const newLocation = await prisma.location.create({
    data: {
      id_client,
      date_debut,
      date_fin,
      statut_paiement,
      destination,
      total: totalprix,
    },
  });

  for (const enginInfo of engins) {
    const { id_type, quantite } = enginInfo;
    const enginsDisponibles = await prisma.engin.findMany({
      where: { id_type, etat: true },
      take: quantite,
    });

    for (const engin of enginsDisponibles) {
      await prisma.entrepot.update({
        where: { id_entrepot: engin.id_entrepot },
        data: { capacite: { decrement: 1 } },
      });

      await prisma.engin.update({
        where: { matricule: engin.matricule },
        data: { etat: false },
      });

      await prisma.avoir.create({
        data: {
          matricule: engin.matricule,
          id_location: newLocation.id_location,
        },
      });
    }
  }

  const client = await prisma.client.findUnique({
    where: { id_client },
  });

  if (!client) {
    throw new Error(`Client avec id ${id_client} introuvable`);
  }

  const response = {
    nom_client: client.nom_client,
    email: client.email,
    engins: engins.map((engin) => ({
      nom_engin: engin.nom_engin,
      quantite: engin.quantite,
    })),
    total: newLocation.total,
  };

  await SendEmail(client.nom_client, client.email, engins, totalprix);

  return response;
};

export const getLocationData = async () => {
  return await prisma.location.findMany({
    include: {
      client: {
        select: {
          nom_client: true,
        },
      },
      avoirs: {
        include: {
          engin: {
            include: {
              type_engin: {
                select: {
                  nom_engin: true,
                },
              },
            },
          },
        },
      },
    },
  });
};
export const updateLocationStatus = async (id: string, status: string) => {
  try {
    const updatedLocation = await prisma.location.update({
      where: { id_location: id },
      data: { statut_paiement: status },
    });
    return updatedLocation;
  } catch (error) {
    throw new Error("Failed to update location status");
  }
};

export const getEnginNameByLocationId = async (locationId: string) => {
  try {
    const location = await prisma.location.findUnique({
      where: { id_location: locationId },
      include: {
        avoirs: {
          include: {
            engin: {
              include: {
                type_engin: { select: { nom_engin: true } }, //
              },
            },
          },
        },
      },
    });

    if (!location) {
      throw new Error(`Location with ID ${locationId} not found`);
    }

    const enginName =
      location.avoirs[0]?.engin?.type_engin?.nom_engin || "Unknown";

    return enginName;
  } catch (error: any) {
    throw new Error(
      `Failed to fetch engin name for location with ID ${locationId}: ${error.message}`
    );
  }
};
