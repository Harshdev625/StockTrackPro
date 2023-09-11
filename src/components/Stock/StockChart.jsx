import { useEffect, useState } from 'react';
// import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const SYMBOL = 'IBM'; // Replace with the stock symbol you want to fetch

const arr = ['Opening Price', 'Highest Price', 'Lowest Price', 'Closing Price', 'Total Stock'];

function StockChart() {
  const [chartType, setChartType] = useState('Line');

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

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Bar Data',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Specify the background color for bars
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

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

    setBarChartData((prevData) => ({
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

  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = Math.random() * 100;
      updateChartData(newDataPoint);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-time-chart-container">
      <h2>Real-Time Chart</h2>

      <div className="chart-toggle-buttons">
        <button
          className={`chart-toggle-button ${chartType === 'Line' ? 'active' : ''}`}
          onClick={() => setChartType('Line')}
        >
          Line
        </button>
        <button
          className={`chart-toggle-button ${chartType === 'Bar' ? 'active' : ''}`}
          onClick={() => setChartType('Bar')}
        >
          Bar
        </button>
      </div>
      {chartType==="Line"?(<Chart type='line' data={chartData} />):(<Chart type='bar' data={barChartData} />)}
      
      {/* <Chart type='bar' data={barChartData} /> */}

      {/* {chartType === 'Line' && <Line data={chartData} />}
      {chartType === 'Bar' && <Bar data={barChartData} />} */}
    </div>
  );
}

export default StockChart;
