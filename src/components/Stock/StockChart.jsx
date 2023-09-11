import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const SYMBOL = 'IBM'; // Replace with the stock symbol you want to fetch

const arr=['Opening Price','Highest Price','Lowest Price','Closing Price','Total Stock']
function StockChart() {
   const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Real-Time Data',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  // Function to update chart data
  const updateChartData = (newData) => {
    setChartData((prevData) => ({
      ...prevData,
      labels: [...prevData.labels, new Date().toLocaleTimeString()],
      datasets: [
        {
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, newData],
        },
      ],
    }));
  };

  // Simulate real-time data (replace this with your WebSocket logic)
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = Math.random() * 100;
      updateChartData(newDataPoint);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-time-chart-container">
      <h2>Real-Time Chart</h2>
      <Line data={chartData} />
    </div>
  );
};
export default StockChart;
