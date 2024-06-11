import { ClientData } from '@/services/ClientService';
import { CreateLocationData,CreateLocationResponse } from "@/types/location";
import axios, { AxiosResponse } from 'axios';
const urlForm='/api/'
interface FetchProps<T> {
  url: string;
  setter: (data: T) => void;
  message?: string;
}

export const fetchData = async <T>({ url, setter, message }: FetchProps<T>) => {
  try {
    const response = await axios.get<T>(urlForm+ url);
    console.log(response.data)
    setter(response.data);
  } catch (error) {
    console.error(error);
  }
};

interface PostProps<T> {
  url: string;
  data: T;
  successMessage?: string;
  errorMessage?: string;
}

export const postData = async <T>({
  url,
  data,
  successMessage,
  errorMessage,
}: PostProps<T>): Promise<AxiosResponse<T>> => {
  try {
    const response = await axios.post<T>(urlForm+url, data);
    if (successMessage) {
      console.log(successMessage);
    }
    return response;
  } catch (error) {
    console.error(errorMessage || 'An error occurred while posting data:', error);
    throw new Error(errorMessage || 'An error occurred while posting data');
  }
};





interface DeleteProps {
  url: string;
  successMessage?: string;
  errorMessage?: string;
}

export const deleteData = async ({
  url,
  successMessage,
  errorMessage,
}: DeleteProps): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(urlForm+url);
    if (successMessage) {
      console.log(successMessage);
    }
    return response;
  } catch (error) {
    console.error(errorMessage || 'An error occurred while deleting data:', error);
    throw new Error(errorMessage || 'An error occurred while deleting data');
  }
};





























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
    const response = await fetch(`/api/client/${id}`);
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
    const response = await fetch('/api/client', {
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


