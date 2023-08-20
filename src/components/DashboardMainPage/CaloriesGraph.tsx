"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, CategoryScale } from "chart.js/auto";

type CaloriesGraphProps = {
  proteinGrams: number;
  carbGrams: number;
  fatGrams: number;
};

Chartjs.register(CategoryScale);

export const CaloriesGraph = ({
  proteinGrams,
  carbGrams,
  fatGrams,
}: CaloriesGraphProps) => {
  const data = {
    labels: [
      `Protein Grams: ${proteinGrams}`,
      `Carb Grams: ${carbGrams}`,
      `Fat Grams: ${fatGrams}`,
    ],
    datasets: [
      {
        data: [proteinGrams, carbGrams, fatGrams],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} />;
};
