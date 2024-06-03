import { locationData, locationInfo } from "@/app/utils/data";
import CardInfo from "@/components/card.info/CardInfo";
import Location from "@/components/location/Location";
import TableLocation from "@/components/location/TableLocation";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col flex-grow justify-around px-5 h-full w-full">
      <div className=" flex justify-between pt-5 ">
        {locationInfo.map((value) => {
          return <CardInfo data={value.total} dataLabel={value.label} />;
        })}
      </div>
      <div className="w-full border shadow-lg rounded-lg">
        <TableLocation Title={"Liste des locations d'engin"} />
      </div>
    </div>
  );
};
export default page;
