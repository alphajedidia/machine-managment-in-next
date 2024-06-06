import React, { useEffect, useState } from "react";
import { Email, PhoneIcon } from "../icons";
import { fetchClients } from "@/app/utils/api";
interface ListClientProps {
  nom_client: string;
  email: string;
  telephone: string;
  numero_carte_bancaire: string;
}

const ListClient = ({ searchTerm }: { searchTerm: string }) => {
  const [clients, setClients] = useState<ListClientProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await fetchClients();
        setClients(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <table className="min-w-full h-full divide-y divide-gray-200">
        <thead className="bg-primary-400">
          <tr className="text-tertiary-900">
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              NOM CLIENT
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              EMAIL
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              TELEPHONE
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              N° CARTE BANCAIRE
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {clients.filter((client) =>
            client.nom_client.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((client, index) => (
            <tr key={index} className="hover:bg-secondary-100">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {client.nom_client}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {client.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {client.telephone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {client.numero_carte_bancaire}
              </td>
              <td className="flex text-center justify-around px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Email iconStyle="w-4 h-4" />
                <PhoneIcon iconStyle="w-4 h-4" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClient;
