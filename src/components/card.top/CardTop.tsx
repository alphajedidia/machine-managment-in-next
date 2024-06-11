import React from "react";

interface ListTopProps {
  enginNom: string;
  prix: number;
  nombre_location: number;
}

const CardTop: React.FC<{ TopEngin: ListTopProps[] }> = ({ TopEngin }) => {
  return (
    <div className="relative max-h-[300px] overscroll-x-none overflow-y-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-primary-400 text-center">
          <tr className="text-tertiary-900">
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              ENGIN
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              PRIX
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              NOMBRE LOCATION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {TopEngin.map((TopList, index) => (
            <tr key={index} className="hover:bg-secondary-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {TopList.enginNom}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {TopList.prix}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {TopList.nombre_location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardTop;
