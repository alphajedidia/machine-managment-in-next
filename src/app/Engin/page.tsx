import { CustomButton } from "@/components";
import React from "react";
import { Cart } from "@/components/icons";

interface IEngin {
  image_url: string;
  nom_engin: string;
  description: string;
  prix_journalier: string;
}

const Engin = ({
  image_url,
  nom_engin,
  description,
  prix_journalier,
}: IEngin) => {
  return (
    <div className=" w-2/3  mx-auto py-40">
      <div className="flex bg-white  rounded-xl overflow-hidden shadow-lg">
      <div className="w-3/6 ">
        {/* <img src={image_url} alt={nom_engin} /> */}
        <img src="G.jpeg" alt="" className=" h-full " />
      </div>
      <div className=" w-3/6    ">
        <CustomButton
          title="X"
          containerStyles=" float-right px-6 font-bold py-4 bg-gray-100"
        />
        <h3 className=" font-extrabold text-3xl mx-12 my-4 text-secondary-600">
          Test
        </h3>
        <div className=" mx-12">
          <h3 className="text-2xl font-semibold">Spécifications</h3>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Catégorie :</p>
            <p className="w-2/3">Poids Lourd</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Poids :</p>
            <p className="w-2/3">50 250 kg</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Moteur :</p>
            <p className="w-2/3">Diesel</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Consommation :</p>
            <p className="w-2/3">10 Litres/heure</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Nombre de place :</p>
            <p className="w-2/3">2</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold ">Vitesse Max:</p>
            <p className="w-2/3">6 km/h</p>
          </div>
          <div className="flex  border-b pb-2 pt-2 text-lg border-secondary-600 mt-2">
            <p className="w-1/3 font-semibold  ">Prix:</p>
            <p className="w-2/3">1 000 000 Ariary/Jour</p>
          </div>
          <div className="flex items-center justify-between">
          
          <div className="flex ">
            <CustomButton title="-" containerStyles="h-12 w-12 bg-gray-200"/>
            <input type="number" className="w-12 " />
            <CustomButton title="+" containerStyles=" w-12 bg-gray-200"/>
          </div>
          <CustomButton iconBefore={<Cart iconStyle="w-6" />} title="Reserver" containerStyles=" px-20 bg-primary-500  my-8 py-3 border border-primary-500 text-secondary-600 rounded-lg text-xl hover:scale-105 transition-all"  />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Engin;
