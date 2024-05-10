import React from "react";
import EntrepotForm from "./entrepotForm";
import EntrepotTable from "./entrepotTable";

export default function EntrepotPage() {
  return (
    <div className="flex justify-center mt-4">
      <section className="w-3/4">
        <h1 className="text-3xl font-bold mb-8">Gestion des Entrepôts</h1>
        <div className="flex">
          <div className="w-3/5 mr-8">
           
            <EntrepotTable />
          </div>
          <div className="w-2/5 ml-8">
            <EntrepotForm />
          </div>
        </div>
      </section>
    </div>
  );
}
