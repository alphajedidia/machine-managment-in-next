import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
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
  return <div>Accès non autorisé</div>;
}
