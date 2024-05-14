"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import CardInfo from "@/components/cardInfo/CardInfo";
import BarChart from "@/components/charts/BarChart";
import { signOut } from "next-auth/react";
import { Engin } from "@prisma/client";
import ChartThree from "@/components/charts/Chart.Donut";
import SideBar from "@/components/SideBar/SideBar";
import NavBarAdmin from "@/components/NavBar.admin/NavBar.admin";
import Dashboard from "../teste/page";
export default function ProtectedPage() {

  return (
          <Dashboard />
  );
}
