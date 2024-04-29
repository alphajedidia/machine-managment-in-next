
'use client'

import React, { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

interface FormData {
  email: string;
  password: string;
}

function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  if (status === 'loading') {
    return <p>Chargement...</p>;
  }

  if (session) {
    return (
      <div>
        <p>Vous êtes connecté en tant que {session.user.email}</p>
        <a href="/logout">Se déconnecter</a>
      </div>
    );
  }

  const handleLogin = async (formData: FormData) => {
    try {
      const result = await signIn('credentials', {
        redirect: false, // Prevent automatic redirection
        email: formData.email,
        password: formData.password,
      });

      if (result.error) {
        setError(result.error);
      } else {
        console.log('Connexion réussie!');
        router.push('/'); // Redirect to the desired page after successful login
      }
    } catch (error) {
      console.error('Erreur inattendue:', error);
      setError('Une erreur inattendue est survenue.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Se connecter</h1>
      <form
        className="flex flex-col w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          const formData: FormData = {
            email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
            password: (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value,
          };
          handleLogin(formData);
        }}
      >
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" className="border rounded-md p-2" required />
        <label htmlFor="password" className="mb-2">
          Mot de passe
        </label>
        <input type="password" id="password" name="password" className="border rounded-md p-2" required />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2 mt-4">
          Se connecter
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
