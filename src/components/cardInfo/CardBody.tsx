import { Engin } from '@prisma/client';
import React from 'react';

interface CardBodyProps {
  data: Engin[];
}

const CardBody: React.FC<CardBodyProps> = ({ data }) => {
  return (

      <ul className='  p-3 text-xl w-auto h-full border overflow-auto'>
        {data.map((item) => (
          <li className='p-2' key={item.matricule}>
            <p>{item.matricule} {item.id_type} {item.etat} <span className='underline hover:text-red-900 cursor-pointer'>detail</span></p>
          </li>
        ))}
      </ul>

  );
};
export default CardBody;