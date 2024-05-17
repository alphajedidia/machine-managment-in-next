import { Engin } from "@prisma/client";
import React from "react";
interface ListLocationProps {
  name: string;
  engin:string;
  dateInitial:String;
  dateFinal:String
}
function Location(location: ListLocationProps) {
  return (
    <div>
      <table>
        <th>
          <td>NOM CLIENT</td>
          <td>ENGIN</td>
          <td>DATE DEBUT</td>
          <td>DATE FIN</td>
        </th>
        <tbody>
          <tr>
 
          <td>{location.name}</td>
          <td>{location.engin}</td>
          <td>{location.dateInitial}</td>
          <td>{location.dateFinal}</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default Location;
