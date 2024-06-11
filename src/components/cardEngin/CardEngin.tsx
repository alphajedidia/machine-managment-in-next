import React , { useState, useEffect }  from "react";
import CustomButton from "../CustomButton";
import { Eyes } from "../icons";
import Link from "next/link";
interface CardEnginProps {
  id_type:string;
  title: string;
  description: string;
  prixJournalier: number;
}


const CardEngin = ({ id_type,title, description, prixJournalier }: CardEnginProps) => {
  return (
    <div className=" max-w-80  flex h-fit flex-wrap  rounded-xl overflow-hidden shadow-lg mt-6 mx-3 my-4">
      <div>
        <img src="/G.jpeg" alt="img" />
        <div className=" mx-6 my-2 h-[120px] ">
          <div>
            <h3 className=" font-black text-secondary-700 text-xl">{title}</h3>
            <p className=" font-semibold mt-2">
              Description : <span className=" font-light">{description}</span>
            </p>
            <p className="font-semibold mt-2">
              Prix Journalier :{" "}
              <span className=" font-light">{prixJournalier}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5 items-center mr-6 mb-5 mx-6 ">
          <Link href={`engin/${id_type}`}>
            <CustomButton
              title="Voir la Liste"
              containerStyles="bg-primary-500 px-4 py-2 rounded-lg text-lg font-bold hover:scale-105 transition-all"
              iconAfter={<Eyes iconStyle="w-6 h-6" />}
            />
          </Link>
          <a href={title} className=" underline">
            Modifier
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardEngin;
