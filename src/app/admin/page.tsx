"use client";
import { Engin } from "@prisma/client";
import ChartDonut from "@/components/charts/Chart.Donut";
import { TopEngin, locationData, series } from "../utils/data";

import Location from "@/components/location/Location";
import BarChart from "@/components/charts/BarChart";
import CardTop from "@/components/card.top/CardTop";
import Carousel from "@/components/carrousel/Carousel";
import { ChangeEvent, useEffect,useState } from "react";
import axios from "axios";

export default function ProtectedPage() {
  const slides = [
    {
      StatChart: <ChartDonut />,
      StatChartTitle: "Chart Title 1",
    },
    {
      StatChart: <ChartDonut />,
      StatChartTitle: "Chart Title 2",
    },
    {
      StatChart: <ChartDonut />,
      StatChartTitle: "Chart Title 3",
    },
   
  ];

  const [locationData,SetLocationData] = useState([])
  const [errors,setError] =useState(null)
   
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`/api/location`);
        SetLocationData(response.data);
        console.log(response.data)
      } catch (err:any) {
        setError(err.message || 'Error fetching engines');
      }
    };

    fetchLocation();   
     {console.log(locationData)}



  }, []);
  return (
    <div className="relative flex justify-center items-center w-full h-5/6 mt-5 p-5 overflow-hidden">
      <div className="relative flex flex-col justify-around items-center h-full w-3/5">
        <div className="h-auto w-9/12 border">
          <h1 className="text-center text-xl ">LOCATION PAR MOIS</h1>
          <BarChart  />
        </div>
        <div className="relative h-2/5 w-1/2 shadow-lg">
          <h1 className="text-center text-xl px-1 py-2">ENGIN DISPO</h1>

          <Carousel slides={slides} />
        </div>
      </div>
      <div className="relative flex flex-col justify-around items-center h-full w-6/12">
        <div className="h-auto w-3/5 border shadow-lg">
          <h1 className="text-center text-xl px-1 py-2">TOP ENGINS LOUER</h1>
          <CardTop TopEngin={TopEngin} />
        </div>
        <div className=" w-3/4 shadow-lg">
          <h1 className="text-center text-xl px-1 py-2">LOCATION EN COURS</h1>
          <div className="relative max-h-[300px] overscroll-x-none overflow-y-auto">
            <Location location={locationData} showAll={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
