import React from "react"; // Omit unnecessary import
import Logo from "../navbar/Logo";
type LoginIntroProps = {
  title: string;
  subtitle: string;
};

const IntroLogin = ({ title, subtitle }: LoginIntroProps) => {
  return (
    <div className="flex flex-col items-end justify-evenly  m-auto border-5 p-5 absolute w-full h-full text-primary-100">
      <div >
        <h1 className="text-3xl">{title}</h1>
        <h2 className="text-2xl">{subtitle}</h2>
      </div>
        <Logo logoWidth={200} logoHeight={200} />
    </div>
  );
};


export default IntroLogin;
