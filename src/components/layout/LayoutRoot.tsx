"use client";
import { usePathname } from "next/navigation";
import LayoutAdmin from "./LayoutAdmin";
import LayoutLogin from "./LayoutLogin";
import LayoutClient from "./LayoutClient";
import React from "react";
import { SessionProvider } from "next-auth/react";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  console.log(path);
  const getLayout = () => {
    if (path){
      if (path.startsWith("/admin")) {
        return <LayoutAdmin>{children}</LayoutAdmin>;
      } else if (path.startsWith("/auth")) {
        return <LayoutLogin>{children}</LayoutLogin>;
      } else {
        return <LayoutClient>{children}</LayoutClient>;
      }
    }
  
  };
  return (
    <SessionProvider>
       {getLayout()}
    </SessionProvider>  );
};
export default LayoutRoot;

