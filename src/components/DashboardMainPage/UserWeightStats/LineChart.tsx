"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
} from "chart.js/auto";

type UserWeightType = {
  date: string;
  weight: number;
};

Chartjs.register(CategoryScale, LinearScale, LineElement);

export const LineChart = ({ userWeight }: { userWeight: UserWeightType[] }) => {
  // tu musi byc usestate zeby moc dodac wage bez odswiezania

  const data = {
    labels: userWeight.map((data) => data.date),
    datasets: [
      {
        label: "Users Gained",
        data: userWeight.map((data) => data.weight),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};
