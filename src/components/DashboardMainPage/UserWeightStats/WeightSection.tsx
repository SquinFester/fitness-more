"use client";

import { AddWeight } from "./AddWeight";
import { LineChart } from "./LineChart";

export type WeightType = {
  weight: number;
  date: Date;
};

export const WeightSection = ({ userWeight }: { userWeight: WeightType[] }) => {
  //here should be useContex or redux, and add moth to select
  //   use effect and GET to fetch data by moth
  return (
    <section>
      <AddWeight />
      <LineChart userWeight={userWeight} />
    </section>
  );
};
