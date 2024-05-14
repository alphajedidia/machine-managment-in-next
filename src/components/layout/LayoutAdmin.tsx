import React from "react";
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from "../ProtectedRoute";
import NavBarAdmin from "../NavBar.admin/NavBar.admin";
import SideBar from "../SideBar/SideBar";
const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  console.log('admin')
  return (
    <SessionProvider>
      <ProtectedRoute>
        <NavBarAdmin NavTitle={"GESTION DE LOCATION D'ENGIN"} />
        <SideBar />
        <div className="pt-20 pl-72">
        {children}
        </div>
      </ProtectedRoute>
    </SessionProvider>
  );
};

export default LayoutAdmin;
