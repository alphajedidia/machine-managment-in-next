// components/ProtectedRoute.tsx
'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  console.log(data)
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; 
    if (!session) {
      router.push("/auth");
    }
  }, [session, status, router]);

  if (session || status === "loading") {
    return <>{children}</>;
  }
  console.log(hye)
  return <div>Accès non autorisé</div>;
}