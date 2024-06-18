import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import { series } from '@/app/utils/data';

// Définir une interface pour les données de location
interface Location {
  id_location: string;
  id_client: string;
  date_debut: string;
  date_fin: string;
  statut_paiement: string;
  destination: string;
  total: number;
}

interface Series {
  name: string;
  data: number[];
}

const BarChart = () => {
  const [series1, setSeries] = useState<Series[]>([
    {
      name: 'ENGINS',
      data: Array(12).fill(0) // Initialisation avec des valeurs de 0 pour chaque mois
    }
  ]);

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
      categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get<Location[]>('/api/location/parMois'); 
        const locations = response.data;

        const monthlyTotals = Array(12).fill(0); 

        locations.forEach((location: Location) => {
          const month = new Date(location.date_debut).getMonth();
          monthlyTotals[month] += location.total;
        });

        setSeries([
          {
            name: 'ENGINS',
            data: monthlyTotals
          }
        ]);
      } catch (error) {
        console.error('Erreur lors de la récupération des locations:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-full w-full'>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}

export default BarChart;
