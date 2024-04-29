'use client'
import { usePathname } from "next/navigation";
import LayoutAdmin from "./LayoutAdmin";
import LayoutLogin from "./LayoutLogin";
import LayoutClient from "./LayoutClient";
import React from "react";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      {path &&
        (path.startsWith("/admin") ? (
          <LayoutAdmin>{children}</LayoutAdmin>
        ) : path.startsWith("/auth") ? (
          <LayoutLogin>{children}</LayoutLogin>
        ) : (
          <LayoutClient>{children}</LayoutClient>
        ))}
    </div>
  );
};

export default LayoutRoot;
