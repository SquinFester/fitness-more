"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
} from "chart.js/auto";
import { format } from "date-fns";
import { fetchInitialItems } from "@/lib/weights-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

Chartjs.register(CategoryScale, LinearScale, LineElement);

export const LineChart = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchInitialItems());
  }, []);
  const userWeights = useAppSelector((state) => state.weightsReducer.items);

  const data = {
    labels: userWeights.map((data) => format(new Date(data.date), "dd MMM")),
    datasets: [
      {
        label: "Your Weights",
        data: userWeights.map((data) => data.weight),
        backgroundColor: ["#0066EE"],
        borderColor: "#0066EE",
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};
