import { client } from "@/app/utils/data";
import ListClient from "@/components/client/ListClient";
import TableClient from "@/components/client/TableClient";
import React from "react";
client;

const ClientTable = () => {
  return (
  <div>
    <TableClient Title="LISTE DES CLIENTS" />
  </div>)
};

export default ClientTable;
