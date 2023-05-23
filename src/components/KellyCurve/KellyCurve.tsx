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
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAtomValue } from "jotai";
import { kellyCurveAtom } from "../../atoms/kelly-condition";
import { css } from "@emotion/react";
import { currentStockInfoAtom } from "../../atoms/stocks-info";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = new Array(101).fill(null).map((_, i) => i + "%");

const KellyCurve = () => {
  const curve = useAtomValue(kellyCurveAtom);
  const { name } = useAtomValue(currentStockInfoAtom) || { name: "" };

  if (curve === undefined) {
    return <div></div>;
  }

  const max = Math.max(...curve);

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "캘리 곡선",
      },
    },
    scale: { min: 1 },
  };

  const data = {
    labels,
    datasets: [
      {
        label: name,
        data: curve,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line
        css={css`
          width: 1000px !important;
          height: 500px !important;
        `}
        options={options}
        data={data}
      />
    </div>
  );
};

export default KellyCurve;
