import React from "react";
import { Status } from "../icons";
import { formatDate, removeDuplicatesAndJoin } from "@/app/utils/tools";

interface ListLocationProps {
  nom_client: string;
  nom_engins: string[];
  date_debut: string;
  date_fin: string;
}

interface LocationProps {
  location: ListLocationProps[];
  showAll: boolean;
}

function Location({ location, showAll }: LocationProps) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-primary-400">
          <tr className="text-tertiary-900">
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              Nom Client
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              Engin
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              Date Début
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              Date Fin
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
              Statut
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {location.map((locationList, index) => {
            const isOngoing = locationList.date_fin >= today;
            if (showAll || isOngoing) {
              return (
                <tr key={index} className="hover:bg-secondary-100 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {locationList.nom_client}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {removeDuplicatesAndJoin(locationList.nom_engins)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatDate(locationList.date_debut)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatDate(locationList.date_fin)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <Status etat={isOngoing} size="w-2 h-2" />
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Location;
