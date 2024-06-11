import React from "react";
import { Status } from "../icons";
import { removeDuplicatesAndJoin } from "@/app/utils/tools";
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
    <table className="min-w-full h-full divide-y divide-gray-200">
      <thead className="bg-primary-400">
        <tr className="text-tertiary-900">
          <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
            NOM CLIENT
          </th>
          <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
            ENGIN
          </th>
          <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
            DATE DEBUT
          </th>
          <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
            DATE FIN
          </th>
          <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-primary-400">
            Statut
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {location.map((locationList, index) => {
          const isOngoing = locationList.date_fin>= today;
          if (showAll || isOngoing) {
            return (
              <tr key={index} className="hover:bg-secondary-100 ">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {locationList.nom_client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {
                    removeDuplicatesAndJoin(locationList.nom_engins)
                  }
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {locationList.date_debut}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {locationList.date_fin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Status etat={isOngoing} size="w-2 h-2" />
                </td>
               
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
}

export default Location;
