import { Engin } from '@prisma/client';
import React from 'react';

interface ListLocationProps {
  data: Engin[];
}

const ListLocation: React.FC<ListLocationProps> = ({ data }) => {
  return (

      <ul className='p-3 text-xl w-auto max-h-44  border overflow-auto'>
        {data.map((item) => (
          <li className='p-2' key={item.matricule}>
            <p>{item.matricule} {item.id_type} {item.etat} <span className='underline hover:text-red-900 cursor-pointer'>detail</span></p>
          </li>
        ))}
      </ul>

  );
};
export default ListLocation;