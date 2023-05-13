import React from 'react'
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const BarChart = ({series, colors,name}) => {
  const params = {
    series: [{
    data: series
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true, distributed: true,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: colors,
  xaxis: {
    categories:name
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
  )
}

export default BarChart