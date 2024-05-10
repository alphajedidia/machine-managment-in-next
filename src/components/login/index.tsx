"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "./Login.form";
import IntroLogin from "./Login.intro";
import LoginIntro from "./Login.intro";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    } else {
      handleRedirect();
    }
  };
  const handleRedirect = () => {
    router.push("/admin");
  };
  const infoLogin = {
    title: "Location d'Engin",
    subtitle:
      "HENRI FRAISE",
  };
  return (
    <div className="bg-secondary-300 flex justify-center w-screen h-screen text-secondary-400 ">
      <div className=" absolute w-[800px] h-[500px]  bg-secondary-400 mt-40 rounded-xl shadow-sm">
       <LoginIntro title={infoLogin.title} subtitle={infoLogin.subtitle} />
       <div className="w-full h-full clip-path-triangle rounded-xl bg-primary-500">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

/*<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>*/
