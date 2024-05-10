import React from "react";

interface BtnLoginProps {
  btnLabel: string;
  send: (e: React.FormEvent<HTMLFormElement>) => void;
}
const LoginBtn: React.FC<BtnLoginProps> = ({ btnLabel, send }) => {
  return (
    <div className="flex justify-center border">
      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={() => send}
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default LoginBtn;
