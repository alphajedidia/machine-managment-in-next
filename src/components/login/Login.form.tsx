"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import LoginBtn from "./Login.btn";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result?.error) {
      console.error(result.error);
      setStatus(true);
    } else {
      handleRedirect();
    }
  };
  const handleRedirect = () => {
    router.push("/admin");
  };
  const handleRedirectClient = () => {
    router.push("/");
  
  };
  return (
    <div className=" h-full relative w-1/2 p-5 pt-20">
      <h1 className="text-center text-3xl">ADMIN</h1>
      <form onSubmit={handleSubmit} action="" className=" p-4 mt-2 ">
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary-400 leading-tight focus:outline-none focus:shadow-outline text-xl"
            id="email"
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          {status&&<span className="text-error-500">Verifier votre mot de passe</span>}
          <label className="block  font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            className=" rounded-sm shadow appearance-none border w-full py-2 px-3 text-secondary-400 leading-tight focus:outline-none focus:shadow-outline text-xl"
            id="password"
            type="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-secondary-400 text-secondary-100 hover:bg-primary-100 hover:text-secondary-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xl"
            type="submit"
          >
            Se connecter
          </button>
        </div>
      </form>
      <div
        className=" mt-10 text-right text-xl text-secondary-400 hover:cursor-pointer"
        onClick={handleRedirectClient}
      >
        <span className="underline ">Côté Client</span>
      </div>
    </div>
  );
};
export default LoginForm;
