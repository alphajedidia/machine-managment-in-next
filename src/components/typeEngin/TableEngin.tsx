import React from "react";
import {Pen, Trash } from "../icons";

interface Engin {
  matricule: string;
  entrepot: string;
  status: string;
}

interface TableEnginProps {
  engin: Engin[];
  onEdit: (index: number) => void;
  onDelete: (index: string) => void;
}

const TableEngin: React.FC<TableEnginProps> = ({ engin, onEdit, onDelete }) => {
  return (
    <div>
      <table className="min-w-full h-full divide-y divide-gray-200">
        <thead className="bg-primary-400">
          <tr className="text-tertiary-900">
            <th className="sticky top-0 px-6 py-3 text-left text-xl font-medium uppercase tracking-wider bg-primary-400">
              MATRICULE
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xl font-medium uppercase tracking-wider bg-primary-400">
              ENTREPOT
            </th>
            <th className="sticky top-0 px-6 py-3 text-left text-xl font-medium uppercase tracking-wider bg-primary-400">
              STATUS
            </th>
            <th className="sticky top-0 px-6 py-3 text-center text-xl font-medium uppercase tracking-wider bg-primary-400">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {engin.map((enginList, index) => (
            <tr key={index} className="hover:bg-secondary-100">
              <td className="px-6 py-4 text-xl font-medium text-gray-900">
                {enginList.matricule}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-500">
                {enginList.entrepot}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-500">
                {enginList.status}
              </td>
              <td className="flex justify-around  px-6 py-4 whitespace-nowrap text-xl text-gray-500">
                <button
                  className="text-blue-600 hover:text-blue-900"
                  onClick={() => onEdit(index)}
                >
                  <Pen iconStyle="w-6 h-6"/>
                </button>
                <button
                  className="text-error-500 hover:text-error-600"
                  onClick={() => onDelete(enginList.matricule)}
                >
                  <Trash iconStyle="w-6 h-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableEngin;
