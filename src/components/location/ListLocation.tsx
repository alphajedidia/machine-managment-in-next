import React from 'react'
import { Status } from '../icons';
interface ListLocationProps {
  name: string;
  engin: string;
  dateInitial: string;
  dateFinal: string;
}

interface LocationProps {
  location: ListLocationProps[];
  showAll: boolean;
}
const ListLocation = ({ location, showAll }: LocationProps) => {
  const today = new Date().toISOString().split("T")[0];

  return (
<tbody className="divide-y divide-gray-200">
{location.map((locationList, index) => {
          const isOngoing = locationList.dateFinal >= today;
          if (showAll || isOngoing) {
            return (
              <tr key={index} className="hover:bg-secondary-100 ">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {locationList.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {locationList.engin}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {locationList.dateInitial}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {locationList.dateFinal}
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
    
  )
}

export default ListLocation
