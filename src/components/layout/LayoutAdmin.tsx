import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import ProtectedRoute from "../ProtectedRoute";
import { SessionProvider } from "next-auth/react";
const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
<SessionProvider>

    {children}

</SessionProvider>
  );
};

export default LayoutAdmin;
