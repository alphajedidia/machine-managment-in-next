// pages/protected.tsx
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Page protégée</h1>
        <p>Cette page est accessible uniquement aux utilisateurs authentifiés.</p>
      </div>
    </ProtectedRoute>
  );
}