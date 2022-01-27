import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['BTC', 'USDT', 'ADA', 'ETH', 'BNB', 'Matic'],
  datasets: [
    {
      label: '# of Votes',
      data: [60, 20, 10, 5, 5, 5],
      backgroundColor: [
        '#FFAD60',
        '#35858B',
        '#96CEB4',
        '#570530',
        '#072227',
        '#D9534F',
      ],
      borderColor: [
        '#FFAD60',
        '#35858B',
        '#96CEB4',
        '#570530',
        '#072227',
        '#D9534F',
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChartCustom() {
  return <Pie data={data} />;
}
