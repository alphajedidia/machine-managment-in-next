'use client'
import ProtectedRoute from "@/components/ProtectedRoute";
import { signOut } from "next-auth/react";
export default function ProtectedPage() {
  return (
    <ProtectedRoute>
        <h1>Page protégée</h1>
        <p>Cette page est accessible uniquement aux utilisateurs authentifiés.</p>
        <button onClick={()=>signOut()}>sign OUT</button>
    </ProtectedRoute>
  );
}