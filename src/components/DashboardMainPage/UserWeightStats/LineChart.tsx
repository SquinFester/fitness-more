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
  const data = {
    labels: userWeight.map((data) => data.date),
    datasets: [
      {
        label: "Users Gained",
        data: userWeight.map((data) => data.weight),
        backgroundColor: ["#0066EE"],
        borderColor: "#0066EE",
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};
