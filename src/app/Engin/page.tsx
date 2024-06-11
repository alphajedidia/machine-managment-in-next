import { CustomButton } from "@/components";
import React from "react";
import { Cart } from "@/components/icons";
import { CardData } from "@/components/Engin/data";

interface IEngin extends CardData {
  onReserve : ()=> void;
}

const Engin = ({
  title,
  category,
  description1,
  prixJournalier,
  imgUrl,
  onReserve,
}: IEngin) => {
  return (
      <div className="flex bg-white  rounded-xl overflow-hidden">
      <div className="w-3/6 ">
        {/* <img src={image_url} alt={nom_engin} /> */}
        <img src={imgUrl} alt="" className=" h-full " />
      </div>
      <div className=" w-3/6    ">
        <h3 className=" font-extrabold text-3xl mx-12 my-4 text-secondary-600">
          {title}
        </h3>
        <div className=" mx-12">
          <h3 className="text-2xl font-semibold">Spécifications</h3>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Catégorie :</p>
            <p className="w-2/3">{category}</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Poids :</p>
            <p className="w-2/3">{description1.split("*")[0]}</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Moteur :</p>
            <p className="w-2/3">{description1.split("*")[1]}</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Consommation :</p>
            <p className="w-2/3">{description1.split("*")[2]}</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Nombre de place :</p>
            <p className="w-2/3">{description1.split("*")[3]}</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Vitesse Max:</p>
            <p className="w-2/3">{description1.split("*")[4]}</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold  ">Prix:</p>
            <p className="w-2/3">{prixJournalier}</p>
          </div>
          <div className="flex items-center justify-between">
          
          <div className="flex ">
            <CustomButton title="-" containerStyles="h-12 w-12 bg-gray-200"/>
            <input type="number" defaultValue={1} className="w-12 pl-4 text-lg font-bold" />
            <CustomButton title="+" containerStyles=" w-12 bg-gray-200"/>
          </div>
          <CustomButton iconBefore={<Cart iconStyle="w-6" />} title="Reserver" containerStyles=" px-20 bg-primary-500  my-8 py-3 border border-primary-500 text-secondary-600 rounded-lg text-xl hover:scale-105 transition-all" handleClick={onReserve}  />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Engin;
