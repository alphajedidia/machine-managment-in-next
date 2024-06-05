import React from "react";
import Element from "../../components/Cart/Element";
import Form from "@/components/Cart/Form";

const page = () => {
  return (
    <div className="w-11/12 h-[100vh] mx-auto flex space-x-6">
      <div className=" w-1/2  h-full px-2  pt-32">
        <div className=" bg-white -my-4 px-12 pb-8 rounded-xl shadow-lg">
          <h3 className=" text-3xl font-black text-secondary-400 mb-6 pt-4">
            Liste des engins Démandé :{" "}
            <span className=" font-light text-xl">
              du 21/05/2024 au 28/05/2024
            </span>
          </h3>
          <Element
            title="Test"
            description1="Descri"
            prixJournalier=" 250 000Ar"
          />
          <Element
            title="Test"
            description1="Descri"
            prixJournalier=" 250 000Ar"
          />
          <Element
            title="Test"
            description1="Descri"
            prixJournalier=" 250 000Ar"
          />
          <Element
            title="Test"
            description1="Descri"
            prixJournalier=" 250 000Ar"
          />
          <Element
            title="Test"
            description1="Descri"
            prixJournalier=" 250 000Ar"
          />{" "}
        </div>
      </div>
      <div className=" w-1/2 h-full mr-12 pt-32">
        <Form />
      </div>
    </div>
  );
};

export default page;
