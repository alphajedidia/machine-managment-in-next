"use client"
import React from "react";
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from "../../components/ProtectedRoute";
import NavBarAdmin from "../../components/navBar.admin/NavBar.admin";
import SideBar from "../../components/sideBar/SideBar";
const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  console.log('admin')
  return (
    <SessionProvider>
      <ProtectedRoute>
        <NavBarAdmin NavTitle={"GESTION DE LOCATION D'ENGIN"} />
        <SideBar />
        <div className="pt-20 pl-72 relative w-full h-screen">
        {children}
        </div>
      </ProtectedRoute>
    </SessionProvider>
  );
};

export default LayoutAdmin;
