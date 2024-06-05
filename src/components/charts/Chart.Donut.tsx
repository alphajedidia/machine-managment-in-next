import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#fec60d", "#333334"],
  labels: ["DISPONIBLE", "LOCATION"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "50%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 240,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 250,
        },
      },
    },
  ],
};

const ChartDonut: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 35,],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 35],
    }));
  };
  handleReset;

  return (
      <div className="w-full h-full border">
        <div id="ChartDonut" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>


  );
};

export default ChartDonut;
