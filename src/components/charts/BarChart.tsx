import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
  const chartData = {
    series: [
      {
        name: 'Revenus mensuels',
        data: data.values,
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: data.labels,
      },
      yaxis: {
        title: {
          text: 'Revenus (AR)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val:String) {
            return 'Ar ' + val.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};
export default BarChart;