"use client";
import CardInfo from "@/components/cardInfo/CardInfo";
import Dashboard from "../teste/page";
import { Engin } from "@prisma/client";
import ChartDonut from "@/components/charts/Chart.Donut";

export default function ProtectedPage() {
  const mockData: Engin[] = [
    {
      matricule: "ENG001",
      id_type: "TYPE001",
      id_entrepot: "ENT001",
      etat: true,
    },
    {
      matricule: "ENG002",
      id_type: "TYPE002",
      id_entrepot: "ENT002",
      etat: false,
    },
    {
      matricule: "ENG002",
      id_type: "TYPE002",
      id_entrepot: "ENT002",
      etat: false,
    },
  ];
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className=" relative flex flex-col justify-around items-center h-full w-3/5">
        <div className="h-3/6 w-9/12 border">
          <h1 className="text-center text-xl font-bold">LOCATION PAR MOIS</h1>
          <Dashboard />
        </div>
        <div className=" relative h-2/5 w-1/2">
          <div className="h-5/6 py-4 px-2 w-full border">
            <ChartDonut />
          </div>
          <div className="bg-primary-500 text-2xl text-center">
            <p>TRACTEUR</p>
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col justify-around items-center h-full w-2/5 bg-primary-200">
        <div className=" h-1/3 w-3/5 ">
          <CardInfo titre={"Top Engin"} detail={mockData} />
        </div>
        <div className="h-3/5 w-3/4 bg-amber-200">
          <h1 className="text-center text-2xl">LOCATION EN COURSS</h1>
        </div>
      </div>
    </div>
  );
}
