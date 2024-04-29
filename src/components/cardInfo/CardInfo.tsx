import { Engin } from "@prisma/client";
import React from "react";
import CardBody from "./CardBody";
interface CardInfoProps {
  titre: string;
  detail: Engin[];
}

const CardInfo: React.FC<CardInfoProps> = ({ titre, detail }) => {
  return (
    <div className=" flex flex-col p-2 text-center">
      <div className=" p-2 text-2xl  bg-primary-400 border">
        <h1>{titre}</h1>
      </div>
      <CardBody data={detail} />
    </div>
  );
};

export default CardInfo;
