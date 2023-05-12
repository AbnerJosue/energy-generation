import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
function ColumnChart() {
  const params = {
    series: [100, 200, 300, 400],
    chart: {
      type: "bar",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["a", "b", "c", "d"],
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    // <Chart
    //   height={460}
    //   options={params}
    //   series={params.series}
    //   type="bar"
    //   width={"100%"}
    // />
    <></>
  );
}

export default ColumnChart;
