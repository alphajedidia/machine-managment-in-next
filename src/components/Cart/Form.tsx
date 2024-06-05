import React from "react";
import DatepickerComponent from "../Engin/Datepicker";

const Form = () => {
  return (
    <div className=" bg-white w-full px-8 rounded-xl shadow-lg">
      <h3 className=" text-3xl font-black  text-secondary-4 00 mb-6 -mt-4 pt-5">
        Procédez au payement
      </h3>

      <form action="">
        <label htmlFor="nom" className=" text-lg text-secondary-400">
          Nom <span className=" text-red-500">*</span>
        </label>
        <input
          type="text"
          name="nom"
          id="nom"
          placeholder=""
          className=" w-full border border-secondary-200 rounded-lg outline-none px-6 py-2 text-lg mb-4"
        />
        <div className=" flex space-x-6 mb-4">
          <div className="w-1/2">
            <label htmlFor="email" className=" text-lg text-secondary-400">
              {" "}
              Adresse Email <span className=" text-red-500"></span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              className="w-full border border-secondary-200 rounded-lg outline-none px-6 py-2 text-lg"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="tel" className=" text-lg text-secondary-400">
              {" "}
              Numero telephone <span className=" text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder=""
              className="w-full border border-secondary-200 rounded-lg outline-none px-6 py-2 text-lg"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className=" text-lg text-secondary-400">
            {" "}
            Numero Carte Bancaire <span className=" text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder=""
            className=" w-full border border-secondary-200 rounded-lg outline-none px-6 py-2 text-lg mb-4"
          />
        </div>
        <div className=" flex space-x-6 mb-4">
          <div className="w-1/2">
            <label htmlFor="date" className=" text-lg text-secondary-400">
              Date d'expiration <span className=" text-red-500"></span>
            </label>
            <input
              type="month"
              name="date"
              id="date"
              placeholder="yyy-mm"
              className="w-full border border-secondary-200 rounded-lg outline-none px-6 py-2 text-lg"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="code" className=" text-lg text-secondary-400">
              CVV <span className=" text-red-500">*</span>
            </label>
            <input
              type="code"
              name="code"
              id="code"
              placeholder=""
              className="w-full border border-secondary-200 rounded-lg outline-none px-6 py-2 text-lg"
            />
          </div>
        </div>
        <div className="pt-6 pb-12 space-y-4 ">
                <button type="submit" className="w-full p-3 bg-primary-400 text-primary-900 rounded-md hover:bg-primary-500 text-xl">Effectuer le payement</button>
                <button type="submit" className="w-full p-3 bg-gray-200 text-secondary-500 rounded-md hover:bg-gray-300 text-xl" >Annuler le payement</button>
            </div>
      </form>
    </div>
  );
};

export default Form;
