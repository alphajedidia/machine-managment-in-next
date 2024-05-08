'use client'
import ProtectedRoute from "@/components/ProtectedRoute";
import CardInfo from "@/components/cardInfo/CardInfo";
import BarChart from "@/components/charts/BarChart";
import { signOut } from "next-auth/react";
import { Engin } from "@prisma/client";
export default function ProtectedPage() {
  const revenueData = {
    labels: [
      "Jan",
      "Fév",
      "Mar",
      "Avr",
      "Mai",
      "Juin",
      "Juil",
      "Août",
      "Sept",
      "Oct",
      "Nov",
      "Déc",
    ],
    values: [
      65000, 59000, 80000, 81000, 56000, 55000, 40000, 65000, 71000, 88000,
      92000, 78000,
    ],
  };
  const mockData: Engin [] = [
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
    },{
      matricule: "ENG002",
      id_type: "TYPE002",
      id_entrepot: "ENT002",
      etat: false,
    },
  ];
  return (
    <ProtectedRoute>
        <h1>Page protégée</h1>
        <p>Cette page est accessible uniquement aux utilisateurs authentifiés.</p>


        <div className="flex">
      <div className="w-[700px]">
        <h2>Tableau de bord</h2>
        <BarChart data={revenueData} />
      </div>
      <CardInfo titre={"Top Engin"} detail={mockData} />
    </div>

        <button onClick={()=>signOut()}>Sign OUT</button>
    </ProtectedRoute>
  );
}