import React from "react";
import { SessionProvider } from "next-auth/react";
const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
<SessionProvider>
    {children}
</SessionProvider>
  );
};

export default LayoutAdmin;
