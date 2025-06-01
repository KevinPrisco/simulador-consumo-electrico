import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},0.7)`;
}

export default function DynamicBarChart({ data, label }) {
  const labels = data.map((item) => item.habitacion);
  const values = data.map((item) => item.valor);

  const backgroundColors = values.map(() => getRandomColor());

  const chartData = {
    labels,
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: backgroundColors,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${label}: ${context.parsed.y.toFixed(2)}`,
        },
      },
      datalabels: {
        anchor: "end",
        align: "end",
        color: "#fff",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => value.toFixed(2),
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Habitación" },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: label },
        ticks: { precision: 0 },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
