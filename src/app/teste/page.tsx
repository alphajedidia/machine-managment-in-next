'use client'
import CardInfo from "@/components/cardInfo/CardInfo";
import BarChart from "@/components/charts/BarChart";
import { Engin } from "@prisma/client";
const Dashboard = () => {
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
    <BarChart data={revenueData} />
  );
};

export default Dashboard;