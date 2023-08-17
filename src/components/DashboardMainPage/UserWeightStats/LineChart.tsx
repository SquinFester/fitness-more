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
import { addWeight } from "@/lib/weights-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

Chartjs.register(CategoryScale, LinearScale, LineElement);

export const LineChart = ({ userWeight }: { userWeight: WeightType[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      addWeight({
        userId: "string",
        weight: 12,
        date: new Date(),
        id: "1232",
      })
    );
  }, []);

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

  const a = useAppSelector((state) => state.weightsReducer.items);
  console.log(a);

  return <Line data={data} />;
};
