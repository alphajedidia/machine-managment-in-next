import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Series {
  name: string;
  data: number[];
}

const BarChart = ({ series }: { series: Series[] }) => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    colors: ['#fec60d', '#333334', '#fafafa'],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  };

  return (
    <div className='h-full w-full'>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}

export default BarChart;
