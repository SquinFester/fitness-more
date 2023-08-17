"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
} from "chart.js/auto";
import { format } from "date-fns";
import { WeightType } from "./WeightSection";

Chartjs.register(CategoryScale, LinearScale, LineElement);

export const LineChart = ({ userWeight }: { userWeight: WeightType[] }) => {
  const sortedDate = userWeight.sort((a, b) => Number(a.date) - Number(b.date));

  const data = {
    labels: sortedDate.map((data) => format(data.date, "dd MMM")),
    datasets: [
      {
        label: "Users Gained",
        data: sortedDate.map((data) => data.weight),
        backgroundColor: ["#0066EE"],
        borderColor: "#0066EE",
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};
