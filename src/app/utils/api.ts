import { ClientData } from '@/services/ClientService';
import { CreateLocationData,CreateLocationResponse } from "@/types/location";
export const createLocation = async (
  locationData: CreateLocationData
): Promise<CreateLocationResponse> => {
  try {
    const response = await fetch("/api/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    });

    if (!response.ok) {
      throw new Error("Failed to create location");
    }

    const data: CreateLocationResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getLocations = async (): Promise<Location[]> => {
  try {
    const response = await fetch("/api/location", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch locations");
    }

    const data: Location[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateLocationStatus = async (
  id: string,
  status: string
): Promise<Location> => {
  try {
    const response = await fetch(`/api/location?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statut_paiement: status }),
    });

    if (!response.ok) {
      throw new Error("Failed to update location status");
    }

    const data: Location = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};




export const fetchClients = async () => {
  try {
    const response = await fetch('/api/client');
    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchClientById = async (id: string) => {
  try {
    const response = await fetch(`/api/clients/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch client with ID ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createNewClient = async (clientData: ClientData) => {
  try {
    const response = await fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (!response.ok) {
      throw new Error('Failed to create client');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

