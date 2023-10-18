import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ActiveUserData {
  date: string;
  activeUsers: number;
}

interface ActiveUsersChartProps {
  data: ActiveUserData[];
}

const ActiveUsersChart: React.FC<ActiveUsersChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date).reverse(),
    datasets: [
      {
        label: "Active Users",
        data: data.map((item) => item.activeUsers).reverse(),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ActiveUsersChart;
