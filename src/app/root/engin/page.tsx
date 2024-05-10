'use client'
import React, { useState } from 'react';
import EnginTable from "./enginTable";
import EnginForm from "./enginForm";
import MainComponent from './mainComponent';


export default function enginPage() {
  
  return (
    <div className="flex justify-center mt-4">
      <section className="w-3/4">
        <h1 className="text-3xl font-bold mb-8">Gestion des Entrepôts</h1>
        <div className="flex">
          <div className="w-3/5 mr-8">
           
          <EnginTable/>
          </div>
          <div className="w-2/5 ml-8">
           <EnginForm/>
   
          </div>
        </div>
      </section>
    </div>
  );
}

