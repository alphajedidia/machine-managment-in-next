import React from "react";

const CardInfo = ({ data, dataLabel }: { data: number; dataLabel: string }) => {
  return (
    <div className="h-40 w-96 border  text-center flex flex-col justify-center items-center bg-secondary-400  p-4 rounded-lg shadow-lg">
      <span className="block mb-2 text-primary-500 font-bold text-4xl">{data}</span>
      <span className="block text-white text-3xl"> {dataLabel}</span>
    </div>
  );
};

export default CardInfo;
