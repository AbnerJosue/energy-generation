import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
function ColumnChart({v1,v2, names}) {
  console.log(v1, v2,names)
  const params = {
    series: [{
      name: names[0],
      data: [v1]
    }, {
      name: names[1],
      data: [v2]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: names,
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "%" + val 
        }
      }
    }
  };

  return (
     <Chart
       height={460}
       options={params}
       series={params.series}
       type="bar"
       width={"100%"}
     />
  );
}

export default ColumnChart;
