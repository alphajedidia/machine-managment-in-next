import React from "react";

interface ListClientProps {
  nom_client: string;
  email: string;
  telephone: string;
  numero_carte_bancaire: string;
}

const ListClient = ({ ListClient }: { ListClient: ListClientProps[] }) => {
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
          {ListClient.map((Client, index) => {
            return (
              <tr key={index} className="hover:bg-secondary-100 ">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {Client.nom_client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Client.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Client.telephone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {Client.numero_carte_bancaire}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  action
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListClient;
