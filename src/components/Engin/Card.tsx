import React from "react";
import { CardData } from "./data";
import CustomButton from "../CustomButton";
import { Cart } from "../icons";

const Card = ({ title, description1, prixJournalier }: CardData) => {
  return (

    <div className=" max-w-80  flex h-fit flex-wrap  rounded-xl overflow-hidden shadow-lg mt-6 mx-3 my-4">
      <div>
        <img src="G.jpeg" alt="img" />
        <div className=" mx-6 my-3 h-[120px] ">
          <div>
            <h3 className=" font-black text-secondary-700 text-xl">{title}</h3>
            <p className=" font-semibold mt-2">
              Moteur : <span className=" font-light">{description1}</span>
            </p>
            <p className="font-semibold mt-2">
              Prix Journalier :{" "}
              <span className=" font-light">{prixJournalier}</span>
            </p>
          </div>

        </div>
        <div className="flex justify-between mt-5 items-center mr-6 mb-5 mx-6 ">
            <CustomButton title="Reserver" containerStyles=" bg-primary-500 px-4 py-2 rounded-lg text-lg font-bold hover:scale-105 transition-all" iconAfter={<Cart iconStyle="w-4"/>}/>
            <a href={title} className=" underline hover:scale-105 ">Voir l'engin</a>
          </div>
      </div>
    </div>
  );
};

export default Card;
