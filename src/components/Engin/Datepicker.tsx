"use client";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatepickerComponent = () => {
  const now = new Date();
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      value={value}
      primaryColor={"amber"}
      onChange={handleValueChange}
      placeholder={"Veillez entrer le date de location pour afficher les engins disponible à cette date"}
      separator={" jusqu'au "}
      showFooter={true}
      displayFormat={"DD/MM/YYYY"}
      inputClassName={
        " bg-slate-50 h-12 px-6 w-full text-xl rounded-lg text-secondary-300 outline-none"
      }
      toggleClassName="absolute bg-primary-500 rounded-r-lg text-primary-800 right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
      minDate={now}
      startFrom={now}
      

    // showShortcuts={true}
    />
  );
};
export default DatepickerComponent;
